'use client'
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import MenuBar from "./MenuBar";



const Header = () => {
  const [visibility, setVisibility] = useState(false);

  const HandleNavClick = () => {
    setVisibility(!visibility);
  }
  return (
    <div className="w-screen">
      <div className="sticky top-0 min-h-[65px]">
        <div className="flex flex-row">
          <div className="absolute left-4 ">
            <a href="/">
              <h2 className="text-2xl hover:text-gray-400 font-extrabold">Ethan Herring</h2>
            </a>
          </div>
          <button className="absolute buttonround  right-10 top-2" onClick={HandleNavClick} >
            {visibility === false ? <FaGripLines size={20} /> : <RiCloseFill size={20} />}
          </button>
          <MenuBar visibility={visibility} />
        </div>
      </div>
    </div>
  )
}

export default Header
