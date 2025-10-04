import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Service.css";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsCloudFill } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BsVimeo } from "react-icons/bs";
import Servicebutton from "../Servicebutton/Servicebutton";

const Service = () => {
  return (
    <>
      
      <Container>
        <Row>
          <Col xs={12} md={6} className="p-5">
            <Row className="shadow-lg p-3">
              <Col xs={2} className="icon-part">
                <i>
                  <BsBriefcaseFill />
                </i>
              </Col>
              <Col xs={10}>
                <h5>CSS Templates</h5>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="p-5">
            <Row className="shadow-lg p-3">
              <Col xs={2} className="icon-part">
                <i>
                  <BsCloudFill />
                </i>
              </Col>
              <Col xs={10}>
                <h5>CSS Templates</h5>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className="p-5">
            <Row className="shadow-lg p-3">
              <Col xs={2} className="icon-part">
                <i>
                  <BsFillLightningFill />
                </i>
              </Col>
              <Col xs={10}>
                <h5>CSS Templates</h5>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="p-5">
            <Row className="shadow-lg p-3">
              <Col xs={2} className="icon-part">
                <i>
                  <BsFillSendFill />
                </i>
              </Col>
              <Col xs={10}>
                <h5>CSS Templates</h5>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className="p-5">
            <Row className="shadow-lg p-3">
              <Col xs={2} className="icon-part">
                <i>
                  <BsHandThumbsUpFill />
                </i>
              </Col>
              <Col xs={10}>
                <h5>CSS Templates</h5>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="p-5">
            <Row className="shadow-lg p-3">
              <Col xs={2} className="icon-part">
                <i>
                  <BsVimeo />
                </i>
              </Col>
              <Col xs={10}>
                <h5>CSS Templates</h5>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

        <Servicebutton/>
    </>
  );
};

export default Service;
