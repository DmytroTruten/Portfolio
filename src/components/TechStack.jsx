import { Row, Col, Container, Image } from "react-bootstrap";
import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import jsIcon from "../assets/icons/js-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import reduxIcon from "../assets/icons/redux-icon.svg";
import bootstrapIcon from "../assets/icons/bootstrap-icon.svg";
import sassIcon from "../assets/icons/sass-icon.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import vscodeIcon from "../assets/icons/vscode-icon.svg";
import githubIcon from "../assets/icons/github-tech-stack-icon.svg";
import jqueryIcon from "../assets/icons/jquery-icon.svg";
import mochajsIcon from "../assets/icons/mochajs-icon.svg";
import viteIcon from "../assets/icons/vite-icon.svg";
import reactBootstrapIcon from "../assets/icons/react-bootstrap-icon.svg";
import "../styles/TechStack/TechStack.css";

function TechStack() {
  return (
    <Container className="pt-5">
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Tech Stack</h2>
        </Col>
        <Col xs={12}>
          <h3 className="text-center">
            Technologies I&apos;ve been working with recently
          </h3>
        </Col>
      </Row>
      <Row className="mt-3 mt-lg-5">
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={htmlIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={cssIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={jsIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={reactIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={reduxIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={bootstrapIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={sassIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={gitIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={vscodeIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={githubIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={jqueryIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={4} md={3} lg={2}>
          <Image className="tech-stack-icon" src={mochajsIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={6} md={6} lg={6}>
          <Image className="tech-stack-icon" src={viteIcon}/>
        </Col>
        <Col className="d-flex justify-content-center py-2" xs={6} sm={6} md={6} lg={6}>
          <Image className="tech-stack-icon" src={reactBootstrapIcon}/>
        </Col>
      </Row>
    </Container>
  );
}

export default TechStack;
