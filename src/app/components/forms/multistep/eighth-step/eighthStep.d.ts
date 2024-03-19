export type EighthStepProps = {
  eighthStepTranslation: {
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
};

export const otherFormsData = [
  {
    iD: 1,
    id: 'no',
    value: 'Nein',
    name: 'otherForms',
    label: 'Nein',
  },
  {
    iD: 2,
    id: 'yes',
    value: 'Ja, und zwar:',
    name: 'otherForms',
    label: 'Ja, und zwar:',
  },
];

export const otherFormsDataYes = [
  {
    iD: 1,
    id: 'Antiasiatischer',
    value: 'Antiasiatischer Rassismus',
    name: 'otherFormsYes',
    label: 'Antiasiatischer Rassismus',
  },
  {
    iD: 2,
    id: 'Antifeminismus',
    value: 'Antifeminismus',
    name: 'otherFormsYes',
    label: 'Antifeminismus',
  },
  ,
  {
    iD: 3,
    id: 'Antimuslimischer',
    value: 'Antimuslimischer Rassismus',
    name: 'otherFormsYes',
    label: 'Antimuslimischer Rassismus',
  },
  ,
  {
    iD: 4,
    id: 'Anti-Schwarzer',
    value: 'Anti-Schwarzer Rassismus',
    name: 'otherFormsYes',
    label: 'Anti-Schwarzer Rassismus',
  },
  ,
  {
    iD: 5,
    id: 'Antisemitismus',
    value: 'Antisemitismus',
    name: 'otherFormsYes',
    label: 'Antisemitismus',
  },
  ,
  {
    iD: 6,
    id: 'Antislawischer',
    value: 'Antislawischer Rassismus',
    name: 'otherFormsYes',
    label: 'Antislawischer Rassismus',
  },
  ,
  {
    iD: 7,
    id: 'Antiziganismus',
    value: 'Antiziganismus',
    name: 'otherFormsYes',
    label: 'Antiziganismus',
  },
  ,
  {
    iD: 8,
    id: 'Queerfeindlichkeit',
    value: 'Queerfeindlichkeit',
    name: 'otherFormsYes',
    label: 'Queerfeindlichkeit',
  },
  ,
  {
    iD: 9,
    id: 'Sexismus',
    value: 'Sexismus',
    name: 'otherFormsYes',
    label: 'Sexismus',
  },
  {
    iD: 10,
    id: 'Andere',
    value: 'Andere Formen, und zwar:',
    name: 'otherFormsYes',
    label: 'Andere Formen, und zwar:',
  },
];

export type EighthStepFormValues = {
  otherForms: string;
  otherFormsYes: string[];
  otherFormsYesFreeField: string;
};
