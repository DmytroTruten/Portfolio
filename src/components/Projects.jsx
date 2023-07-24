import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "../components/Tag";
import agencyThumbnail from "../assets/thumbnails/agency-thumbnail.jpg";
import weatherThumbnail from "../assets/thumbnails/weather-thumbnail.jpg";
import interiorThumbnail from "../assets/thumbnails/interior-thumbnail.jpg";
import reactChatThumbnail from "../assets/thumbnails/react-chat-thumbnail.jpg";
import "../styles/Projects/Projects.css";

function Projects() {
  const projectsTitleArray = [
    "Interior Design Studio",
    "Weather App",
    "Creative Agency",
    "React Chat",
  ];
  const projectsTextArray = [
    "Landing page of an imaginary company that provides services in: interior design, decorative services, space planning and project management.",
    "Simple app that allows users to search for weather information by city name. It uses the OpenWeather API to retrieve weather data, displays the current weather conditions.",
    "The Creative Agency is a landing page of an imaginary company that offers a creative strategy to achieve business goals, create engaging content for your brand.",
    "Real-time chat application, allows users to communicate instantly, without the need to refresh the page. This creates an interactive experience with the app.",
  ];

  const technologiesArray = [
    ["HTML", "SCSS", "JavaScript", "JQuery", "Bootstrap"],
    ["React.js", "SCSS", "Moment.js", "React-Bootstrap"],
    ["React.js", "SCSS", "Bootstrap"],
    ["React.js", "Redux", "SCSS", "Firebase", "Moment.js"],
  ];

  const projectCodeLinks = [
    "https://github.com/DmytroTruten/Interior-Design-Studio",
    "https://github.com/DmytroTruten/Weather-App",
    "https://github.com/DmytroTruten/Creative-Agency",
    "https://github.com/DmytroTruten/React-Chat",
  ];

  return (
    <Container fluid="sm" className="projects-section px-sm-0">
      <Row className="projects-tag-row d-flex flex-column mx-0 p-lg-0">
        <Col className="d-flex justify-content-center mb-3 px-0">
          <Tag children={"Projects"} />
        </Col>
        <Col className="px-0 mb-4 mb-lg-5">
          <p className="projects-subtitle text-center mb-0">
            Things I&apos;ve built so far
          </p>
        </Col>
      </Row>
      <Row className="mx-0">
        {[
          interiorThumbnail,
          weatherThumbnail,
          agencyThumbnail,
          reactChatThumbnail,
        ].map((thumbnail, index) => (
          <React.Fragment key={index}>
            <Col className="projects-img-col px-0" xs={12}>
              <Image src={thumbnail} className="w-100" />
            </Col>
            <Col className="projects-content-col px-0">
              <p className="projects-subtitle mb-4">
                {projectsTitleArray[index]}
              </p>
              <p className="projects-text mb-4">{projectsTextArray[index]}</p>
              <Container fluid className="px-0">
                {technologiesArray[index].map((technology, techIndex) => (
                  <Tag key={techIndex} children={technology} />
                ))}
              </Container>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
