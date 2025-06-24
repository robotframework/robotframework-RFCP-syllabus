import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './quizResults.css';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import { quizPages } from '../components/Quiz/quizComponents';
import QuizResultSidebar from '@site/src/components/Quiz/resultPage/sidebar';
import QuizResultCard from '@site/src/components/Quiz/resultPage/resultCard';
import useQuizStore from '@site/src/components/Quiz/QuizStore';

export default function QuizResults() {
  const isBrowser = useIsBrowser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quizId, setQuizId] = useState('');
  const [results, setResults] = useState([]);

  const getQuizResults = useQuizStore((state) => state.getQuizResults);

  const getCurrentQuizId = () => {
    if (!isBrowser) return '';
    return window.location.hash.substring(1).toLowerCase();
  };

  useEffect(() => {
    if (!isBrowser) return;

    const handleHashChange = () => {
      const newQuizId = getCurrentQuizId();
      setQuizId(newQuizId);
      setSidebarOpen(false); // Close sidebar on mobile when hash changes
    };

    // Set initial quizId on mount
    setQuizId(getCurrentQuizId());

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isBrowser]);

  useEffect(() => {

    if (!isBrowser) {
      return;
    }

    if (!quizId) {
      setResults([]);
    } else {
      const fetchedResults = getQuizResults(quizId);
      setResults(fetchedResults);
    }
  }, [quizId, getQuizResults]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Layout
      title="Quiz Results"
      description="View your quiz results"
    >
      <div className="quiz-container">
        {/* Mobile sidebar toggle button */}
        <button
          className="mobile-sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span>
            <img src="img/robot-framework-dark.svg" alt="Toggle sidebar" />
          </span>
        </button>

        {/* Two-column layout */}
        <div className="quiz-layout">
          {/* Sidebar */}
          <div className={`quiz-sidebar-wrapper ${sidebarOpen ? 'mobile-open' : ''}`}>
            <QuizResultSidebar quizPages={quizPages} />
          </div>

          {/* Main content */}
          <main className="quiz-content">
            {results.length > 0 ? (
              <div className="quiz-cards">
                {results.map((result) => (
                  <QuizResultCard key={result.id} result={result} />
                ))}
              </div>
            ) : (
              <div className="no-results-message">
                <p>No quiz results found. Please select a quiz from the sidebar.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
