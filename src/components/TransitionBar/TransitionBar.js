import React from "react";
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
  transitionView,
}) => {
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
            <Circle transitionView={transitionView} />
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
          </Col>
        </Row>
      </Layout>
    </Container>
  );
};

export default TransitionBar;
