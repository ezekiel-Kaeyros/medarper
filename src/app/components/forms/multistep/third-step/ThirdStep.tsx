import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ThirdFormValues, ThirdStepProps } from './thirdStep.d';
import { useFormContext } from '@/app/hooks/useFormContext';
import { ageRange, numberOfEmployeesData } from './tempData';
import RadioGroup from '../../radio/RadioGroup';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { THIRD_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const ThirdStep: React.FC<ThirdStepProps> = ({ thirdStepTranslation }) => {
  const { reportingPerson, dispatch } = useFormContext();
  const [question, setQuestion] = useState<string>('');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ThirdFormValues>();

  let numberOfEmployees: string = watch('numberOfEmployees');
  let age: string = watch('age');

  // Scroll on top
  useScrollOnTop();

  useEffect(() => {
    // Get values from cookies
    let formValues: { age: string; numberOfEmployees: string } =
      getFormCookies(THIRD_FORM);
    dispatch({ type: FORM_ERRORS, payload: false });

    if (reportingPerson !== 'organization') {
      if (age && age.length > 0) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
    } else {
      if (numberOfEmployees && numberOfEmployees.length > 0) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
    }

    // Validation.
    /* Please do not delete this code */
    // if (!numberOfEmployees && reportingPerson === 'organization' ) {
    //   dispatch({ type: FORM_ERRORS, payload: true });
    // } else if (!age && reportingPerson !== 'organization' ) {
    //   dispatch({ type: FORM_ERRORS, payload: true });
    // }

    if (formValues && !age && !numberOfEmployees) {
      age !== formValues?.age && setValue('age', formValues?.age);
      numberOfEmployees !== formValues?.numberOfEmployees &&
        setValue('age', formValues?.age);
    }

    // Setting exact question
    reportingPerson === 'myself'
      ? setQuestion(thirdStepTranslation.title)
      : reportingPerson === 'onBehalf'
        ? setQuestion(thirdStepTranslation.title1)
        : reportingPerson === 'andere'
          ? setQuestion(thirdStepTranslation.title1)
          : setQuestion(thirdStepTranslation.title2);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, numberOfEmployees]);

  // Triggered when submitting form
  const onSubmit: SubmitHandler<ThirdFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, THIRD_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  return (
    <form id="thirdForm" onSubmit={handleSubmit(onSubmit)}>
      {reportingPerson === 'organization' ? (
        <>
          <div className="my-8">
            <RadioGroup
              props={register('numberOfEmployees', { required: false })}
              title={thirdStepTranslation?.title2}
              options={thirdStepTranslation?.employeesNumbOpt}
            />
          </div>
        </>
      ) : (
        <div className="my-8">
          <RadioGroup
            props={register('age', { required: false })}
            title={
              reportingPerson === 'onBehalf'
                ? thirdStepTranslation.title1
                : thirdStepTranslation.title
            }
            options={thirdStepTranslation?.options}
          />
        </div>
      )}
    </form>
  );
};

export default ThirdStep;
