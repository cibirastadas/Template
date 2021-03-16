import React from "react";
import "./Circle.scss";
const Circle = ({ circleSelected }) => {
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
                    index <= circleSelected ? "circle-selected" : ""
                  }`}
                >
                  <p className="step position-absolute d-none d-md-block">
                    {steps[index]}
                  </p>
                </div>
                {index <= 2 && (
                  <div
                    className={`circle-line  d-none d-md-block ${
                      index <= circleSelected - 1 ? "circle-selected " : ""
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
{
  /* <div key={index} className="circle">
            <div>
              <div className="d-flex align-items-center justify-content-center">
                {index >= 1 && index <= 4 ? (
                  <div
                    className={`circle-line ${
                      1 == circleSelected ? "circle-selected" : ""
                    }`}
                  ></div>
                ) : undefined}
                <div
                  className={`circle-box mx-3 ${
                    1 == circleSelected ? "circle-selected" : ""
                  }`}
                >
                  <div className="text-right">{steps[index]}</div>
                </div>
              </div>
            </div>
          </div> */
}
export default Circle;
