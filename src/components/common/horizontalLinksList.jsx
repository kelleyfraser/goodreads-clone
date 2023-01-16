import React from "react";

function HorizontalLinksList(props) {
  return (
    <div className="horizontal-links-list">
      <a className="primary-link">{props.links[0]}</a>
      <span> &#183; </span>
      <a className="primary-link">{props.links[1]}</a>
      <span> &#183; </span>
      <a className="primary-link">{props.links[2]}</a>
    </div>
  );
}

export default HorizontalLinksList;