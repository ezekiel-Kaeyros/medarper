export type FifthStepProps = {
  fifthStepTranslation: {
    title: string;
    options: [
      {
        city: string;
        inputTitle: string;
        radioField: string;
      },
    ];
  };
};

export type FifthFormValues = {
  happenedOnline: string;
  city: string;
};
