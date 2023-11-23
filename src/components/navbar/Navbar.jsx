import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
const Menu = () => {
  <>
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
  </>;
};
// BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links-container">
            <Menu />
          </div>
          <div className="gpt3__navbar-sign">
            <p>Sign In</p>
            <button type="button">Sign Up</button>
          </div>
          <div className="gpt3__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="gpt3__navbar-container scale-up-center">
                <div className="gpt3__navbar-menu-container-links">
                  <Menu />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
