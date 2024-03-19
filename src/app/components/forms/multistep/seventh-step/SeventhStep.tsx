import React, { useEffect, useState } from 'react';
import {
  SeventhFormValues,
  causesData,
  SeventhStepProps,
} from './seventhStep.d';
import Checkbox from '../../checkbox/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { SEVENTH_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import CheckboxInput from '../../checkbox/checkboxInput';
import InputFieldCheckbox from '../../InputFiledCheckBox';
import EighthStep from '../eighth-step/EighthStep';

const SeventhStep: React.FC<SeventhStepProps> = ({
  seventhStepTranslation,
}) => {
  const { dispatch } = useFormContext();
  const [question] = useState<string>(
    'Hatte eines dieser Merkmale deiner Meinung nach einen Einfluss auf die Diskriminierung?'
  );

  // Scroll on top
  useScrollOnTop();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SeventhFormValues>();

  // watching fields in realtime

  let causesOfDiscrimination: string[] = watch('causesOfDiscrimination');
  let causesOfDiscriminationFreeField: string = watch(
    'causesOfDiscriminationFreeField'
  );

  // Triggered when submitting form
  const onSubmit: SubmitHandler<SeventhFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, SEVENTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    //  Get values from form
    let formValues: {
      causesOfDiscrimination: string[];
      causesOfDiscriminationFreeField: string;
    } = getFormCookies(SEVENTH_FORM);

    // SeventhStep Validation
    dispatch({ type: FORM_ERRORS, payload: true });
    if (
      causesOfDiscrimination &&
      causesOfDiscrimination?.length > 0 &&
      !causesOfDiscrimination.includes(seventhStepTranslation.options[12].label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    if (
      causesOfDiscrimination &&
      causesOfDiscrimination?.length > 0 &&
      causesOfDiscrimination.includes(seventhStepTranslation.options[12].label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: true });
      if (
        causesOfDiscriminationFreeField &&
        causesOfDiscriminationFreeField?.length > 0
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      } else {
        dispatch({ type: FORM_ERRORS, payload: true });
      }
    }

    //   dispatch({ type: FORM_ERRORS, payload: true });
    //   if (causesOfDiscrimination.includes(causesOfDiscrimination[12])) {
    //     dispatch({ type: FORM_ERRORS, payload: false });
    //   }
    // } else {
    //   if (
    //     causesOfDiscrimination &&
    //     causesOfDiscrimination?.length > 0 &&
    //    ! causesOfDiscrimination.includes(
    //       causesOfDiscrimination[causesOfDiscrimination.length - 1]
    //     )
    //   ) {
    //     dispatch({ type: FORM_ERRORS, payload: true });
    //   }
    // if (causesOfDiscrimination && causesOfDiscrimination.length>0 && !causesOfDiscrimination.includes(causesOfDiscrimination[causesOfDiscrimination.length-1])) {
    //   dispatch({ type: FORM_ERRORS, payload: false });
    // }
    // if (
    //   causesOfDiscrimination &&
    //   causesOfDiscrimination.length > 0 &&
    //   causesOfDiscrimination.includes(
    //     causesOfDiscrimination[causesOfDiscrimination.length - 1]
    //   )
    // ) {
    //   dispatch({ type: FORM_ERRORS, payload: true });
    //   if (
    //     causesOfDiscriminationFreeField &&
    //     causesOfDiscriminationFreeField.length > 0
    //   ) {
    //     dispatch({ type: FORM_ERRORS, payload: false });
    //   } else {
    //     dispatch({ type: FORM_ERRORS, payload: true });
    //   }
    // }

    // else if (
    //   causesOfDiscrimination &&
    //   causesOfDiscrimination &&
    //   causesOfDiscrimination?.includes(
    //     seventhStepTranslation.options[12].label
    //   ) &&
    //   causesOfDiscriminationFreeField?.length === 0
    // ) {
    //   dispatch({ type: FORM_ERRORS, payload: true });
    // } else {
    //   dispatch({ type: FORM_ERRORS, payload: false });
    // }

    // Set form values from cookies
    console.log(
      causesOfDiscrimination,
      'this is my causesOfDiscriminationFreeField'
    );

    if (
      formValues &&
      !causesOfDiscrimination &&
      !causesOfDiscriminationFreeField
    ) {
      causesOfDiscrimination !== formValues?.causesOfDiscrimination &&
        setValue('causesOfDiscrimination', formValues?.causesOfDiscrimination);
      causesOfDiscriminationFreeField !==
        formValues?.causesOfDiscriminationFreeField &&
        setValue(
          'causesOfDiscriminationFreeField',
          formValues?.causesOfDiscriminationFreeField
        );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [causesOfDiscrimination, causesOfDiscriminationFreeField]);

  return (
    <form id="seventhForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold text-2xl text-primaryColor mb-4 w-[85%]">
          {seventhStepTranslation?.title}
        </h1>
        <p className="mb-2">{seventhStepTranslation?.multipleAns}</p>
      </div>

      <div>
        {seventhStepTranslation.options?.map((choice, index) => {
          if (index < seventhStepTranslation.options.length - 1) {
            return (
              <Checkbox
                id={`${choice?.ID}`}
                name="causesOfDiscrimination"
                props={register('causesOfDiscrimination')}
                value={`${choice?.value}`}
                examples=""
                label={choice?.label}
                key={choice?.ID}
              />
            );
          }
        })}

        <div>
          <CheckboxInput
            id={
              seventhStepTranslation.options[
                seventhStepTranslation.options.length - 1
              ].ID
            }
            name="causesOfDiscrimination"
            props={register('causesOfDiscrimination')}
            value={
              seventhStepTranslation.options[
                seventhStepTranslation.options.length - 1
              ].value
            }
            examples=""
            label={
              seventhStepTranslation.options[
                seventhStepTranslation.options.length - 1
              ].label
            }
          />
          <InputFieldCheckbox
            name="causesOfDiscriminationFreeField"
            placeholder={seventhStepTranslation.placeHolder}
            props={register('causesOfDiscriminationFreeField')}
            disable={
              causesOfDiscrimination &&
              causesOfDiscrimination?.includes(
                seventhStepTranslation.options[
                  seventhStepTranslation.options.length - 1
                ].label
              )
                ? false
                : true
            }
            value={
              !causesOfDiscrimination ||
              !causesOfDiscrimination?.includes(
                seventhStepTranslation.options[
                  seventhStepTranslation.options.length - 1
                ].label
              )
                ? ''
                : causesOfDiscriminationFreeField
            }
          />
        </div>

        {/* {causesOfDiscrimination &&
          causesOfDiscrimination?.includes(
            seventhStepTranslation.options[12].label
          ) && (
            <div className="ml-2">
              <InputField
                name="causesOfDiscriminationFreeField"
                placeholder={seventhStepTranslation.placeHolder}
                props={register('causesOfDiscriminationFreeField')}
              />
            </div>
          )} */}
      </div>
    </form>
  );
};

export default SeventhStep;
