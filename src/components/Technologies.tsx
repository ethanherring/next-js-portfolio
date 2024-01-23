'use client'
import { FaAws, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import TechExample from "./TechExample";
import { useState } from "react";

const Technologies = () => {
  const [currentPlatform, setCurrentPlatform] = useState('Typescript');


  return (
    <div id="techstack" className="flex flex-col justify-center pt-5">
      <h1 className="flex justify-center text-3xl font-extrabold">Daily Tech Stack</h1>
      <div className="grid grid-cols-1 gap-5 py-7 px-24 md:flex justify-center justify-items-center ">
        <div className="border border-solid border-white">
          <SiTypescript size={100} className="h-18" onClick={() => setCurrentPlatform("Typescript")} />
          <p>Data Analytics Portal</p>
        </div>
        <div>
          <FaReact size={100} className="h-18" onClick={() => setCurrentPlatform("React")} />
          <p>Testing</p>
        </div>
        <div>
          <FaAws size={100} className="h-18" onClick={() => setCurrentPlatform("AWS")} />
          <p>Testing</p>
        </div>
        <div>
          <FaPython size={100} className="h-18" onClick={() => setCurrentPlatform("Python")} />
          <p>Testing</p>
        </div>
        <div>
          <DiPostgresql size={100} className="h-18" onClick={() => setCurrentPlatform("PostgreSQL")} />
          <p>Test</p>
        </div>
        <div>
          <DiPostgresql size={100} className="h-18" onClick={() => setCurrentPlatform("PostgreSQL")} />
          <p>Test</p>
        </div>
      </div>
      {/*<TechExample current_platform={currentPlatform} /> */}
    </div>
  );
}

export default Technologies;
