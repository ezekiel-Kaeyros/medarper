'use client';
import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';
import CompletedIcon from './step/icons/CompletedIcon';

type StepperValueProps = {};

type StepperProps = {
  stepperTranslation: StepperValueProps;
};

const Stepper: React.FC<StepperProps> = ({ stepperTranslation }) => {
  const { step } = useFormContext();
  return (
    <div className="flex relative justify-between  items-start xl:h-0 xl:flex-row xl:flex xl:justify-between xl:items-center">
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step > 1 ? 'bg-primaryColor' : ''
          } ${
            step === 1 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          }  text-white rounded-full`}
        ></div>
      </div>
      <div className="flex  items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 2 || step > 2 ? 'bg-primaryColor' : 'bg-[#E0FEDF]'
          }  ${
            step === 2 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full `}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 3 || step > 3 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          }  ${
            step === 3 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 4 || step > 4 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          } ${
            step === 4 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 5 || step > 5 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          } ${
            step === 5 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 6 || step > 6 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          } ${
            step === 6 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 7 || step > 7 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          } ${
            step === 7 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 8 || step > 8 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          } ${
            step === 8 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center ${
            step === 9 || step > 9 ? 'bg-primaryColor' : 'bg-[#E0FEDF] '
          } ${
            step === 9 ? 'scale-[1.5] md:scale-[1.9] bg-primaryColor' : ''
          } text-white rounded-full`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 p-1 flex justify-center items-center ${
            step >= 10
              ? ' scale-[1.5] md:scale-[1.9] bg-secondaryColor '
              : 'bg-[#E0FEDF] '
          }  text-white rounded-full p-2`}
        >
          <CompletedIcon color={step === 10 ? 'secondary' : 'primary'} />
        </div>
      </div>
      <div className="h-[1px] bg-slate-400 w-11/12 sm:left-[1.7rem] absolute left-3 top-3 -z-10 xl:top-0"></div>
    </div>
  );
};

export default Stepper;
