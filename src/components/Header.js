import React from "react";
import logo from "../assets/images/brodev.png";
import { GoThreeBars } from "react-icons/go";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" />
        <ul className="navigation">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#blogs">blogs</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <div className="navbar">
          <GoThreeBars />
        </div>
        {/* <div className="close">
           <span className="line1"></span>
           <span className="line1"></span>
           <span className="line1"></span>
        </div> */}
      </header>
    );
  }
}

export default Header;
