import React from "react";
import {createPortal} from "react-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// Optional raw HTML support (see notes below):
import rehypeRaw from "rehype-raw";
import DOMPurify from "dompurify";

import styles from "./Term.module.css";

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
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = (siteConfig?.baseUrl || "/").replace(/\/$/, "");

  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [coords, setCoords] = React.useState<{top: number; left: number; width: number}>({
    top: 0,
    left: 0,
    width: 0,
  });
  const [portalReady, setPortalReady] = React.useState(false);

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setPortalReady(true);
  }, []);

  const updatePosition = React.useCallback(() => {
    if (!ref.current || typeof window === "undefined") return;
    const rect = ref.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;
    setCoords({
      top: rect.top + scrollY + rect.height + 4,
      left: rect.left + scrollX,
      width: rect.width,
    });
  }, []);

  React.useEffect(() => {
    if (!open) return;
    updatePosition();
    const handler = () => updatePosition();
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
  }, [open, updatePosition]);

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
      className={styles.termTrigger}
      aria-haspopup="dialog"
      aria-expanded={open}
    >
      {/* Trigger text; for inline directives, this is the directive label */}
      {trigger ?? children}

      {open && hasTooltip && portalReady
        ? createPortal(
            <div
              role="dialog"
              className={styles.termTooltip}
              style={{
                left: coords.left,
                top: coords.top,
                minWidth: coords.width,
              }}
            >
              {tooltipMdNormalized && (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({node: _node, ...props}) => <div {...props} />,
                    a: ({node: _node, href, ...props}) => {
                      const resolvedHref =
                        href && href.startsWith("/") && !href.startsWith(baseUrl)
                          ? `${baseUrl}${href}`
                          : href;
                      return (
                        <a
                          {...props}
                          href={resolvedHref}
                          rel="noreferrer"
                          target="_blank"
                          className={styles.termTooltipLink}
                        />
                      );
                    },
                  }}
                >
                  {tooltipMdNormalized}
                </ReactMarkdown>
              )}

              {!tooltipMdNormalized && tooltip && <span>{tooltip}</span>}

              {!tooltipMdNormalized && !tooltip && tooltipHtml && (
                <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tooltipHtml) }} />
              )}

              {!tooltipMdNormalized && !tooltip && !tooltipHtml && children && <>{children}</>}
            </div>,
            document.body
          )
        : null}
    </span>
  );
}
