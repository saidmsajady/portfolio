import React from "react";
import Navbar from "../components/Navbar"; 

function App() {

  return (
    <>

      <Navbar />

      {/* Header Section */}
      <header id="home">
        <h1>This is Said Masih Sajady</h1>
        <h2>Developer | Innovator | Problem Solver</h2>
      </header>

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

      {/* Projects Section */}
      <section id="projects">
        <h1>Projects</h1>
        <ul>
          <li>Lara Concrete LLC - Website Rebranding</li>
          <li>
            <h2>Explore Mate | Full Stack Backpacking Trip Planner</h2>
            <p><strong>July 2024 - Sept. 2024</strong> | <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Site</a></p>
            <p>
              Developed a full-stack MERN application tailored for backpacking trips, featuring authentication, trip reordering, 
              and integration with third-party APIs for an enhanced travel planning experience.
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, Mongoose, JWT, REST API, HTML/CSS</p>
            <ul>
              <li>Engineered a scalable Node.js + Express backend for seamless trip management.</li>
              <li>Implemented secure JWT-based authentication for multi-device login.</li>
              <li>Boosted front-end performance through lazy loading and efficient state management.</li>
              <li>Designed a mobile-responsive UI for travel planning on any device.</li>
            </ul>
          </li>

          <li>
            <h2>FreeSense | Author Portfolio Website</h2>
            <p><strong>Jan. 2024 - Mar. 2024</strong> | <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Site</a></p>
            <p>
              Led a team of two developers to build an interactive portfolio website for an author, integrating dynamic, user-friendly 
              elements to showcase and sell his book.
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, HTML/SCSS, Nodemailer</p>
            <ul>
              <li>Managed Agile sprints and task distribution to ensure timely delivery.</li>
              <li>Developed an optimized React UI with lazy loading and code splitting.</li>
              <li>Integrated animations and interactive contact forms for an engaging experience.</li>
              <li>Collaborated closely with the author to align the website with his brand.</li>
            </ul>
          </li>
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
