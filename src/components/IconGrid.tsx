import Image from "next/image";

const IconGrid = () => {
  return (
    <div className="container mx-auto px-8 pt-6 md:p-6 lg:px-16 xl:px-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <img src="/AWS Light.png" alt="AWS" className="w-20 h-20" />
        </div>
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <img src="/Typescript Light.png" alt="AWS" className="w-20 h-20" />
        </div>
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <Image src="/Python Dark.png" alt="AWS" width={20} height={20} />
        </div>
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <img src="/Redis Dark.png" alt="AWS" className="w-20 h-20" />
        </div>
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <img src="/Tailwind Dark.png" alt="AWS" className="w-20 h-20" />
        </div>
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <img src="/ReactJS Dark.svg" alt="AWS" className="w-20 h-20" />
        </div>
        <div className="flex justify-center bg-solid bg-blue-900/40 hover:bg-blue-900/90 rounded-2xl">
          <img src="/Docker Light Logo.png" alt="AWS" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
};

export default IconGrid;
