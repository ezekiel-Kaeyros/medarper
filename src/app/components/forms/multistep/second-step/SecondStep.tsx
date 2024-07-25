import React, { useEffect, useState } from 'react';
import Checkbox from '../../checkbox/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SecondFormValues, SecondStepProps } from './secondStep.d';
import { genderData, organizationTypeData } from './tempData';
import InputField from '../../text-field/InputField';
import RadioGroup from '../../radio/RadioGroup';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { SECOND_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import CheckboxInput from '../../checkbox/checkboxInput';
import InputFieldCheckbox from '../../InputFiledCheckBox';
import { useFormContext } from '@/app/hooks/useFormContext';

const SecondStep: React.FC<SecondStepProps> = ({ secondStepTranslation }) => {
  const [question] = useState<string>(
    'Was ist die geschlechtliche Identität der betroffenen Person?'
  );

  const { reportingPerson, dispatch } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SecondFormValues>();

  let organizationType: string[] = watch('organizationType');
  let genderFreeField: string = watch('genderFreeField');
  let gender: string = watch('gender');
  let organizationTypeFreeField: string = watch('organizationTypeFreeField');

  // Scroll on top
  useScrollOnTop();

  useEffect(() => {
    // Get values from cookies
    let formValues: {
      gender: string;
      genderFreeField: string;
      organizationType: string[];
      organizationTypeFreeField: string;
    } = getFormCookies(SECOND_FORM);

  

    // Validation
    dispatch({ type: FORM_ERRORS, payload: false });

    if (reportingPerson != 'organization') {
      if (!gender || (gender && gender.length < 1)) {
        dispatch({ type: FORM_ERRORS, payload: false });
      } else {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
    } else {
      if (organizationType && organizationType.length > 0) {
        if (
          !organizationType.includes(
            secondStepTranslation.optionsOrganization[
              secondStepTranslation.optionsOrganization.length - 1
            ].value
          )
        ) {
          dispatch({ type: FORM_ERRORS, payload: false });
        } else {
          if (
            organizationTypeFreeField &&
            organizationTypeFreeField.length > 0
          ) {
            dispatch({ type: FORM_ERRORS, payload: false });
          }
        }
      }
    }

    if (
      formValues &&
      !gender &&
      !genderFreeField &&
      !organizationType &&
      !organizationTypeFreeField
    ) {
      gender !== formValues?.gender && setValue('gender', formValues?.gender);
      genderFreeField !== formValues?.genderFreeField &&
        setValue('genderFreeField', formValues?.genderFreeField);
      organizationType !== formValues?.organizationType &&
        setValue('organizationType', formValues?.organizationType);
      organizationTypeFreeField !== formValues?.organizationTypeFreeField &&
        setValue(
          'organizationTypeFreeField',
          formValues?.organizationTypeFreeField
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, genderFreeField, organizationType, organizationTypeFreeField]);

  // Triggered when submitting form
  const onSubmit: SubmitHandler<SecondFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, SECOND_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };
  return (
    <form id="secondForm" onSubmit={handleSubmit(onSubmit)}>
      {reportingPerson === 'organization' ? (
        <>
          <h1 className="font-bold mb-4 text-3xl text-primaryColor">
            {secondStepTranslation?.titleMyself}
          </h1>
          {secondStepTranslation.optionsOrganization?.map(
            (element: any, index: any) => {
              if (
                index <
                secondStepTranslation.optionsOrganization.length - 1
              ) {
                return (
                  <Checkbox
                    key={element?.ID}
                    id={element?.ID}
                    name={element?.name}
                    props={register('organizationType')}
                    value={element?.value}
                    label={element?.label}
                  />
                );
              }
            }
          )}

          <div>
            <CheckboxInput
              id={
                secondStepTranslation.optionsOrganization[
                  secondStepTranslation.optionsOrganization.length - 1
                ].ID
              }
              value={
                secondStepTranslation.optionsOrganization[
                  secondStepTranslation.optionsOrganization.length - 1
                ].value
              }
              name={
                secondStepTranslation.optionsOrganization[
                  secondStepTranslation.optionsOrganization.length - 1
                ].name
              }
              label={
                secondStepTranslation.optionsOrganization[
                  secondStepTranslation.optionsOrganization.length - 1
                ].label
              }
              props={register('organizationType')}
            />
            <InputFieldCheckbox
              name="organizationTypeFreeField"
              props={register('organizationTypeFreeField')}
              value={
                organizationType &&
                organizationType?.includes(
                  secondStepTranslation.optionsOrganization[6].label
                )
                  ? organizationTypeFreeField
                  : ''
              }
              disable={
                organizationType &&
                organizationType?.includes(
                  secondStepTranslation.optionsOrganization[6].label
                )
                  ? false
                  : true
              }
            />
          </div>
        </>
      ) : (
        <div className="my-8">
          <RadioGroup
            props={register('gender', { required: false })}
            title={
              reportingPerson === 'onBehalf'
                ? secondStepTranslation?.titleOnbehalf
                : secondStepTranslation?.titleAnotherPerson
            }
            options={secondStepTranslation.options}
          />

          {gender === secondStepTranslation.options[4].label && (
            <>
              <InputField
                name="genderFreeField"
                placeholder="Hier ausführen"
                props={register('genderFreeField', {
                  required: false,
                  // minLength: 3,
                })}
              />
              <p className="text-xs">
                {errors?.genderFreeField && 'mindestens 3 Zeichen'}
              </p>
            </>
          )}
        </div>
      )}
    </form>
  );
};

export default SecondStep;
