import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import pic from "../../Assets/Projects/p1.jpg";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={pic}
              isBlog={false}
              title="Travel Path"
              description="Implemented a djakstra algrorithm to find the shortest path among different paths"
               ghLink="https://github.com/Shobhit51/Travel-Path"
            />
          </Col>

        

             <Col md={4} className="project-card">
             <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="Cine-matics "
               ghLink="https://github.com/Shobhit51/Cine_matic"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="URL Shortner "
               ghLink="https://github.com/Shobhit51/Url-"
               description="An URL shortener is a website that reduces the length of your URL .
                The idea is to minimize the web page address into something that's easier to remember and track. "
             />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="React Expense Tracker"
              description="
              It is an Expense Tracker web application built using ReactJS. It facilitates the 
              user to calculate his/her expenses and also delete if not required"
               ghLink="https://github.com/Shobhit51/Expense-Tracker-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="Javascript-Quiz-Game"
              description="The quiz application will contain questions followed by a total score shown at the end of the quiz. The score will increase based on the correct answers given.
              This I made using Javascript"
              ghLink="https://github.com/Shobhit51/Javascript_Quiz_Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="Daily-Planner"
              description="Developed a TO-DO website which helps to facilitate the daily Task of the user . Its front-end isdesigned using HTML,CSS and implemented a back-end using NODEJS and MONGODB 
              " 
              ghLink="https://github.com/Shobhit51/DAILY-PLANNER"         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
                                                          
