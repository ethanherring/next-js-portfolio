import NavigationLinks from "@/components/NavigationLinks"
import TerminalGraphic from "@/components/TerminalGraphic";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Page = () => {

  return (
    <main>
      <div className="site-shell w-full min-h-screen min-w-[200px]">
        <div className="min-w-[200px] flex flex-col md:flex-row md:container md:h-screen md:mx-20">
          <div className="w-full md:h-full md:w-1/2 pt-11 md:overflow-auto flex flex-col gap-6"> {/* Left Screen Fixed Nav */}
            <div className="px-8">
              <Link href="/" className="theme-link">
                <p className="theme-heading text-wrap text-3xl md:text-2xl lg:text-5xl font-bold text-left pb-4">ETHAN HERRING</p>
              </Link>
              <p className="theme-heading text-md sm:text-lg lg:text-xl text-left pb-4">Software Engineer</p>
              <p className="theme-muted text-left text-md pb-12">Building Data Focused Applications</p>
            </div>
            <div className="max-sm:hidden"> {/* Make Nav Links Hidden on Mobile */}
              <div className="text-left px-8">
                <NavigationLinks />
              </div>
            </div>
            <div className=" px-8 min-sm:fixed min-sm:bottom-10 min-sm:left-[20%] flex gap-4">
              <a href="https://github.com/ethanherring" className="theme-link" aria-label="GitHub">
                <FaGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/ethan-herring-a00448132/" className="theme-link" aria-label="LinkedIn">
                <FaLinkedin size={35} />
              </a>
            </div>





          </div>


          <div className="w-full md:w-1/2 lg:w-1/2 pt-24 flex md:flex-grow md:overflow-y-scroll no-scrollbar flex-col"> {/*Right Side of Screen Scrolling*/}

            <p className="theme-muted text-left px-8">I built the graphic below for an early version of my portfolio that never made it to production.</p>
            <div className="mx-auto pt-10">
              <TerminalGraphic />
            </div>
          </div>


        </div>
      </div>
    </main>
  )
}

export default Page;
