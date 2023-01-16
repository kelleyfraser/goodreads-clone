import React from "react";

function WantToRead() {
  return (
    <div className="section side-panel want-to-read-section">
      <h1 className="section-heading">Want to Read</h1>
      <div className="reading-list-grid">
        <div className="reading-list-item" style={{ backgroundImage: `url(./images/book1.jpg)` }}></div>
        <div className="reading-list-item" style={{ backgroundImage: `url(./images/book2.jpg)` }}></div>
        <div className="reading-list-item" style={{ backgroundImage: `url(./images/book3.jpg)` }}></div>
        <div className="reading-list-item" style={{ backgroundImage: `url(./images/book4.jpg)` }}></div>
        <div className="reading-list-item" style={{ backgroundImage: `url(./images/book5.jpg)` }}></div>
        <div className="reading-list-item" style={{ backgroundImage: `url(./images/book6.jpg)` }}></div>
      </div>
      <a className="primary-link">View all books</a>
    </div>
  );
}

export default WantToRead;