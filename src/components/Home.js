import React from "react";
import logo from "../assets/images/imagelogo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const Home = () => {
  const [state] = React.useState({
    title: "i'm Nguyen Duc Long ",
    text: "i am a frontend developer in the feature. i know about htlm css sass \
  javasript, especail reactjs ...",
  });
  return (
    <section className="home" id="home">
      <div className="home-main">
        <div className="home-main-box">
          <div className="home-main-box-share">
            <a className="link" href="#">
              <FaFacebookF />
            </a>
            <a className="link" href="#">
              <FaTwitter />
            </a>
            <a className="link" href="#">
              <FaInstagram />
            </a>
            <a className="link" href="#">
              <SiGmail />
            </a>
          </div>
          <h1 className="heading">{state.title}</h1>
          <p>{state.text}</p>
          <div className="info">
            <button className="btn">my portfolio</button>
            <a href="#" className="btn">
              <span>
                <IoLogoYoutube />
              </span>
            </a>
          </div>
        </div>
        <div className="home-main-image">
          <img src={logo} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
