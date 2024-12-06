import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    repo_url: "",
    live_url: "",
    image: null,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get("/api/admin/projects");
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const addProject = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newProject.title);
      formData.append("description", newProject.description);
      formData.append("repo_url", newProject.repo_url);
      formData.append("live_url", newProject.live_url);
      if (newProject.image) formData.append("image", newProject.image);

      await axios.post("/api/admin/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchProjects();
      setNewProject({
        title: "",
        description: "",
        repo_url: "",
        live_url: "",
        image: null,
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div>
      <h1>Manage Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <input
          type="file"
          onChange={(e) =>
            setNewProject({ ...newProject, image: e.target.files[0] })
          }
        />
        <button onClick={addProject}>Add Project</button>
      </div>
    </div>
  );
};

export default ProjectsManager;
