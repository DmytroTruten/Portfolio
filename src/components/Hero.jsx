import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import trutenImg from "../assets/trutenImg.jpg";
import "../styles/Hero/Hero.css";

function Hero() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Col xs={12}>
              <h1 className="hero-h1">Hi,</h1>
            </Col>
            <Col xs={12}>
              <h1 className="hero-h1">My name is</h1>
            </Col>
            <Col xs={12}>
              <h1 className="hero-h1 hero-name">Dmytro Truten</h1>
            </Col>
            <Col xs={12}>
              <h1 className="hero-h1">I build things for web</h1>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 12, order: "first" }} className="px-3">
          <Container className="hero-img-container px-0 d-flex justify-content-center">
            <div className="hero-img-wrapper">
              <Image className="hero-img" src={trutenImg} roundedCircle />
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
