import React, { useEffect, useState } from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import locale from 'antd/locale/de_DE';

import 'dayjs/locale/de';
import { DatePickerProps } from 'antd/lib';
import CheckboxSimple from '../../checkbox/CheckboxSimple';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FourthFormValues, FourthStepProps } from './fourthStep.d';
import { getFormCookies, getFormStep, setFormCookies } from '@/cookies/cookies';
import { FOURTH_FORM } from '@/cookies/cookies.d';
import { useFormContext } from '@/app/hooks/useFormContext';
import { NEXT_STEP, FORM_ERRORS } from '@/app/context/actions';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import Checkbox from '../../checkbox/Checkbox';

const dateFormat = 'DD.MM.YYYY';
FORM_ERRORS;

const FourthStep: React.FC<FourthStepProps> = ({
  fourthStepTranslation,
  lang,
}) => {
  const { dispatch } = useFormContext();
  const [question] = useState<string>('Datum');
  const [valueDate, setValueDate] = useState<Dayjs | null>(dayjs());

  const [dateStart, setDateStart] = useState<any>();
  const [dateEnd, setDateEnd] = useState<any>();
  const [dateRange, setDateRange] = useState<any>();

  // Disabled date ranges
  function disabledDate(current: any) {
    // Disable dates after today
    return current && current.isAfter(dayjs().endOf('day'));
  }

  // On range picker change
  const onChangeDateStart: DatePickerProps['onChange'] = (date, dateString) => {
    setDateStart(date);
  };

  const onChangeDateEnd: DatePickerProps['onChange'] = (date, dateString) => {
    setDateEnd(date);
  };

  // Scroll on top
  useScrollOnTop();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FourthFormValues>();

  let onGoingIncident: string = watch('onGoingIncident');
  let datePeriod: string = watch('datePeriod');

  useScrollOnTop();
  useEffect(() => {
    // Get values from cookies
    FORM_ERRORS;
    let formValues: {
      date: any;
      dateRange: any[];
      onGoingIncident: string;
      datePeriod: string;
    } = getFormCookies(FOURTH_FORM);

    // Validation.
    dispatch({ type: FORM_ERRORS, payload: false });
    if ((datePeriod && !dateStart) || (datePeriod && !dateEnd)) {
      dispatch({ type: FORM_ERRORS, payload: true });
    }

    if (!datePeriod) {
    }

    if (formValues && !onGoingIncident && datePeriod == undefined) {
      onGoingIncident !== formValues?.onGoingIncident &&
        setValue('onGoingIncident', formValues?.onGoingIncident);
      datePeriod !== formValues?.datePeriod &&
        setValue('datePeriod', formValues?.datePeriod);

      formValues?.date && setValueDate(dayjs(formValues?.date));
      formValues?.dateRange && setDateStart(formValues?.dateRange[0]);
      formValues?.dateRange && setDateEnd(formValues?.dateRange[1]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datePeriod, dateStart, dateEnd, valueDate]);

  console.log(!dateStart, 'this is my date start');
  console.log(!dateEnd, 'this is my date end');
  // console.log(valueDate, "this is my valuedate")
  // console.log(!datePeriod, 'this is my date Period');

  // Triggered when submitting form
  const onSubmit: SubmitHandler<FourthFormValues> = (data) => {
    let step = getFormStep();
    let date = valueDate;
    let dateRange = [dateStart, dateEnd];

    let dataWithQuestion = { question, date, dateRange, step, ...data };
    setFormCookies(dataWithQuestion, FOURTH_FORM);

    dispatch({ type: NEXT_STEP, payload: '' });
  };

  return (
    <form id="fourthForm" onSubmit={handleSubmit(onSubmit)} className="h-full">
      {/* Locale provider */}
      <ConfigProvider locale={locale}>
        <div className="flex flex-col">
          <div className="mb-3 text-3xl text-primaryColor font-bold">
            {fourthStepTranslation.title}
          </div>

          <LocalizationProvider adapterLocale={lang} dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{
                width: '100%',
                '& .Mui-selected, & .Mui-selected:focus, & .Mui-selected:hover':
                  {
                    backgroundColor: `white !important`,
                  },
              }}
              value={valueDate}
              views={['month', 'day']}
              defaultValue={valueDate}
              disabled={datePeriod ? true : false}
              onChange={(newValue) => setValueDate(newValue)}
              disableFuture
            />
            <div></div>
          </LocalizationProvider>
        </div>
        <div className="mt-8 mb-8">
          {/* <h1 className="mb-8 font-bold text-primaryColor text-3xl">
            {fourthStepTranslation?.options[0]?.dateRange}
          </h1> */}
          <CheckboxSimple
            id="datePeriod"
            name="datePeriod"
            props={register('datePeriod')}
            value={fourthStepTranslation?.options[0]?.dateRange}
            label={fourthStepTranslation?.options[0]?.dateRange}
          />

          {datePeriod && (
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full items-center">
              <div className="flex flex-col md:flex-row w-full text-sm md:mb-0 md:items-center">
                <div className="mr-4 mb-2 md:mb-0 lg:text-xl">
                  {fourthStepTranslation?.options[0]?.formDate}
                </div>
                <DatePicker
                  className="w-full py-3 focus:border-primaryColor focus:border"
                  disabledDate={disabledDate}
                  defaultValue={dayjs(dateStart)}
                  onChange={onChangeDateStart}
                  format={dateFormat}
                />
              </div>
              <div className="flex flex-col md:flex-row text-sm md:mb-0 md:items-center w-full">
                <div className="mr-5 mb-2 md:mb-0 md:mr-4 lg:text-xl">
                  {fourthStepTranslation?.options[0]?.toDate}
                </div>
                <DatePicker
                  disabledDate={disabledDate}
                  className="w-full py-3"
                  defaultValue={dayjs(dateEnd)}
                  onChange={onChangeDateEnd}
                  format={dateFormat}
                />
              </div>
            </div>
          )}
        </div>

        <div className="my-2">
          <CheckboxSimple
            id="itStillHappening"
            name="onGoingIncident"
            props={register('onGoingIncident')}
            value={fourthStepTranslation?.options[0]?.selectOpt}
            label={fourthStepTranslation?.options[0]?.selectOpt}
          />
        </div>
      </ConfigProvider>
    </form>
  );
};

export default FourthStep;
