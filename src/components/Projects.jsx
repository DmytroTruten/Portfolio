import { Fragment, useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "./Tag";
import agencyThumbnail from "../assets/thumbnails/agencyThumbnail.jpg";
import weatherThumbnail from "../assets/thumbnails/weatherThumbnail.jpg";
import interiorThumbnail from "../assets/thumbnails/interiorThumbnail.jpg";
import reactChatThumbnail from "../assets/thumbnails/reactChatThumbnail.jpg";
import toDoNowThumbnail from "../assets/thumbnails/toDoNowThumbnail.jpg";
import linkIcon from "../assets/icons/linkIcon.svg";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Projects/Projects.css";

function Projects() {
  const { languageData } = useContext(LanguageContext);
  const projectsTitleArray = [
    "Interior Design Studio",
    "Creative Agency",
    "To-Do Now",
    "Weather App",
    "React Chat",
  ];

  const technologiesArray = [
    ["HTML", "SCSS", "JavaScript", "JQuery", "Bootstrap"],
    ["React", "SCSS", "Bootstrap"],
    ["React", "SCSS", "Redux Toolkit", "React-Bootstrap"],
    ["React", "SCSS", "Moment.js", "React-Bootstrap"],
    ["React", "React Router", "Redux Toolkit", "SCSS", "Firebase", "Moment.js"],
  ];

  const projectsCodeLinks = [
    "https://github.com/DmytroTruten/Interior-Design-Studio",
    "https://github.com/DmytroTruten/Creative-Agency",
    "https://github.com/DmytroTruten/To-Do-Now",
    "https://github.com/DmytroTruten/Weather-App",
    "https://github.com/DmytroTruten/React-Chat",
  ];

  const projectsLinks = [
    "https://interior-design-studio-dmytrotruten.vercel.app/",
    "https://creative-agency-dmytrotruten.vercel.app/",
    "https://to-do-now-dmytrotruten.vercel.app/",
    "https://weather-app-dmytrotruten.vercel.app/",
    "https://react-chat-dmytrotruten.vercel.app/",
  ];

  return (
    <Container fluid className="projects-section px-sm-0">
      <Container className="d-flex flex-column gap-4 gap-lg-5 px-0">
        <Row className="projects-tag-row d-flex flex-column mx-0 p-lg-0">
          <Col className="d-flex justify-content-center mb-3 px-0">
            <Tag children={languageData["projects"]} />
          </Col>
          <Col className="px-0">
            <p className="projects-section-subtitle text-center mb-0">
              {languageData["projects_section_subtitle"]}
            </p>
          </Col>
        </Row>
        <Container fluid className="d-flex flex-column px-0 gap-4 gap-lg-5">
          {[
            interiorThumbnail,
            agencyThumbnail,
            toDoNowThumbnail,
            weatherThumbnail,
            reactChatThumbnail,
          ].map((thumbnail, index) => (
            <Fragment key={index}>
              <Row className="d-flex projects-row mx-0">
                <Col className="projects-img-col" xs={12} lg={6}>
                  <a href={projectsLinks[index]}>
                    <Image src={thumbnail} className="projects-img" />
                  </a>
                </Col>
                <Col className="projects-content-col d-flex flex-column gap-4">
                  <p className="projects-subtitle mb-0">
                    {projectsTitleArray[index]}
                  </p>
                  <p className="projects-text mb-0">
                    {languageData["projects_text_array"][index]}
                  </p>
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
                        className="projects-link"
                      >
                        <Image className="projects-icon" src={linkIcon} />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Fragment>
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default Projects;
