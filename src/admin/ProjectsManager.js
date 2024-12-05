import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    repo_url: '',
    live_url: '',
    image_url: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  // Función para obtener los proyectos
  const fetchProjects = async () => {
    try {
      const { data } = await axios.get('/api/admin/projects');
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Función para agregar un nuevo proyecto
  const addProject = async () => {
    try {
      await axios.post('/api/admin/projects', newProject);
      fetchProjects();
      setNewProject({
        title: '',
        description: '',
        repo_url: '',
        live_url: '',
        image_url: '',
      });
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  // **Función para eliminar un proyecto**
  const deleteProject = async (id) => {
    try {
      await axios.delete(`/api/admin/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <h1>Manage Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title}
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button onClick={addProject}>Add Project</button>
      </div>
    </div>
  );
};

export default ProjectsManager;
