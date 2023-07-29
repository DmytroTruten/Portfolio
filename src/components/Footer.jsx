import { Container, Row, Col, Image } from "react-bootstrap";
import copyrightIconLightVersion from "../assets/icons/lightMode/copyrightIcon.svg";
import copyrightIconDarkVersion from "../assets/icons/darkMode/copyrightIcon.svg";
import "../styles/Footer/Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container fluid className="footer py-4 px-0">
      <Row className="mx-0">
        <Col className="d-flex justify-content-center align-items-center px-0">
          <Image
            src={theme === "dark" ? copyrightIconDarkVersion : copyrightIconLightVersion}
            className="footer-copyright-icon me-2"
          />
          <p className="footer-text mb-0">
            {new Date().getFullYear()} |{" "}
            <a
              href="https://github.com/DmytroTruten/Portfolio"
              target={"_blank"}
              className="footer-text-underline"
            >
              coded
            </a>{" "}
            with ❤️️ by Dmytro Truten
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
