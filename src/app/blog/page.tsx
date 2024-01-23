import RootLayout from "../layout"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


const Page = () => {

  return (
    <RootLayout>
      {/*<div className={darkModeState ? "bg-white text-black" : "bg-gray-900 text-white"}> */}
      <div className="bg-gray-900 text-white pt-4 h-screen">
        <Header />
        <div className="p-10">
          <h1 className="text-3xl font-extrabold">Using NextJS to Build a Portfolio</h1>
          <h1 className="text-2xl mt-4">Load Times</h1>
          <h1 className="text-2xl mt-4">NextJS Concepts</h1>
          <p className="mt-4">
            This is my first blog post. Blah blah blah blah.
            I'm figuring out what to write here and this is just test text.
            Please don't read this.
          </p>
        </div>
        <Footer />
      </div>
    </RootLayout>
  )
}

export default Page
