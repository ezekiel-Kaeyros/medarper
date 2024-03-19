import React from 'react';

type InputFieldProps = {
  props?: any;
  name: string;
  placeholder?: string;
  title?: string;
  dynamicStyles?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  props,
  title,
  name,
  placeholder,
  dynamicStyles,
}) => {
  return (
    <>
      <label className="font-medium block mb-1 text-gray-700" htmlFor={name}>
        {title}
      </label>
      <input
        className="appearance-none border rounded-lg w-full py-2 px-2 md:py-3 md:px-3 leading-tight border-gray-300  focus:outline-none focus:border-primaryColor focus:bg-white placeholder:text-sm lg:placeholder:text-xl placeholder-primaryColor pr-16"
        id={name}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        // autoFocus
        name={name}
        {...props}
      />
    </>
  );
};

export default InputField;
