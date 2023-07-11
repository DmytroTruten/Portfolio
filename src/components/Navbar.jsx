import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Image from "react-bootstrap/Image";
import githubIcon from "../assets/icons/github-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import "../styles/Navbar/Navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="pt-lg-5">
      <Container className="px-3 px-sm-0">
        <Navbar.Brand className="mx-0">{`{Truten}`}</Navbar.Brand>
        <NavbarToggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-between">
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>About</Nav.Item>
            <Nav.Item>Tech Stack</Nav.Item>
            <Nav.Item>Projects</Nav.Item>
            <Nav.Item>Contact</Nav.Item>
          </Nav>
          <Container className="navbar-socials-container d-flex justify-content-between ms-5 me-0 px-0">
            <Nav.Link href="#">
              <Image className="navbar-socials-icon" src={githubIcon} alt="" />
            </Nav.Link>
            <Nav.Link href="#">
              <Image className="navbar-socials-icon" src={twitterIcon} alt="" />
            </Nav.Link>
            <Nav.Link href="#">
              <Image
                className="navbar-socials-icon"
                src={linkedInIcon}
                alt=""
              />
            </Nav.Link>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
