import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import agencyThumbnail from "../assets/thumbnails/agency-thumbnail.jpg";
import weatherThumbnail from "../assets/thumbnails/weather-thumbnail.jpg";
import interiorThumbnail from "../assets/thumbnails/interior-thumbnail.jpg";
import reactChatThumbnail from "../assets/thumbnails/react-chat-thumbnail.jpg";
import chainIcon from "../assets/icons/chain-icon.svg";
import githubIcon from "../assets/icons/github-tech-stack-icon.svg";
import "../styles/Projects/Projects.css";

function Projects() {
  const cardTitleArray = [
    "Interior Design Studio",
    "Weather App",
    "Creative Agency",
    "React Chat",
  ];
  const cardTextArray = [
    "Landing page of an imaginary company that provides services in: interior design, decorative services, space planning and project management.",
    "Simple app that allows users to search for weather information by city name. It uses the OpenWeather API to retrieve weather data, displays the current weather conditions.",
    "The Creative Agency is a landing page of an imaginary company that offers a creative strategy to achieve business goals, create engaging content for your brand.",
    "Real-time chat application, allows users to communicate instantly, without the need to refresh the page. This creates an interactive experience with the app.",
  ];

  const techStackArray = [
    "HTML, SCSS, JavaScript, JQuery, Bootstrap",
    "React.js, SCSS, Moment.js, React-Bootstrap",
    "React.js, SCSS, Bootstrap",
    "React.js, Redux, SCSS, Firebase, Moment.js",
  ];

  const projectPreviewLinks = [
    "https://dmytrotruten.github.io/Interior-Design-Studio/",
    "https://dmytrotruten.github.io/Weather-App/",
    "https://dmytrotruten.github.io/Creative-Agency/",
    "https://dmytrotruten.github.io/React-Chat/",
  ];

  const projectCodeLinks = [
    "https://github.com/DmytroTruten/Interior-Design-Studio",
    "https://github.com/DmytroTruten/Weather-App",
    "https://github.com/DmytroTruten/Creative-Agency",
    "https://github.com/DmytroTruten/React-Chat",
  ];

  return (
    <Container className="projects pt-5">
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Projects</h2>
        </Col>
        <Col xs={12}>
          <h4 className="text-center">Things I&apos;ve built so far</h4>
        </Col>
      </Row>
        <Row xs={1} sm={2} lg={3} className="pt-5">
          {[
            interiorThumbnail,
            weatherThumbnail,
            agencyThumbnail,
            reactChatThumbnail,
          ].map((thumbnail, index) => (
            <Col key={index} className="py-2">
              <Card>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                  <Card.Title>{cardTitleArray[index]}</Card.Title>
                  <Card.Text>{cardTextArray[index]}</Card.Text>
                  <Card.Text className="card-text-tech-stack">
                    <span>Tech Stack:</span> {techStackArray[index]}
                  </Card.Text>
                  <Row>
                    <Col>
                      <Image className="card-footer-icon" src={chainIcon} />
                      <Card.Link target={"blank"} href={projectPreviewLinks[index]} className="ps-2">
                        Live Preview
                      </Card.Link>
                    </Col>
                    <Col>
                      <Image className="card-footer-icon" src={githubIcon} />
                      <Card.Link target={"blank"} href={projectCodeLinks[index]} className="ps-2">
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
