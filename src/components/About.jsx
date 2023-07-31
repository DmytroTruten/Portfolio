import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "./Tag";
import trutenImg from "../assets/trutenImg.jpg";
import "../styles/About/About.css";

function About() {
  return (
    <Container fluid className="about-section px-sm-0">
      <Container className="px-0">
        <Row className="about-tag-row mb-4 mb-md-5 mx-0 p-lg-0">
          <Col className="d-flex justify-content-center px-0">
            <Tag children={"About me"} />
          </Col>
        </Row>
        <Row className="about-content-row d-flex flex-column flex-md-row mx-0 p-lg-0">
          <Col className="about-img-col d-flex align-items-center align-items-md-start flex-column flex-md-row px-0">
            <Image src={trutenImg} className="about-img" />
            <div className="about-img-background"></div>
          </Col>
          <Col className="about-text-col px-0">
            <h1 className="about-content-h1 mb-4">
              Curious about me? Here you have it:
            </h1>
            <p className="about-content-text">
              I'm a passionate and creative frontend developer with a year of
              hands-on experience. Welcome to my portfolio website, where I
              showcase my journey in the world of web development.
            </p>
            <p className="about-content-text">
              I started getting into coding about 3 years ago, it evolved into a
              deep interest in web development. I spent countless hours working
              with HTML, CSS, and JavaScript, eager to bring my imagination to
              life on the digital canvas. My passion for frontend development
              led me to explore modern frameworks and libraries such as React,
              Redux, empowering me to craft intuitive, responsive, and visually
              appealing user interfaces.
            </p>
            <p className="about-content-text">
              In the past year, I embarked on a remarkable journey of honing my
              skills as a frontend developer. Though my experience may be
              non-commercial, it has been rich with personal projects, coding
              challenges, and collaborating with like-minded enthusiasts. This
              exposure has allowed me to grasp the intricacies of web
              development and adopt best practices to create seamless user
              experiences.
            </p>
            <p className="about-content-text">
              The ever-evolving nature of frontend development excites me. Every
              day, there's something new to learn, a creative challenge to
              overcome, or a cutting-edge technology to explore. I thrive on
              staying updated with the latest trends and emerging tools,
              enabling me to push the boundaries of what's possible in the
              digital realm.
            </p>
            <q className="fst-italic">
              Doing what you love is freedom, And loving what you do is
              happiness.
            </q>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
