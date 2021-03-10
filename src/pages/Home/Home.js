import React, { useEffect, useState } from "react";
import "./Home.scss";
import Label from "../../assets/images/label.png";
import PayLater from "../../components/PayLater/PayLater";
import License from "../../components/License/License";
import ShareLinks from "../../components/ShareLinks/ShareLinks";
import TransitionBar from "../../components/TransitionBar/TransitionBar";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import ToogleButton from "../../components/ToogleButton/ToogleButton";
import LinkText from "../../components/LinkText/LinkText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Home = () => {

  const [transitionView, setTransitionView] = useState(1);
  const [circleSelected, setCircleSelected] = useState(0);
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
  const handleSelectedSection = () => {
    console.log("veikia");
  };
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

  /*   useEffect(() => {
    const handleScrollChange = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []); */

  return (
    <>
      {console.log(window.tadas)}
      <PayLater />
      <Container fluid className="home-licenses-container py-5">
        <Row>
          <Col xl={2} className="d-flex justify-content-end align-items-start">
            <ShareLinks />
          </Col>
          <Col xl={10}>
            <Row>
              <Col className="d-flex flex-column" xl={11}>
                <p
                  className="text-center mb-1 font-weight-bold"
                  style={{ fontSize: "2rem" }}
                >
                  {titles[transitionView - 1]}
                </p>
                <p className="text-center mb-4 ">
                  {transitionView == 1 ? (
                    <>
                      <Image src={Label} alt="Label" className="label-img" />
                      Every user account (on each workstation) need an
                      individuallicense
                    </>
                  ) : (
                    <>
                      <i className="fas fa-tag" style={{ color: "white" }}></i>
                      This Lifetime there is no need for yearly updates, support
                      is Free
                    </>
                  )}
                </p>
              </Col>
              {transitionView >= 3 && (
                <Col xl={1} className="p-0">
                  <ToogleButton secondary={true}>Skip</ToogleButton>
                </Col>
              )}
            </Row>
            <Row>
              {sections.map((item) => {
                if (item.view == transitionView) {
                  return (
                    <Col
                      xl={4}
                      key={item.id}
                      className="d-flex align-items-start"
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
      </Container>
      <TransitionBar
        handleTransitionNext={handleTransitionNext}
        handleTransitionBack={handleTransitionBack}
        circleSelected={circleSelected}
      />
      <PrivacyPolicy />
    </>
  );
};

export default Home;
