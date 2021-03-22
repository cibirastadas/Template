import React from "react";
import "./Layout.scss";
import Container from "react-bootstrap/Container";
const Layout = ({ small, children,license }) => {
  return (
    <Container
      className={`container-big ${small ? "container-small" : ""} ${
        license ? "container-license" : ""
      }`}
      fluid
    >
      {children}
    </Container>
  );
};

export default Layout;
