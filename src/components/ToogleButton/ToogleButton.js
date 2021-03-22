import React from "react";
import "./ToogleButton.scss";
import Button from "react-bootstrap/Button";
const ToogleButton = ({
  children,
  action,
  primary,
  secondary,
  success,
  white,
  btnDisabled,
  id,
}) => {
  return (
    <Button
      className={`rounded-pill py-2 px-4 ${
        !white ? "border-0" : ""
      } font-weight-bold ${!white ? "text-uppercase" : ""} ${
        primary
          ? "toogle-button-primary"
          : secondary
          ? "toogle-button-secondary"
          : success
          ? "toogle-button-success"
          : white
          ? "toogle-button-white"
          : ""
      }${btnDisabled ? " disabled-button" : ""}`}
      disabled={btnDisabled && btnDisabled}
      onClick={id ? () => action(id) : action}
    >
      {children}
    </Button>
  );
};

export default ToogleButton;
