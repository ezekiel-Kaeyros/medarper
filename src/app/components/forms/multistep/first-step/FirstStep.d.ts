export type FirstStepProps = {
  firstStepTranslation: {
    title:string,
    disclaimer:string,
    options:
      Array<{
        ID:string, 
        name:string,
        label:string,
        value:string,
        checked:boolean
      }>
  };
};

export type FirstStepFormValues = {
  identity: string;
};
