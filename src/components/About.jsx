import { Container, Row, Col } from "react-bootstrap";
import TypeIt from "typeit-react";
import "../styles/About/About.css";

function About() {
  return (
    <Container className="about-section pt-5">
      <Row className="pt-4">
        <Col xs={12}>
          <TypeIt
            className="about-header-container mb-0"
            as="h1"
            options={{ waitUntilVisible: true }}
            getAfterInit={(instance) => {
              instance.type("<span class='about-header'>About</span>", {
                delay: 500,
              });
              return instance;
            }}
          />
        </Col>
        <Col>
          <p>
            I have a strong passion for creating efficient and visually
            appealing web interfaces. With my experience, I specialize in
            developing dynamic and responsive websites using the latest frontend
            technologies. Over the past year, I have worked on several projects
            where I utilized HTML, CSS, and JavaScript to create attractive and
            user-friendly interfaces. I pay meticulous attention to detail and
            strive to deliver maximum functionality. I focus on providing a
            user-friendly interface that is both appealing and functional. Apart
            from working on projects, I am constantly seeking to enhance my
            skills. I stay updated with the latest frontend trends and
            technologies, allowing me to improve the quality of my work and
            achieve impressive results. I am always ready to take on new
            challenges and collaborate with teams to achieve common goals. I am
            open to new projects and opportunities that will help me grow and
            expand my knowledge in frontend development.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
