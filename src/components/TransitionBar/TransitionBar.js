import React from "react";
import "./TransitionBar.scss";
import ToogleButton from "../ToogleButton/ToogleButton";
import Circle from "../Circle/Circle";
import Container from "react-bootstrap/Container";
const TransitionBar = ({
  handleTransitionNext,
  handleTransitionBack,
  circleSelected,
}) => {
  return (
    <Container fluid className="transition-container py-4">
      <Container
        fluid
        className="transition-inner-container d-flex justify-content-between"
      >
        <ToogleButton action={handleTransitionBack} secondary={true}>
          Back
        </ToogleButton>
        <Circle circleSelected={circleSelected} />
        <ToogleButton action={handleTransitionNext} primary={true}>
          Next
        </ToogleButton>
      </Container>
    </Container>
  );
};

export default TransitionBar;
