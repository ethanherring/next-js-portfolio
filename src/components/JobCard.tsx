import JobList from '../assets/JobsList.json';

type Job = {
  job: string,
  description: string,
  skills: string[],
}


function MappedCards() {
  return (
    <div>
      {
        JobList.map((job: Job) => (
          <div className="p-4 border-sold border border-transparent rounded-md hover:bg-gray-500/50 hover:border-white/20 w-[450px]">
            <p className="flex justify-center hover:text-[#57DAC7]">{job.job}</p>
            <div className="flex gap-2 justify-center mt-4">
              {job.skills.map((skill: string) => (
                <div className="bg-[#112B3A] rounded-2xl">
                  <p className="text-sm text-[#57DAC7] flex justify-center p-2">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
}

function JobCard() {

  return (
    <div id="#experience" className="flex flex-col gap-4 justify-center">
      <MappedCards />
    </div>
  );

}

export default JobCard;
