import React from "react";
import "./Pagesabout.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pagesimgtwo from "../Assets/pagesabout2.png";
import Accordion from "react-bootstrap/Accordion";
import Servicebutton from "../Servicebutton/Servicebutton";
import Company from "../Companyname/Company";
import Button from "react-bootstrap/Button";

const Pagesabout = () => {
  return (
    <>
      <section className="pages-about ">
        <div class="position-relative ">
          <div className="about-page-img ">
            <div className="position-absolute top-50 start-50 translate-middle">
              <h2>About US</h2>
              <div className="line "></div>
            </div>
          </div>
        </div>
        <div className="pages-about-second p-1 p-md-5">
          <Container>
            <Row className="flex justtify-content-center align-items-center">
              <Col>
                <img
                  src={pagesimgtwo}
                  alt="about page"
                  srcset=""
                  className="pagesabput-img"
                />
              </Col>
              <Col>
                <Accordion defaultActiveKey="0" flush className="shadow-lg p-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      Mexant Financial Planning
                    </Accordion.Header>
                    <Accordion.Body>
                      You will see a bunch of free CSS templates when you search
                      on Google. This website is probably the best one because
                      it is 100% free.
                      <div className="py-3">
                        We do not ask you anything in return. You are free to
                        use our templates for any purpose.
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Mexant Crypto Investing</Accordion.Header>
                    <Accordion.Body>
                      Mexant HTML5 Template is available to download 100% free
                      of charge. This CSS layout is based on Boostrap 5
                      framework.
                      <div className="py-3">
                        Anyone can edit and use this layout for all professional
                        websites. Thank you for visiting TemplateMo website.
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Cryptocurrency Investments
                    </Accordion.Header>
                    <Accordion.Body>
                      Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
                      Phasellus in tristique magna, ac gravida leo. Integer sed
                      lorem sapien.
                      <div className="py-3">
                        Ut viverra mauris sed lobortis commodo. Mauris
                        scelerisque venenatis justo, sed interdum sem.
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
        <Servicebutton />
        <div className="what-we-do p-0 p-md-4">
          <Container fluid className="py-5 px-3 px-md-5">
            <Row className="align-items-start g-4">
              {/* Left Column */}
              <Col xs={12} md={5}>
                <h3>
                  Please tell us about your idea and how you want it to be
                </h3>

                <p>
                  If you need more HTML templates, you can try visiting TooCSS
                  blog and Tooplate websites. You can get many good templates on
                  those websites.
                </p>

                <p className="py-2">
                  Nulla non placerat neque, a gravida elit. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Morbi sed dolor condimentum tellus commodo
                  volutpat non malesuada turpis.
                </p>

                <Button variant="success" className="px-5">
                  Discover More
                </Button>
              </Col>

              {/* Right Column */}
              <Col xs={12} md={7}>
                <Row className="g-3 g-md-4">
                  {/* Step 1 */}
                  <Col xs={12} md={6}>
                    <div className="shadow p-3 bg-white rounded h-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">First Step</div>
                        <div className="text-success fs-4">01</div>
                      </div>
                      <p className="mt-2 mb-0">
                        Pellentesque ipsum elit, congue a sapien laoreet,
                        pellentesque ultricies risus.
                      </p>
                    </div>
                  </Col>

                  {/* Step 2 */}
                  <Col xs={12} md={6}>
                    <div className="shadow p-3 bg-white rounded h-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">Second Step</div>
                        <div className="text-success fs-4">02</div>
                      </div>
                      <p className="mt-2 mb-0">
                        Pellentesque ipsum elit, congue a sapien laoreet,
                        pellentesque ultricies risus.
                      </p>
                    </div>
                  </Col>

                  {/* Step 3 */}
                  <Col xs={12} md={6}>
                    <div className="shadow p-3 bg-white rounded h-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">Third Step</div>
                        <div className="text-success fs-4">03</div>
                      </div>
                      <p className="mt-2 mb-0">
                        Pellentesque ipsum elit, congue a sapien laoreet,
                        pellentesque ultricies risus.
                      </p>
                    </div>
                  </Col>

                  {/* Step 4 */}
                  <Col xs={12} md={6}>
                    <div className="shadow p-3 bg-white rounded h-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">Fourth Step</div>
                        <div className="text-success fs-4">04</div>
                      </div>
                      <p className="mt-2 mb-0">
                        Pellentesque ipsum elit, congue a sapien laoreet,
                        pellentesque ultricies risus.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <Company />
      </section>
    </>
  );
};

export default Pagesabout;
