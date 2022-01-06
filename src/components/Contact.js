import React from "react";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [contact] = React.useState({
    heading: "have any query?",
    subheading: "contact me",
    details:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });

  const [address] = React.useState([
    {
      id: 1,
      icon: <IoLocationSharp />,
      title: "locate us",
      info: "nguyen anh thu street, ho chi minh city",
    },
    {
      id: 2,
      icon: <IoCall />,
      title: "give us a call",
      info: "Office: +03-4563-****",
    },
    {
      id: 3,
      icon: <FiMail />,
      title: "get in online",
      info: "contact@example.com",
    },
  ]);

  return (
    <section className="contact" id="contact">
      <div className="title">
        <h3 className="heading">{contact.heading}</h3>
        <h2 className="subheading">{contact.subheading}</h2>
        <p className="details">{contact.details}</p>
      </div>
      <div className="contact-main">
        {address.map((add) => (
          <div className="contact-main-box">
            <a href="/">
              {add.icon}
              <span>{add.title}</span>
              <p>{add.info}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="form">
        <input type="name" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input
          className="form-seperate"
          type="text"
          placeholder="Your Subject"
        />
        <textarea
          className="form-seperate"
          type="textarea"
          placeholder="Your Message"
        />
        <button className="submit">send message</button>
      </div>
    </section>
  );
};

export default Contact;
