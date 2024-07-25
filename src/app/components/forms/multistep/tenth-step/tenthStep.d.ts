export type TenthStepProps = {
  tenthStepTranslation: {
    title: string;
    placeHolder: string;
    validation: string;
    options: Array<{
      ID: string;
      name: string;
      label: string;
      value: string;
      checked: boolean;
    }>;
    optionYesIndeed: Array<{
      ID: string;
      name: string;
      label: string;
      value: string;
      checked: boolean;
    }>;
  };
  modal?:any
};

export type TenthStepFormValues = {
  haveYouReported: string;
  haveYouReportedYes: string;
  haveYouReportedFreeField1: string;
  haveYouReportedFreeField2: string;
};

export const haveYouReportedData = [
  {
    iD: 1,
    id: 'no',
    value: 'Nein',
    name: 'haveYouReported',
    label: 'Nein',
  },
  {
    iD: 2,
    id: 'yes',
    value: 'Ja, und zwar:',
    name: 'haveYouReported',
    label: 'Ja, und zwar:',
  },
];

export const haveYouReportedDataYes = [
  {
    iD: 1,
    id: 'id1',
    value: 'Ich habe den Fall bei der Polizei angezeigt',
    name: 'haveYouReportedYes',
    label: 'Ich habe den Fall bei der Polizei angezeigt',
  },
  {
    iD: 2,
    id: 'id2',
    value: 'Ich habe eine Beratungsstelle aufgesucht',
    name: 'haveYouReportedYes',
    label: 'Ich habe eine Beratungsstelle aufgesucht',
  },
  ,
  {
    iD: 3,
    id: 'id3',
    value:
      'Ich habe den Fall bei einer anderen Meldestelle gemeldet, und zwar:',
    name: 'haveYouReportedYes',
    label:
      'Ich habe den Fall bei einer anderen Meldestelle gemeldet, und zwar:',
  },
  ,
  {
    iD: 4,
    id: 'id4',
    value: 'Anderes, und zwar:',
    name: 'haveYouReportedYes',
    label: 'Anderes, und zwar:',
  },
];
