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

import timelineElements from "./timeline/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "./assets/work.svg"; 


function App() {

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

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
            <p><strong>July 2024 - Sept. 2024</strong> | <a href="https://explore-mate-site.web.app/" target="_blank" rel="noopener noreferrer" className="resume-link">View Site</a></p>
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
            <p><strong>Jan. 2024 - Mar. 2024</strong> | <a href="https://www.freesensebook.com/" target="_blank" rel="noopener noreferrer" className="resume-link">View Site</a></p>
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
        <h1 id="education-title">Education</h1>

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
        <p className="tech-stack-title">Throughout my journey at places like the University of Washington, Per Scholas, and Cascadia College, I’ve had the opportunity to dive deep into a wide range of technologies. From building full-stack applications to solving real-world problems, I’ve gained hands-on experience with everything from Python to React. Here’s a snapshot of the tools and technologies I’ve worked with along the way!</p>
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


      {/* Experience Section with Timeline */}
      <section className="experience section-divider">
        <h1 id="experience-title">Experience</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={<img src={isWorkIcon ? WorkIcon : SchoolIcon} alt="Icon" />}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                <p>{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </section>

      {/* Contact Me Section */}
      <section id="contactme" className="section-divider">
        <h1>Contact Me</h1>
        <p>
          I'm always excited to connect with like-minded individuals and explore how we can collaborate! Whether it's discussing new projects, technology trends, or creative ideas, I'm open to conversations that can spark innovation and growth. Feel free to reach out through LinkedIn or email—I'd love to learn more about how I can contribute to your goals or just have a good chat!
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/said-masih-sajady/" aria-label="LinkedIn" target='_blank'>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#4d4d4e">
              <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
          <a href="mailto:s.saidmasih@gmail.com" aria-label="Email">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#4d4d4e">
              <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
          </a>
        </div>

        {/* Resume Link */}
        <a href="/path/to/your/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>

        <footer className="footer">
          <p>© 2025 Said Sajady. All rights reserved.</p>
        </footer>
      </section>


    </>
  );
}

export default App
