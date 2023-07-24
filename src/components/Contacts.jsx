import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "./Tag";
import mailIcon from "../assets/icons/mailIcon.svg";
import phoneIcon from "../assets/icons/phoneIcon.svg";
import copyIcon from "../assets/icons/copyIcon.svg";
import githubIcon from "../assets/icons/githubIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import figmaIcon from "../assets/icons/figmaIcon.svg";
import "../styles/Contacts/Contacts.css";

function Contacts() {
  return (
    <Container fluid="sm" className="contacts-section d-flex flex-column gap-4 gap-lg-5 px-sm-0">
      <Row className="d-flex flex-column mx-0">
        <Col className="d-flex justify-content-center mb-3 px-0">
          <Tag children={"Get in touch"} />
        </Col>
        <Col className="px-0">
          <p className="contacts-subtitle mb-0 text-center">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center mx-0">
        <Col className="contacts-email-col d-flex mb-1 mb-lg-3 px-0">
          <Image src={mailIcon} />
          <p className="contacts-email mx-3 mb-0">dmitriy2503a@gmail.com</p>
          <Image src={copyIcon} />
        </Col>
        <Col className="contacts-phone-col d-flex flex-px-0">
          <Image src={phoneIcon} />
          <p className="contacts-phone mx-3 mb-0">+380687880623</p>
          <Image src={copyIcon} />
        </Col>
      </Row>
      <Row className="d-flex flex-column mx-0">
        <Col className="mb-lg-3 px-0">
          <p className="contacts-body2 mb-0 text-center">You may also find me on these platforms!</p>
        </Col>
        <Col className="d-flex justify-content-center px-0">
            <Image className="github-icon" src={githubIcon} />
            <Image className="linkedin-icon" src={linkedinIcon} />
            <Image className="figma-icon" src={figmaIcon} />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
