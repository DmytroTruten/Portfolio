import githubIcon from "../assets/icons/github-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import "../styles/Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md pt-sm-5">
      <div className="inner-navbar container-fluid px-3 px-sm-5 px-xl-0">
        <p className="navbar-brand m-0">{`{Truten}`}</p>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav justify-content-between">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Tech Stack</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
          </ul>
          <div className="navbar-socials-container d-flex justify-content-between ms-5">
            <a href="#">
              <img className="navbar-socials-icon" src={githubIcon} alt="" />
            </a>
            <a href="#">
              <img className="navbar-socials-icon" src={twitterIcon} alt="" />
            </a>
            <a href="#">
              <img className="navbar-socials-icon" src={linkedInIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
