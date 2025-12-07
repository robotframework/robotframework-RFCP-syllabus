"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdmonitionWrapper;
var react_1 = require("react");
var Admonition_1 = require("@theme-original/Admonition");
var RF_svg_1 = require("@site/static/img/RF.svg");
var K1_svg_1 = require("@site/static/img/K1.svg");
var K2_svg_1 = require("@site/static/img/K2.svg");
var K3_svg_1 = require("@site/static/img/K3.svg");
function AdmonitionWrapper(props) {
    if (props.type === 'lo') {
        var newProps = __assign(__assign({}, props), { type: 'info' });
        return (<>
        <Admonition_1.default icon={<RF_svg_1.default />} {...newProps}/>
      </>);
    }
    if (props.type === 'K1') {
        var newProps = __assign(__assign({}, props), { type: 'note' });
        return (<>
        <Admonition_1.default icon={<K1_svg_1.default />} {...newProps}/>
      </>);
    }
    if (props.type === 'K2') {
        var newProps = __assign(__assign({}, props), { type: 'tip' });
        return (<>
        <Admonition_1.default icon={<K2_svg_1.default />} {...newProps}/>
      </>);
    }
    if (props.type === 'K3') {
        var newProps = __assign(__assign({}, props), { type: 'warning' });
        return (<>
        <Admonition_1.default icon={<K3_svg_1.default />} {...newProps}/>
      </>);
    }
    return (<>
      <Admonition_1.default {...props}/>
    </>);
}
