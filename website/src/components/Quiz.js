import React from 'react';
import { useEffect } from 'react';
import 'quizdown'

export default function Highlight({ children, color }) {

  const startQuiz = () => {
  let node = document.querySelector('.quizDown');

  let config = {
    'shuffleAnswers': true
  }

  let rawQuizdown = `
  
  # This is awesome!
  
  - [x] True
  - [ ] False
  `

  quizdown.createApp(rawQuizdown, node, config);
  };

  useEffect(() => {
    startQuiz();
  });

  return (
    < span className="quizDown">
    </span >
  );
}