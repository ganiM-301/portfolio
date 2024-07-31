import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ganesh M </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am open to work as Software Engineer specialized in java Technology.
            <br />
            I have completed my Bachelors in EEE from Visveswaraya Technological University.
            Mesra and i have trained as java full stack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Art and Crafts
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dive into things until the things dive into you"{" "}
          </p>
          <footer className="blockquote-footer">Ganesh M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
