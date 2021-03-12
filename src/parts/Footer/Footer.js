import React, { useState } from "react";
import "./Footer.scss";
import LazyLoad from "react-lazyload";
import TeamLogo from "../../assets/images/logo.png";
import Layout from "../../components/Layout/Layout";
import InputArrowButton from "../../components/InputArrowButton/InputArrowButton";
import Container from "react-bootstrap/Container";
import FooterrBottom from "./FooterBottom";
import LinkButton from "../../components/LinkButton/LinkButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Footer = () => {
  const corporationInformation = [
    "4Team Corporation",
    "5645 Coral Ridge Dr #211",
    "Coral Springs",
    "FL 33076, USA",
  ];
  const buttons = [
    {
      id: 1,
      name: "About Us",
      innerLink: "/about",
    },
    {
      id: 2,
      name: "Privacy",
      innerLink: "/privacy",
    },
    {
      id: 3,
      name: "Terms",
      innerLink: "/terms",
    },
  ];
  const contacts = [
    {
      id: 1,
      name: "USA",
      number: "+1 (954) 796-8161",
    },
    {
      id: 2,
      name: "UK",
      number: "+44 20 3371 8464",
    },
    {
      id: 3,
      name: "Canada",
      number: "+1 647 477-3340",
    },
    {
      id: 4,
      name: "France",
      number: "+33 1 86 26 42",
    },
    {
      id: 5,
      name: "Skype",
      number: "teamcorporation",
    },
    {
      id: 6,
      name: "Fax",
      number: "+1 (954) 780-3795",
    },
  ];

  return (
    <>
      <Container fluid className="pt-5 pb-2 footer px-0">
        <Layout>
          <Row className="d-flex">
            <Col className="d-flex " xl={3} lg={4} md={6} sm={12}>
              <div className="d-flex ">
                <LazyLoad
                  height={160}
                  once
                  className="corporation-image-container"
                >
                  <Image
                    src={TeamLogo}
                    alt="4Team logo"
                    className="img-corporation"
                  />
                </LazyLoad>
                <div className="corporation-container pl-4">
                  {corporationInformation.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className={`${index == 0 ? " font-weight-bold" : ""}`}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col
              xl={5}
              lg={3}
              md={6}
              sm={12}
              className="d-flex justify-content-lg-start justify-content-md-end pt-3 pt-md-0 "
            >
              <div className="footer-numbers ">
                {contacts.map((item) => {
                  return (
                    <p key={item.id} className="">
                      <span className="font-weight-bold">{item.name}:</span>{" "}
                      {item.number}
                    </p>
                  );
                })}
              </div>
            </Col>
            <Col
              xl={4}
              lg={5}
              md={12}
              sm={12}
              className="d-flex flex-lg-column flex-md-row flex-column justify-content-between pt-3 pt-lg-0"
            >
              <InputArrowButton
                InputLabel={"Keep me posted on the latest news"}
                name={"email"}
                InputType="email"
              />
              <div className="d-flex justify-content-md-end justify-content-start align-items-center">
                {buttons.map((item) => {
                  return (
                    <LinkButton key={item.id} innerLink={item.innerLink}>
                      {item.name}
                    </LinkButton>
                  );
                })}
              </div>
            </Col>
            <Col xl={12}>
              <FooterrBottom />
            </Col>
          </Row>
        </Layout>
      </Container>
    </>
  );
};

export default Footer;
