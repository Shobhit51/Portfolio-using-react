import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shobhit Shrivastava </span>
            from <span className="purple"> Jhansi Uttar pradesh , India.</span>
            <br /> I am a final year student pursuing an B.Tech(CS)
           at SR Group of Institutions Jhansi
            <br />
         I have a great interest in coding and 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight />  Tech
            </li>
            <li className="about-activity">
              <ImPointRight />Love to Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shobhit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
