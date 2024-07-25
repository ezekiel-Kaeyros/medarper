export type SixthStepProps = {
  sixthStepTranslation: {
    title: string;
    multipleAns: string;
    placeHolder: string;
    options: Array<{
      ID: string;
      name: string;
      label: string;
      value: string;
      checked: boolean;
    }>;
  };
};

export const causesData = [
  { iD: 1, id: 'causes1', value: 'Kopftuch', label: 'Kopftuch' },
  {
    iD: 2,
    id: 'causes2',
    value: '',
    label: 'Abaya',
  },
  { iD: 3, id: 'causes3', value: 'Turban', label: 'Turban' },
  { iD: 4, id: 'causes4', value: 'Bart', label: 'Bart' },
  ,
  {
    iD: 5,
    id: 'causes5',
    value: 'Hautfarbe',
    label: 'Hautfarbe',
  },
  ,
  { iD: 6, id: 'causes6', value: 'Haare', label: 'Haare' },
  ,
  { iD: 7, id: 'causes7', value: 'Augen', label: 'Augen' },
  ,
  { iD: 8, id: 'causes8', value: 'Sprache', label: 'Sprache' },
  ,
  {
    iD: 9,
    id: 'causes9',
    value: '„Nichtdeutscher“ Name',
    label: '„Nichtdeutscher“ Name',
  },
  {
    iD: 10,
    id: 'causes10',
    value: 'Religiöse Ausübung (z.B Beten oder fasten)',
    label: 'Religiöse Ausübung (z.B Beten oder fasten)',
  },
  {
    iD: 11,
    id: 'causes11',
    value: 'Kleidung',
    label: 'Kleidung',
  },
  {
    iD: 12,
    id: 'causes12',
    value: 'Anderes, und zwar:',
    label: 'Anderes, und zwar:',
  },
];

export type SixthFormValues = {
  placeOfDiscrimination: string[];
  placeOfDiscriminationFreeField: string;
};
