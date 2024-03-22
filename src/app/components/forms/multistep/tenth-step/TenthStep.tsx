import React, { useEffect, useState } from 'react';
import EditBlock from './EditBlock';
import Checkbox from '../../checkbox/Checkbox';
import CheckboxSimple from '../../checkbox/CheckboxSimple';
import { clearFormCookies, getFormCookies } from '@/cookies/cookies';
import {
  EIGTH_FORM,
  FIFTH_FORM,
  FIRST_FORM,
  FOURTH_FORM,
  NINETH_FORM,
  SECOND_FORM,
  SEVENTH_FORM,
  SIXTH_FORM,
  THIRD_FORM,
} from '@/cookies/cookies.d';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TenthFormValues, TenthStepProps } from './tenthStep.d';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import FirstStepProps from '../first-step/FirstStep';
import dayjs from 'dayjs';
import CaptchaCheckbox from '@/app/components/captcha/captcha-checkbox/CaptchaCheckbox';
import { verifyCaptchaAction } from '@/app/components/captcha/Captcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReportService from '@/services/reportService';
import { useRouter } from 'next/navigation';

const TenthStep: React.FC<TenthStepProps> = ({ tenthStepTranslation }) => {
  const { dispatch } = useFormContext();
  const [captchLoading, setCaptchaLoading] = useState<boolean>(true);
  const [verified, setVerified] = useState<any>(false);
  const { push } = useRouter();
  let firstForm: { identity: string; question: string; step: number } =
    getFormCookies(FIRST_FORM);

  let secondForm: {
    step: number;
    question: string;
    gender: string;
    organizationType: string[];
    genderFreeField: string;
    organizationTypeFreeField: string;
  } = getFormCookies(SECOND_FORM);

  let thirdForm: {
    numberOfEmployees: string;
    age: string;
    question: string;
    step: number;
  } = getFormCookies(THIRD_FORM);

  let fourthForm: {
    question: string;
    date: any;
    dateRange: any;
    onGoingIncident: string;
    step: number;
  } = getFormCookies(FOURTH_FORM);

  let fifthForm: {
    happenedOnline: string;
    state: string;
    city: string;
    question: string;
    step: number;
  } = getFormCookies(FIFTH_FORM);

  let sixthForm: { description: string; question: string; step: number } =
    getFormCookies(SIXTH_FORM);

  let seventhForm: {
    causesOfDiscrimination: string[];
    causesOfDiscriminationFreeField: string;
    question: string;
    step: number;
  } = getFormCookies(SEVENTH_FORM);

  let eighthForm: {
    question: string;
    otherForms: string;
    otherFormsYes: string[];
    otherFormsYesFreeField: string;
    step: number;
  } = getFormCookies(EIGTH_FORM);

  let ninethForm: {
    question: string;
    haveYouReported: string;
    haveYouReportedYes: string[];
    haveYouReportedFreeField1: string;
    haveYouReportedFreeField2: string;
    step: number;
  } = getFormCookies(NINETH_FORM);

  // React hook form

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TenthFormValues>();

  const { executeRecaptcha } = useGoogleReCaptcha();

  let agreement: string = watch('agreement');

  let captcha: string = watch('captcha');

  const handleCaptcha = async () => {
    // Captcha verification
    // if the component is not mounted yet
    if (!executeRecaptcha) {
      return;
    }
    // receive a token

    try {
      const token = await executeRecaptcha('onSubmit');

      // validate the token via the server action we've created previously

      const verified = await verifyCaptchaAction(token);

      verified && setVerified(verified);

      setCaptchaLoading(false);
    } catch (error) {
      console.log(error);
      setCaptchaLoading(false);
    }
  };

  useEffect(() => {
    if (!agreement) {
      dispatch({ type: FORM_ERRORS, payload: true });
    } else {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreement]);

  captcha && handleCaptcha();
  const onSubmit: SubmitHandler<any> = async () => {
    // alert('ok');
    dispatch({ type: FORM_ERRORS, payload: true });
    let firstForm: { identity: string; question: string; step: number } =
      getFormCookies(FIRST_FORM);

    let secondForm: {
      // step: number;
      // question: string;
      gender: string;
      organizationType: string[];
      genderFreeField: string;
      organizationTypeFreeField: string;
    } = getFormCookies(SECOND_FORM);

    let thirdForm: {
      numberOfEmployees: string;
      age: string;
      question: string;
      step: number;
    } = getFormCookies(THIRD_FORM);

    let fourthForm: {
      question: string;
      date: any;
      dateRange: any;
      onGoingIncident: string;
      step: number;
    } = getFormCookies(FOURTH_FORM);

    let fifthForm: {
      happenedOnline: string;
      state: string;
      city: string;
      question: string;
      step: number;
    } = getFormCookies(FIFTH_FORM);

    let sixthForm: { description: string; question: string; step: number } =
      getFormCookies(SIXTH_FORM);

    let seventhForm: {
      causesOfDiscrimination: string[];
      causesOfDiscriminationFreeField: string;
      question: string;
      step: number;
    } = getFormCookies(SEVENTH_FORM);

    let eighthForm: {
      question: string;
      otherForms: string;
      otherFormsYes: string[];
      otherFormsYesFreeField: string;
      step: number;
    } = getFormCookies(EIGTH_FORM);

    let ninethForm: {
      question: string;
      haveYouReported: string;
      haveYouReportedYes: string[];
      haveYouReportedFreeField1: string;
      haveYouReportedFreeField2: string;
      step: number;
    } = getFormCookies(NINETH_FORM);

    let identity = firstForm?.identity;
    let description = sixthForm?.description;
    let organizationType = secondForm?.organizationType;
    let organizationTypeFreeField = secondForm?.organizationTypeFreeField;
    let numberOfEmployees = thirdForm?.numberOfEmployees;
    let valueDate: string = fourthForm?.date;
    let dateRangeState: string =
      (fourthForm?.dateRange && fourthForm?.dateRange.toString()) || '';
    // let datePeriod =
    //   (thirdForm?.datePeriod && thirdForm?.datePeriod.toString()) || '';
    let location = fifthForm?.state;
    let stadtteil = fifthForm?.city;
    let locationOnline = fifthForm?.happenedOnline;
    let otherForms = eighthForm?.otherForms;
    let otherFormsYes = eighthForm?.otherFormsYes;
    let otherFormsYesFreeField = eighthForm?.otherFormsYesFreeField;
    // let typeOfDiscrimination = sixthForm?.typeOfDiscrimination;
    // let formOfDisc = seventhForm?.formOfDisc;
    // let formOfDiscYes = seventhForm?.formOfDiscYes;
    // let formOfDiscYesFreeField = seventhForm?.formOfDiscYesFreeField;
    let causesOfDiscrimination = seventhForm.causesOfDiscrimination;
    let causesOfDiscriminationFreeField =
      seventhForm.causesOfDiscriminationFreeField;
    let haveYouReported = ninethForm?.haveYouReported;
    let haveYouReportedYes = ninethForm?.haveYouReportedYes;
    let haveYouReportedYesFreeField1 = ninethForm?.haveYouReportedFreeField1;
    let haveYouReportedYesFreeField2 = ninethForm?.haveYouReportedFreeField2;

    let gender = secondForm?.gender;
    let genderFreeField = secondForm?.genderFreeField;
    let age = thirdForm?.age;
    // let sexualOrientation = ninethForm?.sexualOrientation;
    // let sexualOrientationFreeField = ninethForm?.sexualOrientationFreeField;

    const report = {
      identity,
      description,
      organizationType,
      organizationTypeFreeField,
      numberOfEmployees,
      valueDate,
      dateRangeState,
      // datePeriod,
      location,
      stadtteil,
      locationOnline,
      otherForms,
      otherFormsYes,
      otherFormsYesFreeField,
      // formOfQueerphobia,
      // otherformOfQueerphobiaFreeField,
      // typeOfDiscrimination,
      // typeOfDiscriminationFreeField,
      // formOfDisc,
      // formOfDiscYes,
      // formOfDiscYesFreeField,
      causesOfDiscriminationFreeField,
      causesOfDiscrimination,
      haveYouReported,
      haveYouReportedYes,
      haveYouReportedYesFreeField1,
      haveYouReportedYesFreeField2,
      gender,
      genderFreeField,
      age,
      // sexualOrientation,
      // sexualOrientationFreeField,
    };

    console.log('report', report);
    const response = new ReportService()
      .sendReport(report)
      .then((result) => {
        if (result.status === 201 || result.status === 200) {
          console.log('Successfull');
          clearFormCookies();
          window.location.href='/report';
        } else {
          dispatch({ type: FORM_ERRORS, payload: false });
          console.log('failed');
          // setCaptchaLoading(false);
          throw new Error('Fetching error occured, please reload');
        }
      })
      .catch((error) => {
        console.log('error');
        // setCaptchaLoading(false);
        dispatch({ type: FORM_ERRORS, payload: false });
        throw new Error('Fetching error occured, please reload');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="tenthForm">
      <h1 className="font-bold text-primaryColor text-xl mb-2">
        {tenthStepTranslation?.title}
      </h1>

      {/* First form */}
      <EditBlock
        step={firstForm?.step}
        answer={firstForm?.identity && firstForm?.identity}
        question={firstForm?.question}
      />

      {/* Second form */}
      {secondForm?.gender && (
        <EditBlock
          step={secondForm?.step}
          answer={[
            secondForm?.gender && secondForm?.gender,
            secondForm?.genderFreeField,
          ]}
          question={secondForm?.question}
        />
      )}

      {secondForm?.organizationType && (
        <EditBlock
          step={secondForm?.step}
          answer={[
            ...secondForm?.organizationType,
            secondForm?.organizationTypeFreeField,
          ]}
          question={secondForm?.question}
        />
      )}
      {/* Third form */}

      {thirdForm?.age && (
        <EditBlock
          step={thirdForm?.step}
          answer={[thirdForm?.age]}
          question={thirdForm?.question}
        />
      )}

      {thirdForm?.numberOfEmployees && (
        <EditBlock
          step={thirdForm?.step}
          answer={[thirdForm?.numberOfEmployees]}
          question={thirdForm?.question}
        />
      )}

      {/* Fourth form */}

      {fourthForm && (
        <EditBlock
          step={fourthForm?.step}
          answer={[
            dayjs(fourthForm?.date).format('DD.MM.YYYY THH:mm:ssZ[Z]'),
            fourthForm?.dateRange,
            fourthForm?.onGoingIncident,
          ]}
          question={fourthForm?.question}
        />
      )}

      {/* Fifth form */}

      {fifthForm && (
        <EditBlock
          step={fifthForm?.step}
          answer={[
            fifthForm?.state,
            fifthForm?.city,
            fifthForm?.happenedOnline,
          ]}
          question={fifthForm?.question}
        />
      )}

      {/* Sixth form */}

      {sixthForm && (
        <EditBlock
          step={sixthForm?.step}
          type="desc"
          answer={[sixthForm?.description]}
          question={sixthForm?.question}
        />
      )}

      {/* Seventh form */}

      {seventhForm && seventhForm?.causesOfDiscrimination && (
        <EditBlock
          step={seventhForm?.step}
          answer={[
            ...seventhForm?.causesOfDiscrimination,
            seventhForm?.causesOfDiscriminationFreeField,
          ]}
          question={seventhForm?.question}
        />
      )}

      {/* EighthForm */}

      {eighthForm && eighthForm?.otherFormsYes && (
        <EditBlock
          step={eighthForm?.step}
          answer={[
            eighthForm?.otherForms,
            ...eighthForm?.otherFormsYes,
            eighthForm?.otherFormsYesFreeField,
          ]}
          question={eighthForm?.question}
        />
      )}

      {/* Nineth form */}

      {ninethForm && ninethForm.haveYouReportedYes && (
        <EditBlock
          step={ninethForm?.step}
          answer={[
            ninethForm?.haveYouReported,
            ...ninethForm?.haveYouReportedYes,
            ninethForm?.haveYouReportedFreeField1,
            ninethForm?.haveYouReportedFreeField2,
          ]}
          question={ninethForm?.question}
        />
      )}

      {/* Captch button verification */}

      <CaptchaCheckbox
        id="captcha"
        loading={captchLoading}
        checked={captcha ? true : false}
        name="captcha"
        props={register('captcha')}
        value="captcha"
        label={tenthStepTranslation?.captcha}
      />

      <div className="w-fit mt-8 border border-black p-4">
        <CheckboxSimple
          label={tenthStepTranslation.options[0].label}
          id="agreement"
          name="agreement"
          props={register('agreement')}
          value="agreement"
        />
      </div>
    </form>
  );
};

export default TenthStep;
