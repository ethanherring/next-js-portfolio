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
import Image from 'next/image';
import GlowEffect from "@/components/GlowEffect";

// bg-[#0F172A]

const Page = () => {

  return (
    <RootLayout>
        <GlowEffect />
      <div className="bg-[#0F172A] text-white selection:bg-[#57DAC7]">
        {/* <MouseGridGlow /> */}
        {/* <Header /> */}
        {/* <TerminalGraphic /> */}
        {/* <div className="container h-screen w-screen mx-auto grid grid-cols-12"> */}
        <div className="container flex h-screen mx-20">
          <div className="h-full w-1/2 pt-16 overflow-auto flex flex-col gap-6"> {/* Left Screen Fixed Nav */}
            <div className="mx-8">
              <a href="/">
              <p className="text-5xl font-bold text-left mt-18 pb-4">ETHAN HERRING</p>
              </a>
              <p className="text-xl text-left font-bold pb-4">Developer - Business Intellignece III</p>
              <p className="text-left pb-12">I build engaging Full Stack data experiences.</p>
            </div>
            <div className="text-left mx-8">
              <NavigationLinks />
            </div>
            <div className="fixed bottom-10 left-[20%] flex gap-4">
              <a href="https://x.com/EthanHerring007">
                <FaXTwitter size={24} />
              </a>
              <a href="https://github.com/ethanherring">
                <FaGithub size={20} />
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
            <div className="w-full">
              <div className="flex gap-4 justify-center max-w-[500px] max-h-[500px] mb-4">
                <Image className='rounded-md' alt='' src={'/assets/react-js.png'} height={70} width={70} />
                <Image className='rounded-md' alt='' src={'/assets/Grafana Logo.png'} height={70} width={70} />
                <Image className='rounded-md' alt='' src={'/assets/typescript.png'} height={70} width={70} />
                <Image className='rounded-md' alt='' src={'/assets/aws-logo.png'} height={70} width={70} />
                <Image className='rounded-md' alt='' src={'/assets/aws-logo.png'} height={70} width={70} />
              </div>
            </div>
            <a href=""><div className="fixed top-4 right-6 flex gap-1 hover:text-[#57DAC7]">Full Resume{<MdOutlineArrowOutward />}</div></a>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Page;
