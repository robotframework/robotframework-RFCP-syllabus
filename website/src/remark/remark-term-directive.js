// plugins/remark-term-directive.js
import {visit} from "unist-util-visit";
import glossary from "../../static/glossary/glossary.json";

/**
 * Usage examples (inline):
 *   :term[visual text]{term="Glossary Term"}
 *   :term[Glossary Term]                // falls back to the label if {term} is missing
 *
 * The label between [] becomes the visible text. The target term is resolved in
 * this order: {term=...} attribute (preferred), then {target} or {ref}, then the
 * label as a last resort. The legacy title ( ... ) syntax is deprecated.
 * The tooltip is built from the glossary entry (definition) and includes a link
 * to the glossary page.
 */
export default function remarkTermDirective() {
  const normalizeKey = (value = "") => value.trim().toLowerCase();

  const slugify = (text = "") =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-+|-+$)/g, "");

  const glossaryByKey = new Map();
  (glossary || []).forEach((entry) => {
    const key = normalizeKey(entry.term);
    glossaryByKey.set(key, entry);
    (entry.aliases || []).forEach((alias) => {
      glossaryByKey.set(normalizeKey(alias), entry);
    });
  });

  const baseUrl = (process.env.BASE_URL || "/").replace(/\/$/, "");

  const toTooltipMd = (entry, fallbackTarget) => {
    const termName = entry?.term || fallbackTarget;
    const link = termName ? `${baseUrl}/docs/glossary?term=${encodeURIComponent(termName)}` : undefined;
    if (!termName) return undefined;
    if (!entry) return `[Open glossary entry](${link})`;
    return `**${entry.term}**\n\n${entry.definition}\n\n[Open glossary entry](${link})`;
  };

  const toAttrs = (attrs = {}) =>
    Object.entries(attrs).map(([name, value]) => ({
      type: "mdxJsxAttribute",
      name,
      // keep booleans/null; coerce others to string
      value: value === true || value === false || value == null ? value : String(value),
    }));

  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent) return;

      const isTermDirective =
        (node.type === "textDirective" || node.type === "leafDirective" || node.type === "containerDirective") &&
        node.name === "term";

      if (!isTermDirective) return;

      const label =
        node.label ??
        (node.children && node.children[0] && node.children[0].value) ??
        "";

      const attrTerm = node.attributes?.term || node.attributes?.target || node.attributes?.ref;
      const legacyTitle = node.title; // from ( ... ) syntax
      const fallbackLabel = label;

      const targetTerm =
        (typeof attrTerm === "string" && attrTerm.trim()) ||
        (typeof legacyTitle === "string" && legacyTitle.trim()) ||
        (typeof fallbackLabel === "string" && fallbackLabel.trim()) ||
        "";

      const glossaryEntry = glossaryByKey.get(normalizeKey(targetTerm));
      if (process.env.NODE_ENV !== "production") {
        if (!attrTerm && legacyTitle) {
          console.warn("[remark-term-directive] title ( ... ) syntax is deprecated; use {term=...} instead");
        }
        if (!glossaryEntry) {
          // Dev-only hint when a directive target does not resolve to a glossary entry
          console.warn(`[remark-term-directive] missing glossary entry for "${targetTerm}"`);
        }
      }
      const tooltipMd = toTooltipMd(glossaryEntry, targetTerm);
      const id = slugify(glossaryEntry?.term || targetTerm);

      const baseAttributes = {
        trigger: label,
        id,
        tooltipMd,
      };

      const mdxNode = {
        type: node.type === "textDirective" ? "mdxJsxTextElement" : "mdxJsxFlowElement",
        name: "Term",
        attributes: toAttrs({...node.attributes, ...baseAttributes}),
        children: [{type: "text", value: label}],
      };

      parent.children.splice(index, 1, mdxNode);
      return index + 1;
    });
  };
}
