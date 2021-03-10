import React from "react";
import "./PayLater.scss";
import Container from "react-bootstrap/Container";
import LinkText from "../LinkText/LinkText";
const PayLater = () => {
  return (
    <Container fluid className="p-3 text-center pay-later">
      <p>
        <i className="fas fa-search" style={{ color: "black" }}></i>Pay Later.
        Pay in 3 interest-free payments of $10.32 due every 2 weeks, starting
        today. <LinkText innerLink="/">See how Pay Later works.</LinkText>{" "}
        <i className="fas fa-search" style={{ color: "black" }}></i>
      </p>
    </Container>
  );
};

export default PayLater;
