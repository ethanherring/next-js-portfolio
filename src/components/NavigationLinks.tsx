"use client"

import { useState } from "react";

function ShortBar() {
  return (
    <div className="theme-rule border border-solid w-[25px]">
    </div>
  );
}

function LongBar() {
  return (
    <div className="theme-rule border border-solid w-[50px]">
    </div>
  );
}

function NavigationLinks() {
  const [aboutHovering, setAboutHovered] = useState(false);
  const [experienceHovering, setExperienceHovered] = useState(false);
  const [projectsHovering, setProjectsHovered] = useState(false);

  const aboutMouseEnter = () => setAboutHovered(true);
  const aboutMouseExit = () => setAboutHovered(false);

  const experienceMouseEnter = () => setExperienceHovered(true);
  const experienceMouseExit = () => setExperienceHovered(false);

  const projectMouseEnter = () => setProjectsHovered(true);
  const projectMouseExit = () => setProjectsHovered(false);

  return (
    <div className="theme-heading flex flex-col gap-4" style={{ transition: "all .5s" }}>
      <a href="#about" className="theme-link">
        <div className="flex flex-row" onMouseEnter={aboutMouseEnter} onMouseLeave={aboutMouseExit}>

          <div className="my-auto">{aboutHovering ? <LongBar /> : <ShortBar />} </div>
          <div className="ml-3">ABOUT</div>
        </div>
      </a>
      <a href="#experience" className="theme-link">
        <div className="flex flex-row" onMouseEnter={experienceMouseEnter} onMouseLeave={experienceMouseExit}>
          <div className="my-auto">{experienceHovering ? <LongBar /> : <ShortBar />} </div>
          <div className="ml-3">EXPERIENCE</div>
        </div>
      </a>
      <a href="#projects" className="theme-link">
        <div className="flex flex-row" onMouseEnter={projectMouseEnter} onMouseLeave={projectMouseExit}>
          <div className="my-auto">{projectsHovering ? <LongBar /> : <ShortBar />} </div>
          <div className="ml-3">PROJECTS</div>
        </div>
      </a>
    </div>
  );
}

export default NavigationLinks;
