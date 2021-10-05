import "./NavBar.style.css";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/logo.svg";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-ul">
        <ul>
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
            <button>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
