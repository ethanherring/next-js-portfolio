import RootLayout from "./layout"
import JobCard from "@/components/JobCard"
import ProjectCard from "@/components/ProjectCard"
import NavigationLinks from "@/components/NavigationLinks"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

// bg-[#0F172A]

const Page = () => {

  return (
    <RootLayout>
      <div className="bg-black text-white selection:bg-[#756943]">
        {/* <MouseGridGlow /> */}
        {/* <Header /> */}
        {/* <TerminalGraphic /> */}
        {/* <div className="container h-screen w-screen mx-auto grid grid-cols-12"> */}
        <div className="container flex h-screen mx-20">
          <div className="h-full w-1/2 pt-16 overflow-auto flex flex-col gap-6"> {/* Left Screen Fixed Nav */}
            <div>
              <p className="text-5xl font-bold text-center mt-18 pb-4">ETHAN HERRING</p>
              <p className="text-md font-bold text-center pb-4">Data Analyst III | Blue Origin</p>
              <p className="text-center pb-12">I build engaging Full Stack data experiences.</p>
            </div>
            <div className="pl-12">
              <NavigationLinks />
            </div>
            <div className="fixed bottom-10 left-[20%] flex gap-4">
              <FaXTwitter size={24} />
              <a href="https://github.com/ethanherring"><FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ethan-herring-a00448132/">
                <FaLinkedin size={24} />
              </a>
              <a href="/blog">
                <FaNewspaper size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ethan-herring-a00448132/">
                <FaGoodreads size={24} />
              </a>
            </div>

          </div>



          <div className="w-1/2 pt-16 flex-grow overflow-y-scroll no-scrollbar flex flex-col"> {/*Right Side of Screen Scrolling*/}
            <div id="about" className="flex flex-col gap-6 pb-10 text-left">
              <p> Testpoighpaowsen;lasdn asf aefnpask fase f;akjse fpijw ef;kajs df;qwe;fk ad fasjfs.fa sefajsenf;alskenfasefoin;asefpbiuabsefjas efase fa sehfalshe flaisf a sefasef as efua sepfj a;ksjdf ;wkeujf asfej;askeu fase f asef p;aijsefpask;ef piasw efsefu as f, k sefuase f;kj aesfjasedflq. asd;fuasepfiuasf asefhasef ase fa sef ase fase fjasefjn;ajsenf;ajse nfpa se fa sef uaipsefujas e  ef aseuf pais efpja se;kf as defaube[f askm f;kajse fks efkjas elkf alsef  asef asefj e] asefjn;askejf ;asijuebfp ;skejfnpiausbefk as;ef,,</p>
              <p>Thepansfpon aseofunapsne faseoufpasefa sef asefasepfunapsekj fasefinasef kja speijf as <b>ethpaosnepaj</b> aseputahpsejbf,. as efapushetpajksnef..a sefs. aswe;fhoasuebnf; as;efna;sebf;oabse  asefnpasoienf asef asef <b>a;feuhas</b> aseufhpaiusbefiuas;iuebfausef.</p>
            </div>
            <JobCard />
            <ProjectCard />
            <a href=""><div className="fixed top-4 right-6 flex gap-1 hover:text-[#FBE094]">Full Resume{<MdOutlineArrowOutward />}</div></a>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Page;
