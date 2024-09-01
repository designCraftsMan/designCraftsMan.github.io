import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-5">
      <div className="d-flex align-items-start px-5 justify-content-between container m-auto">
        <div>
          <h4>Social Links</h4>
          <ul className="list-unstyled d-flex gap-3 mt-3">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white-50">
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white-50">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white-50">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white-50">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul className="list-unstyled mt-3">
          <li><Link to="/about" className="text-decoration-none text-white-50">About</Link></li>
          <li><Link to="/contact" className="text-decoration-none text-white-50">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul className="list-unstyled mt-3">
            <li><Link to="/community/privacy" className="text-decoration-none text-white-50">Privacy</Link></li>
            <li><Link to="/community/terms" className="text-decoration-none text-white-50">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul className="list-unstyled mt-3">
            <li><Link to="/faq" className="text-decoration-none text-white-50">FAQ</Link></li>
          </ul>
        </div>
      </div>
      <hr className="m-auto border border-primary border-3 my-5" />
      <div className=" container d-flex justify-content-between align-items-center">
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
