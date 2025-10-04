import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import homebg from "../Assets/homebg.png";
import slide1 from "../Assets/slide1.png";
import slide2 from "../Assets/slide2.png";
import "./Home.css";
import Service from "../Service/Service";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Test from "../Testnominals/Test";

const Home = () => {
  return (
    <>
      <div className="car-sec">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={homebg} alt="First slide" />
            <Carousel.Caption className="contents">
              <div>
                <h3>
                  Get <span>ready</span> for your business <br /> & upgrade
                  <span> all aspects</span>
                </h3>
              </div>
              <div className="home-hr ">
                <hr />
                <p>
                  Mexant HTML5 Template is provided for free of charge. This
                  layout is based on Boostrap 5 CSS framework. Anyone can
                  download and edit for any professional website. Thank you for
                  visiting TemplateMo website.
                </p>
              </div>
              <div className="btn-home">
                <Button variant="success" size="sm" className="me-5 px-5">
                  Discover More
                </Button>
                <Button variant="danger" size="sm" className="px-5">
                  Contact Us
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={slide1} alt="First slide" />
            <Carousel.Caption className="contents">
              <div className="btn-home">
                <h3>
                  Get <span>ready</span> for your business <br /> & upgrade
                  <span> all aspects</span>
                </h3>
              </div>
              <div className="home-hr ">
                <hr />
                <p>
                  Mexant HTML5 Template is provided for free of charge. This
                  layout is based on Boostrap 5 CSS framework. Anyone can
                  download and edit for any professional website. Thank you for
                  visiting TemplateMo website.
                </p>
              </div>
              <div className="btn-home">
                <Button variant="success" className="me-5 px-5">
                  Discover More
                </Button>
                <Button variant="danger" className=" px-5">
                  Contact Us
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="First slide" />
            <Carousel.Caption className="contents">
              <div>
                <h3>
                  Get <span>ready</span> for your business  <br /> & upgrade
                  <span> all aspects</span>
                </h3>
              </div>
              <div className="home-hr ">
                <hr />
                <p>
                  Mexant HTML5 Template is provided for free of charge. This
                  layout is based on Boostrap 5 CSS framework. Anyone can
                  download and edit for any professional website. Thank you for
                  visiting TemplateMo website.
                </p>
              </div>
              <div className="btn-home">
                {" "}
                <Button variant="success" className="me-5 px-5">
                  Discover More
                </Button>
                <Button variant="danger" className=" px-5">
                  Contact Us
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Service/>
      <About/>
      <Contact/>
      <Test/>
    </>
  );
};

export default Home;
