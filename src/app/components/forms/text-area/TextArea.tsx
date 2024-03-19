import React from 'react';

type TextAreaProps = {
  props: any;
  name: string;
  placeholder: string;
  title?: string;
  numberRows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  props,
  name,
  title,
  placeholder,
  numberRows,
}) => {
  return (
    <div className="h-full">
      <label
        htmlFor={name}
        className="font-bold block lg:text-3xl text-primaryColor"
      >
        {title}
      </label>
      <textarea
        id={placeholder}
        rows={numberRows && numberRows | 4}
        name={name}
        {...props}
        className="block p-2.5 w-full h-full text-sm placeholder-primaryColor  rounded-md border   dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
