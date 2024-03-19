import HelpQuestion from '@/app/components/faq/HelpQuestion';
import React from 'react';

const faqs = [
  {
    id: 1,
    question: 'Warum soll ich melden?',
    answer: 'Lorem ipsum dolor sit amet consectur',
  },
  {
    id: 2,
    question: 'Was passiert mit meinen Daten?',
    answer: 'Lorem ipsum dolor sit amet consectur',
  },
  {
    id: 3,
    question: 'Was ist antimuslimischer Rassismus?',
    answer: 'Lorem ipsum dolor sit amet consectur',
  },
  {
    id: 4,
    question: 'Wer steckt hinter MEDAR NRW?',
    answer: 'Lorem ipsum dolor sit amet consectur',
  },
  {
    id: 5,
    question: 'Warum soll ich melden?',
    answer: 'Lorem ipsum dolor sit amet consectur',
  },
  {
    id: 6,
    question: 'Was passiert mit meinen Daten?',
    answer: 'Lorem ipsum dolor sit amet consectur',
  },
];

type FaqsProps = {
  faqsTranslation:{
    title:string;
        whyReport:string,
        whatHappensWithData: string,
        whatIsAntiMuslimRacism:string,
        whoIsBehindMEDAR: string,
        readAllAnswers:string
  }
};

const Faqs: React.FC<FaqsProps> = ({faqsTranslation}) => {
  return (
    <div>
      <h1 className="font-bold text-black text-2xl mb-4 mt-6">
        {faqsTranslation.title}
      </h1>
      <HelpQuestion
        content={{
          whyReport: faqsTranslation.whyReport,
          whatHappensWithData: faqsTranslation.whatHappensWithData,
          whatIsAntiMuslimRacism: faqsTranslation.whatIsAntiMuslimRacism,
          whoIsBehindMEDAR: faqsTranslation.whoIsBehindMEDAR,
        }}
      />
    </div>
  );
};

export default Faqs;
