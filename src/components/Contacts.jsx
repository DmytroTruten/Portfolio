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
  const email = "dmitriy2503a@gmail.com";
  const phone = "+380687880623";

  const copyToClipboard = (element) => {
    element === "email"
      ? navigator.clipboard.writeText(email)
      : navigator.clipboard.writeText(phone);
  };

  return (
    <Container
      fluid="sm"
      className="contacts-section d-flex flex-column gap-4 gap-lg-5 px-sm-0"
    >
      <Row className="d-flex flex-column mx-0">
        <Col className="d-flex justify-content-center mb-3 px-0">
          <Tag children={"Get in touch"} />
        </Col>
        <Col className="px-0 d-flex justify-content-center">
          <p className="contacts-subtitle mb-0 text-center">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center mx-0 gap-1 gap-lg-3">
        <Col className="contacts-email-col d-flex gap-3 px-0">
          <Image className="contacts-icon" src={mailIcon} />
          <p className="contacts-email mb-0">{email}</p>
          <Image
            className="copy-icon"
            src={copyIcon}
            onClick={() => {
              copyToClipboard("email");
            }}
          />
        </Col>
        <Col className="contacts-phone-col d-flex gap-3 px-0">
          <Image className="contacts-icon" src={phoneIcon} />
          <p className="contacts-phone mb-0">{phone}</p>
          <Image
            className="copy-icon"
            src={copyIcon}
            onClick={() => {
              copyToClipboard("phone");
            }}
          />
        </Col>
      </Row>
      <Row className="d-flex flex-column mx-0">
        <Col className="mb-lg-3 px-0">
          <p className="contacts-body2 mb-0 text-center">
            You may also find me on these platforms!
          </p>
        </Col>
        <Col className="d-flex justify-content-center px-0">
          <a href="https://github.com/DmytroTruten" target={"_blank"}>
            <Image className="github-icon" src={githubIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/dmytro-truten-950b2826a/"
            target={"_blank"}
          >
            <Image className="linkedin-icon mx-1" src={linkedinIcon} />
          </a>
          <Image className="figma-icon" src={figmaIcon} />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
