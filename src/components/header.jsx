import React from "react";
import Navbar from './common/navbar';

function Header() {
  return (
    <div className="header-section">
      <div className="header-content">
        <i className="header-search-icon fa fa-search"></i>
        <img src="./images/logo.png"></img>
        <Navbar />
        <div className="search-bar">
          <input className="search-input" placeholder="Search books"></input>
          <i className="fa fa-search"></i>
        </div>
        <div className="heading-icon-list">
          <div className="wide-screen-heading-icons">
            <div className="heading-icon-container">
              <div className="circle-icon primary-circle-icon">
                <i className="fa fa-bell"></i>
              </div>
            </div>
            <div className="heading-icon-container">
              <div className="circle-icon primary-circle-icon">
                <i className="fa fa-comments"></i>
              </div>
            </div>
            <div className="heading-icon-container">
              <div className="circle-icon primary-circle-icon">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <div className="heading-icon-container">
              <div className="circle-icon primary-circle-icon">
                <i className="fa fa-users"></i>
              </div>
            </div>
          </div>
          <div className="heading-icon-container">
            <div className="circle-icon outline-circle-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;