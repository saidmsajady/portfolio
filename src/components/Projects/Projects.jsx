import React from "react";
import "./Projects.css";
import ExploreMateImage from "../../assets/ExploreMate.png";
import FreeSenseImage from "../../assets/FreeSense.png";

const Projects = () => {
  return (
      <section id="projects" className="section-divider">
        <h1 id="title">Projects</h1>

        {/* Explore Mate - Image Left, Content Right */}
        <div className="project-container">
        <img src={ExploreMateImage} alt="Explore Mate Project" className="project-image" />
        <div className="project-content">
            <h2>Explore Mate | Full Stack Backpacking Trip Planner</h2>
            <p style={{ display: "flex",  alignItems: "center", gap: "30px" }}>
            <strong>July 2024 - Sept. 2024</strong>
            <a 
              href="https://explore-mate-site.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-button"
            >
              View Site
            </a>
          </p>

            <br/>
            <p>
              Developed a full-stack MERN application tailored for backpacking trips, featuring authentication, trip reordering, and integration with third-party APIs for an enhanced travel planning experience.
            </p>
            <br/>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, Mongoose, JWT, REST API, HTML/CSS</p>
            {/* <ul>
              <li>Engineered a scalable Node.js + Express backend for seamless trip management.</li>
              <li>Implemented secure JWT-based authentication for multi-device login.</li>
              <li>Boosted front-end performance through lazy loading and efficient state management.</li>
              <li>Designed a mobile-responsive UI for travel planning on any device.</li>
            </ul> */}
          </div>
        </div>

        <hr/>

        {/* FreeSense - Image Right, Content Left */}
        <div className="project-container project-reverse">
          <div className="project-content">
            <h2 className="">FreeSense | Author Portfolio Website</h2>
            <p style={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <strong>Jan. 2024 - Mar. 2024</strong>
              <a 
                href="https://www.freesensebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-button"
              >
                View Site
              </a>
            </p>
            <br/>
            <p>
              Led a team of two developers to build an interactive portfolio website for an author, integrating dynamic, user-friendly 
              elements to showcase and sell his book.
            </p>
            <br/>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, HTML/SCSS, Nodemailer</p>
            {/* <ul>
              <li>Managed Agile sprints and task distribution to ensure timely delivery.</li>
              <li>Developed an optimized React UI with lazy loading and code splitting.</li>
              <li>Integrated animations and interactive contact forms for an engaging experience.</li>
              <li>Collaborated closely with the author to align the website with his brand.</li>
            </ul> */}
          </div>
          <img src={FreeSenseImage} alt="FreeSense Project" className="project-image"/>
        </div>
      </section>
  );
};

export default Projects;
