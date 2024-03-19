import React from 'react';
import FaqItem from './FaqItem';

type HelpQuestionProps = {
  content: {
    whyReport: string;
    whatHappensWithData: string;
    whatIsAntiMuslimRacism: string;
    whoIsBehindMEDAR: string;
  };
};
const HelpQuestion: React.FC<HelpQuestionProps> = ({ content }) => {
  return (
    <div>
      <FaqItem title={content?.whyReport} content="Lorem ipsum" />
      <FaqItem title={content?.whatHappensWithData} content="Lorem ipsum" />
      <FaqItem title={content?.whatIsAntiMuslimRacism} content="Lorem ipsum" />
      <FaqItem title={content?.whoIsBehindMEDAR} content="Lorem ipsum" />
    </div>
  );
};

export default HelpQuestion;
