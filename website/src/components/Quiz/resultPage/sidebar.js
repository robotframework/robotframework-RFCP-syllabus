"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
require("./sidebar.css");
var QuizResultSidebar = function (props) {
    var isItemActive = function (id) {
        if (typeof window === 'undefined')
            return false;
        // Remove the leading # from the hash
        var currentPageId = window.location.hash.substring(1);
        return id === currentPageId;
    };
    var capitalizeFirstLetter = function (str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    };
    return (<div className="sidebar-container">
      <h2 className="sidebar-title">Quiz Results</h2>
      <nav className="sidebar-nav">
        <ul className="sidebar-category-list">
          {props.quizPages.map(function (quizPage) { return (<li key={quizPage.id} className="sidebar-category">
              <div className="sidebar-category-header">
                {capitalizeFirstLetter(quizPage.name)}
              </div>
              <ul className="sidebar-item-list">
                {quizPage.quizzes.map(function (quizComponent) { return (<li key={quizComponent.id} className="sidebar-item">
                    <Link_1.default to={"#" + quizComponent.id} className={isItemActive(quizComponent.id)
                    ? "sidebar-link sidebar-link-active"
                    : "sidebar-link"}>
                      {capitalizeFirstLetter(quizComponent.name)}
                    </Link_1.default>
                  </li>); })}
              </ul>
            </li>); })}
        </ul>
      </nav>
    </div>);
};
exports.default = QuizResultSidebar;
