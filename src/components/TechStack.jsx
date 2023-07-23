import { Row, Col, Container, Image } from "react-bootstrap";
import Tag from "../components/Tag";
import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import jsIcon from "../assets/icons/js-icon.svg";
import reactIcon from "../assets/icons/reactIcon.svg";
import reduxIcon from "../assets/icons/redux-icon.svg";
import bootstrapIcon from "../assets/icons/bootstrap-icon.svg";
import sassIcon from "../assets/icons/sass-icon.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import jqueryIcon from "../assets/icons/jquery-icon.svg";
import mochajsIcon from "../assets/icons/mochajs-icon.svg";
import viteIcon from "../assets/icons/vite-icon.svg";
import reactBootstrapIcon from "../assets/icons/react-bootstrap-icon.svg";
import "../styles/TechStack/TechStack.css";

function TechStack() {
  return (
    <Container fluid="sm" className="tech-stack-section px-sm-0">
      <Row className="tech-stack-tag-row d-flex flex-column mx-0 p-lg-0">
        <Col className="d-flex justify-content-center mb-3 px-0">
          <Tag children={"Tech Stack"} />
        </Col>
        <Col className="px-0 mb-4 mb-lg-5">
          <p className="tech-stack-subtitle text-center">
            Tools, skills and technologies I&apos;ve been working with recently
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
            <Image className="tech-stack-icon mb-2" src={reactBootstrapIcon} />
            <p className="tech-stack-text mb-0">React Bootstrap</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TechStack;
