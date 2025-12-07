"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Term;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var react_markdown_1 = require("react-markdown");
var remark_gfm_1 = require("remark-gfm");
// Optional raw HTML support (see notes below):
var rehype_raw_1 = require("rehype-raw");
var dompurify_1 = require("dompurify");
function Term(_a) {
    var trigger = _a.trigger, tooltipMd = _a.tooltipMd, tooltip = _a.tooltip, tooltipHtml = _a.tooltipHtml, id = _a.id, children = _a.children;
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var baseUrl = ((siteConfig === null || siteConfig === void 0 ? void 0 : siteConfig.baseUrl) || "/").replace(/\/$/, "");
    var _b = react_1.default.useState(false), open = _b[0], setOpen = _b[1];
    var ref = react_1.default.useRef(null);
    var _c = react_1.default.useState({
        top: 0,
        left: 0,
        width: 0,
    }), coords = _c[0], setCoords = _c[1];
    var _d = react_1.default.useState(false), portalReady = _d[0], setPortalReady = _d[1];
    react_1.default.useEffect(function () {
        var onDocClick = function (e) {
            if (ref.current && !ref.current.contains(e.target))
                setOpen(false);
        };
        document.addEventListener("click", onDocClick);
        return function () { return document.removeEventListener("click", onDocClick); };
    }, []);
    react_1.default.useEffect(function () {
        if (typeof window === "undefined")
            return;
        setPortalReady(true);
    }, []);
    var updatePosition = react_1.default.useCallback(function () {
        if (!ref.current || typeof window === "undefined")
            return;
        var rect = ref.current.getBoundingClientRect();
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollX = window.scrollX || window.pageXOffset;
        setCoords({
            top: rect.top + scrollY + rect.height + 4,
            left: rect.left + scrollX,
            width: rect.width,
        });
    }, []);
    react_1.default.useEffect(function () {
        if (!open)
            return;
        updatePosition();
        var handler = function () { return updatePosition(); };
        window.addEventListener("scroll", handler, true);
        window.addEventListener("resize", handler);
        return function () {
            window.removeEventListener("scroll", handler, true);
            window.removeEventListener("resize", handler);
        };
    }, [open, updatePosition]);
    var hasTooltip = Boolean(tooltipMd || tooltip || tooltipHtml || children);
    // If you expect authors to use "\n" in attribute strings, you can normalize them:
    var tooltipMdNormalized = typeof tooltipMd === "string" ? tooltipMd.replaceAll("\\n", "\n") : undefined;
    return (<span ref={ref} id={id} tabIndex={0} role="button" onClick={function () { return hasTooltip && setOpen(function (v) { return !v; }); }} onKeyDown={function (e) {
            return hasTooltip && (e.key === "Enter" || e.key === " ")
                ? setOpen(function (v) { return !v; })
                : null;
        }} style={{
            position: "relative",
            display: "inline-block",
            cursor: hasTooltip ? "help" : "default",
            // borderBottom: "1px solid currentcolor",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--ifm-navbar-link-active-color)",
        }} aria-haspopup="dialog" aria-expanded={open}>
      {/* Trigger text; for inline directives, this is the directive label */}
      {trigger !== null && trigger !== void 0 ? trigger : children}

      {open && hasTooltip && portalReady
            ? (0, react_dom_1.createPortal)(<div role="dialog" style={{
                    position: "absolute",
                    left: coords.left,
                    top: coords.top,
                    maxWidth: 420,
                    fontWeight: 400,
                    color: "var(--ifm-font-color-base)",
                    padding: "10px 12px",
                    borderRadius: 8,
                    background: "var(--ifm-background-surface-color)",
                    border: "1px solid var(--ifm-color-emphasis-300)",
                    boxShadow: "0 8px 30px rgba(0,0,0,.15)",
                    zIndex: 1000,
                    whiteSpace: "normal",
                    minWidth: coords.width,
                }}>
              {tooltipMdNormalized && (<react_markdown_1.default remarkPlugins={[remark_gfm_1.default]} rehypePlugins={[rehype_raw_1.default]} components={{
                        p: function (_a) {
                            var _node = _a.node, props = __rest(_a, ["node"]);
                            return <div {...props}/>;
                        },
                        a: function (_a) {
                            var _node = _a.node, href = _a.href, props = __rest(_a, ["node", "href"]);
                            var resolvedHref = href && href.startsWith("/") ? "".concat(baseUrl).concat(href) : href;
                            return <a {...props} href={resolvedHref} rel="noreferrer" target="_blank" style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.25rem",
                                    padding: "0.15rem 0.6rem",
                                    borderRadius: "999px",
                                    fontSize: "0.8rem",
                                    border: "1px solid var(--ifm-color-emphasis-300)",
                                    background: "var(--ifm-color-emphasis-100)",
                                    color: "var(--ifm-font-color-base)",
                                    textDecoration: "none"
                                }}/>;
                        },
                    }}>
                  {tooltipMdNormalized}
                </react_markdown_1.default>)}

              {!tooltipMdNormalized && tooltip && <span>{tooltip}</span>}

              {!tooltipMdNormalized && !tooltip && tooltipHtml && (<span dangerouslySetInnerHTML={{ __html: dompurify_1.default.sanitize(tooltipHtml) }}/>)}

              {!tooltipMdNormalized && !tooltip && !tooltipHtml && children && <>{children}</>}
            </div>, document.body)
            : null}
    </span>);
}
