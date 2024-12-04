import React from "react";
import ContactForm from './components/ContactForm';
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Recommendations />
      <ContactForm />
    </div>
  );
};

export default App;
