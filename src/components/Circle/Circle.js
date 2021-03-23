import React from "react";
import "./Circle.scss";
const Circle = ({ transitionView }) => {
  const steps = ["Licenses", "Upgrades", "Bundles", "Extras"];
  return (
    <div className="d-flex circle-container position-absolute ">
      {[...Array(4)].map((item, index) => {
        return (
          <div key={index} className="circle">
            <div className="steps-box ">
              <div className="circle-box d-flex align-items-center ">
                <div
                  className={`round-box position-relative mx-2 ${
                    index <= transitionView - 1 ? "circle-selected" : ""
                  }`}
                >
                  <p className="step position-absolute d-none d-md-block">
                    {steps[index]}
                  </p>
                </div>
                {index <= 2 && (
                  <div
                    className={`circle-line  d-none d-md-block ${
                      index <= transitionView - 2 ? "circle-selected " : ""
                    }`}
                  ></div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
