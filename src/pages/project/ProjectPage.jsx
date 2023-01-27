import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Blast from "../../components/BlastAnimation/Blast";
import Project from "../../components/projects/Project";
import { projects } from "./index";
import "./projectpage.scss";

const projectArray = ["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"];
const ProjectPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <section className="section__projects section__padding">
      <div className="fake-big">Projects</div>
      <h2 aria-label="My Projects" className="section__projects-title">
        <Blast
          letterClass={letterClass}
          arrayStr={projectArray}
          indexLetter={12}
        />
      </h2>
      <div className="section__projects-description">
        <Fade bottom>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Fade>
      </div>

      <div className="section__projects-description">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProjectPage;
