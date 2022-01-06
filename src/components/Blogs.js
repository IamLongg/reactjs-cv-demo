import React from "react";
import imgreactjs from "../assets/images/blog-1.jfif";
import imgjs from "../assets/images/blog-2.jfif";
import imgdesign from "../assets/images/blog-3.jfif";
import { FaUser, FaCalendar } from "react-icons/fa";
import img from "../assets/images/imagelogo.png";
import img1 from "../assets/images/blogpic2.png";
import img2 from "../assets/images/blogpic.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const Blogs = () => {
  const [blogs] = React.useState({
    subheading: "lastest blogs",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });

  const [state] = React.useState([
    {
      id: 1,
      img: imgreactjs,
      icon: <FaUser />,
      user: "admin",
      icon2: <FaCalendar />,
      title: "react a javaScript library for building user interfaces",
      date: "september 10, 2021",
      text: "eeact makes it painless to create interactive UIs. design simple \
     views for each state in your application, and React will \
     efficiently update and render just the right components when your \
     data changes.",
      heading: "G-Dragon",
      imgicon: img,
      details:
        "there are many variations of passages of Lorem Ipsum available, \
      but the majority have",
      fb: <FaFacebookF />,
      twitter: <FaTwitter />,
      ins: <FaInstagram />,
      gmail: <SiGmail />,
    },
    {
      id: 2,
      img: imgjs,
      icon: <FaUser />,
      user: "admin",
      icon2: <FaCalendar />,
      title: "JavaScript Objects and Prototypes",
      date: "July 18, 2021",
      text: "In-depth, behind-the-scenes details of creating JavaScript objects, manipulating properties, and using prototypal inheritance.",
      heading: "lisa",
      imgicon: img1,
      details:
        "there are many variations of passages of Lorem Ipsum available, \
      but the majority have",
      fb: <FaFacebookF />,
      twitter: <FaTwitter />,
      ins: <FaInstagram />,
      gmail: <SiGmail />,
    },
    {
      id: 3,
      img: imgdesign,
      icon: <FaUser />,
      user: "admin",
      icon2: <FaCalendar />,
      title: "Designs.vn mới, trải nghiệm mới : vì Bạn",
      date: "september 10, 2021",
      text: "Update news, build and systematize big data. Architectural design and global art. Serving the inquiry, research and learning needs of all classes of readers. Promoting the development of Vietnam's Design and Art industry",
      heading: "john deo",
      imgicon: img2,
      details:
        "there are many variations of passages of Lorem Ipsum available, \
      but the majority have",
      fb: <FaFacebookF />,
      twitter: <FaTwitter />,
      ins: <FaInstagram />,
      gmail: <SiGmail />,
    },
  ]);

  return (
    <section className="blogs" id="blogs">
      <div className="title">
        <h2 className="subheading">{blogs.subheading}</h2>
        <p className="details">{blogs.details}</p>
      </div>
      {state.map((info) => (
        <div className="blogs-main">
          <div className="box">
            <div className="image">
              <img src={info.img} alt="logo" />
            </div>
            <div className="box-content">
              <span>
                {info.icon}
                <strong>{info.user} </strong>
              </span>
              <span>
                {info.icon2}
                <strong> {info.date}</strong>
              </span>
              <h3>{info.title}</h3>
              <p className="details">{info.text}</p>
            </div>
          </div>
          <div className="tags">
            <div className="tags-box">
              <h3 className="heading">{info.heading}</h3>
              <img src={info.imgicon} alt="logo" />
              <p className="details">{info.details}</p>
              <div className="link">
                <a href="/logo">{info.fb}</a>
                <a href="/logo">{info.twitter}</a>
                <a href="/logo">{info.ins}</a>
                <a href="/logo">{info.gmail}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blogs;
