import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      experience: "1 year",
      icon: `${process.env.PUBLIC_URL}/images/html5.png`,
    },
    {
      name: "JavaScript",
      experience: "1 year",
      icon: `${process.env.PUBLIC_URL}/images/js.jpeg`,
    },
    {
      name: "CSS3",
      experience: "1 year",
      icon: `${process.env.PUBLIC_URL}/images/CSS3.png`,
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="all_skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.icon} alt={`${skill.name} Icon`} />
            <h6>{skill.name}</h6>
            <p>{skill.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
