import React from "react";
import './resultCard.css';

const QuizResultCard: React.FC = (props: any) => {
  // Calculate success rate
  const successRate = Math.round((props.result.results.right / props.result.results.numberOfQuestions) * 100);

  // Format timestamp to a more readable format
  const formatTimestamp = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleString();
    } catch (e) {
      return timestamp;
    }
  };

  return (
    <div className="result-card">
      <div className="result-card__header">
        <h3 className="result-card__title">{formatTimestamp(props.result.timestamp)}</h3>
        
      </div>
      
      <div className="result-card__content">
        <div className="result-card__score">
          <div className="result-card__score-circle" style={
            {
              background: `conic-gradient(
                var(--ifm-color-primary) ${successRate}%,
                var(--ifm-color-emphasis-200) 0
              )`
            }
          }>
            <span className="result-card__score-text">{successRate}%</span>
          </div>
          <div className="result-card__stats">
            <div className="result-card__stat">
              <span className="result-card__stat-label">Right:</span>
              <span className="result-card__stat-value result-card__stat-value--right">{props.result.results.right}</span>
            </div>
            <div className="result-card__stat">
              <span className="result-card__stat-label">Wrong:</span>
              <span className="result-card__stat-value result-card__stat-value--wrong">{props.result.results.wrong}</span>
            </div>
          </div>
        </div>
        
        <div className="result-card__details">
          <div className="result-card__detail">
            <span className="result-card__detail-label">Total Questions:</span>
            <span className="result-card__detail-value">{props.result.results.numberOfQuestions}</span>
          </div>
          <div className="result-card__detail">
            <span className="result-card__detail-label">Solved:</span>
            <span className="result-card__detail-value">{props.result.results.solved}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultCard;