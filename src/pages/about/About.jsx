import React, { useState, useEffect } from "react";
import Sakshi from "../../assets/images/Sakshi_s_Resume.pdf";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Blast from "../../components/BlastAnimation/Blast";
import "./about.scss";
import my2 from "../../assets/images/my2.jpeg"

const aboutArray = ["A", "b", "o", "u", "t"];
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h1 aria-label="About">
              <Blast
                letterClass={letterClass}
                arrayStr={aboutArray}
                indexLetter={11}
              />
            </h1>
            <div className="about__me switch__bg">
              <div className="about__me-image">
                <img src={my2} alt="about-image" height="400px" width="400px" />
              </div>
            </div>
            <Fade>
              <p>
                I’m an ambitious Front-End Developer who's passionate about
                coding and looking for a role in the established IT company with
                the opportunity to work with the latest technologies on
                challenging and diverse projects.
              </p>
            </Fade>
            <Fade bottom>
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
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: "2rem" }}
                href={Sakshi}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
      </div>
    </>
  );
};

export default About;
