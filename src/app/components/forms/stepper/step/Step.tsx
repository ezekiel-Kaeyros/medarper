import React from 'react';

type StepProps = {
  isActive: boolean;
  number?: number;
};
const Step: React.FC<StepProps> = ({ isActive }) => {
  return (
    <div
      className={`w-8 h-8 rounded-full ${
        isActive ? 'scale-125 bg-primaryColor' : 'bg-gray-600'
      } `}
    ></div>
  );
};

export default Step;
