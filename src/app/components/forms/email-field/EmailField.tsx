import React from 'react';

type EmailFieldProps = {
  props?: any;
  name: string;
  label?: string;
  placeholder: string;
};
const EmailField: React.FC<EmailFieldProps> = ({
  props,
  name,
  label,
  placeholder,
}) => {
  return (
    <>
      <label
        className="font-medium block mb-1 mt-6 text-gray-700"
        htmlFor="email"
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded-lg w-full py-3 px-3 leading-tight border-gray-300  focus:outline-none focus:border-primaryColor focus:bg-white placeholder-primaryColor pr-4"
        id={name}
        type="email"
        placeholder={placeholder}
        autoComplete="off"
        autoFocus
        name={name}
        {...props}
      />
    </>
  );
};

export default EmailField;
