import { Container, Row, Col, Image } from "react-bootstrap";
import Tag from "./Tag";
import mailIcon from "../assets/icons/mailIcon.svg";
import phoneIcon from "../assets/icons/phoneIcon.svg";
import copyIcon from "../assets/icons/copyIcon.svg";

function Contacts() {
  return (
    <Container fluid="sm" className="d-flex flex-column gap-4 gap-lg-5 px-sm-0">
      <Row className="d-flex flex-column mx-0">
        <Col className="d-flex justify-content-center mb-3 px-0">
          <Tag children={"Get in touch"} />
        </Col>
        <Col className="px-0">
          <p className="contacts-subtitle mb-0">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </Col>
      </Row>
      <Row className="d-flex flex-column mx-0">
        <Col className="d-flex justify-content-between mb-lg-3 px-0">
          <Image src={mailIcon}/>
          <p className="mb-0">dmitriy2503a@gmail.com</p>
          <Image src={copyIcon}/>
        </Col>
        <Col className="px-0">
          <p className="contacts-subtitle mb-0">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Contacts;
