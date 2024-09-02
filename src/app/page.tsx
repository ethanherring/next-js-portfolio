import RootLayout from "./layout"
import JobCard from "@/components/JobCard"
import ProjectCard from "@/components/ProjectCard"
import NavigationLinks from "@/components/NavigationLinks"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import GlowEffect from "@/components/GlowEffect";
import IconGrid from "@/components/IconGrid";

// bg-[#0F172A]

const Page = () => {

  return (
    <RootLayout>
      <GlowEffect />
      <div className="w-full min-w-[200px] bg-[#0F172A] text-white selection:bg-[#57DAC7]">
        <div className="min-w-[200px] flex flex-col md:flex-row md:container md:h-screen md:mx-20">
          <div className="w-full md:h-full md:w-1/2 pt-11 md:overflow-auto flex flex-col gap-6"> {/* Left Screen Fixed Nav */}
            <div className="px-8">
              <a href="/">
                <p className="text-gray-200 text-wrap text-3xl md:text-2xl lg:text-5xl font-bold text-left  pb-4">ETHAN HERRING</p>
              </a>
              <p className="text-gray-200 text-md sm:text-lg lg:text-xl text-left pb-4">Software Engineer</p>
              <p className="text-left text-md text-gray-500 pb-12">Building Data Focused Applications</p>
            </div>
            <div className="max-sm:hidden"> {/* Make Nav Links Hidden on Mobile */}
              <div className="text-left px-8">
                <NavigationLinks />
              </div>
            </div>
            <div className=" px-8 md:fixed md:bottom-10 md:left-[20%] flex gap-4">
              <a href="https://github.com/ethanherring">
                <FaGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/ethan-herring-a00448132/">
                <FaLinkedin size={35} />
              </a>
            </div>

          </div>



          <div className="w-full md:w-1/2 lg:w-1/2 pt-11 flex md:flex-grow md:overflow-y-scroll no-scrollbar flex-col"> {/*Right Side of Screen Scrolling*/}
            <div id="about" className="flex flex-col gap-4 pb-10 text-left text-sm text-gray-400">
              <div className='text-gray-200 text-left px-8 md:text-center text-lg font-bold'>ABOUT</div>
              <p className="px-8 text-md ">In 2019 I began using basic Python to automate boring and repetitive tasks for
                our team. Programming became a tool I could use to <b className="text-white">help people do their best work. </b>
                I began to realize the competitive advantage of having <b className="text-white">Business Context </b>
                and the <b className="text-white">Software Engineering </b> skills to turn my ideas into solutions.
              </p>
              <p className="px-8 text-md">
                I have continued to <b className="text-white">blend analytics and automation </b>
                with a focus on Supply Chain and Manufacturing tools. Placing all tools and
                automations needed in the same portal <b className="text-white">reduces
                  friction </b> and increases the odds of tool adoption.
              </p>
              <p className="px-8 text-md">
                Check out my background and what I've been working below.
              </p>
            </div>

            <JobCard />
            <ProjectCard />
            <p className="mt-20 mb-20 text-gray-400 text-left mx-8 text-sm">Built with <b className="text-white">Next.js</b> and <b className="text-white">Tailwind CSS</b>, deployed with <b className="text-white">AWS</b>.</p>
            {/* <a href=""><div className="fixed top-4 right-6 flex gap-1 hover:text-[#57DAC7]">Full Resume{<MdOutlineArrowOutward />}</div></a> */}
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Page;
