import React from "react";
import Button from "react-bootstrap/Button";

const Servicebutton = () => {
  return (
    <>
      <div className="service-two">
        <div className="container d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center text-center text-md-start">
          <h2 className="text-light mb-4 mb-md-0">
            <span className="text-success"> Business </span>Solutions and <br />
            <span className="text-danger">Crypto</span> Investments
          </h2>

          <div className="d-flex flex-column flex-md-row gap-2 gap-md-5">
            <Button variant="success" size="sm">
              Discover More
            </Button>
            <Button variant="danger" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicebutton;
