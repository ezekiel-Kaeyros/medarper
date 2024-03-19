import React from 'react';

type RadioSingleProps = {
  id: string;
  props: any;
  value: string;
  name: string;
  label: string;
};

const RadioSingle: React.FC<RadioSingleProps> = ({
  id,
  props,
  value,
  name,
  label,
}) => {
  return (
    <div className="flex items-center">
      <input
        {...props}
        id={`${id}`}
        type="radio"
        value={value}
        name={name}
        className="w-4 h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor "
      />
      <label
        htmlFor={id}
        className="w-fit py-2 my-1 bg-white pl-4 pr-12 ml-2 lg:text-xl text-sm block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-primaryColor peer-checked:font-bold peer-checked:text-white font-medium text-gray-900 "
      >
        {label}
      </label>
    </div>
  );
};

export default RadioSingle;
