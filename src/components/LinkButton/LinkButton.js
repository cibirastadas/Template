import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";
import Button from "react-bootstrap/Button";
const LinkButton = ({ children, innerLink }) => {
  return (
    <Button
      as={Link}
      to={innerLink}
      className="rounded-pill mx-2 shadow-none border-0 font-weight-bold text-uppercase link-button"
    >
      {children}
    </Button>
  );
};

export default LinkButton;
