import React, { useState, useEffect } from "react";
import axios from "axios";

const SkillsManager = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    name: "",
    description: "",
    icon: null,
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data } = await axios.get("/api/admin/skills");
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const addSkill = async () => {
    const formData = new FormData();
    formData.append("name", newSkill.name);
    formData.append("description", newSkill.description);
    if (newSkill.icon) formData.append("icon", newSkill.icon);

    try {
      await axios.post("/api/admin/skills", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchSkills();
      setNewSkill({ name: "", description: "", icon: null });
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  return (
    <div>
      <h1>Manage Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} - {skill.description}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newSkill.description}
          onChange={(e) =>
            setNewSkill({ ...newSkill, description: e.target.value })
          }
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewSkill({ ...newSkill, icon: e.target.files[0] })
          }
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillsManager;
