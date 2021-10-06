import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import "./NavBar.style.css";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="mobile">
        <div className="navbar-logo-mobile">
          <Logo />
        </div>
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setShowLinks(!showLinks)}
        />
      </div>
      <div
        className={showLinks ? "navbar-container-mobile" : "navbar-container"}
      >
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="navbar-ul">
          <ul>
            <div className="shape"></div>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1500}
              >
                Projects
              </Link>
            </li>
            <li>
              <button>CONTACT</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
