import React from "react";
import "./TransitionBar.scss";
import ToogleButton from "../ToogleButton/ToogleButton";
import Layout from "../Layout/Layout";
import Circle from "../Circle/Circle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TransitionBar = ({
  handleTransitionNext,
  handleTransitionBack,
  circleSelected,
}) => {
  return (
    <Container fluid className="transition-container py-4 px-0">
      <Layout small={true}>
        <Row className="transition-inner-container d-flex justify-content-center">
          <Col xl={12} className="d-flex justify-content-between ">
            {circleSelected >= 1 && (
              <ToogleButton action={handleTransitionBack} secondary={true}>
                Back
              </ToogleButton>
            )}
            <Circle circleSelected={circleSelected} />
            <div className="ml-auto">
              <ToogleButton action={handleTransitionNext} primary={true}>
                Next
              </ToogleButton>
            </div>
          </Col>
        </Row>
      </Layout>
    </Container>
  );
};

export default TransitionBar;
