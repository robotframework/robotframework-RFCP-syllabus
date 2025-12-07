"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fuse_js_1 = require("fuse.js");
var clsx_1 = require("clsx");
var marked_1 = require("marked");
var dompurify_1 = require("dompurify");
var glossary_json_1 = require("@site/static/glossary/glossary.json");
var GlossaryTable_module_css_1 = require("./GlossaryTable.module.css");
var slugify = function (text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-+|-+$)/g, '');
};
var sanitizeMarkdown = function (markdown) {
    var html = marked_1.marked.parse(markdown || '', { async: false });
    return typeof window !== 'undefined' ? dompurify_1.default.sanitize(html) : html;
};
var GlossaryTable = function () {
    var _a = (0, react_1.useState)(''), termQuery = _a[0], setTermQuery = _a[1];
    var _b = (0, react_1.useState)(''), textQuery = _b[0], setTextQuery = _b[1];
    var _c = (0, react_1.useState)(''), activeSlug = _c[0], setActiveSlug = _c[1];
    var _d = (0, react_1.useMemo)(function () {
        var glossaryItems = glossary_json_1.default;
        var termSet = new Set(glossaryItems.map(function (item) { return item.term; }));
        var canonicalEntries = glossaryItems.map(function (item) {
            var slug = slugify(item.term);
            return {
                term: item.term,
                abbreviation: item.abbreviation,
                definition: item.definition,
                definitionHtml: sanitizeMarkdown(item.definition),
                canonicalTerm: item.term,
                isAlias: false,
                slug: slug,
                targetSlug: slug,
                aliases: item.aliases || [],
            };
        });
        var aliasEntries = glossaryItems.flatMap(function (item) {
            var canonicalSlug = slugify(item.term);
            return (item.aliases || [])
                .filter(function (alias) { return !termSet.has(alias); })
                .map(function (alias) { return ({
                term: alias,
                abbreviation: '',
                definition: "See ".concat(item.term),
                definitionHtml: '', // Alias entries don't need HTML since they use a link
                canonicalTerm: item.term,
                isAlias: true,
                slug: slugify(alias),
                targetSlug: canonicalSlug,
                aliases: [],
            }); });
        });
        var aliasMap = new Map();
        canonicalEntries.forEach(function (entry) { return aliasMap.set(entry.slug, entry.targetSlug); });
        aliasEntries.forEach(function (entry) { return aliasMap.set(entry.slug, entry.targetSlug); });
        var combined = __spreadArray(__spreadArray([], canonicalEntries, true), aliasEntries, true).sort(function (a, b) { return a.term.localeCompare(b.term); });
        return { entries: combined, aliasToCanonicalSlug: aliasMap };
    }, []), entries = _d.entries, aliasToCanonicalSlug = _d.aliasToCanonicalSlug;
    var fuse = (0, react_1.useMemo)(function () {
        return new fuse_js_1.default(entries, {
            keys: [
                { name: 'term', weight: 0.5 },
                { name: 'definition', weight: 0.4 },
                { name: 'abbreviation', weight: 0.1 },
                { name: 'aliases', weight: 0.3 },
            ],
            threshold: 0.35,
            ignoreLocation: true,
        });
    }, [entries]);
    var focusEntry = (0, react_1.useCallback)(function (slug, canonicalTerm) {
        if (!slug || typeof window === 'undefined') {
            return;
        }
        var targetSlug = slug;
        setActiveSlug(targetSlug);
        var url = new URL(window.location.href);
        url.hash = targetSlug;
        if (canonicalTerm) {
            url.searchParams.set('term', canonicalTerm);
        }
        else {
            url.searchParams.set('term', targetSlug);
        }
        window.history.replaceState({}, '', url.toString());
        var target = document.getElementById(targetSlug);
        if (target) {
            var top_1 = target.getBoundingClientRect().top + window.scrollY - 70; // account for sticky header
            window.scrollTo({ top: top_1, behavior: 'smooth' });
        }
    }, []);
    (0, react_1.useEffect)(function () {
        if (typeof window === 'undefined') {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var termParam = params.get('term');
        var hashParam = window.location.hash ? window.location.hash.replace('#', '') : '';
        var rawSlug = hashParam || (termParam ? slugify(termParam) : '');
        var initialSlug = aliasToCanonicalSlug.get(rawSlug) || rawSlug;
        if (initialSlug) {
            setActiveSlug(initialSlug);
            // Allow the page to render before scrolling
            setTimeout(function () { return focusEntry(initialSlug, termParam || initialSlug); }, 50);
        }
    }, [aliasToCanonicalSlug, focusEntry]);
    var filteredEntries = (0, react_1.useMemo)(function () {
        var normalize = function (value) { return value.toLowerCase(); };
        var subset = entries;
        if (termQuery.trim()) {
            var query_1 = normalize(termQuery.trim());
            subset = subset.filter(function (entry) {
                return (normalize(entry.term).includes(query_1) ||
                    normalize(entry.canonicalTerm).includes(query_1) ||
                    (entry.aliases || []).some(function (alias) { return normalize(alias).includes(query_1); }));
            });
        }
        if (textQuery.trim()) {
            var results = fuse.search(textQuery.trim());
            var allowedSlugs_1 = new Set();
            results.forEach(function (_a) {
                var item = _a.item;
                return allowedSlugs_1.add(item.slug);
            });
            subset = subset.filter(function (entry) { return allowedSlugs_1.has(entry.slug); });
        }
        return subset;
    }, [entries, fuse, termQuery, textQuery]);
    return (<div className={GlossaryTable_module_css_1.default.wrapper}>
      <div className={GlossaryTable_module_css_1.default.controls}>
        <label className={GlossaryTable_module_css_1.default.control}>
          <span>Search term</span>
          <input type="search" placeholder="Filter by term or alias" value={termQuery} onChange={function (event) { return setTermQuery(event.target.value); }}/>
        </label>
        <label className={GlossaryTable_module_css_1.default.control}>
          <span>Fuzzy search</span>
          <input type="search" placeholder="Free-text search across definitions" value={textQuery} onChange={function (event) { return setTextQuery(event.target.value); }}/>
        </label>
      </div>

      <div className={GlossaryTable_module_css_1.default.tableWrapper}>
        <table className={GlossaryTable_module_css_1.default.table}>
          <thead>
            <tr>
              <th>Term</th>
              <th>Definition &amp; Abbreviation</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map(function (entry) {
            var _a;
            var handleClick = function () { return focusEntry(entry.targetSlug, entry.canonicalTerm); };
            return (<tr key={"".concat(entry.slug, "-").concat(entry.isAlias ? 'alias' : 'term')} id={entry.slug} className={(0, clsx_1.default)((_a = {}, _a[GlossaryTable_module_css_1.default.activeRow] = activeSlug === entry.slug, _a))} onClick={handleClick} tabIndex={0} role="button" onKeyDown={function (event) {
                    if ((event.key === 'Enter' || event.key === ' ') &&
                        event.target === event.currentTarget) {
                        event.preventDefault();
                        handleClick();
                    }
                }}>
                  <td className={(0, clsx_1.default)(GlossaryTable_module_css_1.default.termCell, GlossaryTable_module_css_1.default.clickable)}>
                    <div className={GlossaryTable_module_css_1.default.termName}>{entry.term}</div>
                  </td>
                  <td className={GlossaryTable_module_css_1.default.definitionCell}>
                    {entry.isAlias ? (
                // Hyperlink to term in alias definition cell
                <a href={"#".concat(entry.targetSlug)} className={GlossaryTable_module_css_1.default.aliasLink} onClick={function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        focusEntry(entry.targetSlug, entry.canonicalTerm);
                    }}>
                        See {entry.canonicalTerm}
                      </a>) : (<>
                        <div className={GlossaryTable_module_css_1.default.definitionText} dangerouslySetInnerHTML={{ __html: entry.definitionHtml }}/>
                        <div className={GlossaryTable_module_css_1.default.pillRow}>
                          {entry.abbreviation ? (<span className={(0, clsx_1.default)(GlossaryTable_module_css_1.default.pill, GlossaryTable_module_css_1.default.abbreviationPill)}>
                              {entry.abbreviation}
                            </span>) : null}
                          {(entry.aliases || []).map(function (alias) {
                        var aliasSlug = slugify(alias);
                        var target = aliasToCanonicalSlug.get(aliasSlug) || aliasSlug;
                        return (
                        // Link to alias term
                        <a key={target} href={"#".concat(aliasSlug)} className={(0, clsx_1.default)(GlossaryTable_module_css_1.default.pill, GlossaryTable_module_css_1.default.aliasPill)} onClick={function (event) {
                                event.preventDefault();
                                event.stopPropagation();
                                focusEntry(aliasSlug, alias);
                            }}>
                                {alias}
                              </a>);
                    })}
                        </div>
                      </>)}
                  </td>
                </tr>);
        })}
          </tbody>
        </table>
      </div>
    </div>);
};
exports.default = GlossaryTable;
