import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import lightTheme from '@shikijs/themes/github-light';
import darkTheme from '@shikijs/themes/dracula';
import Quizdown from 'quizdown-extended/dist/quizdown.es.js';

import useQuizStore from './QuizStore';
import './Quiz.css';

import python from '@shikijs/langs/python';
import robot from './robotframework-tmLanguage.json';

interface QuizProps {
  name: string;
  question?: string;
  src?: string;
}

export default function Quiz({ name, question, src }: QuizProps) {
  const addQuizResult = useQuizStore((state) => state.addQuizResult);
  // const resultBaseUrl = useBaseUrl('/quizResults');

  const [content, setContent] = useState<string | null>(question || null);

  const generateQuizId = (name: string) => {
    let page = typeof window !== 'undefined' ? window.location.pathname : '';
    page = page.replace('/robotframework-RFCP-syllabus/', '');
    let id = page.replace('docs/', '').replace('/', '_').replace('-', '_') + '_' + name.replace(' ', '_');
    return id.toLocaleLowerCase();
  };

  const genQuizId = () => {
    if (ExecutionEnvironment.canUseDOM) {
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
  useEffect(() => {
    if (!src) return;

    fetch('/robotframework-RFCP-syllabus/quizzes/' + src)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch quiz: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
      })
      .catch((err) => {
        console.error('Error loading quiz:', err);
      });
  }, [src, name]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || !content) {
      return;
    }

    // Set CSS variables for component colors (existing)
    document.documentElement.style.setProperty(
      '--quizdownPrimaryColor',
      'var(--quizdown-color-primary)'
    );
    document.documentElement.style.setProperty(
      '--quizdownSecondaryColor',
      'var(--quizdown-color-secondary)'
    );
    document.documentElement.style.setProperty(
      '--quizdownTextColor',
      'var(--quizdown-color-text)'
    );
    document.documentElement.style.setProperty(
      '--quizdownButtonColor',
      'var(--quizdown-color-button)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorShadow',
      'var(--quizdown-color-shadow)'
    );
    document.documentElement.style.setProperty(
      '--quizdownBackgroundColor',
      'var(--quizdown-color-background, var(--ifm-navbar-background-color))'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorHint',
      'var(--quizdown-color-hint)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorHintBg',
      'var(--quizdown-color-hint-bg)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorPass',
      'var(--quizdown-color-pass)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorPassBg',
      'var(--quizdown-color-pass-bg)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorFail',
      'var(--quizdown-color-fail)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorFailBg',
      'var(--quizdown-color-fail-bg)'
    );
    document.documentElement.style.setProperty(
      '--quizdownColorCodeBg',
      'var(--quizdown-color-code-bg)'
    );

    const node = document.querySelector('#' + genQuizId());
    if (!node) {
      console.error(`[Quiz:${name}] Could not find #${genQuizId()}`);
      return;
    }

    const quizdown = new Quizdown();

    //     this.hintSymbolColor = get(options['hintSymbolColor'], '#ff9800');
    //     this.hintBgColor = get(options['hintBgColor'], '#ff990040');
    //     this.passSymbolColor = get(options['passSymbolColor'], '#00cc88');
    //     this.passBgColor = get(options['passBgColor'], '#00cc8840');
    //     this.failSymbolColor = get(options['failSymbolColor'], '#e72323');
    //     this.failBgColor = get(options['failBgColor'], '#e7232340');
    //     this.infoSymbolColor = get(options['infoSymbolColor'], '#2196F3');
    //     this.submitSymbolColor = get(options['submitSymbolColor'], '#2196F3');
    //
    const config = {
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
      customStyles: `
        .quizdown-content {
          font-size: var(--ifm-font-size-base, 16px);
          line-height: var(--ifm-line-height-base, 1.65);
        }
      `
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

    quizdown.getShikiInstance().then(async (instance) => {
      await quizdown.registerShikiLanguage(python);
      await quizdown.registerShikiLanguage(robot);
      await quizdown.registerShikiTheme('light', 'light', lightTheme);
      await quizdown.registerShikiTheme('dark', 'dark', 	darkTheme);
    });

  }, [content, name]);

  return (
    <span id="quizContainer" >
      <span id={genQuizId()} className="quizdown"></span>
    </span>
  );
}