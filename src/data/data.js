import React from "react";

// react-icons
import { FiLinkedin, FiFigma } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
} from "react-icons/bs";
import{
  FaPython
} from "react-icons/fa"
import { RiContactsBookFill, RiReactjsLine } from "react-icons/ri";
import {
  SiSass,
  SiJquery,
  SiExpress,
  SiAdobephotoshop,
  SiCanva,
  SiPostgresql,
  SiUbuntu,
  SiNetlify,
  SiProgress,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

import {GiNotebook} from "react-icons/gi"
import { GrGithub, GrTwitter} from "react-icons/gr";
import { AiFillHtml5, AiOutlineConsoleSql, AiFillHome } from "react-icons/ai";
import { DiCss3, DiMongodb, DiJava, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";

// sidebar menu functionality
const sideBarMenu = [
  {
    text: "Home",
    icon: <AiFillHome className="link-icon" />,
    url: "/",
  },
  {
    text: "About",
    icon: <BsPersonLinesFill className="link-icon" />,
    url: "/about",
  },
  {
    text: "Skills",
    icon: <SiProgress className="link-icon" />,
    url: "/skills",
  },
  {
    text: "Projects",
    icon: <VscProject className="link-icon" />,
    url: "/project",
  },
  {
    text: "Experience",
    icon: <GiNotebook className="link-icon" />,
    url: "/experience",
  },
  {
    text: "Contact me",
    icon: <RiContactsBookFill className="link-icon" />,
    url: "/contact",
  },
];
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: "https://github.com/SakshiGoyat",
  },
  // {
  //   icon: <FiYoutube className="icon switch__color" />,
  //   url: 'https://www.youtube.com/c/AlmarexWebDev',
  // },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: "https://twitter.com/almarexwebdev",
  },
  // {
  //   icon: <GrInstagram className="icon switch__color" />,
  //   url: 'https://www.instagram.com/almarexwebdev1/',
  // },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: "https://www.linkedin.com/in/sakshi-goyat-42743322a/",
  },
];
// skills card
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: "Saas",
    url: "",
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: "Bootstrap",
    url: "",
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: "JQuery",
    url: "",
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: "Git",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: "GitHub",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: "React",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: "NodeJs",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: "MongoDB",
    url: "",
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: "Express",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express",
  },
  {
    icon: <FiFigma className="skills-icon switch__color" />,
    spanText: "Figma",
    url: "https://figma.com",
  },
  {
    icon: <FaPython className="skills-icon switch__color" />,
    spanText: "Python",
    url: "",
  },
  {
    icon: <SiCplusplus className="skills-icon switch__color" />,
    spanText: "C++",
    url: "",
  },
  {
    icon: <DiJava className="skills-icon switch__color" />,
    spanText: "Java",
    url: "",
  },
  {
    icon: <AiOutlineConsoleSql className="skills-icon switch__color" />,
    spanText: "SQL",
    url: "",
  },
  {
    icon: <SiAdobephotoshop className="skills-icon switch__color" />,
    spanText: "Photoshop",
    url: "",
  },
  {
    icon: <SiCanva className="skills-icon switch__color" />,
    spanText: "Canva",
    url: "",
  },
  {
    icon: <SiPostgresql className="skills-icon switch__color" />,
    spanText: "PostgreSQL",
    url: "",
  },
  {
    icon: <SiNetlify className="skills-icon switch__color" />,
    spanText: "Netlify",
    url: "",
  },
  {
    icon: <DiMysql className="skills-icon switch__color" />,
    spanText: "MySQL",
    url: "",
  },
  {
    icon: <SiPostman className="skills-icon switch__color" />,
    spanText: "Postman",
    url: "",
  },
  {
    icon: <SiUbuntu className="skills-icon switch__color" />,
    spanText: "Ubuntu",
    url: "",
  },
];

export { sideBarMenu, socialIcons, skillSet };
