import ProjectList from '../assets/Projects.json';
import { MdOutlineArrowOutward } from "react-icons/md";

type Project = {
  project: string,
  time_period: string,
  description: string,
  project_link: string,
  technologies: string[],
}


function MappedCards() {
  return (
    <div className='text-left'>
      {
        ProjectList.map((project: Project) => (
          <a href={`${project.project_link}`}>
            <div className="w-[600px] group my-4 p-4 border-sold border border-transparent rounded-md hover:bg-gray-800/30 hover:border-white/20  transition duration-100 ease-out hover:ease-in">
              <div className='flex gap-3'>
                <div className='w-[450px]'>
                  <div className='text-center text-xs text-nowrap'>{project.time_period}</div>
                </div>
                <div>
                  <div className="flex gap-1 justify-start text-md group-hover:text-[#57DAC7] text-nowrap">{project.project}{<div className='relative transition duration-100 ease-out group-hover:ease-in group-hover:-top-1 group-hover:-right-1'><MdOutlineArrowOutward /></div>}</div>
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
    <div id="projects" className="flex flex-col justify-center mx-auto mt-4">
      <div className='text-center text-xl font-bold'>PROJECTS</div>
      <MappedCards />
    </div>
  );

}

export default ProjectCard;
