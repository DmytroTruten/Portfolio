import { Row, Col, Container, Image } from "react-bootstrap";
import Tag from "./Tag";
import htmlIcon from "../assets/icons/htmlIcon.svg";
import cssIcon from "../assets/icons/cssIcon.svg";
import jsIcon from "../assets/icons/jsIcon.svg";
import reactIcon from "../assets/icons/reactIcon.svg";
import reduxIcon from "../assets/icons/reduxIcon.svg";
import bootstrapIcon from "../assets/icons/bootstrapIcon.svg";
import sassIcon from "../assets/icons/sassIcon.svg";
import gitIcon from "../assets/icons/gitIcon.svg";
import jqueryIcon from "../assets/icons/jqueryIcon.svg";
import mochaIcon from "../assets/icons/mochaIcon.svg";
import viteIcon from "../assets/icons/viteIcon.svg";
import reactBootstrapIcon from "../assets/icons/reactBootstrapIcon.svg";
import "../styles/TechStack/TechStack.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function TechStack() {
  const { languageData } = useContext(LanguageContext);
  return (
    <Container fluid className="tech-stack-section px-sm-0">
      <Container className="d-flex flex-column px-0 gap-4 gap-lg-5">
        <Row className="tech-stack-tag-row d-flex flex-column mx-0 p-lg-0">
          <Col className="d-flex justify-content-center mb-3 px-0">
            <Tag children={languageData["tech_stack"]} />
          </Col>
          <Col className="px-0">
            <p className="tech-stack-subtitle text-center mb-0">
              {languageData["tech_stack_subtitle"]}
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
              <a
                target={"_blank"}
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                <Image
                  className="tech-stack-icon html-icon mb-2"
                  src={htmlIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">HTML</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <a
                target={"_blank"}
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                <Image
                  className="tech-stack-icon css-icon mb-2"
                  src={cssIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">CSS</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <a
                target={"_blank"}
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <Image className="tech-stack-icon js-icon mb-2" src={jsIcon} />
              </a>
              <p className="tech-stack-text mb-0">JavaScript</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://react.dev/">
                <Image
                  className="tech-stack-icon react-icon mb-2"
                  src={reactIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">React</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://redux.js.org/">
                <Image
                  className="tech-stack-icon redux-icon mb-2"
                  src={reduxIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">Redux</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://getbootstrap.com/">
                <Image
                  className="tech-stack-icon bootstrap-icon mb-2"
                  src={bootstrapIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">Bootstrap</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3 mb-md-0"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://sass-lang.com/">
                <Image
                  className="tech-stack-icon sass-icon mb-2"
                  src={sassIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">Sass/SCSS</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3 mb-md-0"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://git-scm.com/">
                <Image
                  className="tech-stack-icon git-icon mb-2"
                  src={gitIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">Git</p>
            </Col>

            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0 mb-3 mb-sm-0"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://jquery.com/">
                <Image
                  className="tech-stack-icon jquery-icon mb-2"
                  src={jqueryIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">jQuery</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://mochajs.org/">
                <Image
                  className="tech-stack-icon mocha-icon mb-2"
                  src={mochaIcon}
                />
              </a>
              <p className="tech-stack-text mb-0">Mocha</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0"
              xs={4}
              sm={3}
              md={2}
            >
              <div className="vite-icon-container">
                <a target={"_blank"} href="https://vitejs.dev/">
                  <Image
                    className="tech-stack-icon vite-icon mb-2"
                    src={viteIcon}
                  />
                </a>
                <div className="vite-icon-background"></div>
              </div>
              <p className="tech-stack-text mb-0">Vite</p>
            </Col>
            <Col
              className="tech-stack-col d-flex align-items-center flex-column px-0"
              xs={4}
              sm={3}
              md={2}
            >
              <a target={"_blank"} href="https://react-bootstrap.netlify.app/">
                <Image
                  className="tech-stack-icon react-bootstrap-icon mb-2"
                  src={reactBootstrapIcon}
                />
              </a>
              <p className="tech-stack-text mb-0 text-center">React Bootstrap</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default TechStack;
