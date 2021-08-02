import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY NAME IS <span className="purple"> AUDIE  </span> O'TOOLE
            </h1>
            <p className="home-about-body">
              I've been an audio engineer for 20+ years.
              <br />
              <br />I am ready to help you with 
              <i>
                <b className="purple"> anything audio related </b>
              </i>
              <br />
              <br />
              This includes: &nbsp;
              <i>
                <b className="purple">
                  Podcasts, Radio Commercials/Imaging, and Sound Design
                </b>
              </i>
              <br />
              <br />
              Utilizing the latest synthesizers, DAWs and sequencers like
              <i>
                <b className="purple"> Ableton Live, Adobe Audition</b>
              </i>
                &nbsp; and
              <i>
                <b className="purple"> Native Instruments' Komplete 13. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/audieotoole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-soundcloud"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AudieOToole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
