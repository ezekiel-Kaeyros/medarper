'use client';
import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';
import CompletedIcon from './step/icons/CompletedIcon';
import { EDIT_STEP, IS_EDITING } from '@/app/context/actions';
import { 
  EIGTH_FORM,
  FIFTH_FORM,
  FIRST_FORM,
  FORM_STEP,
  FOURTH_FORM,
  NINETH_FORM,
  TENTH_FORM,
  SECOND_FORM,
  SEVENTH_FORM,
  SIXTH_FORM,
  THIRD_FORM 
} from '@/cookies/cookies.d';
import { getFormCookies } from '@/cookies/cookies';

type StepperValueProps = {};

type StepperProps = {
  stepperTranslation: StepperValueProps;
};

const Stepper: React.FC<StepperProps> = ({ stepperTranslation }) => {
  const { step, dispatch } = useFormContext();

  const handleEdit = (stepper: number) => {
    if (stepper < step || formExists(stepper)) {
      dispatch({ type: IS_EDITING });
      dispatch({ type: EDIT_STEP, payload: stepper });
    }
  };

  const formExists = (stepper: number) => {
    switch (stepper) {
      case 1:
        return getFormCookies(FIRST_FORM);
      case 2:
        return getFormCookies(SECOND_FORM);
      case 3:
        return getFormCookies(THIRD_FORM);
      case 4:
        return getFormCookies(FOURTH_FORM);
      case 5:
        return getFormCookies(FIFTH_FORM);
      case 6:
        return getFormCookies(SIXTH_FORM);
      case 7:
        return getFormCookies(SEVENTH_FORM);
      case 8:
        return getFormCookies(EIGTH_FORM);
      case 9:
        return getFormCookies(NINETH_FORM);
      case 10:
        return getFormCookies(TENTH_FORM);
      default:
        return false;
    }
  };

  return (
    <div className="flex relative justify-between items-start xl:h-0 xl:flex-row xl:flex xl:justify-between xl:items-center">
      {Array.from({ length: 10 }, (_, i) => (
        <div className="flex items-center" key={i}>
          <div
            onClick={() => handleEdit(i + 1)}
            className={`w-6 md:w-8 h-6 md:h-8 flex justify-center items-center cursor-pointer ${
              step === i + 1
                ? 'bg-primaryColor scale-[1.5] md:scale-[1.9]'
                : formExists(i + 1)
                ? 'bg-primaryColor'
                : 'bg-[#E0FEDF]'
            } text-white rounded-full`}
          ></div>
        </div>
      ))}
      <div className="flex items-center">
        <div
          className={`w-6 md:w-8 h-6 md:h-8 p-1 flex justify-center items-center ${
            step >= 11 ? 'scale-[1.5] md:scale-[1.9] bg-secondaryColor' : 'bg-[#E0FEDF]'
          } text-white rounded-full p-2`}
        >
          <CompletedIcon color={step === 11 ? 'secondary' : 'primary'} />
        </div>
      </div>
      <div className="h-[1px] bg-slate-400 w-11/12 sm:left-[1.7rem] absolute left-3 top-3 -z-10 xl:top-0"></div>
    </div>
  );
};

export default Stepper;
