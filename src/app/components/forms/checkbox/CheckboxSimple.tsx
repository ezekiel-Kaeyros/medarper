import React from 'react';

type CheckboxSimpleProps = {
  name: string;
  id: string;
  value: string;
  examples?: string;
  label?: string;
  props: any;
};

const CheckboxSimple: React.FC<CheckboxSimpleProps> = ({
  name,
  id,
  value,
  label,
  props,
  examples,
}) => {
  return (
    <div className="p-1">
      <div className="flex w-fit items-center mr-0 mb-0">
        <label
          htmlFor={id}
          className="w-full py-2 text-primaryColor pr-4  rounded-lg font-medium "
        >
          <div className="flex cursor-pointer lg:text-xl">{label}</div>
        </label>
        <input
          {...props}
          id={`${id}`}
          type="checkbox"
          value={value}
          name={name}
          className={`${`w-12 h-12  bg-white border-gray-300 rounded focus:ring-green-500 dark:focus:ring-primaryColor 
          `} `}
        />
      </div>
    </div>
  );
};

export default CheckboxSimple;
