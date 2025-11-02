import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// Optional raw HTML support (see notes below):
import rehypeRaw from "rehype-raw";
import DOMPurify from "dompurify";

type TermProps = {
  /** Text that appears inline in your document (the trigger/label) */
  trigger?: string;          // used by container form; fine to keep even if you only use inline
  /** Render Markdown at runtime from the directive attribute */
  tooltipMd?: string;        // <-- our new prop
  /** Legacy/plain options (safe to keep if you also support these) */
  tooltip?: string;          // plain text
  tooltipHtml?: string;      // raw HTML (if you already implemented it)
  id?: string;
  /** If you ever use the container form, children become the tooltip body */
  children?: React.ReactNode;
};

export default function Term({
  trigger,
  tooltipMd,
  tooltip,
  tooltipHtml,
  id,
  children,
}: TermProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const hasTooltip = Boolean(tooltipMd || tooltip || tooltipHtml || children);

  // If you expect authors to use "\n" in attribute strings, you can normalize them:
  const tooltipMdNormalized =
    typeof tooltipMd === "string" ? tooltipMd.replaceAll("\\n", "\n") : undefined;

  return (
    <span
      ref={ref}
      id={id}
      tabIndex={0}
      role="button"
      onClick={() => hasTooltip && setOpen((v) => !v)}
      onKeyDown={(e) =>
        hasTooltip && (e.key === "Enter" || e.key === " ")
          ? setOpen((v) => !v)
          : null
      }
      style={{
        position: "relative",
        cursor: hasTooltip ? "help" : "default",
        borderBottom: "1px solid currentcolor",
        fontWeight: 600,
        color: "var(--ifm-navbar-link-active-color)",
      }}
      aria-haspopup="dialog"
      aria-expanded={open}
    >
      {/* Trigger text; for inline directives, this is the directive label */}
      {trigger ?? children}

      {open && hasTooltip && (
        <span
          role="dialog"
          style={{
            position: "absolute",
            left: "0%",
            top: "100%",
            transform: "translate(0, 4px)",
            // maxWidth: 360,
            fontWeight: 400,
            color: "var(--ifm-font-color-base)",
            padding: "8px 10px",
            borderRadius: 8,
            background: "var(--ifm-background-surface-color)",
            border: "1px solid var(--ifm-color-emphasis-300)",
            boxShadow: "0 8px 30px rgba(0,0,0,.15)",
            zIndex: 20,
            whiteSpace: "pre",
          }}
        >
          {/* Priority: Markdown > plain text > HTML > children */}
          {tooltipMdNormalized && (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // If you want to allow raw HTML inside Markdown, uncomment:
              rehypePlugins={[rehypeRaw]}
              // AND sanitize (strongly recommended):
              components={{
                p: (props) => <p {...props} />, // example: map elements if you like
              }}
            >
              {tooltipMdNormalized}
            </ReactMarkdown>
          )}

          {!tooltipMdNormalized && tooltip && <span>{tooltip}</span>}

          {!tooltipMdNormalized && !tooltip && tooltipHtml && (
            // If you allow tooltipHtml, consider sanitizing:
            <span
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tooltipHtml) }}
            />
            // <span dangerouslySetInnerHTML={{ __html: tooltipHtml }} />
          )}

          {!tooltipMdNormalized && !tooltip && !tooltipHtml && children && <>{children}</>}
        </span>
      )}
    </span>
  );
}
