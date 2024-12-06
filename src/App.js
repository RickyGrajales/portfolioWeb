import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import ContactForm from "./components/ContactForm";

// Admin components
import SkillsManager from "./admin/SkillsManager";
import ProjectsManager from "./admin/ProjectsManager";

// Estilos
import "./styles.css";

// Componente principal de la página (Home)
const Home = () => (
  <div>
    <Navbar />
    <AboutMe />
    <Skills />
    <Projects />
    <Recommendations />
    <ContactForm />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactForm />} />

        {/* Rutas del panel de administración */}
        <Route path="/admin/skills" element={<SkillsManager />} />
        <Route path="/admin/projects" element={<ProjectsManager />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
