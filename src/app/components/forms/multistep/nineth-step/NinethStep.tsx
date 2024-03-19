import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  NinethStepFormValues,
  haveYouReportedData,
  NinthStepProps,
  haveYouReportedDataYes,
} from './ninethStep.d';
import RadioGroup from '../../radio/RadioGroup';
import InputField from '../../text-field/InputField';
import RadioSingle from '../../radio/RadioSingle';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { NINETH_FORM } from '@/cookies/cookies.d';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import Checkbox from '../../checkbox/Checkbox';
import CheckboxInput from '../../checkbox/checkboxInput';
import InputFieldCheckbox from '../../InputFiledCheckBox';

const NinethStep: React.FC<NinthStepProps> = ({ ninthStepTranslation }) => {
  const [question] = useState<string>('');

  const { dispatch } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors,isValid },
  } = useForm<NinethStepFormValues>();

  let haveYouReported: string = watch('haveYouReported');
  let haveYouReportedYes: string = watch('haveYouReportedYes');
  let haveYouReportedFreeField1: string = watch('haveYouReportedFreeField1');
  let haveYouReportedFreeField2: string = watch('haveYouReportedFreeField2');

  // Scroll on top
  useScrollOnTop();

  // Triggered when submitting form
  const onSubmit: SubmitHandler<NinethStepFormValues> = (data) => {
    let step = getFormStep();
    let dataWithQuestion = { question, step, ...data };
    setFormCookies(dataWithQuestion, NINETH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  useEffect(() => {
    // Get values from cookies

    let formValues: {
      haveYouReported: string;
      haveYouReportedYes: string;
      haveYouReportedFreeField1: string;
      haveYouReportedFreeField2: string;
    } = getFormCookies(NINETH_FORM);

    // validation
//     dispatch({ type: FORM_ERRORS, payload: true });
//     if (
//       (haveYouReported &&
//         !haveYouReported?.includes(ninthStepTranslation?.options[1].label)) ||
//       (haveYouReportedYes &&
//         !haveYouReportedYes?.includes(
//           ninthStepTranslation?.optionYesIndeed[2]?.label
//         ) &&
//         haveYouReportedYes &&
//         !haveYouReportedYes?.includes(
//           ninthStepTranslation?.optionYesIndeed[3]?.label
//         )) ||
//       (haveYouReportedYes &&
//         haveYouReportedYes?.includes(
//           ninthStepTranslation?.optionYesIndeed[2]?.label
//         ) &&
//         haveYouReportedFreeField1?.length !== 0) ||
//       (haveYouReportedYes &&
//         haveYouReportedYes?.includes(
//           ninthStepTranslation?.optionYesIndeed[3]?.label
//         ) &&
//         haveYouReportedFreeField2?.length !== 0)
//     ) {
//       dispatch({ type: FORM_ERRORS, payload: false });
//     }

//     // Setting form values from cookies
// if (!isValid) {
//    dispatch({ type: FORM_ERRORS, payload: true });
// }
    
    
    







    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    dispatch({ type: FORM_ERRORS, payload: true });

    //   Setting values in the fields

      if (!haveYouReported) {
        dispatch({ type: FORM_ERRORS, payload: true });
      }
    if (haveYouReported === ninthStepTranslation.options[1].label) {
      dispatch({ type: FORM_ERRORS, payload: true });
      if (
        haveYouReported &&
        haveYouReportedYes?.length > 0 &&
        !haveYouReportedYes?.includes(
          ninthStepTranslation?.optionYesIndeed[3].value
        ) &&
        !haveYouReportedYes?.includes(
          ninthStepTranslation?.optionYesIndeed[2].value
        )
      ) {
        dispatch({ type: FORM_ERRORS, payload: false });
      } else {
        dispatch({ type: FORM_ERRORS, payload: true });
        if (
          haveYouReported &&
          haveYouReportedYes?.length > 0 &&
          haveYouReportedYes?.includes(
            ninthStepTranslation?.optionYesIndeed[3].value
          ) &&
          !haveYouReportedYes?.includes(
            ninthStepTranslation?.optionYesIndeed[2].value
          )
        ) {
          if (
            haveYouReportedFreeField2 &&
            haveYouReportedFreeField2.length > 0
          ) {
            dispatch({ type: FORM_ERRORS, payload: false });
          } else {
            dispatch({ type: FORM_ERRORS, payload: true });
          }
        }
         if (
           haveYouReported &&
           haveYouReportedYes?.length > 0 &&
          ! haveYouReportedYes?.includes(
             ninthStepTranslation?.optionYesIndeed[3].value
           ) &&
           haveYouReportedYes?.includes(
             ninthStepTranslation?.optionYesIndeed[2].value
           )
         ) {
           if (
             haveYouReportedFreeField1 &&
             haveYouReportedFreeField1.length > 0
           ) {
             dispatch({ type: FORM_ERRORS, payload: false });
           } else {
             dispatch({ type: FORM_ERRORS, payload: true });
           }
         }
        
          if (
            haveYouReported &&
            haveYouReportedYes?.length > 0 &&
            haveYouReportedYes?.includes(
              ninthStepTranslation?.optionYesIndeed[3].value
            ) &&
            haveYouReportedYes?.includes(
              ninthStepTranslation?.optionYesIndeed[2].value
            )
          ) {
            if (
              haveYouReportedFreeField1 &&
              haveYouReportedFreeField1.length > 0 &&
              haveYouReportedFreeField2 &&
              haveYouReportedFreeField2.length > 0
            ) {
              dispatch({ type: FORM_ERRORS, payload: false });
            } else {
              dispatch({ type: FORM_ERRORS, payload: true });
            }
          }
        
        //  if (!isValid) {
        //    dispatch({ type: FORM_ERRORS, payload: true });
        //  } else {
        //    dispatch({ type: FORM_ERRORS, payload: false });
        //  }
        // if (
        //   haveYouReported &&
        //   haveYouReportedYes?.length > 0 &&
        //   haveYouReportedYes?.includes(
        //     ninthStepTranslation?.optionYesIndeed[2].value
        //   ) &&
        //   haveYouReportedFreeField1 &&
        //   haveYouReportedFreeField1.length > 2
        // ) {
        //   dispatch({ type: FORM_ERRORS, payload: false });
        //   // if (
        //   //   haveYouReportedFreeField1 &&
        //   //   haveYouReportedFreeField1.length > 2
        //   // ) {
        //   //   dispatch({ type: FORM_ERRORS, payload: false });
        //   // }
        // }
        //   if (
        //     haveYouReported &&
        //     haveYouReportedYes?.length > 0 &&
        //     haveYouReportedYes?.includes(
        //       ninthStepTranslation?.optionYesIndeed[3].value
        //     ) &&
        //     haveYouReportedFreeField2 &&
        //     haveYouReportedFreeField2.length > 2
        //   ) {
        //     dispatch({ type: FORM_ERRORS, payload: false });
        //     // if (
        //     //   haveYouReportedFreeField1 &&
        //     //   haveYouReportedFreeField1.length > 2
        //     // ) {
        //     //   dispatch({ type: FORM_ERRORS, payload: false });
        //     // }
        //   }
          // else if (
          //   haveYouReportedYes?.length > 0 &&
          //   haveYouReportedYes?.includes(
          //     ninthStepTranslation?.optionYesIndeed[3].value
          //   )
          // ) {
          //   dispatch({ type: FORM_ERRORS, payload: true });
          //   if (
          //     haveYouReportedFreeField2 &&
          //     haveYouReportedFreeField2.length > 2
          //   ) {
          //     dispatch({ type: FORM_ERRORS, payload: false });
          //   }
          // } else if (
          //   haveYouReportedYes?.length > 0 &&
          //   haveYouReportedYes?.includes(
          //     ninthStepTranslation?.optionYesIndeed[3].value
          //   ) &&
          //   haveYouReportedYes?.includes(
          //     ninthStepTranslation?.optionYesIndeed[2].value
          //   )
          // ) {
          //   dispatch({ type: FORM_ERRORS, payload: true });
          // }
      }
     

      // Clear field when no selected
    } else {
      if (haveYouReported === ninthStepTranslation.options[0].label) {
        dispatch({ type: FORM_ERRORS, payload: false });
      }
      // dispatch({ type: FORM_ERRORS, payload: false });
    }
    
    
    
    console.log(isValid, '777777777777777777777777');
    
    
    
    
    
    
    

    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (
      formValues &&
      !haveYouReported &&
      !haveYouReportedYes &&
      !haveYouReportedFreeField1 &&
      !haveYouReportedFreeField2 
    ) {
      haveYouReported !== formValues?.haveYouReported &&
        setValue('haveYouReported', formValues?.haveYouReported);
      haveYouReportedYes !== formValues?.haveYouReportedYes &&
        setValue('haveYouReportedYes', formValues?.haveYouReportedYes);
      haveYouReportedFreeField1 !== formValues?.haveYouReportedFreeField1 &&
        setValue(
          'haveYouReportedFreeField1',
          formValues?.haveYouReportedFreeField1
        );
      haveYouReportedFreeField2 !== formValues?.haveYouReportedFreeField2 &&
        setValue(
          'haveYouReportedFreeField2',
          formValues?.haveYouReportedFreeField2
        );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    haveYouReported,
    haveYouReportedYes,
    haveYouReportedFreeField1,
    haveYouReportedFreeField2,
    isValid
  ]);

  console.log(haveYouReportedYes, 'have you reportedYes');
  console.log(
    ninthStepTranslation?.optionYesIndeed[2]?.label,
    'this is my ninth step translation'
  );
  console.log(
    ninthStepTranslation?.optionYesIndeed[2]?.label === haveYouReportedYes,
    'verified'
  );
  return (
    <form id="ninethForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <RadioGroup
          options={ninthStepTranslation.options}
          props={register('haveYouReported', { required: true })}
          title={ninthStepTranslation?.title}
        />
      </div>
      <div className="ml-8">
        {haveYouReported &&
          haveYouReported === ninthStepTranslation?.options[1]?.label && (
            <>
              <div>
                <Checkbox
                  id={ninthStepTranslation?.optionYesIndeed[0].ID}
                  label={ninthStepTranslation?.optionYesIndeed[0]?.label}
                  name="haveYouReportedYes"
                  props={register('haveYouReportedYes')}
                  value={ninthStepTranslation?.optionYesIndeed[0]?.label}
                />
              </div>
              <div>
                <Checkbox
                  id={ninthStepTranslation?.optionYesIndeed[1].ID}
                  label={ninthStepTranslation?.optionYesIndeed[1]?.label}
                  name="haveYouReportedYes"
                  props={register('haveYouReportedYes')}
                  value={ninthStepTranslation?.optionYesIndeed[1]?.label}
                />
              </div>
              <div>
                <CheckboxInput
                  id={ninthStepTranslation?.optionYesIndeed[2].ID}
                  label={ninthStepTranslation?.optionYesIndeed[2]?.label}
                  name="haveYouReportedYes"
                  props={register('haveYouReportedYes')}
                  value={ninthStepTranslation?.optionYesIndeed[2]?.label}
                />

                <InputFieldCheckbox
                  name="haveYouReportedFreeField1"
                  placeholder={'Hier ausführen'}
                  props={register('haveYouReportedFreeField1', {
                    required:
                      haveYouReportedYes &&
                      haveYouReportedYes.includes(
                        ninthStepTranslation?.optionYesIndeed[2]?.label
                      )
                        ? true
                        : false,
                  })}
                  disable={
                    haveYouReportedYes &&
                    haveYouReportedYes.includes(
                      ninthStepTranslation?.optionYesIndeed[2]?.label
                    )
                      ? false
                      : true
                  }
                  value={
                    !haveYouReportedYes ||
                    !haveYouReportedYes.includes(
                      ninthStepTranslation?.optionYesIndeed[2]?.label
                    )
                      ? ''
                      : haveYouReportedFreeField1
                  }
                />
              </div>
              {/* <div className="ml-2 -mt-2 mb-4">
                {haveYouReportedYes &&
                  haveYouReportedYes.includes(
                    ninthStepTranslation?.optionYesIndeed[2]?.label
                  ) && (
                    <>
                      <InputField
                        name="haveYouReportedFreeField1"
                        placeholder="Hier ausführen"
                        // props={register('haveYouReportedFreeField1')}
                        props={register('haveYouReportedFreeField1', {
                          required: true,
                          minLength: 3,
                        })}
                      />
                      <p className="mb-5">
                        {errors?.haveYouReportedFreeField1 && (
                          <span className="text-sm text-red-600 font-bold">
                            <p>{ninthStepTranslation.validation}</p>
                          </span>
                        )}
                      </p>
                    </>
                  )}
              </div> */}
              <div className='mt-5'>
                <CheckboxInput
                  id={ninthStepTranslation?.optionYesIndeed[3].ID}
                  label={ninthStepTranslation?.optionYesIndeed[3]?.label}
                  name="haveYouReportedYes"
                  props={register('haveYouReportedYes')}
                  value={ninthStepTranslation?.optionYesIndeed[3]?.label}
                />

                <InputFieldCheckbox
                  name="haveYouReportedFreeField2"
                  placeholder={'Hier ausführen'}
                  props={register('haveYouReportedFreeField2', {
                    required:
                      haveYouReportedYes &&
                      haveYouReportedYes.includes(
                        ninthStepTranslation?.optionYesIndeed[3]?.label
                      )
                        ? true
                        : false,
                  })}
                  disable={
                    haveYouReportedYes &&
                    haveYouReportedYes.includes(
                      ninthStepTranslation?.optionYesIndeed[3]?.label
                    )
                      ? false
                      : true
                  }
                  value={
                    !haveYouReportedYes ||
                    !haveYouReportedYes.includes(
                      ninthStepTranslation?.optionYesIndeed[3]?.label
                    )
                      ? ''
                      : haveYouReportedFreeField2
                  }
                />
              </div>
              {/* <div className="ml-2">
                {haveYouReportedYes &&
                  haveYouReportedYes.includes(
                    ninthStepTranslation?.optionYesIndeed[3]?.label
                  ) && (
                    <>
                      <InputField
                        name="haveYouReportedFreeField2"
                        placeholder={ninthStepTranslation.placeHolder}
                        // props={register('haveYouReportedFreeField2')}
                        props={register('haveYouReportedFreeField2', {
                          required: true,
                          minLength: 3,
                        })}
                      />
                      <p className="mb-5">
                        {errors?.haveYouReportedFreeField2 && (
                          <span className="text-sm text-red-600 font-bold">
                            <p>{ninthStepTranslation.validation}</p>
                          </span>
                        )}
                      </p>
                    </>
                  )}
              </div> */}
            </>
          )}
      </div>
    </form>
  );
};

export default NinethStep;
