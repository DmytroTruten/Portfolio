import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import menuIconLightVersion from "../assets/icons/lightMode/menuIcon.svg";
import menuIconDarkVersion from "../assets/icons/darkMode/menuIcon.svg";
import lightModeIcon from "../assets/icons/lightMode/lightModeIcon.svg";
import darkModeIconDarkVersion from "../assets/icons/darkMode/darkModeIcon.svg";
import closeIconLightVersion from "../assets/icons/lightMode/closeIcon.svg";
import closeIconDarkVersion from "../assets/icons/darkMode/closeIcon.svg";
import "../styles/Navbar/Navbar.css";
import { useEffect, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

function NavBar() {
  const [show, setShow] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const width = useWindowWidth();

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkTheme));
    if (darkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [darkTheme]);

  const handleToggleOffcanvas = () => {
    setShow((prevState) => !prevState);
  };

  const handleNavItemClick = (element) => {
    document
      .querySelector(element)
      .scrollIntoView({ behavior: "smooth", block: "start" });
    if (element === ".home-section" && !show) {
      return;
    }
    if (width < 992) {
      handleToggleOffcanvas();
    }
  };

  return (
    <Navbar expand="lg" className="p-3 px-lg-0" fixed="top">
      <Container className="navbar-inner-container p-0">
        <Navbar.Brand
          className="mx-0 py-0"
          onClick={() => {
            handleNavItemClick(".home-section");
          }}
        >{`<Truten />`}</Navbar.Brand>
        <NavbarToggle
          aria-controls="offcanvasNavbar-expand-lg"
          children={
            <Image
              src={darkTheme ? menuIconDarkVersion : menuIconLightVersion}
            />
          }
          onClick={handleToggleOffcanvas}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          scroll={true}
          restoreFocus={false}
          show={show}
          onHide={handleToggleOffcanvas}
        >
          <Offcanvas.Header>
            <Offcanvas.Title
              onClick={() => {
                handleNavItemClick(".home-section");
              }}
            >{`<Truten />`}</Offcanvas.Title>
            <div className="close-btn" onClick={handleToggleOffcanvas}>
              <Image
                src={darkTheme ? closeIconDarkVersion : closeIconLightVersion}
              />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className="align-items-center p-0">
            <Nav className="d-flex justify-content-lg-end p-3 p-lg-0">
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(".about-section");
                }}
              >
                About
              </Nav.Item>
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(".tech-stack-section");
                }}
              >
                Tech Stack
              </Nav.Item>
              <Nav.Item
                className="mb-3 me-lg-4 mb-lg-0 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(".projects-section");
                }}
              >
                Projects
              </Nav.Item>
              <Nav.Item
                className="me-lg-4 d-flex align-items-center"
                onClick={() => {
                  handleNavItemClick(".contacts-section");
                }}
              >
                Contact
              </Nav.Item>
            </Nav>
            {width >= 992 && <span className="navbar-divider"></span>}
            <Container className="navbar-action-container d-flex flex-column flex-lg-row justify-content-lg-end p-3 p-lg-0">
              <Container className="switch-theme-container d-flex justify-content-between justify-content-lg-end align-items-center px-0 mx-lg-0 me-lg-3 ms-lg-4">
                <p className="switch-theme-text m-0">Switch theme</p>
                <div
                  className="switch-theme-btn"
                  onClick={() => {
                    setDarkTheme((prevTheme) => !prevTheme);
                  }}
                >
                  <Image
                    src={darkTheme ? darkModeIconDarkVersion : lightModeIcon}
                  />
                </div>
              </Container>
              <button className="download-cv-btn mt-3 mt-lg-0 text-nowrap">
                Download CV
              </button>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
