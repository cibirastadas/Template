import React, { useState, useEffect } from "react";
import "./Footer.scss";
import TeamLogo from "../../assets/images/logo.png";
import InputArrowButton from "../../components/InputArrowButton/InputArrowButton";
import Container from "react-bootstrap/Container";
import FooterrBottom from "./FooterBottom";
import LinkButton from "../../components/LinkButton/LinkButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Footer = () => {
  const [visible, setVisible] = useState(false);
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
        <Container fluid className="footer-inner">
          <Row>
            <Col className="d-flex px-0" xl={9}>
              <div className="d-flex ">
                <Image
                  src={TeamLogo}
                  alt="4Team logo"
                  fluid
                  className="team-corporation-image"
                />
                <div className="pl-4">
                  {corporationInformation.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className={`pb-2 ${
                          index == 0 ? "font-weight-bold" : ""
                        }`}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="footer-numbers pl-5">
                {contacts.map((item) => {
                  return (
                    <p key={item.id} className="pb-2">
                      <span className="font-weight-bold">{item.name}:</span>{" "}
                      {item.number}
                    </p>
                  );
                })}
              </div>
            </Col>
            <Col xl={3}>
              <InputArrowButton
                InputLabel={"Keep me posted on the latest news"}
                name={"email"}
                InputType="email"
              />
              <div className="d-flex justify-content-center">
                {buttons.map((item) => {
                  return (
                    <LinkButton key={item.id} innerLink={item.innerLink}>
                      {item.name}
                    </LinkButton>
                  );
                })}
              </div>
            </Col>
          </Row>
          <FooterrBottom />
        </Container>
      </Container>
    </>
  );
};

export default Footer;
