import React from "react";
import "./Circle.scss";
const Circle = ({ circleSelected }) => {
  const steps = ["Licenses", "Upgrades", "Bundles", "Extras"];
  return (
    <div className="d-flex circle-container position-absolute">
      {[...Array(4)].map((item, index) => {
        return (
          <div
            key={index}
            className="d-flex align-items-center flex-direction-column circle"
          >
            {index >= 1 && index <= 4 ? (
              <div
                className={`circle-line ${
                  index <= circleSelected ? "circle-selected" : ""
                }`}
              ></div>
            ) : undefined}
            <div className="d-flex flex-column align-items-center">
              <div
                className={`circle-box mx-2 ${
                  index <= circleSelected ? "circle-selected" : ""
                }`}
              ></div>
              <p>{steps[index]}</p>
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
