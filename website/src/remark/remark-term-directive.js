// plugins/remark-term-directive.js
import {visit} from "unist-util-visit";

/**
 * Converts :term[Text]{prop="value"} into:
 *   <Term prop="value">Text</Term>
 *
 * Works for inline (:term[...]) and (optionally) block/containers (:::) if you want them.
 */
export default function remarkTermDirective() {
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

      // Inline form: :term[...]
      if (node.type === "textDirective" && node.name === "term") {
        const label =
          node.label ??
          (node.children && node.children[0] && node.children[0].value) ??
          "";
        const mdxNode = {
          type: "mdxJsxTextElement",
          name: "Term",
          attributes: toAttrs(node.attributes),
          children: [{type: "text", value: label}],
        };
        parent.children.splice(index, 1, mdxNode);
        return index + 1;
      }

      // Optional block forms if you ever want them:
      // Leaf directive (single block line): :term[Heading]{...}
      if (node.type === "leafDirective" && node.name === "term") {
        const label =
          node.label ??
          (node.children && node.children[0] && node.children[0].value) ??
          "";
        const mdxNode = {
          type: "mdxJsxFlowElement",
          name: "Term",
          attributes: toAttrs(node.attributes),
          children: [{type: "text", value: label}],
        };
        parent.children.splice(index, 1, mdxNode);
        return index + 1;
      }

      // Container directive with :::term ... :::
      if (node.type === "containerDirective" && node.name === "term") {
        const mdxNode = {
          type: "mdxJsxFlowElement",
          name: "Term",
          attributes: toAttrs(node.attributes),
          children: node.children || [],
        };
        parent.children.splice(index, 1, mdxNode);
        return index + 1;
      }
    });
  };
}
