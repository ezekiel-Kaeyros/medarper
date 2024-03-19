'use client';
import React, { useState } from 'react';
import Stepper from '../stepper/Stepper';
import { useFormContext } from '@/app/hooks/useFormContext';
import FirstStep from './first-step/FirstStep';
import SecondStep from './second-step/SecondStep';
import { Button } from '../../button/Button';
import { PREV_STEP } from '@/app/context/actions';
import CancelModal from './modals/cancel-modal/CancelModal';
import ConfirmModal from './modals/confirm-modal/ConfirmModal';
import Image from 'next/image';
import PadLockIcon from '../../../../../public/icons/padLock.svg';
import ReadAloud from '../../../../../public/icons/readAloud.svg';
import BackIcon from '../../../../../public/icons/backButton.svg';
import QuestionMarkIcon from '../../../../../public/icons/questionMarkIcon.svg';
import EighthStep from './eighth-step/EighthStep';
import ThirdStep from './third-step/ThirdStep';
import FourthStep from './fourth-step/FourthStep';
import FifthStep from './fifth-step/FifthStep';
import SixthStep from './sixth-step/SixthStep';
import SeventhStep from './seventh-step/SeventhStep';
import NinethStep from './nineth-step/NinethStep';
import TenthStep from './tenth-step/TenthStep';
import { getFormStep } from '@/cookies/cookies';
import OnBehalfModal from './modals/on-behalf-modal/OnBehalf';
import WitnessModal from './modals/witness-modal/WitnessModal';

type MultiStepFormValuesProps = {
  stepper: {
    firstStep: any;
    secondStep: any;
    thirdStep: any;
    fourthStep: any;
    fifthStep: any;
    sixthStep: any;
    seventhStep: any;
    eightStep: any;
    ninthStep: any;
    tenthStep: any;
  };
  formFields: any;

  button: any;
  modal: {
    cancelModal: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      cancel: string;
      noFurther: string;
    };
    confirmModal: {
      title: string;
      des: string;
      back: string;
      ja: string;
    };
    onBehalf: {
      title: string;
      des: string;
      back: string;
      forward: string;
    };
    witness: {
      title: string;
      des: string;
      cancel: string;
      forward: string;
    };
  };
};

type MultiStepFormProps = {
  lang: string;
  formTranslation: MultiStepFormValuesProps;
};

const MultiStepForm: React.FC<MultiStepFormProps> = (
  { formTranslation },
  lang
) => {
  const { step, dispatch, formErrors, reportingPerson } = useFormContext();
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showOnBehalfModal, setShowOnBehalfModal] = useState<boolean>(false);
  const [showWitnessModal, setShowWitnessModal] = useState<boolean>(false);

  let stepFromCookies = getFormStep();
  console.log(lang, 'this is my lang');

  const handleSubmit = () => {
    if (reportingPerson === 'andere') {
      setShowWitnessModal((prev) => !prev);
    } else if (reportingPerson === 'onBehalf') {
      setShowOnBehalfModal((prev) => !prev);
    } else {
      setShowConfirmModal((prev) => !prev);
    }

    if (showWitnessModal || showOnBehalfModal) {
      setShowConfirmModal((prev) => !prev);
    }
  };

  return (
    <div className="mx-auto">
      <CancelModal
        onRequestClose={() => {
          setShowCancelModal((prev) => !prev);
        }}
        shouldShow={showCancelModal}
        cancelModalTranslation={formTranslation.modal.cancelModal}
      />
      {reportingPerson === 'onBehalf' ? (
        <OnBehalfModal
          onRequestClose={() => {
            setShowOnBehalfModal((prev) => !prev);
          }}
          shouldShow={showOnBehalfModal}
          onBehalfTranslation={formTranslation.modal.onBehalf}
        />
      ) : reportingPerson === 'andere' ? (
        <WitnessModal
          onRequestClose={() => {
            setShowWitnessModal((prev) => !prev);
          }}
          shouldShow={showWitnessModal}
          witnessTranslation={formTranslation.modal.witness}
        />
      ) : (
        ''
      )}
      <ConfirmModal
        onRequestClose={() => {
          setShowConfirmModal((prev) => !prev);
        }}
        shouldShow={showConfirmModal}
        confirmModalTranslation={formTranslation.modal.confirmModal}
        lang={lang}
      />
      <div className="mx-4 md:mx-0">
        <div className="w-fit flex mb-4 ml-auto items-center  md:hidden">
          <Image className="w-8" src={PadLockIcon} alt="Pad lock icon" />
          <Image className="w-16 ml-4" src={ReadAloud} alt="Read aloud icon" />
        </div>
        <div className="max-w-2xl mb-8  mx-auto flex items-center justify-between">
          <div className="w-full">
            <Stepper stepperTranslation={formTranslation?.stepper} />
          </div>
        </div>

        <div className="relative bg-[#f5f5f5] rounded-lg px-2 md:px-0 py-4 w-full">
          <div className="relative max-w-2xl mx-auto">
            <div>
              <div className="absolute  right-0">
                <div className="flex space-x-2">
                  <Image
                    className="w-10"
                    src={PadLockIcon}
                    alt="Pad lock icon"
                  />
                  <div className="bg-white rounded-full flex items-center justify-center p-2">
                    <Image
                      className="h-5 w-5"
                      src={QuestionMarkIcon}
                      alt="Question mark icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            {step == 1 ? (
              <FirstStep
                firstStepTranslation={formTranslation?.stepper.firstStep}
              />
            ) : step === 2 ? (
              <SecondStep
                secondStepTranslation={formTranslation?.stepper.secondStep}
              />
            ) : step === 3 ? (
              <ThirdStep
                thirdStepTranslation={formTranslation?.stepper.thirdStep}
              />
            ) : step === 4 ? (
              <FourthStep
                fourthStepTranslation={formTranslation?.stepper.fourthStep}
                lang={lang}
              />
            ) : step === 5 ? (
              <FifthStep
                fifthStepTranslation={formTranslation?.stepper.fifthStep}
              />
            ) : step === 6 ? (
              <SixthStep
                sixthStepTranslation={formTranslation?.stepper.sixthStep}
              />
            ) : step === 7 ? (
              <SeventhStep
                seventhStepTranslation={formTranslation?.stepper.seventhStep}
              />
            ) : step === 8 ? (
              <EighthStep
                eighthStepTranslation={formTranslation?.stepper.eightStep}
              />
            ) : step === 9 ? (
              <NinethStep
                ninthStepTranslation={formTranslation?.stepper.ninthStep}
              />
            ) : (
              <TenthStep
                tenthStepTranslation={formTranslation?.stepper.tenthStep}
              />
            )}
          </div>

          <div className="flex max-w-2xl mt-16 mb-0 mx-auto space-x-4 md:space-x-16 justify-between md:flex-row  md:justify-between items-center w-full">
            <Button
              className="text-xl w-32 md:w-48 py-4"
              variant="primary"
              icon={BackIcon}
              onClick={() => dispatch({ type: PREV_STEP })}
            />
            {step === 10 ? (
              <Button
                className="text-xl w-48 py-4"
                variant={`${formErrors ? 'disabled' : 'default'}`}
                disabled={formErrors ? true : false}
                onClick={() => handleSubmit()}
              >
                {formTranslation?.button?.submit}
              </Button>
            ) : (
              <Button
                className="text-xl w-32  md:w-48 py-4"
                variant={`${formErrors ? 'disabled' : 'default'}`}
                disabled={formErrors ? true : false}
                form={`${
                  stepFromCookies === 1
                    ? 'firstForm'
                    : stepFromCookies === 2
                      ? 'secondForm'
                      : stepFromCookies === 3
                        ? 'thirdForm'
                        : stepFromCookies === 4
                          ? 'fourthForm'
                          : stepFromCookies === 5
                            ? 'fifthForm'
                            : stepFromCookies === 6
                              ? 'sixthForm'
                              : stepFromCookies === 7
                                ? 'seventhForm'
                                : stepFromCookies === 8
                                  ? 'eighthForm'
                                  : stepFromCookies === 9
                                    ? 'ninethForm'
                                    : 'tenthForm'
                }`}
              >
                {formTranslation?.button?.next}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-[1px] mb-4 md:hidden bg-primaryColor"></div>
        <Button
          onClick={() => setShowCancelModal((prev) => !prev)}
          variant="disabled"
          className="mx-auto w-48 py-4"
        >
          {formTranslation.modal.cancelModal.cancel}
        </Button>
      </div>
    </div>
  );
};

export default MultiStepForm;
