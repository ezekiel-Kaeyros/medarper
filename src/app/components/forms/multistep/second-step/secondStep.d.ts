export type SecondStepProps = {
  secondStepTranslation: {
    titleMyself: string;
    titleAnotherPerson: string;
    titleOnbehalf: string;
    titleOrganization: string;
    options: Array<{
      ID: string;
      name: string;
      label: string;
      value: string;
      checked: boolean;
    }>;
    optionsOrganization: Array<{
      ID: string;
      name: string;
      value: string;
      checked: boolean;
      label: string;
    }>;
  };
};

export type SecondFormValues = {
  gender: string;
  genderFreeField: string;
  organizationType: string[];
  organizationTypeFreeField: string;
};

// export type SecondStepProps = {
//   secondTranslation: {};
// };
