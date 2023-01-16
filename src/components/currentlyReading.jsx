import React from 'react';
import HorizontalLinksList from "./common/horizontalLinksList";

function CurrentlyReading(props) {
  return (
    <div className="section side-panel currently-reading-section">
      <h1 className="section-heading">Currently Reading</h1>
      <div className="media-box currently-reading-content">
        <img className="small-book" src={props.book.imgUrl}></img>
        <div className="media-box_content currently-reading-content_info">
          <h2 className="book-title book-title-small underlined-text">{props.book.title}</h2>
          <h3 className="author author-small"><span>by </span><span className="underlined-text">{props.book.author}</span></h3>
          <button className="btn outline-btn">Update Progress</button>
        </div>
      </div>
      {/* Use custom component to clean up HTML a little */}
      <HorizontalLinksList links={["View all books", "Add a book", "General update"]} />
    </div>
  );
}

export default CurrentlyReading;