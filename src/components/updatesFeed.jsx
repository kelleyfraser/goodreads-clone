import React from 'react';
import FeedItem from './common/feedItem';

// Initialize array of post objects to use to generate feed item components to updates feed
const posts = [
  {
    username: "John Doe",
    postType: "started reading",
    time: "1d",
    stars: null
  },
  {
    username: "John Doe",
    postType: "rated a book",
    time: "1w",
    stars: 3
  },
  {
    username: "John Doe",
    postType: "started reading",
    time: "1w",
    stars: null
  },
  {
    username: "John Doe",
    postType: "wants to read",
    time: "2w",
    stars: null
  },
  {
    username: "John Doe",
    postType: "rated a book",
    time: "2w",
    stars: 4
  },
  {
    username: "John Doe",
    postType: "wants to read",
    time: "3w",
    stars: null
  }
]

// Render updates feed utilizing custom FeedItem component
function UpdatesFeed(props) {
  return (
    <div className="section main-panel updates-section">
      <div className="updates-section_heading">
        <h1 className="section-heading">Updates</h1>
        <div className="icon-with-text">
          <i className="fa fa-cog"></i>
          <p className="light-text">Customize</p>
        </div>
      </div>
      <FeedItem book={props.books[4]} data={posts[0]} />
      <FeedItem book={props.books[2]} data={posts[1]} />
      <FeedItem book={props.books[1]} data={posts[2]} />
      <FeedItem book={props.books[6]} data={posts[3]} />
      <FeedItem book={props.books[0]} data={posts[4]} />
      <FeedItem book={props.books[3]} data={posts[5]} />
    </div>
  );
}

export default UpdatesFeed;