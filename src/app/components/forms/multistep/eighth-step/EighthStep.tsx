import React, { useEffect, useState } from 'react';
import RadioGroup from '../../radio/RadioGroup';
import {
  EighthStepFormValues,
  otherFormsData,
  otherFormsDataYes,
  EighthStepProps,
} from './eighthStep.d';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import Checkbox from '../../checkbox/Checkbox';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { EIGTH_FORM } from '@/cookies/cookies.d';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { useFormContext } from '@/app/hooks/useFormContext';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import InputFieldCheckbox from '../../InputFiledCheckBox';
import CheckboxInput from '../../checkbox/checkboxInput';

const EighthStep: React.FC<EighthStepProps> = ({ eighthStepTranslation }) => {
  const { dispatch } = useFormContext();

  const [question] = useState<string>(
    'Handelt es sich noch um eine weitere Form der Diskriminierung?'
  );
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EighthStepFormValues>();

  let otherForms: string = watch('otherForms');
  let otherFormsYes: string[] = watch('otherFormsYes');
  let otherFormsYesFreeField: string = watch('otherFormsYesFreeField');

  // Scroll on top
  useScrollOnTop();

  // Triggered when submitting form
  const onSubmit: SubmitHandler<EighthStepFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, EIGTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    // Get values from cookies

    let formValues: {
      otherForms: string;
      otherFormsYes: string[];
      otherFormsYesFreeField: string;
    } = getFormCookies(EIGTH_FORM);

    // (otherForms &&
    //   !otherForms?.includes(eighthStepTranslation?.options[0]?.label) &&
    //   otherFormsYes &&
    //   otherFormsYes?.length !== 0 &&
    //   !otherFormsYes?.includes(
    //     eighthStepTranslation?.optionYesIndeed[9]?.label
    //   )) ||

    // validation for eight step.
    dispatch({ type: FORM_ERRORS, payload: true });

    if (
      otherForms &&
      otherForms?.includes(eighthStepTranslation?.options[1]?.label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: true });
      if (
        otherFormsYes &&
        !otherFormsYes.includes(
          eighthStepTranslation.optionYesIndeed[
            eighthStepTranslation.optionYesIndeed.length - 1
          ].label
        )
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      } else {
        if (
          otherFormsYes &&
          otherFormsYes.includes(
            eighthStepTranslation.optionYesIndeed[
              eighthStepTranslation.optionYesIndeed.length - 1
            ].label
          )
        ) {
          dispatch({ type: FORM_ERRORS, payload: true });
          if (otherFormsYesFreeField && otherFormsYesFreeField.length > 0) {
            dispatch({ type: FORM_ERRORS, payload: false });
          } else {
            dispatch({ type: FORM_ERRORS, payload: true });
          }
        }
      }
    } else {
      if (
        otherForms &&
        otherForms?.includes(eighthStepTranslation?.options[0]?.label)
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
    }
    if (
      otherForms &&
      !otherForms.includes(eighthStepTranslation.options[0].value)
    ) {
      dispatch({ type: FORM_ERRORS, payload: true });
      // dispatch({ type: FORM_ERRORS, payload: false });
      if (
        otherForms &&
        otherFormsYes &&
        otherFormsYes?.length > 0 &&
        !otherFormsYes.includes(eighthStepTranslation.optionYesIndeed[9].value)
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
      if (
        otherForms &&
        otherFormsYes &&
        otherFormsYes?.length > 0 &&
        otherFormsYes.includes(eighthStepTranslation.optionYesIndeed[9].value)
      ) {
        dispatch({ type: FORM_ERRORS, payload: true });
        if (otherFormsYesFreeField && otherFormsYesFreeField.length > 3) {
          dispatch({ type: FORM_ERRORS, payload: false });
        }
      }
    }

    // if (
    //   (otherForms &&
    //     !otherForms?.includes(eighthStepTranslation?.options[1]?.label)) ||
    //   (otherForms &&
    //     !otherForms?.includes(eighthStepTranslation?.options[0]?.label) &&
    //     otherFormsYes &&
    //     otherFormsYes?.length !== 0 &&
    //     !otherFormsYes?.includes(
    //       eighthStepTranslation?.optionYesIndeed[9]?.label
    //     )) ||
    //   (otherFormsYes &&
    //     otherFormsYes?.includes(
    //       eighthStepTranslation?.optionYesIndeed[9].label
    //     ) &&
    //     otherFormsYesFreeField?.length !== 0)
    // ) {
    //   dispatch({ type: FORM_ERRORS, payload: false });
    // }

    if (
      formValues &&
      !otherForms &&
      !otherFormsYes &&
      !otherFormsYesFreeField
    ) {
      otherForms !== formValues?.otherForms &&
        setValue('otherForms', formValues?.otherForms);
      otherFormsYes !== formValues?.otherFormsYes &&
        setValue('otherFormsYes', formValues?.otherFormsYes);
      otherFormsYesFreeField !== formValues?.otherFormsYesFreeField &&
        setValue('otherFormsYesFreeField', formValues?.otherFormsYesFreeField);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherForms, otherFormsDataYes, otherFormsYesFreeField, otherFormsYes]);

  // console.log(otherForms && otherForms?.includes(eighthStepTranslation?.options[1]?.label) && otherFormsDataYes[16]?.label, "this is my other forms")
  // console.log(otherForms && otherForms?.includes(eighthStepTranslation?.options[1]?.label), "this is my other forms")
  // console.log(otherFormsYes.includes("Andere Formen, und zwar:"))
  console.log(
    otherFormsYes &&
      otherFormsYes?.length !== 0 &&
      !otherFormsYes?.includes(
        eighthStepTranslation?.optionYesIndeed[9]?.label
      ),
    'this is my other forms'
  );

  return (
    <form id="eighthForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <RadioGroup
          options={eighthStepTranslation.options}
          props={register('otherForms', { required: true })}
          title={eighthStepTranslation?.title}
        />
      </div>
      <div className="ml-8">
        {otherForms &&
          otherForms === eighthStepTranslation?.options[1]?.value &&
          eighthStepTranslation.optionYesIndeed?.map((el, index) => {
            if (index < eighthStepTranslation.optionYesIndeed.length - 1) {
              return (
                <Checkbox
                  key={el?.ID}
                  id={el?.ID}
                  name="otherFormsYes"
                  props={register('otherFormsYes', { required: true })}
                  value={el?.value}
                  label={el?.label}
                />
              );
            }
          })}

        {otherForms &&
          otherForms == eighthStepTranslation.options[1]?.value && (
            <div>
              <CheckboxInput
                id={
                  eighthStepTranslation.optionYesIndeed[
                    eighthStepTranslation.optionYesIndeed.length - 1
                  ].ID
                }
                name="otherFormsYes"
                props={register('otherFormsYes')}
                value={
                  eighthStepTranslation.optionYesIndeed[
                    eighthStepTranslation.optionYesIndeed.length - 1
                  ].value
                }
                examples=""
                label={
                  eighthStepTranslation.optionYesIndeed[
                    eighthStepTranslation.optionYesIndeed.length - 1
                  ].label
                }
              />
              <InputFieldCheckbox
                name="otherFormsYesFreeField"
                placeholder={eighthStepTranslation.placeHolder}
                props={register('otherFormsYesFreeField')}
                disable={
                  otherFormsYes &&
                  otherFormsYes?.includes(
                    eighthStepTranslation?.optionYesIndeed[
                      eighthStepTranslation?.optionYesIndeed.length - 1
                    ].label
                  )
                    ? false
                    : true
                }
                value={
                  !otherFormsYes ||
                  !otherFormsYes?.includes(
                    eighthStepTranslation?.optionYesIndeed[
                      eighthStepTranslation?.optionYesIndeed.length - 1
                    ].label
                  )
                    ? ''
                    : otherFormsYesFreeField
                }
              />
            </div>
          )}
        {/* <div className="ml-2">
          {otherFormsYes &&
            otherFormsYes?.includes(
              eighthStepTranslation?.optionYesIndeed[9]?.label
            ) && (
              <>
                <InputField
                  name="otherFormsYesFreeField"
                  placeholder={eighthStepTranslation.placeHolder}
                  // props={register('otherFormsYesFreeField')}
                  props={register('otherFormsYesFreeField', {
                    required: true,
                    minLength: 3,
                  })}
                />
                <p className="mb-5">
                  {errors?.otherFormsYesFreeField && (
                    <span className="text-sm text-red-600 font-bold">
                      {eighthStepTranslation.validation}
                    </span>
                  )}
                </p>
              </>
            )}
        </div> */}
      </div>
    </form>
  );
};

export default EighthStep;
