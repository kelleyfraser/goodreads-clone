import React from "react";

function ImproveRecommendations(props) {
  return (
    <div className="section side-panel improve-recommendations-section">
      <h1 className="section-heading">Improve Recommendations</h1>
      <p>Rating at least 20 books improves your recommendations. You have rated {props.data}.</p>
      <div className="progress-container"><div className="progress" style={{ width: props.percent + '%' }}></div></div>
      <p className="light-text">{props.data}/20 ({props.percent}%)</p>
      <a className="primary-link underlined-text">Rate more books</a>
    </div>
  );
}

export default ImproveRecommendations;

