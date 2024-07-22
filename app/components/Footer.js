import React from "react";
import FooterStyles from "./Footer.css";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* <img src="your-logo.png" alt="Logo" /> */}
        <div className="social-icons">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
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
