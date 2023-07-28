import { Row, Col, Container, Image } from "react-bootstrap";
import Tag from "./Tag";
import htmlIcon from "../assets/icons/lightMode/html-icon.svg";
import cssIcon from "../assets/icons/lightMode/css-icon.svg";
import jsIcon from "../assets/icons/lightMode/js-icon.svg";
import reactIcon from "../assets/icons/lightMode/reactIcon.svg";
import reduxIcon from "../assets/icons/lightMode/redux-icon.svg";
import bootstrapIcon from "../assets/icons/lightMode/bootstrap-icon.svg";
import sassIcon from "../assets/icons/lightMode/sass-icon.svg";
import gitIcon from "../assets/icons/lightMode/git-icon.svg";
import jqueryIcon from "../assets/icons/lightMode/jquery-icon.svg";
import mochajsIcon from "../assets/icons/lightMode/mochajs-icon.svg";
import viteIcon from "../assets/icons/lightMode/vite-icon.svg";
import reactBootstrapIcon from "../assets/icons/lightMode/react-bootstrap-icon.svg";
import "../styles/TechStack/TechStack.css";

function TechStack() {
  return (
    <Container
      fluid
      className="tech-stack-section px-sm-0"
    >
      <Container className="d-flex flex-column px-0 gap-4 gap-lg-5">
        <Row className="tech-stack-tag-row d-flex flex-column mx-0 p-lg-0">
          <Col className="d-flex justify-content-center mb-3 px-0">
            <Tag children={"Tech Stack"} />
          </Col>
          <Col className="px-0">
            <p className="tech-stack-subtitle text-center mb-0">
              Tools, skills and technologies I&apos;ve been working with
              recently
            </p>
          </Col>
        </Row>
        <Container fluid="sm" className="px-0">
          <Row className="mx-0">
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={htmlIcon} />
              <p className="tech-stack-text mb-0">HTML</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={cssIcon} />
              <p className="tech-stack-text mb-0">CSS</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={jsIcon} />
              <p className="tech-stack-text mb-0">JavaScript</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={reactIcon} />
              <p className="tech-stack-text mb-0">React</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={reduxIcon} />
              <p className="tech-stack-text mb-0">Redux</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={bootstrapIcon} />
              <p className="tech-stack-text mb-0">Bootstrap</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3 mb-md-0"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={sassIcon} />
              <p className="tech-stack-text mb-0">Sass/SCSS</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3 mb-md-0"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={gitIcon} />
              <p className="tech-stack-text mb-0">Git</p>
            </Col>

            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3 mb-sm-0"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={jqueryIcon} />
              <p className="tech-stack-text mb-0">jQuery</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={mochajsIcon} />
              <p className="tech-stack-text mb-0">Mocha.js</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0"
              xs={4}
              sm={3}
              md={2}
            >
              <Image className="tech-stack-icon mb-2" src={viteIcon} />
              <p className="tech-stack-text mb-0">Vite</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0"
              xs={4}
              sm={3}
              md={2}
            >
              <Image
                className="tech-stack-icon mb-2"
                src={reactBootstrapIcon}
              />
              <p className="tech-stack-text mb-0">React Bootstrap</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default TechStack;
