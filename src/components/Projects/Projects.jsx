import React, { useEffect, useRef } from "react";
import "./Projects.css";
import ExploreMateImage from "../../assets/ExploreMate.png";
import FreeSenseImage from "../../assets/FreeSense.png";

const Projects = () => {
  // Create an array of refs to track each project container
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.3 }
    );

    // Make sure the refs are correctly populated before observing
    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el); // Ensure that 'el' is a valid element
    });

    return () => {
      projectRefs.current.forEach((el) => {
        if (el) observer.unobserve(el); // Ensure 'el' is a valid element before unobserving
      });
    };
  }, []);

  return (
    <section id="projects" className="section-divider">
      <h1 id="project-title">Projects</h1>

      {/* Explore Mate - Image Left, Content Right */}
      <div
        className="project-container"
        ref={(el) => (projectRefs.current[0] = el)} // Ref for first project
      >
        <img
          src={ExploreMateImage}
          alt="Explore Mate Project"
          className="project-image"
        />
        <div className="project-content">
          <h2>Explore Mate | Full Stack Backpacking Trip Planner</h2>
          <p style={{ display: "flex", alignItems: "center", gap: "30px" }}>
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
          <br />
          <p>
            Developed a full-stack MERN application tailored for backpacking
            trips, featuring authentication, trip reordering, and integration
            with third-party APIs for an enhanced travel planning experience.
          </p>
          <br />
          <p>
            <strong>Tech Stack:</strong> React, Node.js, Express, Mongoose,
            JWT, REST API, HTML/CSS
          </p>
        </div>
      </div>

      <hr />

      {/* FreeSense - Image Right, Content Left */}
      <div
        className="project-container project-reverse"
        ref={(el) => (projectRefs.current[1] = el)} // Ref for second project
      >
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
          <br />
          <p>
            Led a team of two developers to build an interactive portfolio
            website for an author, integrating dynamic, user-friendly elements
            to showcase and sell his book.
          </p>
          <br />
          <p>
            <strong>Tech Stack:</strong> React, Node.js, Express, HTML/SCSS,
            Nodemailer
          </p>
        </div>
        <img
          src={FreeSenseImage}
          alt="FreeSense Project"
          className="project-image"
        />
      </div>
    </section>
  );
};

export default Projects;
