'use client';
import React, { useState } from 'react';
import Accordion from '../accordion/Accordion';
import Image from 'next/image';
import FormVideoTopLeft from '../../../../public/icons/formVideoHilfecenter.svg';
import FormVideoBottom from '../../../../public/icons/bottomVideoFormHilfeCenter.svg';

type HeroSectionProps = {
  heroTranslation:{
    title:string;
  }
};

const HeroSection: React.FC<HeroSectionProps> = ({ heroTranslation }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = (toggle: boolean) => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className={`relative h-[3rem] ${
          toggle ? ' mb-[27rem]' : 'lg:mb-0'
        } lg:hidden`}
      >
        <Accordion
          handleToggle={() => handleToggle(toggle)}
          toggle={toggle}
          title={heroTranslation.title}
          content={
            <iframe
              className="w-full h-[25rem] lg:h-[35rem] mb-2"
              src="https://www.youtube.com/embed/J_Kb0wFQ65A"
              title="Wie melde ich ?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          }
        />
      </div>

      <div className="hidden relative mx-4 lg:mx-[10rem] lg:block">
        {/* Form */}
        <Image
          src={FormVideoTopLeft}
          className="absolute -left-48 -z-10 -top-16"
          alt="Form"
        />
        <h1 className="text-2xl text-primaryColor font-bold mb-4">
          {heroTranslation?.title}
        </h1>
        <div className="px-16">
          <iframe
            className="w-full h-[25rem] lg:h-[35rem] mb-2  border-secondaryColor border-2"
            src="https://www.youtube.com/embed/J_Kb0wFQ65A"
            title="Wie melde ich ?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* Form */}
          <Image
            className="absolute -right-24 -z-10 -bottom-32"
            src={FormVideoBottom}
            alt="Form"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
