export type EleventhStepProps = {
  eleventhStepTranslation: {
    title: string;
    captcha: string;
    options: [
      {
        name: string;
        label: string;
      },
    ];
  };
  modal?: any;
  identity?: any;
};

export type EleventhFormValues = {
  agreement: string;
  captcha: string;
};
