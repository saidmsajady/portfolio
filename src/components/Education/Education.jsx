import React, { useEffect, useState } from "react";
import "./Education.css";
import python from "../../assets/logos/python.svg";
import java from "../../assets/logos/java.svg";
import react from "../../assets/logos/react.svg";
import node from "../../assets/logos/node.svg";
import javascript from "../../assets/logos/javascript.svg";
import sql from "../../assets/logos/sql.svg";
import html from "../../assets/logos/html.svg";
import css from "../../assets/logos/css.svg";
import mongodb from "../../assets/logos/mongodb.svg";
import git from "../../assets/logos/git.svg";

const Education = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("education");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="education" className={inView ? "fade-in" : ""}>
      <h1 id="education-title">Education</h1>

      <div className="education-container">
        {/* University of Washington */}
        <div className="education-item">
          <h2 className="education-title">University of Washington</h2>
          <p className="degree">Bachelors in Computer Science and Software Engineering</p>
          <p className="date-range">Sep. 2022 - Dec. 2024</p>
          <p className="description">
            Developing skills in software engineering, algorithms, and data structures, focusing on hands-on projects.
          </p>
        </div>

        {/* Per Scholas */}
        <div className="education-item">
          <h2 className="education-title">Per Scholas</h2>
          <p className="degree">Accelerated and Competitive Software Engineering Boot Camp</p>
          <p className="date-range">Apr. 2024 - Aug. 2024</p>
          <p className="description">
            Intensive coding boot camp focused on full-stack development and real-world problem-solving.
          </p>
        </div>

        {/* Cascadia College */}
        <div className="education-item">
          <h2 className="education-title">Cascadia College</h2>
          <p className="degree">Associates in Integrated Studies and Running Start Student</p>
          <p className="date-range">Sep. 2020 - Jun. 2022</p>
          <p className="description">
            Completed an accelerated high school and college program, taking advanced courses in computer science.
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      <p className="tech-stack-title">
        Throughout my journey at places like the University of Washington, Per Scholas, and Cascadia College, I’ve had the opportunity to dive deep into a wide range of technologies. From building full-stack applications to solving real-world problems, I’ve gained hands-on experience with everything from Python to React. Here’s a snapshot of the tools and technologies I’ve worked with along the way!
      </p>
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
  );
};

export default Education;
