import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS for dropdown functionality
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid mx-3">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Immerse Logo" style={{ height: '40px' }} />
          <span className="fw-bolder m-2">Immerse</span>
        </a>

        {/* Large Dropdown Menu */}
        <div className="dropdown mx-5 d-lg-inline d-none">
          <a
          href="courses"
            className="text-decoration-none text-white fs-5 dropdown-toggle" 
            type="button" 
            id="browseDropdown" 
            aria-expanded="false"
          >
            Browse
          </a>
          <div className="dropdown-menu" aria-labelledby="browseDropdown" style={{ minWidth: '600px' }}>
            <div className="row g-0">
              {/* Column 1 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Technology</h6>
                <a className="dropdown-item" href="#">Web Development</a>
                <a className="dropdown-item" href="#">Data Science</a>
                <a className="dropdown-item" href="#">Artificial Intelligence</a>
                <a className="dropdown-item" href="#">CyberSecurity</a>
              </div>
              {/* Column 2 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Business</h6>
                <a className="dropdown-item" href="#">Marketing</a>
                <a className="dropdown-item" href="#">Finance</a>
                <a className="dropdown-item" href="#">Project Management</a>
              </div>
              {/* Column 3 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Science</h6>
                <a className="dropdown-item" href="#">Biology</a>
                <a className="dropdown-item" href="#">Chemistry</a>
                <a className="dropdown-item" href="#">Geology</a>
                <a className="dropdown-item" href="#">Physics</a>
              </div>
            </div>
          </div>
        </div>

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
              <a className="nav-link fs-6" href="http://localhost:5174/sign-in">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="http://localhost:5174/sign-up">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;