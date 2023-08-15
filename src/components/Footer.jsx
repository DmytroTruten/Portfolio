import { useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import copyrightIcon from "../assets/icons/copyrightIcon.svg";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Footer/Footer.css";

function Footer() {
  const { languageData } = useContext(LanguageContext);
  return (
    <Container fluid className="footer py-4 px-0">
      <Row className="mx-0">
        <Col className="d-flex justify-content-center align-items-center px-0">
          <Image src={copyrightIcon} className="copyright-icon me-2" />
          <p className="footer-text mb-0">
            {new Date().getFullYear()} |{" "}
            <a
              href="https://github.com/DmytroTruten/Portfolio"
              target={"_blank"}
              className="footer-text-underline"
            >
              {languageData["coded"]}
            </a>{" "}
            {languageData["with"]}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
