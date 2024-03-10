import JobList from '../assets/JobsList.json';
import { MdOutlineArrowOutward } from "react-icons/md";

type Job = {
  job: string,
  time_period: string,
  job_link: string,
  description: string,
  skills: string[],
}


function MappedCards() {
  return (
    <div className='text-left'>
      {
        JobList.map((job: Job) => (
          <a href={`${job.job_link}`}>
            <div className="w-[600px] group my-4 p-4 border-sold border border-transparent rounded-md hover:bg-gray-800/30 hover:border-white/20  transition duration-100 ease-out hover:ease-in">
              <div className='flex gap-3'>
                <div className='w-[450px]'>
                  <div className='text-center text-xs text-nowrap'>{job.time_period}</div>
                </div>
                <div>
                  <div className="flex gap-1 justify-start text-md group-hover:text-[#FBE094] text-nowrap">{job.job}{<div className='relative transition duration-100 ease-out group-hover:ease-in group-hover:-top-1 group-hover:-right-1'><MdOutlineArrowOutward /></div>}</div>
                  <p className='text-sm text-gray-500 mt-2'>{job.description}</p>
                  <div className="flex gap-2 justify-start mt-4">
                    {job.skills.map((skill: string) => (
                      <div className="bg-[#756943] rounded-xl">
                        <p className="text-xs text-[#FBE094] flex justify-center p-2">{skill}</p>
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
    <div id="experience" className="flex flex-col justify-center mx-auto">
      <div className='text-center text-xl font-bold'>EXPERIENCE</div>
      <MappedCards />
    </div>
  );

}

export default JobCard;
