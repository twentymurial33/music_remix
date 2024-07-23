import FooterStyles from "./Footer.css";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="social-icons">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Support</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

export function links() {
  return [{ rel: "stylesheet", href: FooterStyles }];
}