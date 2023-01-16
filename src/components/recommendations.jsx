import React from "react";

function Recommendations(props) {
  let readBook = props.readBook;
  let recommendedBook = props.recommendedBook;

  return (
    <div className="section side-panel recommendations-section">
      <h1 className="section-heading">Recommendations</h1>
      <div className="recommendations-heading"><span>Because you read </span><a className="bold-link underlined-text">{readBook.title}:</a></div>
      <div className="media-box recommendations-content">
        <img className="small-book" src={recommendedBook.imgUrl}></img>
        <div className="media-box_content recommended-book-info">
          <h2 className="book-title book-title-small underlined-text">{recommendedBook.title}</h2>
          <h3 className="author author-small"><span className="author-small">by </span><span className="author-small underlined-text">{recommendedBook.author}</span></h3>
          <div className="recommendations-stars-bar">
            <div className="stars-background">
              <div className="stars" style={{ width: (((recommendedBook.stars) / 5) * 100) + "%" }}>
                <div className="stars-overlay"></div>
              </div>
            </div>
            <p className="light-text">{recommendedBook.stars}</p>
          </div>
          <button className="btn primary-btn">Want to Read</button>
        </div>
        <div className="next-recommendation"><i className="fa fa-angle-right fa-3x"></i></div>
      </div>
      <div className="recommendation-description">
        <p>
          {recommendedBook.description}<a className="primary-link underlined-text"> Continue reading</a>
        </p>
      </div>
      <a className="primary-link underlined-text">View all books similar to {readBook.title}</a>
    </div>
  );
}

export default Recommendations;