import React from 'react';
import FaqItem from './FaqItem';
import { CustomLink } from '../custom-link/CustomLink';

type FaqProps = {
  content: {
    whyReport: string;
    whatHappensWithData: string;
    whatIsAntiMuslimRacism: string;
    whoIsBehindMEDAR: string;
    readAllAnswers: string;
  };
  lang: string;
  ref: any;
};
const Faq: React.FC<FaqProps> = ({ content, lang, ref }) => {
  // const Faq = React.forwardRef<HTMLDivElement, { content: any; lang: string }>(
  // ({ content, lang }, ref) => {
  return (
    <div className="w-full" ref={ref}>
      <FaqItem title={content?.whyReport} content="Lorem ipsum" />
      <FaqItem title={content?.whatHappensWithData} content="Lorem ipsum" />
      <FaqItem title={content?.whatIsAntiMuslimRacism} content="Lorem ipsum" />
      <FaqItem title={content?.whoIsBehindMEDAR} content="Lorem ipsum" />
      <CustomLink link={`/${lang}/helpcenter`}>
        {content?.readAllAnswers}
      </CustomLink>
    </div>
  );
};

export default Faq;
