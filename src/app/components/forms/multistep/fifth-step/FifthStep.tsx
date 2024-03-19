import React, { useEffect, useState } from 'react';
import InputField from '../../text-field/InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FifthFormValues, FifthStepProps } from './fifthStep.d';
import CheckboxSimple from '../../checkbox/CheckboxSimple';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { FIFTH_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import AutoComplete from '../../auto-complete/AutoComplete';

// Date format

const FifthStep: React.FC<FifthStepProps> = ({ fifthStepTranslation }) => {
  const { dispatch } = useFormContext();

  const [question] = useState<string>('Wo war der Vorfall?');
  const [state, setState] = useState<string>('');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FifthFormValues>();

  let city: string = watch('city');
  let happenedOnline: string = watch('happenedOnline');

  // Triggered when submitting form
  const onSubmit: SubmitHandler<FifthFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, state, step, ...data };
    setFormCookies(dataWithQuestion, FIFTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  // Scroll on top
  useScrollOnTop();

  useEffect(() => {
    let formValues: { state: string; city: string; happenedOnline: string } =
      getFormCookies(FIFTH_FORM);

    dispatch({ type: FORM_ERRORS, payload: true });
    // Check if field is selected and throw an error if not
    if (!city || !state) {
      dispatch({ type: FORM_ERRORS, payload: true });
    } else {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    {
      happenedOnline && dispatch({ type: FORM_ERRORS, payload: false });
    }

    // Setting values from cookies
    if (formValues && !city && !state && !happenedOnline) {
      city !== formValues?.city && setValue('city', formValues?.city);

      happenedOnline !== formValues?.happenedOnline &&
        setValue('happenedOnline', formValues?.happenedOnline);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(!happenedOnline, 'this incident happened online');
  }, [city, state, happenedOnline]);

  // Autofill function
  const handleOnSelect = (item: any) => {
    // the item selected
    setState(item?.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="fifthForm">
      <div className="my-4">
        {!happenedOnline && (
          <>
            <h1 className="font-bold mb-8 lg:text-3xl text-primaryColor">
              {fifthStepTranslation?.title}
            </h1>
            <div className="my-2">
              <h1 className="mb-2">{fifthStepTranslation?.options[0]?.city}</h1>
              <AutoComplete handleOnSelect={handleOnSelect} />
            </div>
            <div className="my-2">
              <InputField
                name="stateteil"
                props={register('city')}
                title={fifthStepTranslation?.options[0]?.inputTitle}
              />
            </div>
          </>
        )}

        <div className="my-6">
          <CheckboxSimple
            id="happenedOnline"
            name="happenedOnline"
            props={register('happenedOnline')}
            value="happenedOnline"
            label={fifthStepTranslation?.options[0]?.radioField}
          />
        </div>
      </div>
    </form>
  );
};

export default FifthStep;
