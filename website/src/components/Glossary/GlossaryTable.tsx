import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import clsx from 'clsx';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import glossaryData from '@site/static/glossary/glossary.json';
import styles from './GlossaryTable.module.css';

export type GlossaryItem = {
  term: string;
  aliases: string[];
  abbreviation: string;
  definition: string;
};

export type DisplayEntry = {
  term: string;
  abbreviation: string;
  definition: string;
  canonicalTerm: string;
  isAlias: boolean;
  slug: string;
  targetSlug: string;
  aliases: string[];
};

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');

const sanitizeMarkdown = (markdown: string, purify: typeof DOMPurify | null): string => {
  const html = marked.parse(markdown || '', { async: false }) as string;
  return purify ? purify.sanitize(html) : html;
};

const GlossaryTable: React.FC = () => {
  const [termQuery, setTermQuery] = useState('');
  const [textQuery, setTextQuery] = useState('');
  const [activeSlug, setActiveSlug] = useState('');

  const purify = useMemo(() => (typeof window === 'undefined' ? null : DOMPurify), []);

  const { entries, aliasToCanonicalSlug } = useMemo(() => {
    const glossaryItems = glossaryData as GlossaryItem[];
    const termSet = new Set(glossaryItems.map((item) => item.term));

    const canonicalEntries: DisplayEntry[] = glossaryItems.map((item) => {
      const slug = slugify(item.term);
      return {
        term: item.term,
        abbreviation: item.abbreviation,
        definition: item.definition,
        canonicalTerm: item.term,
        isAlias: false,
        slug,
        targetSlug: slug,
        aliases: item.aliases || [],
      };
    });

    const aliasEntries: DisplayEntry[] = glossaryItems.flatMap((item) => {
      const canonicalSlug = slugify(item.term);
      return (item.aliases || [])
        .filter((alias) => !termSet.has(alias))
        .map((alias) => ({
          term: alias,
          abbreviation: '',
          definition: `See ${item.term}`,
          canonicalTerm: item.term,
          isAlias: true,
          slug: slugify(alias),
          targetSlug: canonicalSlug,
          aliases: [],
        }));
    });

    const aliasMap = new Map<string, string>();
    canonicalEntries.forEach((entry) => aliasMap.set(entry.slug, entry.targetSlug));
    aliasEntries.forEach((entry) => aliasMap.set(entry.slug, entry.targetSlug));

    const combined = [...canonicalEntries, ...aliasEntries].sort((a, b) => a.term.localeCompare(b.term));
    return { entries: combined, aliasToCanonicalSlug: aliasMap };
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: [
          { name: 'term', weight: 0.5 },
          { name: 'definition', weight: 0.4 },
          { name: 'abbreviation', weight: 0.1 },
          { name: 'aliases', weight: 0.3 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [entries]
  );

  const focusEntry = useCallback(
    (slug: string, canonicalTerm?: string) => {
      if (!slug || typeof window === 'undefined') {
        return;
      }

      const targetSlug = slug;
      setActiveSlug(targetSlug);

      const url = new URL(window.location.href);
      url.hash = targetSlug;
      if (canonicalTerm) {
        url.searchParams.set('term', canonicalTerm);
      } else {
        url.searchParams.set('term', targetSlug);
      }
      window.history.replaceState({}, '', url.toString());

      const target = document.getElementById(targetSlug);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 70; // account for sticky header
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const termParam = params.get('term');
    const hashParam = window.location.hash ? window.location.hash.replace('#', '') : '';
    const rawSlug = hashParam || (termParam ? slugify(termParam) : '');
    const initialSlug = aliasToCanonicalSlug.get(rawSlug) || rawSlug;

    if (initialSlug) {
      setActiveSlug(initialSlug);
      // Allow the page to render before scrolling
      setTimeout(() => focusEntry(initialSlug, termParam || initialSlug), 50);
    }
  }, [aliasToCanonicalSlug, focusEntry]);

  const filteredEntries = useMemo(() => {
    const normalize = (value: string) => value.toLowerCase();
    let subset = entries;

    if (termQuery.trim()) {
      const query = normalize(termQuery.trim());
      subset = subset.filter((entry) => {
        return (
          normalize(entry.term).includes(query) ||
          normalize(entry.canonicalTerm).includes(query) ||
          (entry.aliases || []).some((alias) => normalize(alias).includes(query))
        );
      });
    }

    if (textQuery.trim()) {
      const results = fuse.search(textQuery.trim());
      const allowedSlugs = new Set<string>();
      results.forEach(({ item }) => allowedSlugs.add(item.slug));
      subset = subset.filter((entry) => allowedSlugs.has(entry.slug));
    }

    return subset;
  }, [entries, fuse, termQuery, textQuery]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <label className={styles.control}>
          <span>Search term</span>
          <input
            type="search"
            placeholder="Filter by term or alias"
            value={termQuery}
            onChange={(event) => setTermQuery(event.target.value)}
          />
        </label>
        <label className={styles.control}>
          <span>Fuzzy search</span>
          <input
            type="search"
            placeholder="Free-text search across definitions"
            value={textQuery}
            onChange={(event) => setTextQuery(event.target.value)}
          />
        </label>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Term</th>
              <th>Definition &amp; Abbreviation</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry) => {
              const definitionHtml = sanitizeMarkdown(entry.definition, purify);
              const handleClick = () => focusEntry(entry.targetSlug, entry.canonicalTerm);

              return (
                <tr
                  key={`${entry.slug}-${entry.isAlias ? 'alias' : 'term'}`}
                  id={entry.slug}
                  className={clsx({ [styles.activeRow]: activeSlug === entry.slug })}
                  onClick={handleClick}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(event) => {
                    if (
                      (event.key === 'Enter' || event.key === ' ') &&
                      event.target === event.currentTarget
                    ) {
                      event.preventDefault();
                      handleClick();
                    }
                  }}
                >
                  <td className={clsx(styles.termCell, styles.clickable)}>
                    <div className={styles.termName}>{entry.term}</div>
                  </td>
                  <td className={styles.definitionCell}>
                    {entry.isAlias ? (
                      // Hyperlink to term in alias definition cell
                      <a
                        href={`#${entry.targetSlug}`}
                        className={styles.aliasLink}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          focusEntry(entry.targetSlug, entry.canonicalTerm);
                        }}
                      >
                        See {entry.canonicalTerm}
                      </a>
                    ) : (
                      <>
                        <div
                          className={styles.definitionText}
                          dangerouslySetInnerHTML={{ __html: definitionHtml }}
                        />
                        <div className={styles.pillRow}>
                          {entry.abbreviation ? (
                            <span className={clsx(styles.pill, styles.abbreviationPill)}>
                              {entry.abbreviation}
                            </span>
                          ) : null}
                          {(entry.aliases || []).map((alias) => {
                            const aliasSlug = slugify(alias);
                            const target = aliasToCanonicalSlug.get(aliasSlug) || aliasSlug;
                            return (
                              // Link to alias term
                              <a
                                key={target}
                                href={`#${aliasSlug}`}
                                className={clsx(styles.pill, styles.aliasPill)}
                                onClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  focusEntry(aliasSlug, alias);
                                }}
                              >
                                {alias}
                              </a>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GlossaryTable;
