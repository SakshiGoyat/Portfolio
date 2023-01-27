import { Link } from "react-router-dom";
import Blast from "../BlastAnimation/Blast";
import "./header.scss";
import Reveal from "react-reveal/Reveal";
import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";

const nameArray = ["S", "a", "k", "s", "h", "i"];
const jobArray = [
  "W",
  "e",
  "b",
  " ",
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
];

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });
  return (
    <>
      <Reveal>
        <div className="fake-big">Home</div>
      </Reveal>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <h1>
            <Blast letterClass={letterClass} arrayStr={["H", "o", "l", "a!"]} /> <br />
            <Blast letterClass={letterClass} arrayStr={["I", "'", "m"]} />{" "}
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">WEB DEVELOPER, UI/UX DESIGNER</p>

          <Link to={"/contact"} className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </Link>
        </main>
        <div className="scroll__wrapper switch__color">
          <MdArrowDropDown className="scroll__down switch__color" />
        </div>
      </section>
    </>
  );
};

export default Header;
