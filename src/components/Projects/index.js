import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("/api/admin/projects"); // Ruta de tu API backend
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div className="carousel-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.image_url && (
              <img src={project.image_url} alt={project.title} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
