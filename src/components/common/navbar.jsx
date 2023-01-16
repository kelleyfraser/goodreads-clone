import React from "react";

function Navbar() {
  return (
    <div className="navbar-section">
      <a className="navbar-link">Home</a>
      <a className="navbar-link">My Books</a>
      <a className="navbar-link">Browse <span>&#9660;</span></a>
      <a className="navbar-link">Community <span>&#9660;</span></a>
    </div>
  );
}

export default Navbar;

