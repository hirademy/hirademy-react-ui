import React, { useState } from 'react';
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function Header() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  
  const [isNavOpen, setIsNavOpen] = useState(false);
const navigate = useNavigate();
const handle =()=>{
  navigate("/dashboard")
}
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleGetStarted = () => {
    // Redirect to the Google Form URL after clicking the button
    window.location.href = "https://forms.gle/zcXM6YwiU4bwxmy1A";
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            hirademy
          </Link>
        </h1>
        <nav id="navbar" className={`navbar ${isNavOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link
                to="hero"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Programs
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <button className="getstarted" onClick={handleGetStarted}>
                    Get Started
                  </button>
                </li>
                <li>
                  <button className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
                    Logout
                  </button>
                </li>
                <li className="user-profile">
                  <img src={user.picture} alt="Profile" className="profile-pic" />
                  <RouterLink to="/dashboard" className="username">Welcome, {user.name}</RouterLink>
                </li>
              </>
            ) : (
              <li>
                <button className="login" onClick={loginWithRedirect}>Login</button>
                 <button className="login" onClick={handle}>Dashboard</button>
                
              </li>
              
            )}
          </ul>
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleNav}></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
