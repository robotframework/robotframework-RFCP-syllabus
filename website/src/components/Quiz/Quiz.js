"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuizLoader;
var react_1 = require("react");
var ExecutionEnvironment_1 = require("@docusaurus/ExecutionEnvironment");
var QuizComponent = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./QuizComponent'); }); });
function QuizLoader(_a) {
    var name = _a.name, question = _a.question, src = _a.src;
    if (!ExecutionEnvironment_1.default.canUseDOM)
        return null;
    return (<react_1.Suspense fallback={<div>Loading Quiz...</div>}>
      <QuizComponent name={name} question={question} src={src}/>
    </react_1.Suspense>);
}
