import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "./Tag";
import trutenAboutImg from "../assets/trutenAboutImg.jpg";
import "../styles/About/About.css";
import TypeIt from "typeit-react";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

function About() {
  const { languageData, aboutTypeItInstance, setAboutTypeItInstance } =
    useContext(LanguageContext);

  useEffect(() => {
    if (aboutTypeItInstance) {
      aboutTypeItInstance
        .empty()
        .type(languageData["about_content_h1"])
        .flush();
    }
  }, [languageData]);

  return (
    <Container fluid className="about-section px-sm-0">
      <Container className="px-0">
        <Row className="about-tag-row mb-4 mb-md-5 mx-0 p-lg-0">
          <Col className="d-flex justify-content-center px-0">
            <Tag children={languageData["about_me"]} />
          </Col>
        </Row>
        <Row className="about-content-row d-flex flex-column flex-md-row mx-0 p-lg-0">
          <Col className="about-img-col d-flex align-items-center align-items-md-start flex-column flex-md-row px-0">
            <Image src={trutenAboutImg} className="about-img" />
            <div className="about-img-background"></div>
          </Col>
          <Col className="about-text-col px-0">
            <TypeIt
              className="about-content-h1 mb-4"
              as="h1"
              options={{ waitUntilVisible: true, speed: 50, lifeLike: true }}
              getBeforeInit={(aboutTypeItInstance) => {
                setAboutTypeItInstance(aboutTypeItInstance);
                aboutTypeItInstance.type(languageData["about_content_h1"]);
                return aboutTypeItInstance;
              }}
            />
            <p className="about-content-text">
              {languageData["about_content_text_1"]}
            </p>
            <p className="about-content-text">
              {languageData["about_content_text_2"]}
            </p>
            <p className="about-content-text">
              {languageData["about_content_text_3"]}
            </p>
            <p className="about-content-text">
              {languageData["about_content_text_4"]}
            </p>
            <q className="about-content-quote fst-italic">
              {languageData["about_content_quote"]}
            </q>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
