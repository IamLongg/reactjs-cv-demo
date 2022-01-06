import React from "react";
import img1 from "../assets/images/portfolio-1.jpg";
import img2 from "../assets/images/portfolio-2.jpeg";
import img3 from "../assets/images/portfolio-3.jpeg";
import img4 from "../assets/images/portfolio-4.jpeg";
import img5 from "../assets/images/portfolio-5.jpeg";
import img6 from "../assets/images/portfolio-6.jpeg";
import img7 from "../assets/images/portfolio-7.jpeg";
import img8 from "../assets/images/portfolio-8.jpeg";

const Portfolio = () => {
  const [portfolio] = React.useState({
    subheading: "portfolio showcase",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });

  const [lists] = React.useState([
    {
      id: 1,
      title: "all works",
    },
    {
      id: 2,
      title: "art direction",
    },
    {
      id: 3,
      title: "branding",
    },
    {
      id: 4,
      title: "design",
    },
    {
      id: 5,
      title: "web",
    },
  ]);

  const [image] = React.useState([
    {
      id: 1,
      img: img1,
      heading: "art direction",
      subheading: "rock",
    },
    {
      id: 2,
      img: img2,
      heading: "branding",
      subheading: "in time",
    },
    {
      id: 3,
      img: img3,
      heading: "design",
      subheading: "mockup",
    },
    {
      id: 4,
      img: img4,
      heading: "web",
      subheading: "treasure",
    },
    {
      id: 5,
      img: img5,
      heading: "design",
      subheading: "pencial",
    },
    {
      id: 6,
      img: img6,
      heading: "art direction",
      subheading: "dali note",
    },
    {
      id: 7,
      img: img7,
      heading: "branding",
      subheading: "handcraft",
    },
    {
      id: 8,
      img: img8,
      heading: "web",
      subheading: "focus",
    },
  ]);
  return (
    <section className="portfolio" id="portfolio">
      <div className="title">
        <h2 className="subheading">{portfolio.subheading}</h2>
        <p className="details">{portfolio.details}</p>
      </div>
      <ul className="portfolio-lists">
        {lists.map((info) => (
          <li>
            <span className="btn">{info.title}</span>
          </li>
        ))}
      </ul>
      <div className="image">
        {image.map((key) => (
          <div className="image-item">
            <img src={key.img} alt="logo" />
            <div className="desc">
              <h5>
                {key.heading}
                <span>{key.subheading}</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
