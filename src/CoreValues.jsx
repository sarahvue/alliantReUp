import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "./assets/laptop.jpg";

const values = [
  "We treat others with respect and dignity.",
  "We retain and hire the finest people.",
  "We strive to be exceptional.",
  "We ignite creative collaboration.",
];

export function CoreValues() {
  return (
    <div className="container my-4">
      <div className="row g-4 justify-content-center">
        {values.map((value, index) => (
          <div
            className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
            key={index}
          >
            <div
              className="card d-flex flex-column w-100"
              style={{ minHeight: "100%" }}
            >
              <img
                src={laptop}
                className="card-img-top img-fluid"
                alt={`Core value ${index + 1}`}
              />
              <div className="card-body">
                <p className="card-text text-center">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
