import React from "react";
import Navbar from "./components/Navbar"; 
import ExploreMateImage from "./assets/ExploreMate.png";
import FreeSenseImage from "./assets/FreeSense.png";
import python from './assets/logos/python.svg';
import java from './assets/logos/java.svg';
import react from './assets/logos/react.svg';
import node from './assets/logos/node.svg';
import javascript from './assets/logos/javascript.svg';
import sql from './assets/logos/sql.svg';
import html from './assets/logos/html.svg';
import css from './assets/logos/css.svg';
import mongodb from './assets/logos/mongodb.svg';
import git from './assets/logos/git.svg';

function App() {

  return (
    <>

      <Navbar />

      {/* Header Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>This is</h2>
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
      <section id="projects" className="section-divider">
        <h1 id="title">Projects</h1>

        {/* Explore Mate - Image Left, Content Right */}
        <div className="project-container">
        <img src={ExploreMateImage} alt="Explore Mate Project" className="project-image" />
        <div className="project-content">
            <h2>Explore Mate | Full Stack Backpacking Trip Planner</h2>
            <p><strong>July 2024 - Sept. 2024</strong> | <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Site</a></p>
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
            <h2>FreeSense | Author Portfolio Website</h2>
            <p><strong>Jan. 2024 - Mar. 2024</strong> | <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Site</a></p>
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

      {/* Education Section */}
      <section id="education">
        <h1>Education</h1>

        <div className="education-container">
          {/* University of Washington */}
          <div className="education-item">
            <h2>University of Washington</h2>
            <p className="degree">Bachelors in Computer Science and Software Engineering</p>
            <p className="date-range">Sep. 2022 - Dec. 2024</p>
            <p className="description">
              Developing skills in software engineering, algorithms, and data structures, focusing on hands-on projects.
            </p>
          </div>

          {/* Per Scholas */}
          <div className="education-item">
            <h2>Per Scholas</h2>
            <p className="degree">Accelerated and Competitive Software Engineering Boot Camp</p>
            <p className="date-range">Apr. 2024 - Aug. 2024</p>
            <p className="description">
              Intensive coding boot camp focused on full-stack development and real-world problem-solving.
            </p>
          </div>

          {/* Cascadia College */}
          <div className="education-item">
            <h2>Cascadia College</h2>
            <p className="degree">Associates in Integrated Studies and Running Start Student</p>
            <p className="date-range">Sep. 2020 - Jun. 2022</p>
            <p className="description">
              Completed an accelerated high school and college program, taking advanced courses in computer science.
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <h2 className="tech-stack-title">Technologies</h2>
        <div className="tech-stack">
        <img src={python} alt="Python" className="tech-icon" />
        <img src={java} alt="Java" className="tech-icon" />
        <img src={react} alt="React" className="tech-icon" />
        <img src={node} alt="Node.js" className="tech-icon" />
        <img src={javascript} alt="JavaScript" className="tech-icon" />
        <img src={sql} alt="SQL" className="tech-icon" />
        <img src={html} alt="HTML5" className="tech-icon" />
        <img src={css} alt="CSS3" className="tech-icon" />
        <img src={mongodb} alt="MongoDB" className="tech-icon" />
        <img src={git} alt="Git" className="tech-icon" />
        </div>

      </section>

      {/* Technologies Section */}
      <section id="technologies">
        <h1>Technologies</h1>
        <p><strong>Technogies and Frameworks: </strong>Java, Python, JavaScript, React, HTML/CSS, Node.js, Express, SQL</p>
        <p><strong>Tools and Platforms: </strong>MongoDB, Rest API, FireBase, Render, Git/GitHub, VS Code</p>
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

      {/* Contact Me Section */}
      <section id="contactme">
        {/* tbd */}
      </section>
    </>
  );
}

export default App
