import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import alt from "../../Assets/formats/alt.jpg";
import hiphop from "../../Assets/formats/hiphop.jpg";
import activerock from "../../Assets/formats/activerock.jpg";
import classicrock from "../../Assets/formats/classicrock.jpg";
import talkradio from "../../Assets/formats/talkradio.jpg";
import top40 from "../../Assets/formats/top40.jpg";
import country from "../../Assets/formats/country.jpg";
import classichits from "../../Assets/formats/classichits.jpg";
import vo from "../../Assets/formats/vo.jpg";
import commercials from "../../Assets/formats/commercials.jpg";

import alt_demo from "../../Assets/demo_audio/alt_demo.mp3";
import classichits_demo from "../../Assets/demo_audio/classichits_demo.mp3";
import classicrock_demo from "../../Assets/demo_audio/classicrock_demo.mp3";
import country_demo from "../../Assets/demo_audio/country_demo.mp3";
import hiphop_demo from "../../Assets/demo_audio/hiphop_demo.mp3";
import rock_demo from "../../Assets/demo_audio/rock_demo.mp3";
import talkradio_demo from "../../Assets/demo_audio/talkradio_demo.mp3";
import top40_demo from "../../Assets/demo_audio/top40_demo.mp3";
import vo_demo from "../../Assets/demo_audio/vo_demo.mp3";
import commercials_demo from "../../Assets/demo_audio/commercials_demo.mp3";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div style={{ width: "60%", margin: "auto" }}></div>

      <Particle />
      <Container>
        <h1 className="project-heading">
          My Production <strong className="purple">Demos </strong>
        </h1>

        <p style={{ color: "white" }}>
          radio imaging, commercial production, and voice-over demos
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activerock}
              isBlog={false}
              title="Active Rock"
              description="Active Rock format imaging demo."
              link={rock_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alt}
              isBlog={false}
              title="Alternative"
              description="Alternative radio imaging demo."
              link={alt_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classichits}
              isBlog={false}
              title="Classic Hits"
              description="Classic Hits radio imaging demo."
              link={classichits_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classicrock}
              isBlog={false}
              title="Classic Rock"
              description="Classic Rock radio station imaging."
              link={classicrock_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Country"
              description="Country station imaging.  Yee-haw."
              link={country_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commercials}
              isBlog={false}
              title="Commercials"
              description="Radio commercials demo."
              link={commercials_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hiphop}
              isBlog={false}
              title="Hip-Hop/Urban"
              description="Hip-Hop/Urban radio station imaging."
              link={hiphop_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talkradio}
              isBlog={false}
              title="Talk Radio"
              description="Talk Radio format imaging demo."
              link={talkradio_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={top40}
              isBlog={false}
              title="Top 40/Pop"
              description="Top 40/Pop radio station imaging."
              link={top40_demo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vo}
              isBlog={false}
              title="Voice-Overs"
              description="Audio O'Toole voice-over demo."
              link={vo_demo}
            />
          </Col>
        </Row>

        {/*  <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={alt}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={country}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
