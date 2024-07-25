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
  TENTH_FORM,
  THIRD_FORM,
} from '@/cookies/cookies.d';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EleventhFormValues, EleventhStepProps } from './eleventhStep';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import FirstStepProps from '../first-step/FirstStep';
import dayjs from 'dayjs';
import CaptchaCheckbox from '@/app/components/captcha/captcha-checkbox/CaptchaCheckbox';
import { verifyCaptchaAction } from '@/app/components/captcha/Captcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReportService from '@/services/reportService';
import { usePathname, useRouter } from 'next/navigation';
import ConfirmModal from '../modals/confirm-modal/ConfirmModal';
import OnBehalfModal from '../modals/on-behalf-modal/OnBehalf';
import FinishModal from '../modals/finishModal/FinishModal';

const TenthStep: React.FC<EleventhStepProps> = ({
  eleventhStepTranslation,
  modal,
  identity,
}) => {
  const [showOnBehalfModal, setShowOnBehalfModal] = useState<boolean>(false);

  const { dispatch } = useFormContext();
  const [captchLoading, setCaptchaLoading] = useState<boolean>(true);
  const [verified, setVerified] = useState<any>(false);
  const { push } = useRouter();
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showFinishModal, setShowFinishModal] = useState<boolean>(false);
  const pathname = usePathname();
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

  let sixthForm: {
    placeOfDiscrimination: string[];
    placeOfDiscriminationFreeField: string;
    question: string;
    step: number;
  } = getFormCookies(SIXTH_FORM);

  let seventhForm: { description: string; question: string; step: number } =
    getFormCookies(SEVENTH_FORM);

  let eighthForm: {
    causesOfDiscrimination: string[];
    causesOfDiscriminationFreeField: string;
    question: string;
    step: number;
  } = getFormCookies(EIGTH_FORM);

  let ninethForm: {
    question: string;
    otherForms: string;
    otherFormsYes: string[];
    otherFormsYesFreeField: string;
    step: number;
  } = getFormCookies(NINETH_FORM);

  let tenthForm: {
    question: string;
    haveYouReported: string;
    haveYouReportedYes: string[];
    haveYouReportedFreeField1: string;
    haveYouReportedFreeField2: string;
    step: number;
  } = getFormCookies(TENTH_FORM);

  // React hook form

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EleventhFormValues>();

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

      // captcha && setVerified(verified);
      //  dispatch({ type: FORM_ERRORS, payload: false });

      setCaptchaLoading(false);
    } catch (error) {
      console.log(error);
      setCaptchaLoading(false);
    }
  };

  useEffect(() => {
    if (!agreement || !captcha) {
      dispatch({ type: FORM_ERRORS, payload: true });
    } else {
      dispatch({ type: FORM_ERRORS, payload: false });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreement,captcha]);

  captcha && handleCaptcha();

  const sendReportHandler = () => {
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

    let sixthForm: {
      placeOfDiscrimination: string[];
      placeOfDiscriminationFreeField: string;
      question: string;
      step: number;
    } = getFormCookies(SIXTH_FORM);

    let seventhForm: { description: string; question: string; step: number } =
      getFormCookies(SEVENTH_FORM);

    let eighthForm: {
      causesOfDiscrimination: string[];
      causesOfDiscriminationFreeField: string;
      question: string;
      step: number;
    } = getFormCookies(EIGTH_FORM);

    let ninethForm: {
      question: string;
      otherForms: string;
      otherFormsYes: string[];
      otherFormsYesFreeField: string;
      step: number;
    } = getFormCookies(NINETH_FORM);

    let tenthForm: {
      question: string;
      haveYouReported: string;
      haveYouReportedYes: string[];
      haveYouReportedFreeField1: string;
      haveYouReportedFreeField2: string;
      step: number;
    } = getFormCookies(TENTH_FORM);

    let identity = firstForm?.identity;
    let description = seventhForm?.description;
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
    let otherForms = ninethForm?.otherForms;
    let otherFormsYes = ninethForm?.otherFormsYes;
    let otherFormsYesFreeField = ninethForm?.otherFormsYesFreeField;
    // let typeOfDiscrimination = sixthForm?.typeOfDiscrimination;
    // let formOfDisc = seventhForm?.formOfDisc;
    // let formOfDiscYes = seventhForm?.formOfDiscYes;
    // let formOfDiscYesFreeField = seventhForm?.formOfDiscYesFreeField;
    let causesOfDiscrimination = eighthForm.causesOfDiscrimination;
    let causesOfDiscriminationFreeField =
      eighthForm.causesOfDiscriminationFreeField;
    let placeOfDiscrimination = sixthForm?.placeOfDiscrimination;
    let placeOfDiscriminationFreeField =
      sixthForm?.placeOfDiscriminationFreeField;
    let haveYouReported = tenthForm?.haveYouReported;
    let haveYouReportedYes = tenthForm?.haveYouReportedYes;
    let haveYouReportedYesFreeField1 = tenthForm?.haveYouReportedFreeField1;
    let haveYouReportedYesFreeField2 = tenthForm?.haveYouReportedFreeField2;

    let gender = secondForm?.gender;
    let genderFreeField = secondForm?.genderFreeField;
    let age = thirdForm?.age;
    let onGoingIncident = fourthForm.onGoingIncident;
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
      onGoingIncident,
      // formOfQueerphobia,
      // otherformOfQueerphobiaFreeField,
      // typeOfDiscrimination,
      // typeOfDiscriminationFreeField,
      // formOfDisc,
      // formOfDiscYes,
      // formOfDiscYesFreeField,
      causesOfDiscriminationFreeField,
      causesOfDiscrimination,
      placeOfDiscrimination,
      placeOfDiscriminationFreeField,
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

    const response = new ReportService()
      .sendReport(report)
      .then((result) => {
        if (result.status === 201 || result.status === 200) {
          console.log('Successfull');
          clearFormCookies();
          setShowFinishModal(true);
          setShowConfirmModal(false);
          setShowOnBehalfModal(false);
          // window.location.href = pathname.split('/')[1]'/verweisberatung';
        } else {
          dispatch({ type: FORM_ERRORS, payload: false });
          console.log('failed');
          // setCaptchaLoading(false);
          setShowConfirmModal(false);
          setShowOnBehalfModal(false);
          throw new Error('Fetching error occured, please reload');
        }
      })
      .catch((error) => {
        console.log('error');
        // setCaptchaLoading(false);
        setShowConfirmModal(false);
        setShowOnBehalfModal(false);
        dispatch({ type: FORM_ERRORS, payload: false });
        throw new Error('Fetching error occured, please reload');
      });
  };
  const onSubmit: SubmitHandler<any> = async () => {
    console.log('identity2365478', identity);
    console.log('first2365478', firstForm.identity);

    firstForm.identity !== identity[1]?.value &&
      firstForm.identity !== identity[2]?.value &&
      sendReportHandler();
    firstForm.identity == identity[1]?.value && setShowOnBehalfModal(true);
    firstForm.identity == identity[2]?.value && setShowConfirmModal(true);
  };

  console.log(sixthForm, 'getFormCookies(SIXTH_FORM)');
  console.log(fourthForm, 'getFormCookies(FOURTH_FORM)');

  return (
    <>
      <FinishModal lang={pathname.split('/')[1]} shouldShow={showFinishModal} />
      <OnBehalfModal
        onRequestClose={() => {
          setShowOnBehalfModal((prev) => !prev);
        }}
        shouldShow={showOnBehalfModal}
        onBehalfTranslation={modal.onBehalf}
        reportHandler={sendReportHandler}
      />
      <ConfirmModal
        onRequestClose={() => {
          setShowConfirmModal((prev) => !prev);
        }}
        shouldShow={showConfirmModal}
        confirmModalTranslation={modal.confirmModal}
        lang={pathname.split('/')[1]}
        sendReportHandler={sendReportHandler}
      />
      <form onSubmit={handleSubmit(onSubmit)} id="tenthForm">
        <h1 className="font-bold text-primaryColor text-xl mb-2">
          {eleventhStepTranslation?.title}
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
              fourthForm.date
                ? dayjs(fourthForm?.date).format('DD.MM.YYYY THH:mm:ssZ[Z]')
                : '',
              fourthForm?.dateRange ? fourthForm?.dateRange : '',
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

        {/* sixth form */}

        {sixthForm && sixthForm?.placeOfDiscrimination && (
          <EditBlock
            step={sixthForm?.step}
            answer={[
              ...sixthForm?.placeOfDiscrimination,
              sixthForm?.placeOfDiscriminationFreeField,
            ]}
            question={sixthForm?.question}
          />
        )}

        {/* Seventh form */}

        {seventhForm && (
          <EditBlock
            step={seventhForm?.step}
            type="desc"
            answer={[seventhForm?.description]}
            question={seventhForm?.question}
          />
        )}

        {/* eight form */}

        {seventhForm && eighthForm?.causesOfDiscrimination && (
          <EditBlock
            step={eighthForm?.step}
            answer={[
              ...eighthForm?.causesOfDiscrimination,
              eighthForm?.causesOfDiscriminationFreeField,
            ]}
            question={eighthForm?.question}
          />
        )}

        {/* Nineth form */}

        {ninethForm && ninethForm?.otherFormsYes && (
          <EditBlock
            step={ninethForm?.step}
            answer={[
              ninethForm?.otherForms,
              ...ninethForm?.otherFormsYes,
              ninethForm?.otherFormsYesFreeField,
            ]}
            question={ninethForm?.question}
          />
        )}

        {/* Tenth form */}

        {tenthForm && tenthForm.haveYouReportedYes && (
          <EditBlock
            step={tenthForm?.step}
            answer={[
              tenthForm?.haveYouReported,
              ...tenthForm?.haveYouReportedYes,
              tenthForm?.haveYouReportedFreeField1,
              tenthForm?.haveYouReportedFreeField2,
            ]}
            question={tenthForm?.question}
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
          label={eleventhStepTranslation?.captcha}
        />

        <div className="w-fit mt-8 border border-black p-4">
          <CheckboxSimple
            label={eleventhStepTranslation.options[0].label}
            id="agreement"
            name="agreement"
            props={register('agreement')}
            value="agreement"
          />
        </div>
      </form>
    </>
  );
};

export default TenthStep;
