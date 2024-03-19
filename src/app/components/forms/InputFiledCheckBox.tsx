import React from 'react';

type InputFieldProps = {
  props?: any;
  name: string;
  placeholder?: string;
  title?: string;
  disable?: boolean;
  value?:string
};

const InputFieldCheckbox: React.FC<InputFieldProps> = ({
  props,
  title,
  name,
  placeholder,
  disable,
  value,
}) => {
  return (
    <>
      <input
        className="appearance-none border-t-2  w-full py-3 px-3 leading-tight border-black  focus:outline-none focus:border-primaryColor focus:bg-white placeholder-[#757171] pr-16"
        id={name}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        // autoFocus
        name={name}
        {...props}
        disabled={disable}
        value={value}
      />
    </>
  );
};

export default InputFieldCheckbox;
