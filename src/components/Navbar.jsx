import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid mx-3">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Immerse Logo" style={{ height: '40px' }} />
          <span className="fw-bolder m-2">Immerse</span>
        </a>
        
        <a className="nav-link mx-5 d-lg-inline d-none" href="#">Browse <i className="fa-solid fa-chevron-down text-white"></i></a>

        <form className="d-flex position-relative mx-5 order-lg-1 d-lg-inline d-none" role="search" style={{ width: '400px' }}>
          <input 
            className="form-control pe-5" 
            type="search" 
            placeholder="What do you wanna learn?" 
            aria-label="Search" 
          />
          <i 
            className="fa-solid fa-magnifying-glass position-absolute" 
            style={{ right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', cursor: 'pointer' }}
          ></i>
        </form>

        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-3">
              <a className="nav-link fs-6" href="#">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
