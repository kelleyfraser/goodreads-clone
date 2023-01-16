import React from "react";
import HorizontalLinksList from "./horizontalLinksList";

function FeedItem(props) {
  return (
    <>
      <div className="feed-item-container">
        <div className="feed-item-top">
          <img src="./images/profilePicture.jpg" className="profile-pic"></img>
          <div className="feed-item-content">
            <div className="feed-item-heading">
              <div className="feed-item-heading_left">
                <a className="bold-link underlined-text">{props.data.username}</a>
                <span>{props.data.postType}</span>
                {/* Conditionally render stars element if post type is "rated a book" */}
                {props.data.postType === "rated a book" ?
                  <div className="stars-background">
                    <div className="stars" style={{ width: (((props.data.stars) / 5) * 100) + "%" }}>
                      <div className="stars-overlay"></div>
                    </div>
                  </div> : <p></p>}
              </div>
              <p className="light-text">{props.data.time}</p>
            </div>
            <div className="media-box currently-reading-content">
              <img className="large-book" src={props.book.imgUrl}></img>
              <div className="media-box_content currently-reading-content_info">
                <h2 className="book-title book-title-large underlined-text">{props.book.title}</h2>
                <h3 className="author author-large"><span>by </span><span className="underlined-text">{props.book.author}</span></h3>
                <button className="btn primary-btn">Want to Read</button>
                <p>{props.book.description} <a className="primary-link underlined-text">Continue reading</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* Use custom component to clean up HTML a little */}
        <HorizontalLinksList links={["Like", "Comment", "Preview Book"]} />
      </div>
      <div className="feedback-container">
        <div className="circle-icon outline-circle-icon">
          <i className="fa fa-user"></i>
        </div>
        <input placeholder="Write a comment..."></input>
      </div>
    </>
  );
}

export default FeedItem;