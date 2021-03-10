import React from "react";
import "./PrivacyPolicy.scss";
import LinkText from "../LinkText/LinkText";
import Container from "react-bootstrap/Container";
import cards from "../../assets/images/cards.png";
import badge1 from "../../assets/images/badge 1.png";
import badge2 from "../../assets/images/badge 2.png";
import shield from "../../assets/images/shield.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy-container py-5" fluid>
      <Row>
        <Col xl={6} className="">
          <p className="pb-3">
            No commitment. Privacy Policy and System Requirements. Software you
            can trust. Licensing (EULA)
          </p>
          <div className="d-flex align-items-center money-back-guarantee-text">
            <Image
              src={shield}
              alt="Protective Shield"
              className="img-shield"
            />
            <p className="money-back-guarantee text-center pl-3 font-weight-bold">
              Money Back Guarantee
            </p>
          </div>
          <p className="">
            * We are eager to make sure that you will be really happy with
            purchase. We will refund ** your money if our technicians are not
            able to make our software work on your computer during 14-day money
            back performance guarantee period after purchase.
          </p>
          <p className="font-weight-bold">
            ** Product Bundles are not refundable
          </p>
          <LinkText innerLink="/">Refund policy</LinkText>
          <Image src={cards} fluid alt="cards" className="pt-5" />
        </Col>
        <Col xl={6} className="d-flex align-items-center justify-content-end">
          <div className="img-container d-flex justify-content-between">
            <Image src={badge1} fluid alt="Microsoft" />
            <Image src={badge2} fluid alt="Money Back Guarantee" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
