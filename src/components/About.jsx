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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores doloremque repellendus ipsa nam delectus suscipit saepe
              porro veniam quis. Rerum officia incidunt magni optio dignissimos
              eligendi distinctio possimus laborum itaque!
            </p>
            <p className="about-content-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              atque harum eius. Asperiores, tempora eligendi ullam aperiam quos
              saepe, deleniti omnis dolor sed cumque alias voluptatibus illum
              cupiditate? Ad, architecto! Perspiciatis error dolor earum ea
              molestias eos. Ab quis unde fugit. Enim delectus quidem obcaecati
              optio deserunt. Odio quas debitis labore, soluta, placeat id
              dolore obcaecati magni deleniti ut in?
            </p>
            <p className="about-content-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores doloremque repellendus ipsa nam delectus suscipit saepe
              porro veniam quis.
            </p>
            <p className="about-content-text mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              enim, accusantium perferendis eum, facere laboriosam aperiam
              commodi eveniet distinctio fuga assumenda corrupti, dolorum omnis
              sed sint eos culpa dolores consequuntur?
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
