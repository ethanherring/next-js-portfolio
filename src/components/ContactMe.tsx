'use client'
import { useRef, useState } from "react";
import Button from "./Button";
import MultiSelectDropdown from "./MultiSelectDropdown";


const ContactMe = () => {

  let inputString: string;
  const contactReasons = ["Select", "Work Together", "Quote a Project", "Career Opportunities"];

  const [sectionTwo, setSectionTwo] = useState(false);


  const formRef = useRef();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    console.log(data);
    console.log(data.get('email'));
  }

  const handleClickNext = (e: React.FormEvent) => {
    e.preventDefault();
    setSectionTwo(!sectionTwo);
    // setFormNavArea(formNavArea + 1);
    //   console.log(formNavArea);
    //   if (formNavArea >= 1) {
    //     formSectionOneVisibility = "visible";
    //     console.log(formSectionOneVisibility);
    //   }
  }


  return (
    <div id="contact" className="flex justify-center pt-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-gray-500/15 w-[90%] min-w-[300px] max-w-[500px] p-10  rounded-md hover:border-dashed">
        <h1 className="text-3xl font-extrabold flex justify-center">Contact</h1>
        <div className="border-t border-white-400/10 "></div>
        <p className="block text-md font-medium text-gray-900 dark:text-white">How can I help you?</p>
        <MultiSelectDropdown dropdownOptionsArray={contactReasons} />
        <Button ClickMethod={handleClickNext} ButtonText="Continue" />
        <div className={sectionTwo === true ? 'visible mt-4' : 'hidden mt-4'}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" name="email" className="w-[200px]   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@website.com" required>{inputString}</input>
          <Button ButtonText="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
