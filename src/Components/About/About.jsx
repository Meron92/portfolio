import React from "react";
import "./about.css";
import ME from "../../assets/CV-bild3.jpg";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            After many years as a warehouse employee, I made the decision to
            finally apply to the program I had been eyeing for a long time,
            frontend developer at NBI/Handelsakademin, and am now in my second
            and final academic year.
            <br />
            <br />
            The first academic year has been extremely educational and with each
            passing day, I became even more certain that I have made the right
            decision and that it is within this industry that I want to continue
            to develop within.
            <br />
            <br />I have the drive and desire within me to constantly continue
            to develop. The qualities I bring to you are innovative thinking,
            drive, problem solver, and the desire to learn.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let´s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
