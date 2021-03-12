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
import Layout from "../Layout/Layout";
const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy-container py-5 px-0" fluid>
      <Layout small={true}>
        <Row className="">
          <Col xl={7} lg={7} md={12} sm={12} xs={12}>
            <p>
              No commitment. Privacy Policy and System Requirements. Software
              you can trust. Licensing (EULA)
            </p>
          </Col>
          <Col
            xl={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
            md={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            xs={{ span: 12, order: 3 }}
            className=""
          >
            <div className="d-flex align-items-center money-back-guarantee-text pt-4">
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
              able to make our software work on your computer during 14-day
              money back performance guarantee period after purchase.
            </p>
            <p className="font-weight-bold">
              ** Product Bundles are not refundable
            </p>
            <LinkText innerLink="/">Refund policy</LinkText>
            <div className="img-credit-cards-container">
              <Image
                src={cards}
                alt="cards"
                className="img-privacy-responsive pt-5"
              />
            </div>
          </Col>
          <Col
            xl={{ span: 6, order: 3 }}
            lg={{ span: 6, order: 3 }}
            md={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
            className="d-flex  justify-content-lg-end pt-4"
          >
            <div className="img-microsoft-container">
              <Image
                src={badge1}
                alt="Microsoft"
                className="img-privacy-responsive"
              />
              <Image
                src={badge2}
                alt="Money Back Guarantee"
                className="img-privacy-responsive pl-5"
              />
            </div>
          </Col>
        </Row>
      </Layout>
    </Container>
  );
};

export default PrivacyPolicy;
