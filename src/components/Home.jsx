import { Container, Row, Col, Image } from "react-bootstrap";
import trutenHeroImg from "../assets/trutenHeroImg.jpg";
import locationIcon from "../assets/icons/locationIcon.svg";
import githubIcon from "../assets/icons/githubIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import tgIcon from "../assets/icons/tgIcon.svg";
import "../styles/Home/Home.css";
import TypeIt from "typeit-react";

function Home() {
  return (
    <Container fluid className="home-section px-sm-0">
      <Container className="px-0">
        <Row className="home-row d-flex flex-column flex-md-row-reverse mx-0 p-lg-0">
          <Col className="home-img-col d-flex justify-content-center justify-content-md-end align-items-md-end px-0">
            <Image src={trutenHeroImg} className="home-img" />
            <div className="home-img-background"></div>
          </Col>
          <Col className="home-content-col mt-md-0 px-0">
            <TypeIt
              options={{ lifeLike: true, speed: 50 }}
              className="home-content-h1"
              as="h1"
            >
              Hi, I'm Dmytro
            </TypeIt>
            <p className="home-content-text mb-0">
              I'm an enthusiastic and detail-oriented Frontend Developer seeking
              an entry-level position to use my skills in coding,
              troubleshooting complex problems, and assisting in the timely
              completion of projects.
            </p>
            <div className="my-4">
              <div className="home-location d-flex mb-2">
                <Image src={locationIcon} className="location-icon me-2" />
                <p className="location-text mb-0">Kyiv, Ukraine</p>
              </div>
              <div className="home-hire d-flex">
                <div className="dot-emerald-container d-flex justify-content-center align-items-center me-2">
                  <div className="dot-emerald"></div>
                </div>
                <p className="hire-text mb-0">Available for hiring</p>
              </div>
            </div>
            <div className="d-flex">
              <a
                className="github-link"
                href="https://github.com/DmytroTruten"
                target={"_blank"}
              >
                <Image className="github-icon" src={githubIcon} />
              </a>
              <a
                className="linkedin-link mx-1"
                href="https://www.linkedin.com/in/dmytro-truten-950b2826a/"
                target={"_blank"}
              >
                <Image className="linkedin-icon" src={linkedinIcon} />
              </a>
              <a
                className="telegram-link"
                href="https://t.me/scratch_ed"
                target={"_blank"}
              >
                <Image className="telegram-icon" src={tgIcon} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
