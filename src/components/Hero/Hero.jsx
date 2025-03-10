import React from "react";
import "./Hero.css";
import mypic from "../mypic.jpeg";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>This is</h2>
          <h1>Said Masih Sajady</h1>
          <h2>Developer | Innovator | Problem Solver</h2>
          <h3>
            I built this portfolio to present who I am—showcasing my growth as a developer and innovator. It’s been a rewarding experience, as creating this site gave me the opportunity to not only highlight my projects but also reflect on the milestones and skills that have driven my journey so far. Whether it’s through new challenges or collaborations, I’m always excited about the next step. Take a look around, and let’s connect!
          </h3>
        </div>
        <div className="hero-image">
          <div className="diamond-container">
            <img src={mypic} alt="Said Masih Sajady" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
