import React from "react";
import cmp from "../Assets/company.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Company.css";
const Company = () => {
  return (
    <>
      <div className=" bg-dark p-5 py-3 d-flex justify-content-center  w-100 align-items-center">
        <Row className="container commpany-items">
          <Col md={2}>
            <img src={cmp} alt="company-imgs" />
          </Col>
          <Col md={2}>
            <img src={cmp} alt="company-imgs" />
          </Col>
          <Col md={2}>
            <img src={cmp} alt="company-imgs" />
          </Col>
          <Col md={2}>
            <img src={cmp} alt="company-imgs" />
          </Col>
          <Col md={2}>
            <img src={cmp} alt="company-imgs" />
          </Col>
          <Col md={2}>
            <img src={cmp} alt="company-imgs" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Company;
