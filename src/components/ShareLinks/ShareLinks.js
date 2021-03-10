import React from "react";
import "./ShareLinks.scss";
const ShareLinks = () => {
  return (
    <div className="d-flex flex-column align-items-center p-2 share-links">
      <p className="font-weight-bold text-uppercase">Share</p>
      <i className="fab fa-facebook-f p-3 text-primary"></i>
      <i className="fas fa-envelope p-3 text-primary"></i>
      <i className="fab fa-linkedin-in p-3 text-primary"></i>
      <i className="fas fa-plus p-3"></i>
    </div>
  );
};

export default ShareLinks;
