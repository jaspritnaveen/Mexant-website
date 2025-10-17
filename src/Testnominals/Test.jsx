import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { BsQuote } from "react-icons/bs";
import testperson from "../Assets/testperson.png";
import "./Test.css";
import Company from "../Companyname/Company";

const testimonials = [
  {
    name: "George Lopez",
    role: "Crypto Manager",
    text: "Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.",
    img: testperson,
  },
  {
    name: "Maria Johnson",
    role: "Marketing Lead",
    text: "Sed auctor justo sed magna cursus, non efficitur nunc egestas. Integer non enim sit amet neque lacinia dapibus ut at mauris. Donec consequat risus id sapien laoreet cursus.",
    img: testperson,
  },
  {
    name: "Daniel Craig",
    role: "Product Designer",
    text: "Aliquam erat volutpat. Praesent in facilisis lorem. In ac fringilla leo. Suspendisse potenti. Cras feugiat, nisl a porttitor ultricies, risus justo faucibus nulla.",
    img: testperson,
  },
];

const Test = () => {
  return (
    <>
      <section className="testimonial-section p-3 p-md-5">
        <div className="text-center mb-5">
          <h6 className="text-danger fw-semibold">TESTIMONIALS</h6>
          <h2 className="fw-bold">What They Say</h2>
        </div>

        <Carousel
          data-bs-theme="light"
          interval={4000}
          indicators
          controls={false}
          className="testimonial-carousel"
        >
          {testimonials.map((item, i) => (
            <Carousel.Item key={i}>
              <Row className="justify-content-center align-items-center testimonial-card mx-0">
                <Col
                  xs={12}
                  md={8}
                  lg={7}
                  className="d-flex flex-column justify-content-center text-md-start text-center p-4"
                >
                  <div className="quote-icon mb-3">
                    <BsQuote />
                  </div>
                  <p className="testimonial-text fst-italic">{item.text}</p>
                  <h5 className="fw-bold mt-3">{item.name}</h5>
                  <p className="text-success small mb-0">{item.role}</p>
                </Col>

                <Col xs={12} md={4} lg={3} className="text-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="testimonial-img img-fluid rounded-3"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <Company />
    </>
  );
};

export default Test;
