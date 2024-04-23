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
              title="Medicure"
              description="Medicine Recommendation System that utilizes machine learning algorithms to analyze drug data, providing alternative medication suggestions based on user queries through a user-friendly Streamlit web interface."
              ghLink="https://github.com/Moudipa01/medicine-recommendation-system"
              demoLink = "https://github.com/Moudipa01/medicine-recommendation-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Automated Tagging System for Stack Overflow"
              description="item Implemented machine learning algorithms to revolutionize content categorization, resulting in a 30% increase in efficiency."
              ghLink="https://github.com/Moudipa01/Stack-Overflow-Question-tag"
              demoLink="https://github.com/Moudipa01/Stack-Overflow-Question-tag"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blockchain-Based Fraud Detection System for Post Supply Chain Management"
              description="Developed a blockchain-based system to enhance transparency in the post-supply chain, utilizing RFID technology and QR codes for anti-counterfeit measures."
              ghLink="https://github.com/Moudipa01/FraudDetector"
              demoLink="https://github.com/Moudipa01/FraudDetector/blob/main/README.md"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Breast Cancer Detector API"
              description="Created a Breast Cancer Detector API using Python and DockerFile, providing a valuable tool for early detection of breast cancer.Developed an API that accepts a 64 x 64 PNG image file extracted from a whole slide image as input, utilizing machine learning to predict the probability of the image containing mitosis."
              ghLink="https://github.com/Moudipa01/Breast_Cancer-Detector"
              demoLink="https://github.com/Moudipa01/Breast_Cancer-Detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Q-A | Interview Practise Session Application"
              description="item Developed a Q-A Interview Practice Session Application using ReactJS, MongoDB, ExpressJS, and NodeJS, providing a platform for interview preparation."
              ghLink="https://github.com/MoudipaJana"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Split and Happy| Bill Splitting Application"
              description="Developed an application that scans handwritten bills and splits them among participants, simplifying the bill-splitting process."
              ghLink="https://github.com/Moudipa01"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
