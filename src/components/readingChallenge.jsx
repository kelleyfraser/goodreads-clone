import React from "react";

function ReadingChallenge(props) {
  return (
    <div className="section side-panel reading-challenge-section">
      <h1 className="section-heading">2023 Reading Challenge</h1>
      <div className="media-box reading-challenge-section">
        <img src="./images/readingChallenge.png"></img>
        <div className="media-box_content">
          <h1>{props.data.booksRead}</h1>
          <p>books completed</p>
          <p className="light-text">{props.message}</p>
          <div className="reading-challenge-progress">
            <div className="progress-container">
              <div className="progress"
                style={{ width: props.percent + '%' }}>
              </div>
            </div>
            <p>{props.data.booksRead}/{props.data.totalBooks} ({props.percent}%)</p>
          </div>
          <a className="underlined-text primary-link">View Challenge</a>
        </div>
      </div>
    </div>
  );
}

export default ReadingChallenge;