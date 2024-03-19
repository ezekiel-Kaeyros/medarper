export type TenthStepProps = {
  tenthStepTranslation: {
    title: string;
    captcha: string;
    options: [
      {
        name: string;
        label: string;
      },
    ];
  };
};

export type TenthFormValues = {
  agreement: string;
  captcha: string;
};
