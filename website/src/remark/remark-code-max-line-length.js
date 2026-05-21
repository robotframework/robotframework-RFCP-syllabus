// plugins/remark-code-max-line-length.js
import {visit} from 'unist-util-visit';

/**
 * @param {{ max?: number }} options
 */
export default function codeMaxLineLength(options = {}) {
  const max = options.max ?? 100;

  return (tree, file) => {
    const sourcePath = file.path ?? file.history?.[0] ?? '';

    // Versioned docs are snapshots and should not fail on current lint rules.
    if (/(^|[\\/])versioned_docs([\\/]|$)/.test(sourcePath)) {
      return;
    }

    visit(tree, 'code', (node) => {
      // Optional: allow opt-out with "nolint" in code block meta:
      // ```js nolint
      if (node.meta && node.meta.includes('nolint')) {
        return;
      }

      const lines = node.value.split('\n');
      const blockStartLine = node.position?.start?.line ?? 1;

      lines.forEach((line, idx) => {
        if (line.length > max) {
          const lineNumber = blockStartLine + idx + 1;
          const column = Math.min(line.length, max) + 1;
          file.fail(
            `Code block line ${lineNumber} exceeds max length ${max} (got ${line.length})`,
            {line: lineNumber, column},
            'remark-code-max-line-length'
          );
        }
      });
    });
  };
}
