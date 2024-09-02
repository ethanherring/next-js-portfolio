// import JobList from '../assets/JobsList.json';
import { MdOutlineArrowOutward } from "react-icons/md";

type Job = {
  job: string,
  time_period: JSX.Element,
  job_link: string,
  description: JSX.Element,
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
          <a href={`${job.job_link}`}>
            <div className="mx-auto max-w-[600px] group p-8 border-solid border border-transparent rounded-md hover:bg-gray-800/30 hover:border-gray-800  transition duration-100 ease-out hover:ease-in">
              <div className='flex gap-3'>
                <div className='w-1/4'>
                  <div className='text-gray-200 text-center text-xs '>{job.time_period}</div>
                </div>
                <div className="w-3/4">
                  <div className="text-gray-200 flex gap-1 justify-start text-sm md:text-md group-hover:text-[#57DAC7] md:text-nowrap">{job.job}{<div className='relative transition duration-100 ease-out group-hover:ease-in group-hover:-top-1 group-hover:-right-1'><MdOutlineArrowOutward /></div>}</div>
                  <p className='text-sm text-gray-500 mt-2'>{job.description}</p>
                  <div className="flex flex-wrap gap-2 justify-start mt-4">
                    {job.skills.map((skill: string) => (
                      <div className="bg-[#112B3A] rounded-xl">
                        <p className="text-xs text-[#57DAC7] flex justify-center p-2">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))
      }
    </div>
  );
}

function JobCard() {

  return (
    <div id="experience" className="flex flex-col justify-center">
      <div className='px-8 text-gray-200 text-left text-lg font-bold md:text-center'>EXPERIENCE</div>
      <MappedCards />
    </div>
  );

}

export default JobCard;
