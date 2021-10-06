import { Link } from "react-scroll";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ImPinterest } from "react-icons/im";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>sunnysside</h1>
      <div className="nav">
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
        </ul>
      </div>
      <div className="social-connections-icons">
        <ul>
          <li>
            <a href="/">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <ImPinterest />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
