import React, { useState, useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Blast from "../../components/BlastAnimation/Blast";
import Cards from "../../components/skillsCards/Cards";
import "./Skills.scss";

const aboutArray = ["S", "k", "i", "l", "l", "s"];
const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <>
      <Reveal>
        <div className="fake-big">Skills</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h1 aria-label="About and Skills">
              <Blast
                letterClass={letterClass}
                arrayStr={aboutArray}
                indexLetter={11}
              />
            </h1>
          </div>
        </article>
      </div>
      <div className="card-padding">
        <Cards />
      </div>
    </>
  );
};

export default Skills;
