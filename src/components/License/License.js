import React from "react";
import "./License.scss";
import LinkButton from "../../components/LinkButton/LinkButton";
import Card from "react-bootstrap/Card";
import ToogleButton from "../ToogleButton/ToogleButton";

const License = ({ item, handleSelectedSection }) => {
  return (
    <>
      <Card
        className={`license-card border-0  ${
          !item.topHeader.text ? "without-header" : ""
        } ${item.selected ? "license-disabled" : ""}`}
      >
        {item.topHeader.text && (
          <Card.Header
            /* Galiu naudoti ir ternary, jei nera rocomended vadinasi bus limited */
            className={`py-0 text-center text-white text-uppercase font-weight-bold top-header  ${
              item.topHeader.limited
                ? `top-header-limited`
                : item.topHeader.recomended
                ? `top-header-recomended`
                : ""
            }`}
          >
            {item.topHeader.text}
          </Card.Header>
        )}
        <Card.Header
          className={`d-flex align-items-center text-white p-3 font-weight-bold ${
            item.currenPrice == "0.00" ? "d-flex justify-content-between " : ""
          }${
            item.mainHeader.basic
              ? "main-header-basic"
              : "main-header-not-basic"
          }`}
        >
          {item.mainHeader.text}
          {/* Arba naudoti icon true */}
          {item.currenPrice == "0.00" && (
            <span>
              <i className="fas fa-gift"></i>
            </span>
          )}
        </Card.Header>
        <Card.Body className="license-body d-flex flex-column justify-content-between ">
          <div
            className={`license-text-block ${
              !item.currenPrice ? "license-text-different-height" : ""
            }`}
          >
            <Card.Text>{item.text}</Card.Text>
            {item.note && <Card.Text>{item.note}</Card.Text>}
          </div>
          {item.currenPrice ? (
            <div className="current-price-block">
              <div className="d-flex align-items-center">
                {item.currenPrice && (
                  <p
                    className={`font-weight-bold align-self-end ${
                      item.topHeader.limited
                        ? "current-price-limited"
                        : "current-price-not-limited"
                    }`}
                  >
                    ${item.currenPrice}
                  </p>
                )}
                {item.previousPrice && (
                  <p
                    className="font-weight-bold text-bottom align-self-end pb-2 pl-3"
                    style={{ fontSize: "1.2rem" }}
                  >
                    ${item.previousPrice}
                  </p>
                )}
              </div>
              {item.offer && <p>{item.offer}</p>}
            </div>
          ) : undefined}
          <div className="text-center mt-2">
            <ToogleButton
              btnDisabled={item.selected}
              white={true}
              action={handleSelectedSection}
              id={item.id}
            >
              {item.btnName}
            </ToogleButton>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default License;
