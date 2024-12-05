import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me" className="container">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/programmer2.png`}
          alt="Coding"
        />
      </div>
      <div>
        <h1>
          Hi, I'm Luis Grajales!{" "}
          <img
            src={`${process.env.PUBLIC_URL}/images/waving-hand.png`}
            alt="Waving Hand"
            width="50px"
          />
        </h1>
        <p>
          I am a full stack developer with 2 years of experience in application
          and presentation layers. I have worked on applications and
          microservices deployed on IBM Cloud.
        </p>
      </div>
      <div className="resume-section">
          <a
            href={`${process.env.PUBLIC_URL}/cv/LuisGrajales_CV.pdf`}
            download
            className="resume-button"
          >
            Download My CV
          </a>
        </div>
      
    </section>
  );
};

export default AboutMe;
