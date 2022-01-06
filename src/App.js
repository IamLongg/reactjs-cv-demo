import React from "react";
import "./App.scss";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
