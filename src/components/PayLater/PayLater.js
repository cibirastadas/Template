import React from "react";
import "./PayLater.scss";
import Arrow from "../../assets/images/arrow.png";
import PayLaterIcon from "../../assets/images/PayLater icon.png";
import Container from "react-bootstrap/Container";
import LinkText from "../LinkText/LinkText";
import Image from "react-bootstrap/Image";
const PayLater = () => {
  return (
    <Container fluid className="p-3 text-center pay-later">
      <p>
        <Image
          src={PayLaterIcon}
          alt="Pay Later"
          className="img-pay-later pr-1"
        />
        Pay Later. Pay in 3 interest-free payments of $10.32 due every 2 weeks,
        starting today.{" "}
        <LinkText innerLink="/">See how Pay Later works.</LinkText>{" "}
        <Image
          src={Arrow}
          alt="Arrow"
          className="pl-xl-5 pl-lg-4 pl-2 img-pay-later"
        />
      </p>
    </Container>
  );
};

export default PayLater;
