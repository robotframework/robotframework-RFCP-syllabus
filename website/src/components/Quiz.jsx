import React from 'react';
import { useEffect } from 'react';
import 'quizdown-extended'
import hljsDefineRobot from '../robot';
import 'quizdown-extended/public/build/extensions/quizdownHighlight';

export default function Quiz(props) {

  const startQuiz = () => {
    let node = document.querySelector('#quizDownContainer');

    const config = {
      startOnLoad: true,          // detect and convert all div html elements with class quizdown
      shuffleAnswers: true,       // shuffle answers for each question
      shuffleQuestions: false,    // shuffle questions for each quiz
      nQuestions: undefined,       // display n questions at random, if shuffleQuestions is true
      primaryColor: 'var(--quizdownPrimaryColor)',  // primary CSS color
      secondaryColor: 'var(--quizdownSecondaryColor)',  // secondary CSS color
      textColor: 'var(--quizdownTextColor)',         // text color of some elements
      buttonColor: 'var(--quizdownSecondaryColor)',          // The background color of the buttons
      locale: null,               // language of the user interface (auto-detect per default)
      enableRetry: true           // allow the user to resubmit answers
    };


    quizdownHighlight.registerHljsLanguage("robot", hljsDefineRobot);
    quizdown.register(quizdownHighlight).createApp(props.question, node, config);
  };
  
  
  const setColorsDependingOnTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      document.documentElement.style.setProperty('--quizdownSecondaryColor', "var(--ifm-color-emphasis-200)");
      document.documentElement.style.setProperty('--quizdownTextColor', "black");
      quizdownHighlight.setTheme("https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/stackoverflow-light.min.css");
    } else {
      document.documentElement.style.setProperty('--quizdownSecondaryColor', "var(--ifm-background-surface-color)");
      document.documentElement.style.setProperty('--quizdownTextColor', "var(--ifm-color-primary)");
      quizdownHighlight.setTheme("https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/androidstudio.min.css");
    }
  }

  useEffect(() => {

    // To set the color scheme of quizdown
    document.documentElement.style.setProperty('--quizdownPrimaryColor', "var(--ifm-color-primary)");

    const observer = new MutationObserver(() => {
      setColorsDependingOnTheme();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    startQuiz();
    setColorsDependingOnTheme();
    return () => observer.disconnect();

  });

  return (
    < span id="quizDownContainer" className='quizdown'>
    </span >
  );
}