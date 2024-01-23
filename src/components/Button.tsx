import { abort } from "process";


interface IButtonTypes {
  ClickMethod?: Function;
  ButtonText: string;
}

const Button: React.FC<IButtonTypes> = ({ ClickMethod, ButtonText }) => {
  return (
    <button onClick={ClickMethod} type="button" className={`border-solid border-2 h-[40px] w-1/3 hover:bg-indigo-500 rounded-md border-gray-200 block mt-4 text-sm font-medium text-gray-900 dark:text-white`}>{ButtonText}</button>
  );
}

export default Button

