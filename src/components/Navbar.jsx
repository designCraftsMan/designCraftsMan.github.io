import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/courses/search/${query}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Immerse Logo" style={{ height: '40px' }} />
          <span className="fw-bolder m-2">Immerse</span>
        </Link>

        {/* Large Dropdown Menu */}
        <div className="dropdown mx-5 d-lg-inline d-none">
          <Link
            to="/courses/all"
            className="text-decoration-none text-white fs-5 dropdown-toggle"
            type="button"
            id="browseDropdown"
            aria-expanded="false"
          >
            Browse
          </Link>
          <div className="dropdown-menu" aria-labelledby="browseDropdown" style={{ minWidth: '600px' }}>
            <div className="row g-0">
              {/* Column 1 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Technology</h6>
                <Link className="dropdown-item" to="/courses/web-development">Web Development</Link>
                <Link className="dropdown-item" to="/courses/data-science">Data Science</Link>
                <Link className="dropdown-item" to="/courses/artificial-intelligence">Artificial Intelligence</Link>
                <Link className="dropdown-item" to="/courses/cybersecurity">CyberSecurity</Link>
              </div>
              {/* Column 2 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Business</h6>
                <Link className="dropdown-item" to="/courses/marketing">Marketing</Link>
                <Link className="dropdown-item" to="/courses/finance">Finance</Link>
                <Link className="dropdown-item" to="/courses/project-management">Project Management</Link>
              </div>
              {/* Column 3 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Science</h6>
                <Link className="dropdown-item" to="/courses/biology">Biology</Link>
                <Link className="dropdown-item" to="/courses/chemistry">Chemistry</Link>
                <Link className="dropdown-item" to="/courses/geology">Geology</Link>
                <Link className="dropdown-item" to="/courses/physics">Physics</Link>
              </div>
            </div>
          </div>
        </div>

        <form className="d-flex position-relative mx-5 order-lg-1 d-lg-inline d-none" role="search" style={{ width: '400px' }} onSubmit={handleSearch}>
          <input 
            className="form-control pe-5 bg-transparent text-white border-white placeholder-white" 
            type="search" 
            placeholder="What do you wanna learn?" 
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="fa-solid fa-magnifying-glass position-absolute fa-lg text-white bg-transparent border-0"
            style={{ right: '15px', top: '50%', cursor: 'pointer' }}
          ></button>
        </form>

        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-3">
              <Link className="nav-link fs-6 fw-bold" to="/sign-in">Sign In</Link>
            </li>
            <li className="nav-item bg-primary rounded">
              <Link className="nav-link fs-5   text-dark fw-bolder" to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
