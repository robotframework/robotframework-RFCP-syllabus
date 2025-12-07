"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Quiz;
var react_1 = require("react");
var ExecutionEnvironment_1 = require("@docusaurus/ExecutionEnvironment");
var github_light_1 = require("@shikijs/themes/github-light");
var dracula_1 = require("@shikijs/themes/dracula");
var quizdown_es_js_1 = require("quizdown-extended/dist/quizdown.es.js");
var QuizStore_1 = require("./QuizStore");
require("./Quiz.css");
var python_1 = require("@shikijs/langs/python");
var robotframework_tmLanguage_json_1 = require("./robotframework-tmLanguage.json");
function Quiz(_a) {
    var _this = this;
    var name = _a.name, question = _a.question, src = _a.src;
    var addQuizResult = (0, QuizStore_1.default)(function (state) { return state.addQuizResult; });
    // const resultBaseUrl = useBaseUrl('/quizResults');
    var _b = (0, react_1.useState)(question || null), content = _b[0], setContent = _b[1];
    var generateQuizId = function (name) {
        var page = typeof window !== 'undefined' ? window.location.pathname : '';
        page = page.replace('/robotframework-RFCP-syllabus/', '');
        var id = page.replace('docs/', '').replace('/', '_').replace('-', '_') + '_' + name.replace(' ', '_');
        return id.toLocaleLowerCase();
    };
    var genQuizId = function () {
        if (ExecutionEnvironment_1.default.canUseDOM) {
            return generateQuizId(name);
        }
        return 'quiz-id';
    };
    // const generateResultLink = () => {
    //   if (ExecutionEnvironment.canUseDOM) {
    //     return resultBaseUrl + '#' + generateQuizId(name);
    //   }
    //   return '#';
    // };
    // Load quiz content from external file if src is provided
    (0, react_1.useEffect)(function () {
        if (!src)
            return;
        fetch('/robotframework-RFCP-syllabus/quizzes/' + src)
            .then(function (res) {
            if (!res.ok)
                throw new Error("Failed to fetch quiz: ".concat(res.status));
            return res.text();
        })
            .then(function (text) {
            setContent(text);
        })
            .catch(function (err) {
            console.error('Error loading quiz:', err);
        });
    }, [src, name]);
    (0, react_1.useEffect)(function () {
        if (!ExecutionEnvironment_1.default.canUseDOM || !content) {
            return;
        }
        // Set CSS variables for component colors (existing)
        document.documentElement.style.setProperty('--quizdownPrimaryColor', 'var(--quizdown-color-primary)');
        document.documentElement.style.setProperty('--quizdownSecondaryColor', 'var(--quizdown-color-secondary)');
        document.documentElement.style.setProperty('--quizdownTextColor', 'var(--quizdown-color-text)');
        document.documentElement.style.setProperty('--quizdownButtonColor', 'var(--quizdown-color-button)');
        document.documentElement.style.setProperty('--quizdownColorShadow', 'var(--quizdown-color-shadow)');
        document.documentElement.style.setProperty('--quizdownBackgroundColor', 'var(--quizdown-color-background, var(--ifm-navbar-background-color))');
        document.documentElement.style.setProperty('--quizdownColorHint', 'var(--quizdown-color-hint)');
        document.documentElement.style.setProperty('--quizdownColorHintBg', 'var(--quizdown-color-hint-bg)');
        document.documentElement.style.setProperty('--quizdownColorPass', 'var(--quizdown-color-pass)');
        document.documentElement.style.setProperty('--quizdownColorPassBg', 'var(--quizdown-color-pass-bg)');
        document.documentElement.style.setProperty('--quizdownColorFail', 'var(--quizdown-color-fail)');
        document.documentElement.style.setProperty('--quizdownColorFailBg', 'var(--quizdown-color-fail-bg)');
        document.documentElement.style.setProperty('--quizdownColorCodeBg', 'var(--quizdown-color-code-bg)');
        var node = document.querySelector('#' + genQuizId());
        if (!node) {
            console.error("[Quiz:".concat(name, "] Could not find #").concat(genQuizId()));
            return;
        }
        var quizdown = new quizdown_es_js_1.default();
        //     this.hintSymbolColor = get(options['hintSymbolColor'], '#ff9800');
        //     this.hintBgColor = get(options['hintBgColor'], '#ff990040');
        //     this.passSymbolColor = get(options['passSymbolColor'], '#00cc88');
        //     this.passBgColor = get(options['passBgColor'], '#00cc8840');
        //     this.failSymbolColor = get(options['failSymbolColor'], '#e72323');
        //     this.failBgColor = get(options['failBgColor'], '#e7232340');
        //     this.infoSymbolColor = get(options['infoSymbolColor'], '#2196F3');
        //     this.submitSymbolColor = get(options['submitSymbolColor'], '#2196F3');
        //
        var config = {
            startOnLoad: true,
            shuffleAnswers: true,
            shuffleQuestions: true,
            nQuestions: undefined,
            primaryColor: 'var(--quizdownPrimaryColor)',
            secondaryColor: 'var(--quizdownSecondaryColor)',
            textColor: 'var(--quizdownTextColor)',
            buttonColor: 'var(--quizdownButtonColor)',
            shadowColor: 'var(--quizdownColorShadow)',
            backgroundColor: 'var(--quizdownBackgroundColor)',
            hintSymbolColor: 'var(--quizdownColorHint)',
            hintBgColor: 'var(--quizdownColorHintBg)',
            passSymbolColor: 'var(--quizdownColorPass)',
            passBgColor: 'var(--quizdownColorPassBg)',
            failSymbolColor: 'var(--quizdownColorFail)',
            failBgColor: 'var(--quizdownColorFailBg)',
            codeBgColor: 'var(--quizdownColorCodeBg)',
            locale: 'en',
            enableRetry: true,
            // NEW: Font configuration (requires updated quizdown files)
            fontFamilyHeading: 'Roboto, sans-serif',
            //'var(--ifm-font-family-heading)',
            // NEW: Custom styles to match Docusaurus
            customStyles: "\n        .quizdown-content {\n          font-size: var(--ifm-font-size-base, 16px);\n          line-height: var(--ifm-line-height-base, 1.65);\n        }\n      "
        };
        quizdown.createApp(content, node, config);
        // quizdown.hooks.onQuizFinish((event) => {
        //   addQuizResult(
        //     generateQuizId(name),
        //     event.numberOfQuestions,
        //     event.solved,
        //     event.right,
        //     event.wrong
        //   );
        // });
        quizdown.getShikiInstance().then(function (instance) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, quizdown.registerShikiLanguage(python_1.default)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, quizdown.registerShikiLanguage(robotframework_tmLanguage_json_1.default)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, quizdown.registerShikiTheme('light', 'light', github_light_1.default)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, quizdown.registerShikiTheme('dark', 'dark', dracula_1.default)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }, [content, name]);
    return (<span id="quizContainer">
      <span id={genQuizId()} className="quizdown"></span>
    </span>);
}
