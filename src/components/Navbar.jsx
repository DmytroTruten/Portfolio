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
    <Navbar expand="lg" className="p-3 px-lg-0">
      <Container className="navbar-inner-container p-0">
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
            <Nav className="d-flex justify-content-lg-end p-3 p-lg-0">
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".hero-section"));
                }}
              >
                Home
              </Nav.Item>
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(document.querySelector(".about-section"));
                }}
              >
                About
              </Nav.Item>
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(
                    document.querySelector(".tech-stack-section")
                  );
                }}
              >
                Tech Stack
              </Nav.Item>
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(
                    document.querySelector(".projects-section")
                  );
                }}
              >
                Projects
              </Nav.Item>
              <Nav.Item className="me-lg-4 d-flex align-items-center">
                Contact
              </Nav.Item>
            </Nav>
            <Container className="navbar-action-container d-flex flex-column flex-lg-row justify-content-lg-end p-3 p-lg-0">
              <Container className="switch-theme-container d-flex justify-content-between justify-content-lg-end align-items-center px-0 mx-lg-0 me-lg-3 ms-lg-4">
                <p className="switch-theme-text m-0">Switch theme</p>
                <div className="switch-theme-btn">
                  <Image src={lightModeIcon} />
                </div>
              </Container>
              <Button className="download-cv-btn mt-3 mt-lg-0 px-3 text-nowrap">
                Download CV
              </Button>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
