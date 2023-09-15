import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./index.css";

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">Eyesome made with &#10084; by OM</p>
    <div className="footer-icons-container">
      <a
        href="https://github.com/DEV-OMK"
        target="_top"
        className="footer-link"
      >
        <AiFillGithub className="footer-social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/omkumbhare"
        target="_top"
        className="footer-link"
      >
        <AiFillLinkedin className="footer-social-icon" />
      </a>
      <a
        href="https://twitter.com/omkumbhare"
        target="_top"
        className="footer-link"
      >
        <AiFillTwitterCircle className="footer-social-icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
