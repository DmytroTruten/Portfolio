import { Container, Row, Col, Image } from "react-bootstrap";
import trutenImg from "../assets/trutenImg.jpg";
import locationIcon from "../assets/icons/locationIcon.svg";
import githubIcon from "../assets/icons/githubIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import figmaIcon from "../assets/icons/figmaIcon.svg";
import "../styles/Home/Home.css";

function Home() {
  return (
    <Container fluid className="home-section px-sm-0">
      <Container className="px-0">
        <Row className="home-row d-flex flex-column flex-md-row-reverse mx-0 p-lg-0">
          <Col className="home-img-col d-flex justify-content-center justify-content-md-end align-items-md-end px-0">
            <Image src={trutenImg} className="home-img" />
            <div className="home-img-background"></div>
          </Col>
          <Col className="home-content-col mt-md-0 px-0">
            <h1 className="home-content-h1">Hi, I'm Dmytro</h1>
            <p className="home-content-text mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              officia iusto reprehenderit praesentium optio, velit
              necessitatibus commodi sapiente mollitia nihil? A ad porro
              doloremque harum quia, voluptates numquam accusamus reprehenderit!
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
                <p className="hire-text mb-0">Available for new projects</p>
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
              <a className="figma-link">
                <Image className="figma-icon" src={figmaIcon} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
