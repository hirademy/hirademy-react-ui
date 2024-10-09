// Header.js
import React, { useState } from 'react';
import { Link } from "react-scroll";


function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
        <h1 className="logo ">
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
                Internships
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
            <li class="dropdown"><a href="#"><span>Coming Soon</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Other Intern Roles</a></li>
                <li><a href="#">Colleges</a></li>
                <li><a href="#">Recruiters</a></li>
                <li><a href="#">Companies/Clients</a></li>
                <li><a href="#">Investors</a></li>
                </ul>
                </li>
            <li>
              <Link
                to="programs">
              <button className="getstarted" >
                Get Started
              </button>
              </Link>
            </li>
          </ul>
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleNav}></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
