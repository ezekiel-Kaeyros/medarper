import React, { useEffect, useState } from 'react';
import { EighthFormValues, causesData, EighthStepProps } from './eighthStep';
import Checkbox from '../../checkbox/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { EIGTH_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import CheckboxInput from '../../checkbox/checkboxInput';
import InputFieldCheckbox from '../../InputFiledCheckBox';
import EighthStep from './EighthStep';

const EightStep: React.FC<EighthStepProps> = ({ eighthStepTranslation }) => {
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
  } = useForm<EighthFormValues>();

  // watching fields in realtime

  let causesOfDiscrimination: string[] = watch('causesOfDiscrimination');
  let causesOfDiscriminationFreeField: string = watch(
    'causesOfDiscriminationFreeField'
  );

  // Triggered when submitting form
  const onSubmit: SubmitHandler<EighthFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, EIGTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    //  Get values from form
    let formValues: {
      causesOfDiscrimination: string[];
      causesOfDiscriminationFreeField: string;
    } = getFormCookies(EIGTH_FORM);

    // SeventhStep Validation
    dispatch({ type: FORM_ERRORS, payload: false });
    if (
      causesOfDiscrimination &&
      causesOfDiscrimination?.length > 0 &&
      !causesOfDiscrimination.includes(eighthStepTranslation.options[12].label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    if (
      causesOfDiscrimination &&
      causesOfDiscrimination?.length > 0 &&
      causesOfDiscrimination.includes(eighthStepTranslation.options[12].label)
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
    //     eighthStepTranslation.options[12].label
    //   ) &&
    //   causesOfDiscriminationFreeField?.length === 0
    // ) {
    //   dispatch({ type: FORM_ERRORS, payload: true });
    // } else {
    //   dispatch({ type: FORM_ERRORS, payload: false });
    // }

    // Set form values from cookies

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
    <form id="eighthForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold text-2xl text-primaryColor mb-4 w-[85%]">
          {eighthStepTranslation?.title}
        </h1>
        <p className="mb-2 text-primaryColor">
          {eighthStepTranslation?.multipleAns}
        </p>
      </div>

      <div>
        {eighthStepTranslation.options?.map((choice, index) => {
          if (index < eighthStepTranslation.options.length - 1) {
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
              eighthStepTranslation.options[
                eighthStepTranslation.options.length - 1
              ].ID
            }
            name="causesOfDiscrimination"
            props={register('causesOfDiscrimination')}
            value={
              eighthStepTranslation.options[
                eighthStepTranslation.options.length - 1
              ].value
            }
            examples=""
            label={
              eighthStepTranslation.options[
                eighthStepTranslation.options.length - 1
              ].label
            }
          />
          <InputFieldCheckbox
            name="causesOfDiscriminationFreeField"
            placeholder={eighthStepTranslation.placeHolder}
            props={register('causesOfDiscriminationFreeField')}
            disable={
              causesOfDiscrimination &&
              causesOfDiscrimination?.includes(
                eighthStepTranslation.options[
                  eighthStepTranslation.options.length - 1
                ].label
              )
                ? false
                : true
            }
            value={
              !causesOfDiscrimination ||
              !causesOfDiscrimination?.includes(
                eighthStepTranslation.options[
                  eighthStepTranslation.options.length - 1
                ].label
              )
                ? ''
                : causesOfDiscriminationFreeField
            }
          />
        </div>

        {/* {causesOfDiscrimination &&
          causesOfDiscrimination?.includes(
            eighthStepTranslation.options[12].label
          ) && (
            <div className="ml-2">
              <InputField
                name="causesOfDiscriminationFreeField"
                placeholder={eighthStepTranslation.placeHolder}
                props={register('causesOfDiscriminationFreeField')}
              />
            </div>
          )} */}
      </div>
    </form>
  );
};

export default EightStep;
