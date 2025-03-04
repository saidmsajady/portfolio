import React from "react";
import Navbar from "./components/Navbar"; 

function App() {

  return (
    <>

      <Navbar />

      {/* Header Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>This is</h1>
            <h1>Said Masih Sajady</h1>
            <h2>Developer | Innovator | Problem Solver</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia bibendum nulla sed consectetur. Aenean euismod bibendum laoreet.
            </h3>
          </div>
          <div className="hero-image">
            {/* Add your image source below */}
            <img src="./assets/your-image.jpg" alt="Said Masih Sajady" />
          </div>
        </div>
      </header>


      {/* <li>Lara Concrete LLC - Website Rebranding</li> */}
      {/* Projects Section */}
      

      {/* <li>Lara Concrete LLC - Website Rebranding</li> */}
      {/* Projects Section */}
      <section className="projects">
        <h1>Projects</h1>

        <div className="project">
          <img src="./assets/exploremate.jpg" alt="Explore Mate Project" className="project-image" />
          <div className="project-details">
            <h2>Explore Mate | Full Stack Backpacking Trip Planner</h2>
            <p><strong>July 2024 - Sept. 2024</strong></p>
            <p>
              Developed a full-stack MERN application tailored for backpacking trips, featuring authentication, trip reordering, 
              and integration with third-party APIs for an enhanced travel planning experience.
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, JWT</p>
            <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>

        <div className="project project-reverse">
          <div className="project-details">
            <h2>FreeSense | Author Portfolio Website</h2>
            <p><strong>Jan. 2024 - Mar. 2024</strong></p>
            <p>
              Led a team of two developers to build an interactive portfolio website for an author, integrating dynamic, user-friendly 
              elements to showcase and sell his book.
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, HTML/SCSS</p>
            <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
          <img src="./assets/freesense.jpg" alt="FreeSense Project" className="project-image" />
        </div>

      </section>

      {/* Education Section */}
      <section id="education">
        <h1>Education</h1>
        <ul>
          <li>University of Washington</li>
          <p>Bachelors in Computer Science and Software Engineering</p>
          <p>Sep. 2022 - Dec. 2024</p>
          <li>Per Scholas</li>
          <p>Accelerated and Competitive Software Engineering Boot Camp</p>
          <p>Apr. 2024 - Aug. 2024</p>
          <li>Cascadia College</li>
          <p>Associates in Intergraded Studies and Running Start Student</p>
          <p>Sep. 2020 - Jun. 2022</p>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h1>Experience</h1>
        <ul>
          <li>
            <h2>Freelancer – Software Engineer</h2>
            <p><strong>Dec. 2023 - Present</strong></p>
            <ul>
              <li>Effectively communicate with clients to fully understand their vision, expectations, and deadlines for web applications.</li>
              <li>Led the technical implementation of project requirements, ensuring seamless back-end and front-end integration.</li>
            </ul>
          </li>

          <li>
            <h2>University of Washington – Teaching Assistant</h2>
            <p><strong>Mar. 2024 - Jun. 2024</strong></p>
            <p><em>Hardware and Computer Organization</em></p>
            <ul>
              <li>Curated a comprehensive repository of hardware resources and tutorials, utilized by 60+ students weekly.</li>
              <li>Provided ongoing support through class time and office hours, with the repository continuing to assist future cohorts.</li>
              <li>Initiated and facilitated group study sessions, contributing to a 20% improvement in course satisfaction ratings.</li>
            </ul>
          </li>

          <li>
            <h2>Flo Japanese Sushi and Sake Restaurant – Server & Staff Supervisor</h2>
            <p><strong>Oct. 2021 - Jun. 2024</strong></p>
            <ul>
              <li>Led the development of a new communication strategy that improved task accuracy and team collaboration within a 12-member team.</li>
              <li>Implemented process improvements later adopted by other restaurant locations, leading to near 100% customer satisfaction.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Technologies Section */}
      <section id="technologies">
        <h1>Technologies</h1>
        <p><strong>Technogies and Frameworks: </strong>Java, Python, JavaScript, React, HTML/CSS, Node.js, Express, SQL</p>
        <p><strong>Tools and Platforms: </strong>MongoDB, Rest API, FireBase, Render, Git/GitHub, VS Code</p>
      </section>

      {/* Contact Me Section */}
      <section id="contactme">
        {/* tbd */}
      </section>
    </>
  );
}

export default App
