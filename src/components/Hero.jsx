import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import trutenImg from "../assets/trutenImg.jpg";
import "../styles/Hero/Hero.css";

function Hero() {
  return (
    <Container className="home pt-4 pt-sm-5">
      <Row className="pt-5">
        <Col
          className="hero-img-col d-flex"
          xs={{ span: 12, order: "first" }}
          sm={{ span: 6, order: "last" }}
        >
          <div className="hero-img-wrapper">
            <Image className="hero-img" src={trutenImg} roundedCircle />
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: "last" }}
          sm={{ span: 6, order: "first" }}
          className="d-flex align-items-center"
        >
          <Row className="mx-0">
            <Col xs={{ span: 12 }} className=" hero-h1-col px-0">
              <h1 className="hero-h1">Hi,</h1>
            </Col>
            <Col xs={{ span: 12 }} className=" hero-h1-col px-0">
              <h1 className="hero-h1">My name is</h1>
            </Col>
            <Col xs={{ span: 12 }} className=" hero-h1-col px-0">
              <h1 className="hero-h1 hero-name">Dmytro Truten</h1>
            </Col>
            <Col xs={{ span: 12 }} className=" hero-h1-col px-0">
              <h1 className="hero-h1">I build things for web</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
