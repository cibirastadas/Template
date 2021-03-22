import React from "react";

import "./Banner.scss";

import Container from "react-bootstrap/Container";
import Layout from "../../components/Layout/Layout";
const Banner = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center banner fixed-top px-0 "
    >
      <Layout>
        <p className="text-center text-md-left ">Top Banner</p>
      </Layout>
    </Container>
  );
};

export default Banner;
