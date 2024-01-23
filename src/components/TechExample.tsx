'use client'
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { MdDataArray } from "react-icons/md";

interface ITechExampleTypes {
  current_platform: string;
}

const project_examples = [
  {
    platform: 'Typescript',
    completed_projects: [
      {
        project_name: 'Blue Origin Analytics Portal',
        project_description: 'Comprehensive',
        project_features: [
          'Render Tableau Dashboards',
        ],
      },
      {
        project_name: 'This Website!',
        project_link: '',
      },
      {
        project_name: 'Data Structures and Algorithms Solutions',
        project_link: 'https://github.com/ethanherring',
      },
    ],
  },
  {
    platform: 'React',
    completed_projects: [
      {
        project_name: 'Blue Origin Analytics Portal',
        project_description: 'Comprehensive',
        project_features: '',
      },
    ],
  },
  {
    platform: 'AWS',
    completed_projects: [
      {
        project_name: 'Blue Origin Analytics Portal',
        project_description: 'Comprehensive',
        project_features: '',
      },
    ],
  },
  {
    platform: 'Python',
    completed_projects: [
      {
        project_name: 'Blue Origin Analytics Portal',
        project_description: 'Comprehensive',
        project_features: '',
      },
    ],
  },
  {
    platform: 'PostgreSQL',
    completed_projects: [
      {
        project_name: 'Blue Origin Analytics Portal',
        project_description: 'Comprehensive',
        project_features: '',
      },
    ],
  },
]


const TechExample: React.FC<ITechExampleTypes> = ({ current_platform }) => {
  const current_example = project_examples.filter((project) => project.platform === current_platform);
  const current_projects: Array<string> = current_example[0].completed_projects.map((item) => item.project_name);
  const projects_objects = current_example[0].completed_projects.map((item) => item.project_name);

  return (
    <div>
      <div className="h-[350px] border-2 border-solid border-white rounded-lg p-10">
        <h1 className="text-2xl">Projects:</h1>
        <ul>
          {current_projects.map((item) => <li>{item}</li>)}
        </ul>
        <div className=" flex gap-4 justify-center">
          <SiGoogleanalytics size={70} className="my-auto p-2  rounded-md text-indigo-500" />
          <MdOutlineWeb size={80} className="my-auto p-2  rounded-md text-indigo-500" />
          <MdDataArray size={80} className="my-auto p-2  rounded-md text-indigo-500" />
        </div>
      </div>
    </div>

  );
}

export default TechExample
