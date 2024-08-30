import React from 'react';
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="footer p-5">
      <div className="footer-sections container ps-5">
        <div className="footer-column ps-5">
          <h4>Immerse</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-logo">
          <img src={logo} alt="Immerse Logo" />
          <span>Immerse</span>
        </div>
        <p>© Immerse, Inc. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
