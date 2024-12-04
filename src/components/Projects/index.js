import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Chatbot', description: 'A secure website integrated with chatbot for an automobile client.' },
    { title: 'Sentiment Analyzer', description: 'A sentiment analyzer for an eCommerce platform using IBM NLU.' },
    { title: 'Fashion Website', description: 'A styled multi-page website for a fashion industry player.' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div className="carousel-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
