import React, { useEffect, useState } from 'react';
import RadioGroup from '../../radio/RadioGroup';
import { identityData } from './firstFormData';
import { FirstStepFormValues, FirstStepProps } from './FirstStep.d';
import { useFormContext } from '@/app/hooks/useFormContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FORM_ERRORS,
  NEXT_STEP,
  REPORTING_PERSON,
} from '@/app/context/actions';
import Disclaimer from './Disclaimer';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { FIRST_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const FirstStep: React.FC<FirstStepProps> = ({ firstStepTranslation }) => {
  const { dispatch, reportingPerson } = useFormContext();
  const [question] = useState<string>('Wer is betroffen?');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FirstStepFormValues>();

  let identity: string = watch('identity');

  // Scroll on top
  useScrollOnTop();

  useEffect(() => {
    // Get values from cookies
    let formValues: { identity: string } = getFormCookies(FIRST_FORM);
    dispatch({ type: FORM_ERRORS, payload: true });
    // Check if field is selected and throw an error if not
    if (!identity) {
      dispatch({ type: FORM_ERRORS, payload: true });
    } else {
      dispatch({ type: FORM_ERRORS, payload: false });
    }
    if (formValues && !identity) {
      identity !== formValues?.identity &&
        setValue('identity', formValues?.identity);
    }

    // Dispatching selected

    dispatch({
      type: REPORTING_PERSON,
      payload:
        identity === firstStepTranslation.options[0].label
          ? 'myself'
          : identity === firstStepTranslation.options[1].label
          ? 'andere'
          : identity === firstStepTranslation.options[2].label
          ? 'onBehalf'
          : 'organization',
    });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identity]);

  // Triggered when submitting form
  const onSubmit: SubmitHandler<FirstStepFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, FIRST_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };
  return (
    <form id="firstForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-8">
        <div className="my-8">
          <RadioGroup
            props={register('identity', { required: true })}
            title={firstStepTranslation?.title}
            options={firstStepTranslation?.options}
          />
        </div>
      </div>
      {reportingPerson === 'onBehalf' && (
        <Disclaimer
          content={firstStepTranslation?.disclaimer}
        />
      )}
    </form>
  );
};

export default FirstStep;
