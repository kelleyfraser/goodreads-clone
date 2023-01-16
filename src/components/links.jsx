import React from "react";

function Links() {
  return (
    <div className="section side-panel links-section">
      <div className="top-links">
        <div className="links-list">
          <h1 className="section-heading">Company</h1>
          <a className="secondary-link underlined-text">About us</a>
          <a className="secondary-link underlined-text">Careers</a>
          <a className="secondary-link underlined-text">Terms</a>
          <a className="secondary-link underlined-text">Privacy</a>
          <a className="secondary-link underlined-text">Interest Based Ads</a>
          <a className="secondary-link underlined-text">Ad Preferences</a>
          <a className="secondary-link underlined-text">Help</a>
        </div>
        <div className="links-list">
          <h1 className="section-heading">Work with Us</h1>
          <a className="secondary-link underlined-text">Authors</a>
          <a className="secondary-link underlined-text">Advertise</a>
          <a className="secondary-link underlined-text">Authors & ads blog</a>
          <a className="secondary-link underlined-text">API</a>
        </div>
      </div>
      <h1 className="section-heading">Connect</h1>
      <div className="icon-links-list">
        <div className="circle-icon secondary-circle-icon">
          <i className="fa fa-facebook"></i>
        </div>
        <div className="circle-icon secondary-circle-icon">
          <i className="fa fa-twitter"></i>
        </div>
        <div className="circle-icon secondary-circle-icon">
          <i className="fa fa-instagram"></i>
        </div>
        <div className="circle-icon secondary-circle-icon">
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
      <div className="app-download-links">
        <img src="./images/appStore.png"></img>
        <img src="./images/googlePlay.png"></img>
      </div>
      <div className="mobile-link">
        <a className="secondary-link underlined-text">Mobile Version</a>
      </div>
      <p className="light-text">&#169; 2023 Goodreads, Inc.</p>
    </div>
  );
}

export default Links;