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
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
// Create the store
var useQuizStore = (0, zustand_1.create)()((0, middleware_1.persist)(function (set, get) { return ({
    quiz: [],
    // Action to add a new quiz
    addQuizResult: function (quizId, numberOfQuestions, solved, right, wrong) {
        var state = get();
        var id = self.crypto.randomUUID();
        ;
        var timestamp = new Date().toISOString();
        // Otherwise add the new quiz
        set({
            quiz: __spreadArray(__spreadArray([], state.quiz, true), [
                {
                    id: id,
                    quizId: quizId,
                    timestamp: timestamp,
                    results: {
                        numberOfQuestions: numberOfQuestions,
                        solved: solved,
                        right: right,
                        wrong: wrong,
                    }
                }
            ], false)
        });
        return id;
    },
    getQuizResults: function (quizId) {
        var state = get();
        return state.quiz.filter(function (value) {
            return value.quizId === quizId;
        });
    }
}); }, {
    name: 'quiz-results', // unique name for localStorage
}));
exports.default = useQuizStore;
