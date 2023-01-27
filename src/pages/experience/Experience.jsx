import React, { useState, useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Blast from "../../components/BlastAnimation/Blast";
import "./Experience.scss";

const experienceArray = ["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"];
const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <>
      <Reveal>
        <div className="fake-big">Experience</div>
      </Reveal>
      <div className="section-experience-wrapper section__padding">
        <article className="section-experience-description">
          <div>
            <h1 aria-label="Experience">
              <Blast
                letterClass={letterClass}
                arrayStr={experienceArray}
                indexLetter={11}
              />
            </h1>
            <Fade>
              <p>
                I’m an ambitious Front-End Developer who's passionate about
                coding and looking for a role in the established IT company with
                the opportunity to work with the latest technologies on
                challenging and diverse projects.
              </p>
            </Fade>
            {/* <Fade bottom>
              <p>
                I’m from Ivory Coast but currently living in Nigeria. I’m a
                freelancer who loves building cool UI effects, dynamic webpages
                with amazing animations and creating intuitive, dynamic user
                experiences. I also love to reach out to new opportunities
                accross the globe that will enhance my skills and get the
                opporutinity to work with other programmers as well
              </p>
            </Fade>
            <Fade bottom>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
              </p>
            </Fade> */}
            <Fade>
              <h2>Rotaract Club</h2>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
              </p>
            </Fade>
            <Fade>
              <h2>Student Gyan Moment</h2>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
              </p>
            </Fade>
            <Fade>
              <h2>Student Active Council</h2>
              <p>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my CV below for more details.
              </p>
            </Fade>
          </div>
        </article>
      </div>
    </>
  );
};

export default Experience;
