import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Calculator"
              description="An advanced scientific calculator built with React.js, offering robust functionalities including trigonometric and logarithmic, exponential and statistical calculations. The Intuitive interface ensures a seamless user experience, perfect for student, professionals and enthusiasts in need of precise mathematical computations."
              ghLink="https://github.com/ganiM-301/scientific-calculator"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
