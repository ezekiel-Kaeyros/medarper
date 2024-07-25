'use client';
import React, { useState, useRef } from 'react';
import Accordion from '../accordion/Accordion';
import AccordionLarge from '../accordion/AccordationLarge';
import { Button } from '../button/Button';
import Image from 'next/image';
import People from '../../../../public/icons/people.svg';
import Form from '../../../../public/icons/Group 24.svg';
// import Form from '../../../../public/icons/form.svg';
import FormLanding from '../../../../public/icons/Vector (2).svg';
import FormPeople from '../../../../public/icons/Vector4.svg';

import Faq from '../faq/Faq';
import { CustomLink } from '../custom-link/CustomLink';

type HeroSectionProps = {
  content: {
    button: string;
    howTo: string;
    faqs: {
      title: string;
      whyReport: string;
      whatHappensWithData: string;
      whatIsAntiMuslimRacism: string;
      whoIsBehindMEDAR: string;
      readAllAnswers: string;
    };
  };
  lang: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ content, lang }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleLarge, setToggleLarge] = useState<boolean>(false);

  const faqRef = useRef(null);

  const handleToggle = (toggle: boolean) => {
    setToggle(!toggle);
  };

  const handleToggleLarge = (toggle: boolean) => {
    setToggleLarge(!toggle);
  };

  return (
    <div className={` ${toggle ? '' : 'lg:mb-0'} lg:h-full`}>
      <div className=" lg:relative w-full mt-5">
        <div className="hidden lg:flex justify-between absolute -z-10 w-full h-full">
          {/* Bg light brown green bg circle */}
          <Image
            src={FormPeople}
            className="w-[400px] h-fit mt-52 rtl:-right-[4rem] rtl:scale-y-[-1] rtl:rotate-180"
            alt="Form"
          />

          {/* snakes tail bg img */}
          <Image
            src={FormLanding}
            className="w-[300px] h-fit rtl:scale-y-[-1] rtl:rotate-180 mt-20"
            alt="Form"
          />
        </div>
        <div className="mx-4 lg:mx-[10rem] flex flex-col">
          <div className="flex justify-between flex-col lg:flex-row w-full m-auto gap-y-4 lg:mb-0 order-1">
            {/* <div className="w-48 lg:w-full relative ml-auto z-20  rtl:mr-auto rtl:ml-0 flex flex-col sm:flex-row justify-between items-center"> */}
            <div className="">
              {/* <div className="hidden lg:relative lg:w-[50%] lg:block lg:max-w-4xl text-2xl"> */}
              <h1 className="font-semibold text-xl lg:text-3xl lg:w-[70%] mb-2 text-center lg:text-start">
                Hast du antimuslimischen Rassismus oder Diskriminierung erlebt
                oder beobachtet?
              </h1>
              <h1 className="text-[18px] lg:text-xl w-[90%] m-auto lg:m-0 lg:w-[60%] text-center lg:text-start">
                Melde den Vorfall & mach’ antimuslimischen Rassismus in NRW
                sichtbar!
              </h1>
            </div>
            <div className="flex flex-col m-auto lg:justify-end">
              <Button
                href={`/${lang}/report`}
                className="text-center relative z-10 lg:w-48 w-fit"
                variant="default"
              >
                <span className="text-[15px] lg:text-2xl">
                  {content?.button}
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between order-4 lg:order-2 lg:-mt-8">
            <div className="order-2 lg:order-1 flex justify-end">
              <div className="w-[70%] sm:w-1/2 lg:w-full">
                <Image src={People} alt="people" className="w-[800px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2 mt-10 lg:mt-0 lg:w-[40%]">
              <div className="h-fit text-[18px] lg:text-2xl flex flex-col w-[80%] lg:w-full m-auto">
                MEDAR NRW bietet eine sichere und vertrauliche Plattform an, in
                der Erfahrungen mit Rassismus und antimuslimischen
                Diskriminierungen in NRW anonym erfasst und sichtbar gemacht
                werden.
                <CustomLink link={`/${lang}/helpcenter`}>
                  mehr erfahren
                </CustomLink>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-3">
            <div className=" md:w-[70%] lg:w-auto w-auto flex items-center justify-center m-auto lg:mt-0 mt-10">
              <Accordion
                handleToggle={() => handleToggle(toggle)}
                toggle={toggle}
                title={content?.howTo}
                content={
                  <iframe
                    className="w-full h-[25rem] lg:h-[35rem]"
                    src="https://www.youtube.com/embed/J_Kb0wFQ65A"
                    title="What is Antiracism?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                }
              />
            </div>
            <div className="mt-20 hidden lg:flex flex-col justify-center w-[60%] m-auto">
              <h1 className="font-bold text-3xl mb-4 text-primaryColor text-center">
                {content?.howTo}
              </h1>
              <div className="">
                {/* <AccordionLarge
                    handleToggle={() => handleToggleLarge(toggleLarge)}
                    toggle={toggleLarge}
                    title={content?.howTo}
                    content={
                      <iframe
                        className="w-full h-[25rem] lg:h-[35rem] mb-2"
                        src="https://www.youtube.com/embed/J_Kb0wFQ65A"
                        title="What is Antiracism?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    }
                  /> */}
                <iframe
                  className="w-full h-[25rem] lg:h-[35rem] mb-2 border-[5px] border-[#EAD3B5]"
                  src="https://www.youtube.com/embed/J_Kb0wFQ65A"
                  title="What is Antiracism?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* FAQs section */}
          <div className="mt-6 lg:mt-20 order-3 lg:order-4">
            <div className="w-full">
              {/* <div className="relative -mt-[6rem] w-full lg:mt-[24rem] z-20"> */}
              <div className=" relative h-[500px] lg:h-fit">
                <div className="block lg:hidden">
                  {/* this is my frequently asked questions image */}
                  <div className="relative lg:hidden h-fit">
                    <Image
                      className="w-[350px]  lg:w-[40rem] rtl:-scale-x-100  z-0 left-0 rtl:right-0 rtl:-mr-[4.5rem] -ml-[4.5rem]"
                      src={Form}
                      alt="Illustration of people"
                    />
                    <h1 className="absolute font-bold text-white w-[10rem] z-0 lg:left-16 lg:text-xl lg:w-[15rem] top-[11rem] rtl:right-4 left-4">
                      {content?.faqs?.title}
                    </h1>
                  </div>
                </div>
                <div className="absolute lg:static w-full top-52" id="faq">
                  <Faq content={content?.faqs} lang={lang} ref={faqRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
