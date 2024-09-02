import { MdOutlineArrowOutward } from "react-icons/md";

type Project = {
  project: string,
  time_period: string,
  description: string,
  project_link: string,
  technologies: string[],
}

const ProjectList = [
  {
    "project": "Terminal Graphic",
    "time_period": "2023",
    "description": "Terminal Graphic Created using ReactJS.                         ",
    "project_link": "/terminalgraphic",
    "technologies": [
      "ReactJS",
      "TailwindCSS"
    ]
  }
]

function MappedCards() {
  return (
    <div className='text-left mt-8'>
      {
        ProjectList.map((project: Project) => (
          <a href={`${project.project_link}`}>
            <div className="mx-auto max-w-[600px] group p-8 border-solid border border-transparent rounded-md hover:bg-gray-800/30 hover:border-gray-800  transition duration-100 ease-out hover:ease-in">
              <div className='flex gap-3'>
                <div className='w-1/4'>
                  <div className='text-gray-200 text-center text-xs text-nowrap'>{project.time_period}</div>
                </div>
                <div className="w-3/4">
                  <div className="flex gap-1 justify-start text-sm md:text-md group-hover:text-[#57DAC7]">{project.project}{<div className='relative transition duration-100 ease-out group-hover:ease-in group-hover:-top-1 group-hover:-right-1'><MdOutlineArrowOutward /></div>}</div>
                  <p className='text-sm text-gray-500 mt-2'>{project.description}</p>
                  <div className="flex gap-2 justify-start mt-4">
                    {project.technologies.map((technology: string) => (
                      <div className="bg-[#112B3A] rounded-xl my-auto">
                        <p className="text-xs text-[#57DAC7] text-nowrap flex justify-center p-2">{technology}</p>
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

function ProjectCard() {

  return (
    <div id="projects" className="flex flex-col justify-center">
      <div className='px-8 text-gray-200 text-left text-lg font-bold md:text-center'>PROJECTS</div>
      <MappedCards />
    </div>
  );

}

export default ProjectCard;
