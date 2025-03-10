import React from "react";
import "./Experience.css";
import timelineElements from "../../timeline/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {

  let workIconStyles = { background: "#f39c12" }; // Example color, adjust as needed
  let schoolIconStyles = { background: "#64a08f" };
  

  return (
    <section id="experience" className="experience section-divider">
    <h1 id="experience-title">Experience</h1>
    <VerticalTimeline>
    {timelineElements.map((element) => {
      let isWorkIcon = element.icon === "work";
      return (
        <VerticalTimelineElement
          key={element.id}
          date={element.date}
          iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
          dateStyle={{ color: "#f0f0f0" }}
        >
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>

          {/* Description handling */}
          {Array.isArray(element.description) ? (
            element.description.map((desc, index) => (
              <React.Fragment key={index}>
                <p>{desc}</p>
                {index < element.description.length - 1 && <br />}
              </React.Fragment>
            ))
          ) : (
            <p>{element.description}</p>
          )}
        </VerticalTimelineElement>
      );
    })}
  </VerticalTimeline>

  </section>
  );
};

export default Experience;
