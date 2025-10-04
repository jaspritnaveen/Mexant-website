import React, { useState } from "react";
import "./Contact.css";
import contactimg from "../Assets/contact.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Contact = () => {
  // ✅ hooks inside component
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section className="contact-sec">
      <div className="container">
        <Row>
          <Col xs={6} className="mx-5 contact-img">
            <img src={contactimg} alt="" />
          </Col>
          <Col
            xs={12}
            md={4}
            className="p-3 d-flex flex-column justify-content-center align-items-center"
          >
            <h4 className="text-danger mb-2">Your Freedom</h4>
            <h2 className="text-light mb-4">Get a Financial Plan</h2>

            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="w-100"
            >
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  xs={12}
                  md={6}
                  controlId="validationCustom01"
                >
                  <Form.Label className="text-light">First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xs={12}
                  md={6}
                  controlId="validationCustom02"
                >
                  <Form.Label className="text-light">Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} xs={12} controlId="validationCustom03">
                  <Form.Label className="text-light">City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                </Form.Group>

                <Form.Group as={Col} xs={12} controlId="validationCustom05">
                  <Form.Label className="text-light">Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  className="text-light"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
