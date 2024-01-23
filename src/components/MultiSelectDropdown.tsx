'use client'

interface IMultiSelect {
  dropdownOptionsArray: Array<string>;
}

const MultiSelectDropdown: React.FC<IMultiSelect> = ({ dropdownOptionsArray }) => {
  return (
    <div className="bg-gray-400/25 rounded-md p-3 text-sm text-gray-400">
      <select className="w-full bg-transparent">
        {dropdownOptionsArray.map((item: string) => { return <option className="" value={item} key={item}>{item}</option> })}
      </select>
    </div>

  );
}

export default MultiSelectDropdown;
