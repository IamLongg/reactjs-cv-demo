import React from "react";

const Skills = () => {
  const [skills] = React.useState({
    subheading: "My skills",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [content] = React.useState({
    heading: "i'm expert on ",
    subtitle: "let's work together",
    details:
      "Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    button: "hire me now",
  });

  return (
    <section className="skills" id="skills">
      <div className="title">
        <h2 className="subheading">{skills.subheading}</h2>
        <p className="details">{skills.details}</p>
      </div>
      <div className="skills-main">
        <div className="content">
          <h1 className="heading">{content.heading}</h1>
          <h3 className="subtitle">{content.subtitle}</h3>
          <p className="details">{content.details}</p>
          <a href="#" className="btn">
            {content.button}
          </a>
        </div>
        <div className="parameter">
          <div className="language">
            <p className="details">html</p>
            <div style={{ width: "90%" }}></div>
            <span className="skill-count" style={{ left: "86%" }}>
              90%
            </span>
          </div>

          <div className="language">
            <p className="details">sass</p>
            <div style={{ width: "85%" }}></div>
            <span className="skill-count" style={{ left: "77%" }}>
              85%
            </span>
          </div>

          <div className="language">
            <p className="details">css</p>
            <div style={{ width: "88%" }}></div>
            <span className="skill-count" style={{ left: "83%" }}>
              88%
            </span>
          </div>

          <div className="language">
            <p className="details">reactjs</p>
            <div style={{ width: "69%" }}></div>
            <span className="skill-count" style={{ left: "63%" }}>
              69%
            </span>
          </div>

          <div className="language">
            <p className="details">javascript</p>
            <div style={{ width: "76%" }}></div>
            <span className="skill-count" style={{ left: "72%" }}>
              76%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
