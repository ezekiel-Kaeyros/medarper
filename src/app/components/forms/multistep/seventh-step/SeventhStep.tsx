import React, { useEffect, useState } from 'react';
import TextArea from '../../text-area/TextArea';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SeventhFormValues, SeventhStepProps } from './seventhStep';
import { SEVENTH_FORM } from '@/cookies/cookies.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const SeventhStep: React.FC<SeventhStepProps> = ({
  seventhStepTranslation,
}) => {
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
  } = useForm<SeventhFormValues>();

  let description: string = watch('description');

  // Triggered when submitting form
  const onSubmit: SubmitHandler<SeventhFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, SEVENTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    // Getting value from cookies
    // alert('ok')
    let formValue: { description: string } = getFormCookies(SEVENTH_FORM);

    // dispatch({ type: FORM_ERRORS, payload: true });
    if (description && description?.length >= 50) {
      dispatch({ type: FORM_ERRORS, payload: false });
    } else {
      dispatch({ type: FORM_ERRORS, payload: true });
    }

    // Setting default values if exists in cookies
    if (!description || (description && description.length < 50)) {
      dispatch({ type: FORM_ERRORS, payload: true });
    } else {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    if (formValue && description == undefined) {
      formValue?.description !== description &&
        setValue('description', formValue?.description);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);

  // console.log(description?.length! >= 50, 'this is my description');

  return (
    <form
      id="seventhForm"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col xl:flex-row gap-x-10 xl:justify-center xl:items-start"
    >
      <div>
        <h1 className="text-2xl font-bold text-[#2F804A]">
          {seventhStepTranslation.title}
        </h1>

        <div className="mt-5">
          <small className="text-[#FD5001] font-semibold text-base">
            *Aus Gründen des Datenschutzes bitten wir dich, hier keine Namen und
            Daten anderer Personen anzugeben.
          </small>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 xl:justify-center xl:items-start mt-5">
          <div className="">
            <h1 className="font-bold  mb-4">
              {seventhStepTranslation?.options[0]?.listTitle}
            </h1>
            <ul className="list-disc pl-8  space-y-1">
              <li>{seventhStepTranslation?.options[0]?.firstList}</li>
              {reportingPerson === 'andere' && (
                <li>Gegen wen richtete sich der Angriff?</li>
              )}
              <li>{seventhStepTranslation?.options[0]?.secondList}</li>
              <li>{seventhStepTranslation?.options[0]?.thirdList}</li>
              <li>{seventhStepTranslation?.options[0]?.fourthList}</li>
              <li>{seventhStepTranslation?.options[0]?.fifthList}</li>
              <li>{seventhStepTranslation?.options[0]?.sixthList}</li>
            </ul>
          </div>
          <div className="h-full">
            <TextArea
              props={register('description', {
                required: true,
                minLength: 50,
              })}
              name="description"
              numberRows={10}
              placeholder={seventhStepTranslation.placeHolder}
              // title={seventhStepTranslation?.title}
            />
            {description && description?.length <= 50 && (
              <>
                <p className="text-[red] font-semibolds">
                  {seventhStepTranslation.errorParagragh}
                </p>
              </>
            )}
            {/* <p className=" text-primaryColor">
              <span className=" mr-1"></span>
              {seventhStepTranslation?.options[0]?.note}
            </p> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SeventhStep;
