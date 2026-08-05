// import JobList from '../assets/JobsList.json';
import { MdOutlineArrowOutward } from "react-icons/md";
import type { ReactElement } from "react";

type Job = {
  job: string,
  time_period: ReactElement,
  job_link: string,
  description: ReactElement,
  skills: string[],
}

const JobList =
  [
    {
      "job": "Developer - Business Intelligence III",
      "time_period": <>2024 &mdash; PRESENT</>,
      "description": <>Created Supply Chain Portal using Typescript (React JS) & Python (Fast API).
        Deployed and Mainted Grafana Server on AWS ECS using Terraform.
      </>,
      "job_link": "https://www.blueorigin.com/",
      "skills": [
        "ReactJS",
        "TailwindCSS",
        "Kubernetes"
      ]
    },
    {
      "job": "Business Intelligence Analyst II",
      "time_period": <>2022 &mdash; 2024</>,
      "description": <>
        Automation Purchase Order Status Notifications to Suppliers using AWS ECS, Docker, & Python.
        Utilized Databricks DBT Data Models to Enable new Supply Chain Metrics.

      </>,
      "job_link": "https://www.blueorigin.com/",
      "skills": [
        "AWS ECS",
        "SQL"
      ]
    },
    {
      "job": "Supply Chain Leadership Development Program",
      "time_period": <>2020 &mdash; 2022</>,
      "description": <>Created analytics reporting <b>Hadoop</b> cluster and migrated procurent MS Access Database to Alteryx & SQL.</>,
      "job_link": "https://www.textron.com/",
      "skills": [
        "Python",
        "PowerBI"
      ]
    }
  ]


function MappedCards() {
  return (
    <div className='text-left'>
      {
        JobList.map((job: Job) => (
          <div key={job.job}>
            <a href={job.job_link}>
              <div className="theme-card mx-auto max-w-[600px] group p-8 border-solid border rounded-md transition duration-100 ease-out hover:ease-in">
                <div className='flex gap-3'>
                  <div className='w-1/4'>
                    <div className='theme-heading text-center text-xs'>{job.time_period}</div>
                  </div>
                  <div className="w-3/4">
                    <div className="theme-card-title theme-heading flex gap-1 justify-start text-sm md:text-md group-hover:underline md:text-nowrap">{job.job}{<div className='relative transition duration-100 ease-out group-hover:ease-in group-hover:-top-1 group-hover:-right-1'><MdOutlineArrowOutward /></div>}</div>
                    <p className='theme-muted text-sm mt-2'>{job.description}</p>
                    <div className="flex flex-wrap gap-2 justify-start mt-4">
                      {job.skills.map((skill: string) => (
                        <div key={skill} className="theme-pill rounded-xl">
                          <p className="text-xs flex justify-center p-2">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))
      }
    </div>
  );
}

function JobCard() {

  return (
    <div id="experience" className="flex flex-col justify-center">
      <div className='theme-heading px-8 text-left text-lg font-bold md:text-center'>EXPERIENCE</div>
      <MappedCards />
    </div>
  );

}

export default JobCard;
