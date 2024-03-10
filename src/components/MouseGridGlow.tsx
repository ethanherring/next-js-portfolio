'use client'
const Box = () => {
  // const repeatedArray = Array(12).fill(<div onMouseEnter={() => console.log("mouse here!")} className="h-16 w-16 border border-solid border-white aspect-square" />);
  return <div onMouseEnter={() => console.log("mouse here!")} className="hover:cube-mouse-highlight opacity-0 h-full w-full border-[.5px] border-solid border-gray-100/25 aspect-square" />
  // return repeatedArray.map((item) => item);
}


const handleMouseMove = (event: React.MouseEvent) => {

}

const MouseGridGlow = () => {
  return (
    <div className="absolute w-screen h-fit flex">
      {Array(25).fill(<div className="w-screen flex flex-col">{Array(25).fill(<Box />)}</div>)}
    </div >
  );
}

export default MouseGridGlow;


{/* <div className="w-screen h-full grid grid-rows-12 grid-cols-12 border-solid-border-white flex justify-center"> */ }


