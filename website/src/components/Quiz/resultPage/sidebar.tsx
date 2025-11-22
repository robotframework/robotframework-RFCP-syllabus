import React from "react";
import Link from '@docusaurus/Link';
import './sidebar.css';

const QuizResultSidebar = (props) => {
  const isItemActive = (id) => {
    if (typeof window === 'undefined') return false;
    // Remove the leading # from the hash
    const currentPageId = window.location.hash.substring(1);
    return id === currentPageId;
  };

  const capitalizeFirstLetter = (str) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Quiz Results</h2>
      <nav className="sidebar-nav">
        <ul className="sidebar-category-list">
          {props.quizPages.map((quizPage) => (
            <li key={quizPage.id} className="sidebar-category">
              <div className="sidebar-category-header">
                {capitalizeFirstLetter(quizPage.name)}
              </div>
              <ul className="sidebar-item-list">
                {quizPage.quizzes.map((quizComponent) => (
                  <li key={quizComponent.id} className="sidebar-item">
                    <Link 
                      to={"#" + quizComponent.id} 
                      className={isItemActive(quizComponent.id) 
                        ? "sidebar-link sidebar-link-active" 
                        : "sidebar-link"
                      }
                    >
                      {capitalizeFirstLetter(quizComponent.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default QuizResultSidebar;