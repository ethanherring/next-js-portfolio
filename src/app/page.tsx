import RootLayout from "./layout"
import TerminalGraphic from "@/components/TerminalGraphic"
import Header from "@/components/Header"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"
import Technologies from "@/components/Technologies"

const Page = () => {
  return (
    <RootLayout>
      <div className="bg-gray-900 text-white pt-4 ">
        <Header />
        <div className="w-screen h-minus-header flex justify-center ">
          <TerminalGraphic />
        </div>
        <div className="h-screen">
          <Technologies />
        </div>
        <div className="h-screen">
          <ContactMe />
        </div>
        <Footer />
      </div>
    </RootLayout >
  )
}

export default Page;
