import React from "react";

function Bookshelves() {
  return (
    <div className="section side-panel bookshelves-section">
      <h1 className="section-heading">Bookshelves</h1>
      <div className="bookshelves-content">
        <div className="bookshelf-counts">
          <a className="primary-link">99</a>
          <a className="primary-link">2</a>
          <a className="primary-link">150</a>
        </div>
        <div className="bookshelf-names">
          <a className="primary-link">Want to Read</a>
          <a className="primary-link">Currently Reading</a>
          <a className="primary-link">Read</a>
        </div>
      </div>
    </div>
  );
}

export default Bookshelves;