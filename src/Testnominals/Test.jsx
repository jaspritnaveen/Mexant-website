import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { BsGem } from "react-icons/bs";
import testperson from "../Assets/testperson.png";
import "./Test.css";
import Company from "../Companyname/Company";

const Test = () => {
  return (
    <>
      <div className="test p-3 p-md-5">
        <Row className="text-center mb-4">
          <h5 className="text-danger">Testimonials</h5>
          <h2>What They Say</h2>
        </Row>

        <Row>
          <Carousel data-bs-theme="dark" className="p-0 p-md-4">
            {/* Slide 1 */}
            <Carousel.Item>
              <Row className="justify-content-center align-items-center mx-0">
                <Col
                  xs={12}
                  md={6}
                  className="test-left text-md-start text-center"
                >
                  <span className="icon">
                    <BsGem />
                  </span>
                  <p>
                    Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
                    Phasellus in tristique magna, ac gravida leo. Integer sed
                    lorem sapien. Ut viverra mauris sed lobortis commodo.
                  </p>

                  <h4>George Lopez</h4>
                  <span>Crypto Manager</span>
                </Col>

                <Col xs={12} md={2} className="text-center mt-4 mt-md-0">
                  <img
                    src={testperson}
                    alt="Testimonial Person"
                    className="img-fluid rounded-circle"
                  />
                </Col>
              </Row>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <Row className="justify-content-center align-items-center mx-0">
                <Col
                  xs={12}
                  md={6}
                  className="test-left text-md-start text-center"
                >
                  <span className="icon">
                    <BsGem />
                  </span>
                  <p>
                    Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
                    Phasellus in tristique magna, ac gravida leo. Integer sed
                    lorem sapien. Ut viverra mauris sed lobortis commodo.
                  </p>

                  <h4>Maria Johnson</h4>
                  <span>Marketing Lead</span>
                </Col>

                <Col xs={12} md={2} className="text-center mt-4 mt-md-0">
                  <img
                    src={testperson}
                    alt="Testimonial Person"
                    className="img-fluid rounded-circle"
                  />
                </Col>
              </Row>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <Row className="justify-content-center align-items-center mx-0">
                <Col
                  xs={12}
                  md={6}
                  className="test-left text-md-start text-center"
                >
                  <span className="icon">
                    <BsGem />
                  </span>
                  <p>
                    Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
                    Phasellus in tristique magna, ac gravida leo. Integer sed
                    lorem sapien. Ut viverra mauris sed lobortis commodo.
                  </p>

                  <h4>Daniel Craig</h4>
                  <span>Product Designer</span>
                </Col>

                <Col xs={12} md={2} className="text-center mt-4 mt-md-0">
                  <img
                    src={testperson}
                    alt="Testimonial Person"
                    className="img-fluid rounded-circle"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>

      <Company />
    </>
  );
};

export default Test;
