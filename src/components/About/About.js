import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import podcast_img from "../../Assets/podcast.jpg";
import radio_console from "../../Assets/radio_console.jpg";
import consultation_img from "../../Assets/consulting.jpg";
import music_production from "../../Assets/music_production.jpg";
import microphone from "../../Assets/microphone.jpg";
import resume from "../../Assets/resume.pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY NAME IS <span className="purple"> AUDIE </span> O'TOOLE
            </h1>
            <span style={{ fontSize: "60px" }}>
              <i className="fas fa-volume-up">&nbsp;</i>
            </span>
            <span style={{ fontSize: "60px" }}>
              <i className="fas fa-headphones">&nbsp;</i>
            </span>
            <span style={{ fontSize: "60px" }}>
              <i className="fas fa-microphone-alt">&nbsp;</i>
            </span>
            <span style={{ fontSize: "60px" }}>
              <i className="fas fa-record-vinyl">&nbsp;</i>
            </span>
            <span style={{ fontSize: "60px" }}>
              <i className="fas fa-podcast">&nbsp;</i>
            </span>

            <p className="home-about-body">
              I've been an audio engineer and radio producer for
              <i>
                <b className="purple"> 20+ years</b>
              </i>
              , and I am ready to help you with
              <i>
                <b className="purple"> anything audio related</b>
              </i>
              .
              <br />
              <br />
              This includes: &nbsp;
              <i>
                <b className="purple">Podcasts</b>
              </i>
              ,<b className="purple"> Commercials</b>,
              <i>
                <b className="purple"> Imaging</b>
              </i>
              ,
              <i>
                <b className="purple"> Voice Overs</b>
              </i>
              ,
              <i>
                <b className="purple"> Sound Design</b>
              </i>
              ,
              <i>
                <b className="purple"> Music Production</b>
              </i>
              , to
              <i>
                <b className="purple"> Consultation</b>
              </i>
              .
              <br />
              <br />I can make your podcast come to life, give your radio
              station an imaging overhaul, produce original music for your
              projects, or help you build a unique auditory experience from the
              ground up with personal, professional consultation, all utilizing
              the latest technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <span style={{ fontSize: "20px" }}>
              <a
                href={resume}
                className="resumeLink"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Download Resume
              </a>
            </span>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        {/* podcast production SECTION */}
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
              PODCAST PRODUCTION
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={podcast_img}
                className="img-fluid"
                alt="avatar"
                /*   style={{ paddingTop: "70px" }} */
              />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I provide precise and accurate long-form audio editing with quick
              turn around times. I'll be your reliable producer/engineer who
              will turn your raw conversations and segments into full-fleged
              podcast ready for worldwide distribution.
              <br />
              <br />
              From
              <i>
                <b className="purple"> audio editing</b>
              </i>
              , to
              <i>
                <b className="purple"> show intros</b>
              </i>
              , to
              <i>
                <b className="purple"> produced segments</b>
              </i>
              , I will bring your podcast to life.
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <br />
        <br />

        {/* commercial & imaging SECTION */}
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
              COMMERCIAL & IMAGING PRODUCTION
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              From revenue-generating commercial advertisements, to broadcast
              radio station imaging, I bring decades of major market experience
              in local, network and syndicated radio in a mulititude of formats:
              Urban, Top 40, Country, Classic Rock, Active Rock, Talk Radio and
              Classic Hits.
              <br />
              <br />
              From
              <i>
                <b className="purple"> single spot production</b>
              </i>
              , to
              <i>
                <b className="purple"> regional commercial flights</b>
              </i>
              , I will produce memorable and compelling radio advertisements to
              promote your brands.
              <br />
              <br />
              From
              <i>
                <b className="purple"> imaging updates </b>
              </i>
              to
              <i>
                <b className="purple"> format reboots</b>
              </i>
              , I will produce cutting edge, ear-popping and next-level radio
              imaging for any format of radio station.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={radio_console}
                className="img-fluid"
                alt="avatar"
                /*   style={{ paddingTop: "70px" }} */
              />
            </Tilt>
          </Col>
        </Row>

        {/* consultation production SECTION */}
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
              PROFESSIONAL CONSULTING
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={consultation_img}
                className="img-fluid"
                alt="avatar"
                /*   style={{ paddingTop: "70px" }} */
              />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Whether you're planning your next podcast rollout, radio station
              format overhaul, or planning a national advertising campaign, I
              can help you strategize and execute your project with personal,
              intimate, one-on-one professional consultation services.
              <br />
              <br />
              From
              <i>
                <b className="purple"> strategizing</b>
              </i>
              , to
              <i>
                <b className="purple"> brand promotion</b>
              </i>
              , to
              <i>
                <b className="purple"> project rollouts</b>
              </i>
              , I will be your personal consultant for your next big project.
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <br />
        <br />
        {/* music & souund design SECTION */}
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
              SOUND DESIGN & MUSIC PRODUCTION
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Whether you need originally scored music for your next YouTube
              video, catchy commercial jingles to promote your product, or sound
              effects created from scratch for your project's intro, Potation
              Productions can create that original sound just for you.
              <br />
              <br />
              From
              <i>
                <b className="purple"> sound effect design</b>
              </i>
              , to
              <i>
                <b className="purple"> music production</b>
              </i>
              , to
              <i>
                <b className="purple"> custom jingle creation</b>
              </i>
              , I will create a custom sound track for your brand!
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={music_production}
                className="img-fluid"
                alt="avatar"
                /*   style={{ paddingTop: "70px" }} */
              />
            </Tilt>
          </Col>
        </Row>
        {/* voice overs SECTION */}
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", color: "#fff" }}>VOICE-OVERS</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={microphone}
                className="img-fluid"
                alt="avatar"
                /*   style={{ paddingTop: "70px" }} */
              />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Whether you need a quick narration, or a long form audiobook read,
              I will provide top notch quality audio voice-overs recorded in a
              sound proof studio utilizing professional quality microphones and
              the latest recording technology, delivered in any audio format you
              need for your project.
              <br />
              <br />
              From
              <i>
                <b className="purple"> unique characters</b>
              </i>
              , to
              <i>
                <b className="purple"> quality narration</b>
              </i>
              , to
              <i>
                <b className="purple"> spot voice-overs </b>
              </i>
              , I will bring a relatable, articulate, everyday guy-next-door
              sound to your brands and projects.
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <br />
        <br />

        {/* social connects */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to
              <a href="https://www.fiverr.com/audieotoole">
                {" "}
                <span className="purple"> connect with me </span>
              </a>
              on Fiverr to collaborate on a project today!
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:audieotoole@gmail.com"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/audieotoole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/audieotoole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.soundcloud.com/audieotoole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-soundcloud"></i>
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
