import React from 'react';
import { useEffect } from 'react';
import 'quizdown'
import hljsDefineRobot from '../robot';
import 'quizdown/public/build/extensions/quizdownHighlight';

export default function Quiz(props) {

  const startQuiz = () => {
    let node = document.querySelector('#quizDownContainer');

    let config = {
      'shuffleAnswers': true
    }

    console.log("quizdownHighlight.registerHljsLanguage");
    quizdownHighlight.registerHljsLanguage("robot", hljsDefineRobot);
    quizdown.register(quizdownHighlight).createApp(props.question, node, config);
  };

  useEffect(() => {
    startQuiz();
  });

  return (
    < span id="quizDownContainer">
    </span >
  );
}