import React from "react";
import logo from "../assets/images/imagelogo2.png";

const About = () => {
  const [about] = React.useState({
    subheading: "about me",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [main] = React.useState({
    subtitle: "hi there",
    pararaph1:
      "In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at \
      sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id \
      efficitur sagittis, urna est ultricies eros, ac porta sem turpis",
    pararaph2:
      " nunc id efficitur sagittis, urna est ultricies eros, ac porta sem \
        turpis porta sem turpis quis leo. Nulla in feugiat elit",
  });
  const [state] = React.useState([
    { id: 1, title: "name :", text: "nguyen duc long" },
    { id: 2, title: "email :", text: "longnguyen2431@gmail.com" },
    { id: 3, title: "phone :", text: "034563****" },
    { id: 4, title: "facebook :", text: "https://www.facebook.com/LongDN83" },
  ]);
  return (
    <section className="about" id="about">
      <div className="title">
        <h2 className="subheading">{about.subheading}</h2>
        <p className="details">{about.details}</p>
      </div>
      <div className="about-main">
        <div className="image">
          <img src={logo} />
        </div>
        <div className="about-main-content">
          <h3 className="subtitle">{main.subtitle}</h3>
          <p className="details">{main.pararaph1}</p>
          <p className="details">{main.pararaph2}</p>
          {state.map((info) => (
            <div className="about-main-content-info">
              <strong>{info.title}</strong>
              <p className="details">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
