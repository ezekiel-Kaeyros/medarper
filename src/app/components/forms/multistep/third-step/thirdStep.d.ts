export type ThirdStepProps = {
  thirdStepTranslation: {
    title:string,
    title1:string,
    title2:string,
    options:[
      {
        id:string, 
        name:string,
        label:string,
        value:string,
        checked:boolean
      }
    ],
    employeesNumbOpt: [
      {
        id:string, 
        name:string,
        label:string,
        value:string,
        checked:boolean
      }
    ]
  };
};

export type ThirdFormValues = {
  numberOfEmployees: string;
  age: string;
};
