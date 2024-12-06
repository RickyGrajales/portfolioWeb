import React, { useState, useEffect } from "react";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get("/api/admin/skills"); // Ruta de tu API backend
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="all_skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.icon_url} alt={`${skill.name} Icon`} />
            <h6>{skill.name}</h6>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
