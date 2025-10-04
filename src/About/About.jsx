import React from "react";
import { Tab, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="p-3 p-md-5 about-page">
        <div className="about-welcome text-center py-4">
          <h4 className="text-danger">About Us</h4>
          <h2>Know Us Better</h2>
        </div>

        <div className="container-fluid px-3 px-md-5">
          <Row className="gx-4 gy-4 align-items-start">
            {/* Left Column */}
            <Col xs={12} md={8}>
              <Tab.Container defaultActiveKey="webdesign">
                <Nav variant="pills" className="flex-wrap">
                  <Nav.Item>
                    <Nav.Link eventKey="webdesign">Web Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="graphics">Graphics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="webcoding">Web Coding</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="mt-4">
                  {/* Web Design */}
                  <Tab.Pane eventKey="webdesign">
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Project Name</th>
                          <th>Client</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Portfolio Website</td>
                          <td>John Carter</td>
                          <td>Completed</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Business Landing Page</td>
                          <td>Ava Wilson</td>
                          <td>In Progress</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>E-commerce Store</td>
                          <td>David Lee</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Restaurant Site</td>
                          <td>Emily Brown</td>
                          <td>Completed</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab.Pane>

                  {/* Graphics */}
                  <Tab.Pane eventKey="graphics">
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Design Type</th>
                          <th>Client</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Logo Design</td>
                          <td>Sarah James</td>
                          <td>Completed</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Brand Kit</td>
                          <td>Tom Parker</td>
                          <td>In Review</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Poster Series</td>
                          <td>Olivia White</td>
                          <td>In Progress</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Social Media Graphics</td>
                          <td>Henry Scott</td>
                          <td>Completed</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab.Pane>

                  {/* Web Coding */}
                  <Tab.Pane eventKey="webcoding">
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Module</th>
                          <th>Developer</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>API Integration</td>
                          <td>Ravi Kumar</td>
                          <td>Completed</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>React Components</td>
                          <td>Sophia Chen</td>
                          <td>In Progress</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Authentication</td>
                          <td>Michael Zhang</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Database Setup</td>
                          <td>Priya Patel</td>
                          <td>Completed</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={4} className="px-3 px-md-5 py-4">
              <h5 className="mb-3">
                Please tell us about your idea and how you want it to be
              </h5>

              <p className="text-justify">
                You are allowed to use this template for your websites. You are
                NOT allowed to redistribute the template ZIP file on any other
                template websites.
              </p>

              <p className="mb-4">
                Thank you for downloading and using our templates. Please tell
                your friends about our website.
              </p>

              <Button variant="success" className="w-100 w-md-auto">
                Discover More
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
