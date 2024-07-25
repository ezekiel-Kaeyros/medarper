import React from 'react';

type TextAreaProps = {
  props?: any;
  name: string;
  placeholder: string;
  title?: string;
  type?: string;
  val?: string;
  handleChange?: any;
  className?: string;
  numberRows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  props,
  name,
  title,
  placeholder,
  val,
  // handleChange,
  className,
  numberRows,
}) => {
  const defaultClassName = `placeholder:text-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md focus:ring-blue-500 text-lg focus:py-2 placeholder:max-w-xs placeholder:whitespace-pre-line`;
  // focus:border border focus:border-primaryColor border-primaryColor
  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  const defaultRows = 6;
  const row = !numberRows ? defaultRows : numberRows;

  return (
    <>
      {title && (
        <label
          htmlFor={name}
          className="block mb-3 text-sm font-bold text-gray-900 "
        >
          {title}
        </label>
      )}
      <textarea
        id={placeholder}
        rows={row}
        name={name}
        {...props}
        value={val}
        // onChange={handleChange}
        className={combinedClassName}
        placeholder={`${placeholder}`}
      ></textarea>
    </>
  );
};

export default TextArea;
