import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import githubIcon from "../assets/icons/github-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import "../styles/Navbar/Navbar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleNavItemClick = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setShow(false);
  };

  return (
    <Navbar expand="lg" className="pt-lg-4 pb-0">
      <Container>
        <Navbar.Brand className="mx-0">{`{Truten}`}</Navbar.Brand>
        <NavbarToggle
          aria-controls="offcanvasNavbar-expand-lg"
          onClick={() => setShow(true)}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          show={show}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Header closeButton className="justify-content-end" />

          <Offcanvas.Body className="justify-content-end">
            <Nav className="offcanvas-body-nav justify-content-between">
              <Nav.Item
                className="my-2 my-lg-0"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".home"));
                }}
              >
                Home
              </Nav.Item>
              <Nav.Item
                className="my-2 my-lg-0"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".about"));
                }}
              >
                About
              </Nav.Item>
              <Nav.Item
                className="my-2 my-lg-0"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".tech-stack"));
                }}
              >
                Tech Stack
              </Nav.Item>
              <Nav.Item
                className="my-2 my-lg-0"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".projects"));
                }}
              >
                Projects
              </Nav.Item>
              <Nav.Item className="my-2 my-lg-0">Contact</Nav.Item>
            </Nav>
            <Container className="navbar-socials-container d-flex justify-content-between my-3 my-lg-0 ms-lg-5 me-lg-0 px-0">
              <Nav.Link href="#">
                <Image
                  className="navbar-socials-icon"
                  src={githubIcon}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#">
                <Image
                  className="navbar-socials-icon"
                  src={twitterIcon}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#">
                <Image
                  className="navbar-socials-icon"
                  src={linkedInIcon}
                  alt=""
                />
              </Nav.Link>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
