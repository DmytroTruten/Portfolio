import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "./Tag";
import agencyThumbnail from "../assets/thumbnails/agency-thumbnail.jpg";
import weatherThumbnail from "../assets/thumbnails/weather-thumbnail.jpg";
import interiorThumbnail from "../assets/thumbnails/interior-thumbnail.jpg";
import reactChatThumbnail from "../assets/thumbnails/react-chat-thumbnail.jpg";
import linkIcon from "../assets/icons/linkIcon.svg";
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
    ["React", "SCSS", "Moment.js", "React-Bootstrap"],
    ["React", "SCSS", "Bootstrap"],
    ["React", "Redux", "SCSS", "Firebase", "Moment.js"],
  ];

  const projectsCodeLinks = [
    "https://github.com/DmytroTruten/Interior-Design-Studio",
    "https://github.com/DmytroTruten/Weather-App",
    "https://github.com/DmytroTruten/Creative-Agency",
    "https://github.com/DmytroTruten/React-Chat",
  ];

  return (
    <Container
      fluid="sm"
      className="projects-section d-flex flex-column gap-4 gap-lg-5 px-sm-0"
    >
      <Row className="projects-tag-row d-flex flex-column mx-0 p-lg-0">
        <Col className="d-flex justify-content-center mb-3 px-0">
          <Tag children={"Projects"} />
        </Col>
        <Col className="px-0">
          <p className="projects-section-subtitle text-center mb-0">
            Some of the noteworthy projects I have built:
          </p>
        </Col>
      </Row>
      <Container fluid className="d-flex flex-column px-0 gap-4 gap-lg-5">
        {[
          interiorThumbnail,
          weatherThumbnail,
          agencyThumbnail,
          reactChatThumbnail,
        ].map((thumbnail, index) => (
          <React.Fragment key={index}>
            <Row
              className={`d-flex mx-0 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <Col className="projects-img-col" xs={12} lg={6}>
                <Image src={thumbnail} className="projects-img" />
              </Col>
              <Col className="projects-content-col d-flex flex-column gap-4">
                <p className="projects-subtitle mb-0">
                  {projectsTitleArray[index]}
                </p>
                <p className="projects-text mb-0">{projectsTextArray[index]}</p>
                <Row className="projects-technologies-row d-flex gap-2 mx-0">
                  {technologiesArray[index].map((technology, techIndex) => (
                    <Col
                      key={techIndex}
                      className="projects-technologies-col px-0"
                    >
                      <Tag children={technology} />
                    </Col>
                  ))}
                </Row>
                <Row className="mx-0">
                  <Col className="px-0">
                    <a
                      href={projectsCodeLinks[index]}
                      className="projects-external-link d-flex"
                    >
                      <Image src={linkIcon} />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
