import React, { useEffect, useState } from 'react';
import { SixthFormValues, causesData, SixthStepProps } from './sixthStep';
import Checkbox from '../../checkbox/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { SIXTH_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import CheckboxInput from '../../checkbox/checkboxInput';
import InputFieldCheckbox from '../../InputFiledCheckBox';
// import EighthStep from './EighthStep';

const SixthStep: React.FC<SixthStepProps> = ({ sixthStepTranslation }) => {
  const { dispatch } = useFormContext();
  const [question] = useState<string>(sixthStepTranslation.title);

  // Scroll on top
  useScrollOnTop();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SixthFormValues>();

  // watching fields in realtime

  let placeOfDiscrimination: string[] = watch('placeOfDiscrimination');
  let placeOfDiscriminationFreeField: string = watch(
    'placeOfDiscriminationFreeField'
  );

  // Triggered when submitting form
  const onSubmit: SubmitHandler<SixthFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, SIXTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    //  Get values from form
    let formValues: {
      placeOfDiscrimination: string[];
      placeOfDiscriminationFreeField: string;
    } = getFormCookies(SIXTH_FORM);

    // SeventhStep Validation
    dispatch({ type: FORM_ERRORS, payload: false });
    if (
      placeOfDiscrimination &&
      placeOfDiscrimination?.length > 0 &&
      !placeOfDiscrimination.includes(sixthStepTranslation.options[14].label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    if (
      placeOfDiscrimination &&
      placeOfDiscrimination?.length > 0 &&
      placeOfDiscrimination.includes(sixthStepTranslation.options[14].label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: true });
      if (
        placeOfDiscriminationFreeField &&
        placeOfDiscriminationFreeField?.length > 0
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
    //     placeOfDiscriminationFreeField &&
    //     placeOfDiscriminationFreeField.length > 0
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
    //     sixthStepTranslation.options[12].label
    //   ) &&
    //   placeOfDiscriminationFreeField?.length === 0
    // ) {
    //   dispatch({ type: FORM_ERRORS, payload: true });
    // } else {
    //   dispatch({ type: FORM_ERRORS, payload: false });
    // }

    // Set form values from cookies

    if (
      formValues &&
      !placeOfDiscrimination &&
      !placeOfDiscriminationFreeField
    ) {
      placeOfDiscrimination !== formValues?.placeOfDiscrimination &&
        setValue('placeOfDiscrimination', formValues?.placeOfDiscrimination);
      placeOfDiscriminationFreeField !==
        formValues?.placeOfDiscriminationFreeField &&
        setValue(
          'placeOfDiscriminationFreeField',
          formValues?.placeOfDiscriminationFreeField
        );
    }

    console.log(formValues, 'this is my formValues');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeOfDiscrimination, placeOfDiscriminationFreeField]);

  return (
    <form id="sixthForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold text-2xl text-primaryColor mb-4 w-[85%]">
          {sixthStepTranslation?.title}
        </h1>
        <p className="mb-2 text-primaryColor">
          {sixthStepTranslation?.multipleAns}
        </p>
      </div>

      <div>
        {sixthStepTranslation.options?.map((choice, index) => {
          if (index < sixthStepTranslation.options.length - 1) {
            return (
              <Checkbox
                id={`${choice?.ID}`}
                name="placeOfDiscrimination"
                props={register('placeOfDiscrimination')}
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
              sixthStepTranslation.options[
                sixthStepTranslation.options.length - 1
              ].ID
            }
            name="placeOfDiscrimination"
            props={register('placeOfDiscrimination')}
            value={
              sixthStepTranslation.options[
                sixthStepTranslation.options.length - 1
              ].value
            }
            examples=""
            label={
              sixthStepTranslation.options[
                sixthStepTranslation.options.length - 1
              ].label
            }
          />
          <InputFieldCheckbox
            name="placeOfDiscriminationFreeField"
            placeholder={sixthStepTranslation.placeHolder}
            props={register('placeOfDiscriminationFreeField')}
            disable={
              placeOfDiscrimination &&
              placeOfDiscrimination?.includes(
                sixthStepTranslation.options[
                  sixthStepTranslation.options.length - 1
                ].label
              )
                ? false
                : true
            }
            value={
              !placeOfDiscrimination ||
              !placeOfDiscrimination?.includes(
                sixthStepTranslation.options[
                  sixthStepTranslation.options.length - 1
                ].label
              )
                ? ''
                : placeOfDiscriminationFreeField
            }
          />
        </div>

        {/* {causesOfDiscrimination &&
          causesOfDiscrimination?.includes(
            sixthStepTranslation.options[12].label
          ) && (
            <div className="ml-2">
              <InputField
                name="placeOfDiscriminationFreeField"
                placeholder={sixthStepTranslation.placeHolder}
                props={register('placeOfDiscriminationFreeField')}
              />
            </div>
          )} */}
      </div>
    </form>
  );
};

export default SixthStep;
