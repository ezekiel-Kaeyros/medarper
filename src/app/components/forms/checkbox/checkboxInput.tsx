import React from 'react';

type CheckboxProps = {
  name: string;
  id: string;
  value: string;
  examples?: string;
  label?: string;
  props: any;
};

const CheckboxInput: React.FC<CheckboxProps> = ({
  name,
  id,
  value,
  label,
  props,
  examples,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center mr-0 mb-0">
        <input
          {...props}
          id={`${id}`}
          type="checkbox"
          value={value}
          name={name}
          className={`${`w-full h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor dark:focus:ring-primaryColor dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700`} `}
        />
        <label
          htmlFor={id}
          className="w-full py-2 bg-white pl-4 pr-12 ml-0 text-sm block cursor-pointer select-none  p-2 text-center peer-checked:bg-primaryColor peer-checked:font-bold peer-checked:text-white font-medium text-[#2F804A]"
        >
          <div className="flex cursor-pointer lg:text-xl">{label}</div>
        </label>
      </div>
    </div>
  );
};

export default CheckboxInput;
