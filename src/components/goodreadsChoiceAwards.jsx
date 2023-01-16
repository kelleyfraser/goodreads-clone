import React from "react";

function GoodreadsChoiceAwards() {
  return (
    <div className="section side-panel goodreads-choice-awards-section">
      <h1 className="section-heading">Goodreads Choice Awards</h1>
      <div className="goodreads-choice-awards-section_content">
        <img src="./images/goodreadsChoiceAwards.png"></img>
        <div className="goodreads-choice-awards_text">
          <h2 className="book-title">Announcing the Best Books of 2022</h2>
          <button>See the Winners</button>
          <p>5,779,854 Votes Cast</p>
        </div>
      </div>
    </div>
  );
}

export default GoodreadsChoiceAwards;