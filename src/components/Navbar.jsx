import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import menuIcon from "../assets/icons/menuIcon.svg";
import lightModeIcon from "../assets/icons/lightModeIcon.svg";
import closeIcon from "../assets/icons/closeIcon.svg";
import "../styles/Navbar/Navbar.css";

function NavBar() {
  const handleNavItemClick = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Navbar expand="lg" className="p-3">
      <Container className="px-0">
        <Navbar.Brand className="mx-0 py-0">{`<Truten />`}</Navbar.Brand>
        <NavbarToggle
          aria-controls="offcanvasNavbar-expand-lg"
          children={<Image src={menuIcon} />}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header>
            <Offcanvas.Title>{`<Truten />`}</Offcanvas.Title>
            <div className="close-btn">
              <Image src={closeIcon} />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className="p-0">
            <Nav className="p-3">
              <Nav.Item
                className="d-flex mb-3"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".hero-section"));
                }}
              >
                Home
              </Nav.Item>
              <Nav.Item
                className="d-flex mb-3"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".about-section"));
                }}
              >
                About
              </Nav.Item>
              <Nav.Item
                className="d-flex mb-3"
                onClick={() => {
                  handleNavItemClick(
                    document.querySelector(".tech-stack-section")
                  );
                }}
              >
                Tech Stack
              </Nav.Item>
              <Nav.Item
                className="d-flex mb-3"
                onClick={() => {
                  handleNavItemClick(
                    document.querySelector(".projects-section")
                  );
                }}
              >
                Projects
              </Nav.Item>
              <Nav.Item className="d-flex">Contact</Nav.Item>
            </Nav>
            <Container className="navbar-action-container p-3">
              <Container className="d-flex justify-content-between align-items-center px-0">
                <p className="switch-theme-text m-0">Switch theme</p>
                <div className="switch-theme-btn">
                  <Image src={lightModeIcon} />
                </div>
              </Container>
              <Button className="download-cv-btn mt-3 px-3">Download CV</Button>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
