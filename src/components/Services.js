import React from "react";
import {
  FaGithub,
  FaApple,
  FaFileVideo,
  FaSearchPlus,
  FaCodepen,
} from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";

const Services = () => {
  const [services] = React.useState({
    heading: "services",
    subheading: "my services",
    details:
      " Lorem Ipsum is simply dummy text of the printing and typesetting \
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub />,
      heading: "web development",
      details:
        "Lorem Ipsum is simply dummy text of the printing typesetting \
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <AiFillCamera />,
      heading: "photography",
      details:
        "Lorem Ipsum is simply dummy text of the printing typesetting \
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaCodepen />,
      heading: "web design",
      details:
        "Lorem Ipsum is simply dummy text of the printing typesetting \
        industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaApple />,
      heading: "apple developing",
      details:
        "Lorem Ipsum is simply dummy text of the printing typesetting \
        industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo />,
      heading: "video editing",
      details:
        "Lorem Ipsum is simply dummy text of the printing typesetting \
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchPlus />,
      heading: "SEO expart",
      details:
        "Lorem Ipsum is simply dummy text of the printing typesetting \
        industry. simply dummy",
    },
  ]);
  return (
    <section className="services" id="services">
      <div className="title">
        <h3 className="heading">{services.heading}</h3>
        <h2 className="subheading">{services.subheading}</h2>
        <p className="details">{services.details}</p>
      </div>
      <div className="services-main">
        {state.map((info) => (
          <div className="services-main-box">
            <div className="icon">{info.icon}</div>
            <h3>{info.heading}</h3>
            <p className="details">{info.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
