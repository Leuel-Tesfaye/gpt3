import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links-container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#whatGpt3">What Is Gpt3</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
