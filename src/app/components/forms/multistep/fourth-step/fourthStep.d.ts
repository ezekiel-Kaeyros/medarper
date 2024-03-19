export type FourthStepProps = {
  fourthStepTranslation: {
    title: string;
    options: [
      {
        dateRange: string;
        formDate: string;
        toDate: string;
        selectOpt: sting;
      },
    ];
  };
  lang: string;
};

export type FourthFormValues = {
  onGoingIncident: string;
  datePeriod: string;
};
