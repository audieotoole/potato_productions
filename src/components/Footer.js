import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Audie O'Toole</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Potato Productions</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="mailto:audieotoole@gmail.com" style={{ color: "white" }}>
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/audieotoole"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="www.linkedin.com/in/audieotoole"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/audieotoole"
                style={{ color: "white" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
