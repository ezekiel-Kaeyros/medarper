import React, { useEffect, useState } from 'react';
import RadioGroup from '../../radio/RadioGroup';
import {
  NinethStepFormValues,
  otherFormsData,
  otherFormsDataYes,
  NinethStepProps,
} from './ninethStep.d';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import Checkbox from '../../checkbox/Checkbox';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { NINETH_FORM } from '@/cookies/cookies.d';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { useFormContext } from '@/app/hooks/useFormContext';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import InputFieldCheckbox from '../../InputFiledCheckBox';
import CheckboxInput from '../../checkbox/checkboxInput';

const NinethStep: React.FC<NinethStepProps> = ({ ninethStepTranslation }) => {
  const { dispatch } = useFormContext();

  const [question] = useState<string>(ninethStepTranslation.title);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NinethStepFormValues>();

  let otherForms: string = watch('otherForms');
  let otherFormsYes: string[] = watch('otherFormsYes');
  let otherFormsYesFreeField: string = watch('otherFormsYesFreeField');

  // Scroll on top
  useScrollOnTop();

  // Triggered when submitting form
  const onSubmit: SubmitHandler<NinethStepFormValues> = (data) => {
    let step = getFormStep();
    let otherForms = data.otherForms;
    let otherFormsYes = data.otherForms.length > 5 ? data.otherFormsYes : [];
    let otherFormsYesFreeField =
      data.otherForms.length > 5 ? data.otherFormsYesFreeField : '';
    let dataWithQuestion = {
      question,
      step,
      otherForms: otherForms,
      otherFormsYes: otherFormsYes,
      otherFormsYesFreeField: otherFormsYesFreeField,
    };
    setFormCookies(dataWithQuestion, NINETH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    // Get values from cookies

    let formValues: {
      otherForms: string;
      otherFormsYes: string[];
      otherFormsYesFreeField: string;
    } = getFormCookies(NINETH_FORM);

    // (otherForms &&
    //   !otherForms?.includes(ninethStepTranslation?.options[0]?.label) &&
    //   otherFormsYes &&
    //   otherFormsYes?.length !== 0 &&
    //   !otherFormsYes?.includes(
    //     ninethStepTranslation?.optionYesIndeed[9]?.label
    //   )) ||

    // validation for eight step.
    dispatch({ type: FORM_ERRORS, payload: true });

    if (
      otherForms &&
      otherForms?.includes(ninethStepTranslation?.options[1]?.label)
    ) {
      dispatch({ type: FORM_ERRORS, payload: true });
      if (
        otherFormsYes &&
        !otherFormsYes.includes(
          ninethStepTranslation.optionYesIndeed[
            ninethStepTranslation.optionYesIndeed.length - 1
          ].label
        )
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      } else {
        if (
          otherFormsYes &&
          otherFormsYes.includes(
            ninethStepTranslation.optionYesIndeed[
              ninethStepTranslation.optionYesIndeed.length - 1
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
        otherForms?.includes(ninethStepTranslation?.options[0]?.label)
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
    }
    if (
      otherForms &&
      !otherForms.includes(ninethStepTranslation.options[0].value)
    ) {
      dispatch({ type: FORM_ERRORS, payload: true });
      // dispatch({ type: FORM_ERRORS, payload: false });
      if (
        otherForms &&
        otherFormsYes &&
        otherFormsYes?.length > 0 &&
        !otherFormsYes.includes(ninethStepTranslation.optionYesIndeed[9].value)
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
      if (
        otherForms &&
        otherFormsYes &&
        otherFormsYes?.length > 0 &&
        otherFormsYes.includes(ninethStepTranslation.optionYesIndeed[9].value)
      ) {
        dispatch({ type: FORM_ERRORS, payload: true });
        if (otherFormsYesFreeField && otherFormsYesFreeField.length > 3) {
          dispatch({ type: FORM_ERRORS, payload: false });
        }
      }
    }

    // if (
    //   (otherForms &&
    //     !otherForms?.includes(ninethStepTranslation?.options[1]?.label)) ||
    //   (otherForms &&
    //     !otherForms?.includes(ninethStepTranslation?.options[0]?.label) &&
    //     otherFormsYes &&
    //     otherFormsYes?.length !== 0 &&
    //     !otherFormsYes?.includes(
    //       ninethStepTranslation?.optionYesIndeed[9]?.label
    //     )) ||
    //   (otherFormsYes &&
    //     otherFormsYes?.includes(
    //       ninethStepTranslation?.optionYesIndeed[9].label
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

  // console.log(otherForms && otherForms?.includes(ninethStepTranslation?.options[1]?.label) && otherFormsDataYes[16]?.label, "this is my other forms")
  // console.log(otherForms && otherForms?.includes(ninethStepTranslation?.options[1]?.label), "this is my other forms")
  // console.log(otherFormsYes.includes("Andere Formen, und zwar:"))

  return (
    <form id="ninethForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <RadioGroup
          options={ninethStepTranslation.options}
          props={register('otherForms', { required: true })}
          title={ninethStepTranslation?.title}
        />
      </div>
      <div className="ml-8">
        {otherForms &&
          otherForms === ninethStepTranslation?.options[1]?.value &&
          ninethStepTranslation.optionYesIndeed?.map((el, index) => {
            if (index < ninethStepTranslation.optionYesIndeed.length - 1) {
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
          otherForms == ninethStepTranslation.options[1]?.value && (
            <div>
              <CheckboxInput
                id={
                  ninethStepTranslation.optionYesIndeed[
                    ninethStepTranslation.optionYesIndeed.length - 1
                  ].ID
                }
                name="otherFormsYes"
                props={register('otherFormsYes')}
                value={
                  ninethStepTranslation.optionYesIndeed[
                    ninethStepTranslation.optionYesIndeed.length - 1
                  ].value
                }
                examples=""
                label={
                  ninethStepTranslation.optionYesIndeed[
                    ninethStepTranslation.optionYesIndeed.length - 1
                  ].label
                }
              />
              <InputFieldCheckbox
                name="otherFormsYesFreeField"
                placeholder={ninethStepTranslation.placeHolder}
                props={register('otherFormsYesFreeField')}
                disable={
                  otherFormsYes &&
                  otherFormsYes?.includes(
                    ninethStepTranslation?.optionYesIndeed[
                      ninethStepTranslation?.optionYesIndeed.length - 1
                    ].label
                  )
                    ? false
                    : true
                }
                value={
                  !otherFormsYes ||
                  !otherFormsYes?.includes(
                    ninethStepTranslation?.optionYesIndeed[
                      ninethStepTranslation?.optionYesIndeed.length - 1
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
              ninethStepTranslation?.optionYesIndeed[9]?.label
            ) && (
              <>
                <InputField
                  name="otherFormsYesFreeField"
                  placeholder={ninethStepTranslation.placeHolder}
                  // props={register('otherFormsYesFreeField')}
                  props={register('otherFormsYesFreeField', {
                    required: true,
                    minLength: 3,
                  })}
                />
                <p className="mb-5">
                  {errors?.otherFormsYesFreeField && (
                    <span className="text-sm text-red-600 font-bold">
                      {ninethStepTranslation.validation}
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

export default NinethStep;
