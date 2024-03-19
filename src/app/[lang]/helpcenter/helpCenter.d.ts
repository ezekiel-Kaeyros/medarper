export type HelpCenterProps = {
    helpCenterTranslation:{
        title:string,
      title1:string,
      desc1:string,
      desc2:string,
      desc3:string,
      search:{
        placeHolder:string
      },
      hero:{
        title:string?  
      },
      faqs: {
        title: string,
        whyReport: string
        whatHappensWithData: string,
        whatIsAntiMuslimRacism: string,
        whoIsBehindMEDAR:string,
        readAllAnswers: string,
      },
      Feedback:{
        title:string,
        firstTitle:string,
        secondHeader:string,
      },
      form:{
        firstName:string,
        lastName:string,
        subject:string,
        email:string,
        textArea:string,
        send:string
      }
    }
}