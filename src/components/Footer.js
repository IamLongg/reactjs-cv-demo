import React from "react";
import logo from "../assets/images/brodev.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box">
        <img src={logo} alt="logo" />
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="share">
          <li>
            <a href="/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
