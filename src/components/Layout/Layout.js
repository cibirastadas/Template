import React from "react";
import "./Layout.scss";
import Container from "react-bootstrap/Container";
const Layout = ({ small, children }) => {
  return (
    <Container
      className={`container-big ${small ? "container-small" : ""}`}
      fluid
    >
      {children}
    </Container>
  );
};

export default Layout;
