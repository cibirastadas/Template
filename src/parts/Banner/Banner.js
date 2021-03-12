import React from "react";

import "./Banner.scss";

import Container from "react-bootstrap/Container";
import Layout from "../../components/Layout/Layout";
const Banner = () => {
  return (
    <Container fluid className="banner fixed-top px-0">
      <Layout>
        <p className="text-center text-md-left">Top banner</p>
      </Layout>
    </Container>
  );
};

export default Banner;
