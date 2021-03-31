import React from "react";
import { Link } from "react-router-dom";
import "./LinkText.scss";
const LinkText = ({ children, innerLink, outerLink }) => {
  return (
    <>
      {innerLink && (
        <Link to={innerLink} className="link-text">
          {children}
        </Link>
      )}
      {outerLink && (
        <a href={outerLink} target="_blank" className="link-text">
          {children}
        </a>
      )}
    </>
  );
};

export default LinkText;
