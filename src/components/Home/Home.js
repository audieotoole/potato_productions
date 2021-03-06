import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/speaker.jpg";
import Particle from "../Particle";
import Type from "./Type";
import Waveform from "../Waveform/Waveform";
import DEMO from "../../Assets/demo_audio/pp_demo_sept21.mp3";

function Home() {
  const url = DEMO;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 /* style={{ paddingBottom: 15 }} */ className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                WE'RE
                <strong className="main-name"> POTATO PRODUCTIONS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                id="speaker"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div style={{ width: "75%", margin: "auto" }}>
        <Waveform url={url} />
      </div>
    </section>
  );
}

export default Home;
