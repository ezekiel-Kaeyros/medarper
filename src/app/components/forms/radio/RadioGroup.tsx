import React from 'react';

type RadioGroupProps = {
  options: Array<any>;
  title: string;
  props: any;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ options, title, props }) => {
  return (
    <>
      <div className="mb-3 text-primaryColor font-bold lg:text-2xl lg:mb-8 lg:w-11/12">
        {title}
      </div>
      <div className="md:flex md:justify-between flex flex-col space-y-2">
        {options.map((radioElement) => (
          <div key={radioElement.ID} className="flex  items-center">
            <input
              {...props}
              id={`${radioElement?.ID}`}
              type="radio"
              value={radioElement.value}
              name={radioElement.name}
              className="w-4 h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor dark:focus:ring-primaryColor dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
            />
            <label
              htmlFor={radioElement.ID}
              className="w-fit py-2 my-1 bg-white pl-4 pr-12  text-sm block cursor-pointer select-none rounded-md lg:text-xl p-2 text-center peer-checked:bg-primaryColor peer-checked:font-bold peer-checked:text-white font-medium text-gray-900 "
            >
              {radioElement.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
