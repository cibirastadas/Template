import React, { useRef } from "react";
import "./TransitionBar.scss";
import ToogleButton from "../ToogleButton/ToogleButton";
import Layout from "../Layout/Layout";
import Circle from "../Circle/Circle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
const TransitionBar = ({
  handleTransitionNext,
  handleTransitionBack,
  circleSelected,
  transitionView,
}) => {
  /* const scrollToRef = (ref) => ref.current.scrollIntoView(); */
  /*   const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const myRef = useRef();
  const executeScroll = () => {
    console.log(myRef.pageYOffset);
    scrollToRef(myRef);
  }; */
  return (
    <Container
      fluid
      id="transition"
      className="transition-container d-flex align-items-center px-0 "
    >
      <Layout small={true}>
        <Row className="transition-inner-container d-flex justify-content-center position-relative">
          <Col xl={12} className="d-flex justify-content-between ">
            {transitionView != 1 && (
              <HashLink
                to="/#transition"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                <ToogleButton
                  action={handleTransitionBack}
                  secondary={true}
                  as={HashLink}
                >
                  Back
                </ToogleButton>
              </HashLink>
            )}
            <Circle circleSelected={circleSelected} />
            <div className="ml-auto" /* ref={myRef} */>
              <HashLink
                to="/#transition"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                <ToogleButton action={handleTransitionNext} primary={true}>
                  Next
                </ToogleButton>
              </HashLink>
            </div>
            {/*             <ToogleButton action={executeScroll} primary={true}>
              TEST
            </ToogleButton> */}
          </Col>
        </Row>
      </Layout>
    </Container>
  );
};

export default TransitionBar;
