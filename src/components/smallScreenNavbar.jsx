import React from "react";

function SmallScreenNavbar() {
  return (
    <div className="under-header-navbar-section">
      <div className="navbar-section">
        <a className=" home-link navbar-link">Home</a>
        <a className="navbar-link">My Books</a>
        <a className="navbar-link">Browse <span>&#9660;</span></a>
        <a className="navbar-link">Community <span>&#9660;</span></a>
      </div>
    </div>
  );
}

export default SmallScreenNavbar;