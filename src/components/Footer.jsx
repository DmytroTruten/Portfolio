import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import githubIcon from "../assets/icons/blue-github-icon.svg";
import twitterIcon from "../assets/icons/blue-twitter-icon.svg";
import linkedInIcon from "../assets/icons/blue-linkedin-icon.svg";
import "../styles/Footer/Footer.css";
import { useState, useEffect } from "react";
function Footer() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowWidth() {
    return window.innerWidth;
  }

  return (
    <Container className="pt-5">
      <Row>
        <Col className="d-flex justify-content-between flex-wrap" xs={12}>
          <p className="footer-brand me-3 mx-md-0 my-md-0">{`${"{Truten}"}`}</p>
          <div className="d-flex align-items-center">
            {windowWidth > 768 && (
              <>
                <p className="footer-contacts mb-0">+380687880623</p>
                <p className="footer-contacts mx-5 mb-0">
                  dmitriy2503a@gmail.com
                </p>
              </>
            )}
            <div className="navbar-socials-container d-flex justify-content-between px-0 mb-3 mx-md-0 my-md-0">
              <Nav.Link href="#">
                <Image
                  className="navbar-socials-icon"
                  src={githubIcon}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#">
                <Image
                  className="navbar-socials-icon"
                  src={twitterIcon}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#">
                <Image
                  className="navbar-socials-icon"
                  src={linkedInIcon}
                  alt=""
                />
              </Nav.Link>
            </div>
          </div>
        </Col>
        <Col>
          {windowWidth <= 768 && (
            <div className="d-flex justify-content-between flex-wrap">
              <p className="footer-contacts me-3 mb-0">+380687880623</p>
              <p className="footer-contacts mb-0">dmitriy2503a@gmail.com</p>
            </div>
          )}
          <span className="footer-divider my-4"></span>
        </Col>
        <Col xs={12} className="mb-3">
          <Nav className="justify-content-between">
            <Nav.Item className="footer-nav-item">Home</Nav.Item>
            <Nav.Item className="footer-nav-item">About</Nav.Item>
            <Nav.Item className="footer-nav-item">Tech Stack</Nav.Item>
            <Nav.Item className="footer-nav-item">Projects</Nav.Item>
            <Nav.Item className="footer-nav-item">Contact</Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
