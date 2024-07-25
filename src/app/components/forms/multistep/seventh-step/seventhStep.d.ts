export type SeventhStepProps = {
  seventhStepTranslation: {
    title: string;
    placeHolder: string;
    errorParagragh: string;
    options: [
      {
        inputPlaceholder: string;
        listTitle: string;
        firstList: string;
        secondList: string;
        thirdList: string;
        fourthList: string;
        fifthList: string;
        sixthList: string;
        note: boolean;
      },
    ];
  };
};

export type SeventhFormValues = {
  description: string;
};
