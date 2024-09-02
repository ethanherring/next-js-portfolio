"use client"

import { useState } from "react";

function ShortBar() {
  return (
    <div className="border border-solid border-white w-[25px]">
    </div>
  );
}

function LongBar() {
  return (
    <div className="border border-solid border-white w-[50px]">
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
    <div className="text-gray-200 flex flex-col gap-4" style={{ height: "height", transition: "all .5s" }}>
      <a href="#about">
        <div className="flex flex-row" onMouseEnter={aboutMouseEnter} onMouseLeave={aboutMouseExit}>

          <div className="my-auto">{aboutHovering ? <LongBar /> : <ShortBar />} </div>
          <div className="ml-3">ABOUT</div>
        </div>
      </a>
      <a href="#experience">
        <div className="flex flex-row" onMouseEnter={experienceMouseEnter} onMouseLeave={experienceMouseExit}>
          <div className="my-auto">{experienceHovering ? <LongBar /> : <ShortBar />} </div>
          <div className="ml-3">EXPERIENCE</div>
        </div>
      </a>
      <a href="#projects">
        <div className="flex flex-row" onMouseEnter={projectMouseEnter} onMouseLeave={projectMouseExit}>
          <div className="my-auto">{projectsHovering ? <LongBar /> : <ShortBar />} </div>
          <div className="ml-3">PROJECTS</div>
        </div>
      </a>
    </div>
  );
}

export default NavigationLinks;
