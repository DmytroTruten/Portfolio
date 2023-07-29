import { useContext, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tag from "./Tag";
import mailIconLightVersion from "../assets/icons/lightMode/mailIcon.svg";
import mailIconDarkVersion from "../assets/icons/darkMode/mailIcon.svg";
import phoneIconLightVersion from "../assets/icons/lightMode/phoneIcon.svg";
import phoneIconDarkVersion from "../assets/icons/darkMode/phoneIcon.svg";
import copyIconLightVersion from "../assets/icons/lightMode/copyIcon.svg";
import copyIconDarkVersion from "../assets/icons/darkMode/copyIcon.svg";
import githubIconLightVersion from "../assets/icons/lightMode/githubIcon.svg";
import githubIconDarkVersion from "../assets/icons/darkMode/githubIcon.svg";
import linkedinIconLightVersion from "../assets/icons/lightMode/linkedinIcon.svg";
import linkedinIconDarkVersion from "../assets/icons/darkMode/linkedinIcon.svg";
import figmaIconLightVersion from "../assets/icons/lightMode/figmaIcon.svg";
import figmaIconDarkVersion from "../assets/icons/darkMode/figmaIcon.svg";
import "../styles/Contacts/Contacts.css";
import { ThemeContext } from "../context/ThemeContext";

function Contacts() {
  const { theme } = useContext(ThemeContext);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const email = "dmitriy2503a@gmail.com";
  const phone = "+380687880623";

  const handleCopyClick = (element) => {
    let textToCopy = element === "email" ? email : phone;
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (textToCopy === email) {
        setShowEmailTooltip(true);
        setTimeout(() => {
          setShowEmailTooltip(false);
        }, 1000);
      } else {
        setShowPhoneTooltip(true);
        setTimeout(() => {
          setShowPhoneTooltip(false);
        }, 1000);
      }
    });
  };

  return (
    <Container fluid className="contacts-section px-sm-0">
      <Container className="d-flex flex-column gap-4 gap-lg-5">
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
            <Image
              className="contacts-icon"
              src={
                theme === "dark" ? mailIconDarkVersion : mailIconLightVersion
              }
            />
            <p className="contacts-email mb-0">{email}</p>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="copy-tooltip">Copied</Tooltip>}
              trigger="click"
              show={showEmailTooltip}
            >
              <Image
                className="copy-icon"
                src={
                  theme === "dark" ? copyIconDarkVersion : copyIconLightVersion
                }
                onClick={() => {
                  handleCopyClick("email");
                }}
              />
            </OverlayTrigger>
          </Col>
          <Col className="contacts-phone-col d-flex gap-3 px-0">
            <Image
              className="contacts-icon"
              src={
                theme === "dark" ? phoneIconDarkVersion : phoneIconLightVersion
              }
            />
            <p className="contacts-phone mb-0">{phone}</p>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="copy-tooltip">Copied</Tooltip>}
              trigger="click"
              show={showPhoneTooltip}
            >
              <Image
                className="copy-icon"
                src={
                  theme === "dark" ? copyIconDarkVersion : copyIconLightVersion
                }
                onClick={() => {
                  handleCopyClick("phone");
                }}
              />
            </OverlayTrigger>
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
              <Image
                className="github-icon"
                src={
                  theme === "dark"
                    ? githubIconDarkVersion
                    : githubIconLightVersion
                }
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dmytro-truten-950b2826a/"
              target={"_blank"}
            >
              <Image
                className="linkedin-icon mx-1"
                src={
                  theme === "dark"
                    ? linkedinIconDarkVersion
                    : linkedinIconLightVersion
                }
              />
            </a>
            <Image
              className="figma-icon"
              src={
                theme === "dark" ? figmaIconDarkVersion : figmaIconLightVersion
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;
