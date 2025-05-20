import React from 'react';
import { useEffect } from 'react';
import 'quizdown'
import 'quizdown/public/build/extensions/quizdownHighlight';

export default function Quiz(props) {

  const startQuiz = () => {
    let node = document.querySelector('#quizDownContainer');

    let config = {
      'shuffleAnswers': true
    }

    quizdown.register(quizdownHighlight).createApp(props.question, node, config);
  };

  useEffect(() => {
    console.log(props);
    startQuiz();
  });

  return (
    < span id="quizDownContainer">
    </span >
  );
}