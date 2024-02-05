import RootLayout from "./layout"
import JobCard from "@/components/JobCard"
import NavigationLinks from "@/components/NavigationLinks"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Page = () => {

  return (
    <RootLayout>
      <div className="bg-[#0F172A] text-white pt-4 ">
        {/* <Header /> */}
        <div className="w-screen min-h-screen">
          {/* <TerminalGraphic /> */}
          <div className="flex flex-col gap-6"> {/* Left Screen Fixed Nav */}
            <div>
              <p className="text-4xl font-bold text-center">ETHAN HERRING</p>
              <p className="text-md font-bold text-center">Data + Development @ Blue Origin</p>
              <p className="text-center">I build engaging Full Stack data applications.</p>
            </div>
            <div className="invisible md:visible md:flex md:justify-center md:gap-2 md:mt-[-10px]">
              <FaXTwitter size={20} />
              <a href="https://github.com/ethanherring"><FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ethan-herring-a00448132/">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-bold text-md flex justify-center">ABOUT</p>
            <p className="text-center text-md">I began programming professionally in 2019. I find
              incredible <b>joy</b> in solving problems with <b>software</b></p>
          </div>

          <NavigationLinks />
          <div className="flex justify-center"> {/*Right Side of Screen Scrolling*/}
            <JobCard />
          </div>
          <a href=""><p className="text-center">View Full Resume</p></a>

        </div>
      </div>
    </RootLayout >
  )
}

export default Page;
