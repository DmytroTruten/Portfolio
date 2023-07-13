import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import cardImgExample from "../assets/card-img-example.svg";
import chainIcon from "../assets/icons/chain-icon.svg";
import githubIcon from "../assets/icons/github-tech-stack-icon.svg";
import "../styles/Projects/Projects.css";

function Projects() {
  return (
    <Container className="pt-5">
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Projects</h2>
        </Col>
        <Col xs={12}>
          <h3 className="text-center">Things I&apos;ve built so far</h3>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} className="g-4 pt-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={cardImgExample} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text className="card-text-tech-stack">
                  <span>Tech Stack:</span> HTML,
                  Javascript, Sass, React
                </Card.Text>
                <Row>
                  <Col>
                    <Image className="card-footer-icon" src={chainIcon} />
                    <Card.Link href="#" className="ps-2">
                      Live Preview
                    </Card.Link>
                  </Col>
                  <Col>
                    <Image className="card-footer-icon" src={githubIcon} />
                    <Card.Link href="#" className="ps-2">
                      View Code
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
