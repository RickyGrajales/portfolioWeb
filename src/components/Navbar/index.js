import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div id="home">
        <div className="profile_name">
          Luis Enrique Grajales Prado
          <div className="contact_info">
            <img
              src={`${process.env.PUBLIC_URL}/images/envelope.png`}
              alt="Email Icon"
            />
            luisgrajales713@gmail.com
          </div>
          <div className="contact_info">
            <img
              src={`${process.env.PUBLIC_URL}/images/phone.png`}
              alt="Phone Icon"
            />
            +57 3160976523
          </div>
        </div>
        <div className="topdiv">
          <a className="topmenu" href="#about-me">
            About Me
          </a>
          <a className="topmenu" href="#skills">
            Skills
          </a>
          <a className="topmenu" href="#projects">
            Projects
          </a>
          <a className="topmenu" href="#recommendations">
            Recommendations
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
