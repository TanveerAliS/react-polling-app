import React from 'react';
import { Link } from 'react-router-dom';

const QuestionTemplate = ({ title, published_at, choices, url }) => {
  return (
    <div className="question-card">
      <div className="question-body">
        <div className="question-details">
          <h2>{title}</h2>
          <h3>Number of choices : <span>{choices}</span></h3>
          <h3>Published at : <span>{new Date(published_at).toDateString()}</span></h3>
        </div>
      </div>
      <div className="question-footer">
        <Link to={`${url}`}><button>Vote Now</button></Link>
      </div>
    </div>

  );
}

export default QuestionTemplate;