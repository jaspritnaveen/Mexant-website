import React from "react";
import "./Pageservice.css";
import serviceone from "../Assets/serciceone.png";
import servicetwo from "../Assets/servicetwo.png";
import servicethree from "../Assets/servicethree.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Servicebutton from "../Servicebutton/Servicebutton";
import { Tab, Nav } from "react-bootstrap";
import Company from "../Companyname/Company";
const Pageservice = () => {
  return (
    <>
      <div className="pages-service ">
        <div class="position-relative ">
          <div className="service-page-img ">
            <div className="position-absolute top-50 start-50 translate-middle">
              <h2>Our Services</h2>
              <div className="line "></div>
            </div>
          </div>
        </div>

        <div className="alternative-imgs p-2 p-md-5">
          <Container>
            <Row className="py-md-5">
              <Col md={6} className="d-flex">
                <div className="service-left">
                  <img src={serviceone} alt="" srcset="" className="rounded" />
                </div>
              </Col>
              <Col md={5}>
                <div className="service-right">
                  <p class="bi bi-archive-fill"></p>

                  <div className="service-details">
                    <h3>Digital Currencies</h3>
                    <p>
                      You will see a bunch of free CSS templates when you search
                      on Google. TemplateMo is the best one because it is 100%
                      free for anyone. We do not ask you anything in return. You
                      are free to use our templates for any purpose.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col md={5}>
                <div className="service-right">
                  <p class="bi bi-archive-fill"></p>

                  <div className="service-details">
                    <h3>Digital Currencies</h3>
                    <p>
                      You will see a bunch of free CSS templates when you search
                      on Google. TemplateMo is the best one because it is 100%
                      free for anyone. We do not ask you anything in return. You
                      are free to use our templates for any purpose.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} className="d-flex">
                <div className="service-left">
                  <img
                    src={servicethree}
                    alt=""
                    srcset=""
                    className="rounded"
                  />
                </div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col md={6} className="d-flex">
                <div className="service-left">
                  <img src={servicetwo} alt="" srcset="" className="rounded" />
                </div>
              </Col>
              <Col md={5}>
                <div className="service-right">
                  <p class="bi bi-archive-fill"></p>

                  <div className="service-details">
                    <h3>Digital Currencies</h3>
                    <p>
                      You will see a bunch of free CSS templates when you search
                      on Google. TemplateMo is the best one because it is 100%
                      free for anyone. We do not ask you anything in return. You
                      are free to use our templates for any purpose.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Servicebutton />

        <div className="invest-page p-0 p-md-5">
          <div className="invest-title text-center">
            <h5 className="text-danger">Investment in Details</h5>
            <h2>Upgrade your knowledge</h2>
          </div>

          <Tab.Container defaultActiveKey="home">
          
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="about">
                <h3>Crypto Investments </h3>

                <div className="d-flex flex-column flex-md-row row-12 justify-content-center crypto p-2 align-items-center ">
                  <div className="col-md-6">
                    <img
                      src={servicetwo}
                      alt=""
                      srcset=""
                      className="rounded"
                    />
                  </div>

                  <div className="col-md-4 shadow p-4 rounded">
                    <h3>Learn more about cryptocurrency investments</h3>
                    <p className="mt-2">
                      Etiam id ligula risus. Fusce fringilla nisl nunc, nec
                      rutrum lectus cursus nec. In blandit nibh dolor, at rutrum
                      leo accumsan porta. Nullam pulvinar eros porttitor risus
                      condimentum tempus.
                      <p className="mt-3">- Top Crypto prices and charts</p>
                      <p>- Is Cryptocurrency a good investment? </p>
                      <p>- Crypto Market Insiders and News</p>
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="home">
                <h3>Crypto Investments </h3>

                <div className="d-flex flex-column flex-md-row row-12 justify-content-center crypto p-2 align-items-center ">
                  <div className="col-md-6">
                    <img
                      src={servicethree}
                      alt=""
                      srcset=""
                      className="rounded"
                    />
                  </div>

                  <div className="col-md-4 shadow p-4 rounded">
                    <h3>Learn more about cryptocurrency investments</h3>
                    <p className="mt-2">
                      Etiam id ligula risus. Fusce fringilla nisl nunc, nec
                      rutrum lectus cursus nec. In blandit nibh dolor, at rutrum
                      leo accumsan porta. Nullam pulvinar eros porttitor risus
                      condimentum tempus.
                      <p className="mt-3">- Top Crypto prices and charts</p>
                      <p>- Is Cryptocurrency a good investment? </p>
                      <p>- Crypto Market Insiders and News</p>
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="contact">
                <h3>Crypto Investments </h3>

                <div className="d-flex flex-column flex-md-row row-12 justify-content-center crypto p-2 align-items-center ">
                  <div className="col-md-6">
                    <img
                      src={serviceone}
                      alt=""
                      srcset=""
                      className="rounded"
                    />
                  </div>

                  <div className="col-md-4 shadow p-4 rounded">
                    <h3>Learn more about cryptocurrency investments</h3>
                    <p className="mt-2">
                      Etiam id ligula risus. Fusce fringilla nisl nunc, nec
                      rutrum lectus cursus nec. In blandit nibh dolor, at rutrum
                      leo accumsan porta. Nullam pulvinar eros porttitor risus
                      condimentum tempus.
                      <p className="mt-3">- Top Crypto prices and charts</p>
                      <p>- Is Cryptocurrency a good investment? </p>
                      <p>- Crypto Market Insiders and News</p>
                    </p>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
      <Company />
    </>
  );
};

export default Pageservice;
