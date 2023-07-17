import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import trutenImg from "../assets/trutenImg.jpg";
import TypeIt from "typeit-react";
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
            <Image className="hero-img" src={trutenImg} />
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: "last" }}
          sm={{ span: 6, order: "first" }}
          className="d-flex align-items-center"
        >
          <Row className="mx-0">
            <Col xs={{ span: 12 }} className=" hero-h1-col px-0">
              <h1 className="hero-h1">
                <TypeIt
                  getBeforeInit={(instance) => {
                    instance
                      .type("Hi<", { delay: 250 })
                      .delete(1)
                      .type(",", { delay: 250 })
                      .break()
                      .type("My name is", { delay: 250 })
                      .break()
                      .type("Dmytro", { delay: 500 })
                      .delete(6, { delay: 250 })
                      .type("<span class='hero-name'>{Dmytro Truten}</span>", {
                        delay: 250,
                      })
                      .break()
                      .type("Ibuild", { delay: 250 })
                      .move(-5)
                      .type(" ", { delay: 250 })
                      .move(null, { to: "END", instant: true })
                      .type(" things for wegb", { delay: 250 })
                      .move(-1)
                      .delete(1)
                      .move(1);
                    return instance;
                  }}
                ></TypeIt>
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
