import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import trutenImg from "../assets/trutenImg.jpg";
import TypeIt from "typeit-react";
import "../styles/Hero/Hero.css";
import { useRef } from "react";

function Hero() {
  const heroImgWrapperRef = useRef(null);
  const heroImgRef = useRef(null);

  return (
    <Container className="home pt-4 pt-sm-5">
      <Row className="pt-5">
        <Col
          className="hero-img-col d-flex"
          xs={{ span: 12, order: "first" }}
          sm={{ span: 6, order: "last" }}
        >
          <div className="hero-img-wrapper" ref={heroImgWrapperRef}>
            <Image className="hero-img" src={trutenImg} ref={heroImgRef} />
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: "last" }}
          sm={{ span: 6, order: "first" }}
          className="d-flex align-items-center"
        >
          <Row className="mx-0">
            <Col xs={{ span: 12 }} className="px-0">
              <h1 className="hero-h1">
                <TypeIt
                  getBeforeInit={(instance) => {
                    instance
                      .type("Hi,", { delay: 250 })
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
                      .type(" things for web", { delay: 250 })
                      .break()
                      .type(
                        "<code class='hero-code'><span class='code-function-name'>imageReveal<span class='code-parenthesis'>()<span class='semicolon'>;</span></span></span></code>",
                        {
                          delay: 500,
                        }
                      )
                      .exec(() => {
                        heroImgWrapperRef.current.className =
                          "hero-img-wrapper reveal";
                      })
                      .pause(1500)
                      .delete(14)
                      .type(
                        "<code class='hero-code'><span class='code-property'>padding:</span> <span class='property-value'>4px<span class='semicolon'>;</span></span></code>",
                        {
                          delay: 500,
                        }
                      )
                      .exec(() => {
                        heroImgWrapperRef.current.className =
                          "hero-img-wrapper reveal p-1";
                      })
                      .pause(1500)
                      .delete(13)
                      .type(
                        "<code class='hero-code'><span class='code-property'>border-radius:</span> <span class='property-value'>50%<span class='semicolon'>;</span></span></code>",
                        {
                          delay: 500,
                        }
                      )
                      .exec(() => {
                        heroImgRef.current.className =
                          "hero-img border-radius-50";
                        heroImgWrapperRef.current.className =
                          "hero-img-wrapper reveal border-radius-50 p-1";
                      })
                      .pause(1500)
                      .move(".semicolon", { to: "END" })
                      .delete(4)
                      .type(
                        "<code class='hero-code'><span class='property-value'>25%<span class='semicolon'>;</span></span></code>",
                        {
                          delay: 500,
                        }
                      )
                      .move(null, { to: "END", instant: true })
                      .exec(() => {
                        heroImgRef.current.className =
                          "hero-img border-radius-25";
                        heroImgWrapperRef.current.className =
                          "hero-img-wrapper reveal border-radius-25 p-1";
                      }).pause(1500)
                      .delete(20);
                    return instance;
                  }}
                />
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
