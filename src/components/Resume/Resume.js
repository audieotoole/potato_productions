import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  const handleLogin = () => {
    // write route to send fields to backend
    console.log("hi");
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
        <Row className="resume">
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Login</h3>
            <Resumecontent title="USERNAME " />
            <Resumecontent title="PASSWORD" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={() => handleLogin()}
            target="_blank"
          >
            <i className="fas fa-sign-in-alt">&nbsp;</i>Login
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
