import React, { useEffect, useState } from 'react';
import TextArea from '../../text-area/TextArea';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SixthFormValues, SixththStepProps } from './sixthStep.d';
import { SIXTH_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const SixthStep: React.FC<SixththStepProps> = ({ sixthStepTranslation }) => {
  const [question] = useState<string>('Was genau ist geschehen?');
  const { dispatch, reportingPerson } = useFormContext();

  // Scroll on top
  useScrollOnTop();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SixthFormValues>();

  let description: string = watch('description');

  // Triggered when submitting form
  const onSubmit: SubmitHandler<SixthFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, SIXTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    // Getting value from cookies

    let formValue: { description: string } = getFormCookies(SIXTH_FORM);

    dispatch({ type: FORM_ERRORS, payload: true });
    // Check if field is selected and throw an error if not
    if (description && description?.length >= 50) {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    if (formValue && !description) {
      description !== formValue?.description &&
        setValue('description', formValue?.description);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);

  console.log(description?.length! >= 50, 'this is my description');

  return (
    <form
      id="sixthForm"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col xl:flex-row gap-x-10 xl:justify-center xl:items-start"
    >
      <div>
        <h1 className="text-2xl font-bold text-[#2F804A]">
          {sixthStepTranslation.title}
        </h1>

        <div className="mt-5">
          <small className="text-[red] font-semibold">
            *Aus Gründen des Datenschutzes bittenwir dich, hier keine Namen und
            Daten anderer Personen anzugeben.
          </small>
        </div>
        <div className="flex flex-col xl:flex-row gap-x-4 xl:justify-center xl:items-start mt-5">
          <div className="">
            <h1 className="font-bold  mb-4">
              {sixthStepTranslation?.options[0]?.listTitle}
            </h1>
            <ul className="list-disc pl-8  space-y-1">
              <li>{sixthStepTranslation?.options[0]?.firstList}</li>
              {reportingPerson === 'andere' && (
                <li>Gegen wen richtete sich der Angriff?</li>
              )}
              <li>{sixthStepTranslation?.options[0]?.secondList}</li>
              <li>{sixthStepTranslation?.options[0]?.thirdList}</li>
              <li>{sixthStepTranslation?.options[0]?.fourthList}</li>
              <li>{sixthStepTranslation?.options[0]?.fifthList}</li>
              <li>{sixthStepTranslation?.options[0]?.sixthList}</li>
            </ul>
          </div>
          <div className="">
            <TextArea
              props={register('description')}
              name={'description'}
              numberRows={10}
              placeholder={sixthStepTranslation.placeHolder}
              // title={sixthStepTranslation?.title}
            />
            {description && description?.length <= 50 && (
              <>
                <p className="text-[red] font-semibolds">
                  {sixthStepTranslation.errorParagragh}
                </p>
              </>
            )}
            <p className=" text-primaryColor">
              <span className=" mr-1"></span>
              {sixthStepTranslation?.options[0]?.note}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SixthStep;
