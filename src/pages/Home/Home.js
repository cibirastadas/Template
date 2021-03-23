import React, { useState } from "react";
import "./Home.scss";
import Share from "../../assets/images/Social block.png";
import Label from "../../assets/images/label.png";
import PayLater from "../../components/PayLater/PayLater";
import License from "../../components/License/License";
import TransitionBar from "../../components/TransitionBar/TransitionBar";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import ToogleButton from "../../components/ToogleButton/ToogleButton";
import LinkText from "../../components/LinkText/LinkText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  const sections = [
    {
      id: 1,
      topHeader: {
        limited: true,
        recomended: false,
        text: "limited time offer",
      },
      mainHeader: {
        basic: false,
        text: "License",
      },
      text: "1 year Free upgrades and support included",
      note: (
        <>
          <span className="font-weight-bold">NOTE:</span> 1 license can be used
          when moving data between 2 PCs
        </>
      ),
      currenPrice: "39.95",
      previousPrice: "49.95",
      offer: (
        <>
          or <span className="font-weight-bold">Pay Later </span>
          <LinkText innerLink="/">$13.32 x 3 payments</LinkText>
        </>
      ),
      btnName: "Select",
      selected: false,
      view: 1,
    },
    {
      id: 2,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Upgrade only",
      },
      text: "Perpetual software license, lifetime support and upgrades",
      note: <LinkText innerLink="/">Why upgrade?</LinkText>,
      currenPrice: "39.95",
      previousPrice: "49.95",
      offer: (
        <>
          or <span className="font-weight-bold">Pay Later </span>
          <LinkText innerLink="/">$13.32 x 3 payments</LinkText>
        </>
      ),
      btnName: "Select",
      selected: false,
      view: 1,
    },
    {
      id: 3,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Technical license",
      },
      text: "Add backup, deduplication and Cloud support",
      note: (
        <>
          <span className="font-weight-bold">Whats included: </span>
          <LinkText innerLink="/">Sync2</LinkText>,{" "}
          <LinkText innerLink="/">Duplicate Remover</LinkText>,{" "}
          <LinkText innerLink="/">Safe PST Backup</LinkText>,{" "}
          <LinkText innerLink="/">Sync2 Cloud</LinkText>
        </>
      ),
      currenPrice: "39.95",
      previousPrice: "49.95",
      offer: (
        <>
          or <span className="font-weight-bold">Pay Later </span>
          <LinkText innerLink="/">$13.32 x 3 payments</LinkText>
        </>
      ),
      btnName: "Select",
      selected: false,
      view: 1,
    },
    {
      id: 4,
      topHeader: {
        limited: false,
        recomended: true,
        text: "Recomended",
      },
      mainHeader: {
        basic: false,
        text: "Upgrade & Support Lifetime",
      },
      text: "Perpetual software license, lifetime support and upgrades",
      note: <LinkText innerLink="/">Why Lifetime upgrade?</LinkText>,
      currenPrice: "39.95",
      previousPrice: "49.95",
      offer: "",
      btnName: "Add to Cart",
      selected: false,
      view: 2,
    },
    {
      id: 5,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Upgrade & Support Next Year",
      },
      text: "Add Outlook configuration, tune up and problem fixing",
      note: <LinkText innerLink="/">Why Our Support is Better?</LinkText>,
      currenPrice: "24.95",
      previousPrice: "49.95",
      offer: "",
      btnName: "Add to Cart",
      selected: false,
      view: 2,
    },
    {
      id: 6,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Free Support 1st Year",
      },
      text: "Perpetual software license, lifetime support and upgrades",
      note: "",
      currenPrice: "0.00",
      previousPrice: "49.95",
      offer: "",
      btnName: "Selected",
      selected: true,
      view: 2,
    },
    {
      id: 7,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: false,
        text: "Sync2 + 4 Bundle",
      },
      text: "Add backup, deduplication and Cloud support",
      note: (
        <>
          <span className="font-weight-bold">What's included:</span> Sync2,
          Duplicate Remover, Safe PST Backup, Sync2 Cloud
        </>
      ),
      currenPrice: "10.00",
      previousPrice: "",
      offer: "",
      btnName: "Add to Cart",
      selected: false,
      view: 3,
    },
    {
      id: 8,
      topHeader: {
        limited: false,
        recomended: true,
        text: "Recomended",
      },
      mainHeader: {
        basic: true,
        text: '"All you can eat" Bundle',
      },
      text: "Add backup, deduplication and Cloud support",
      note: (
        <>
          <span className="font-weight-bold">What's included:</span>{" "}
          <LinkText innerLink="/">Sync2 plus 10 utilities</LinkText>
        </>
      ),
      currenPrice: "",
      previousPrice: "",
      offer: "",
      btnName: "Remove",
      selected: false,
      view: 3,
    },
    {
      id: 9,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Outlook Performance Tune up",
      },
      text: "Add backup, deduplication and Cloud support",
      note: (
        <>
          <span className="font-weight-bold">What's included:</span> Sync2,
          Duplicate Remover, Safe PST Backup, Sync2 Cloud"
        </>
      ),
      currenPrice: "10.00",
      previousPrice: "",
      offer: "",
      btnName: "Add to Cart",
      selected: false,
      view: 4,
    },
    {
      id: 10,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Sync2 + 4 Bundle Lifetime",
      },
      text: "Add backup, deduplication and Cloud support",
      note: (
        <>
          <span className="font-weight-bold">What's included:</span> Sync2,
          Duplicate Remover, Safe PST Backup, Sync2 Cloud"
        </>
      ),
      currenPrice: "39.95",
      previousPrice: "49.95",
      offer: "or Pay Later $13.32 x 3 payments",
      className: "license-gray",
      btnName: "Add to Cart",
      selected: false,
      view: 4,
    },
    {
      id: 11,
      topHeader: {
        limited: false,
        recomended: false,
        text: "",
      },
      mainHeader: {
        basic: true,
        text: "Sync2 + 4 Bundle Lifetime",
      },
      text: "Add backup, deduplication and Cloud support",
      note: (
        <>
          <span className="font-weight-bold">What's included:</span> Sync2,
          Duplicate Remover, Safe PST Backup, Sync2 Cloud"
        </>
      ),
      currenPrice: "39.95",
      previousPrice: "49.95",
      offer: "or Pay Later $13.32 x 3 payments",
      btnName: "Add to Cart",
      selected: false,
      view: 4,
    },
  ];
  const titles = [
    "Choose Sync2 License",
    "Select Upgrade or Lifetime",
    "Bundle and Save",
    "Extras",
  ];
  const [licenses, setLicenses] = useState(sections);
  const [transitionView, setTransitionView] = useState(1);
  const [circleSelected, setCircleSelected] = useState(0);

  const handleSelectedSection = (id) => {
    const sectionSelected = licenses.map((item) =>
      item.id === id ? { ...item, selected: true } : item
    );
    setLicenses(sectionSelected);
  };
  const handleTransitionNext = () => {
    setCircleSelected((prev) => {
      if (prev == 3) {
        return prev;
      }
      return prev + 1;
    });
    setTransitionView((prev) => {
      if (prev == 4) {
        return prev;
      }
      return prev + 1;
    });
  };
  const handleTransitionBack = () => {
    setTransitionView((prev) => {
      if (prev == 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <>
      <PayLater />
      <Container fluid className="home-licenses-container py-5 px-0 ">
        <Layout license={true}>
          <Row className="home-content">
            <Col
              xl="auto"
              lg="auto"
              className="share-container d-xl-flex pl-0 justify-content-start "
            >
              <div className="share-img-container">
                <Image
                  src={Share}
                  alt="Share Links"
                  className="responsive-img-share"
                />
              </div>
            </Col>
            <Col className="license-container">
              <Row className="license-text-container">
                <Col
                  className=" d-flex flex-column justify-content-between "
                  xl={12}
                >
                  <p className="license-main-title text-center mb-1 font-weight-bold">
                    {titles[transitionView - 1]}
                  </p>
                  <p className="text-center mb-5 ">
                    {transitionView == 1 ? (
                      <>
                        <Image
                          src={Label}
                          alt="Label"
                          className="label-img pr-3"
                        />
                        Every user account (on each workstation) need an
                        individuallicense
                      </>
                    ) : (
                      <>
                        <i
                          className="fas fa-tag"
                          style={{ color: "white" }}
                        ></i>
                        This Lifetime there is no need for yearly updates,
                        support is Free
                      </>
                    )}
                  </p>
                  {transitionView >= 3 && (
                    <div className="position-absolute skip-button-container">
                      <ToogleButton secondary={true}>Skip</ToogleButton>
                    </div>
                  )}
                </Col>
              </Row>
              <Row className="list-licenses d-flex">
                {licenses.map((item, index) => {
                  if (item.view == transitionView) {
                    return (
                      <Col
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        key={item.id}
                        className={`license-col ${
                          item.topHeader.limited || item.topHeader.recomended
                            ? "license-height"
                            : ""
                        }`}
                      >
                        <License
                          item={item}
                          handleSelectedSection={handleSelectedSection}
                        />
                      </Col>
                    );
                  }
                })}
              </Row>
            </Col>
          </Row>
        </Layout>
      </Container>
      <TransitionBar
        handleTransitionNext={handleTransitionNext}
        handleTransitionBack={handleTransitionBack}
        transitionView={transitionView}
        circleSelected={circleSelected}
      />
      <PrivacyPolicy />
    </>
  );
};

export default Home;
