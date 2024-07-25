'use client';
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import ChatPerson from '../../../../public/icons/chatPerson.svg';
import form from '../../../../public/images/Group 52.svg';
import form2 from '../../../../public/images/Group 28.svg';
import verctor15 from '../../../../public/images/Vector (15).svg';
import verctor6 from '../../../../public/images/Vector (6).svg';
import verctor8 from '../../../../public/images/Vector (8).svg';
import verctor16 from '../../../../public/images/Vector (16).svg';
import ChatPersonWithoutForm from '../../../../public/images/PersonWithoutForm.svg';
import ChatBubble from './ChatBubble';
import FormRefferal from '../../../../public/icons/formReferral.svg';
import InputField2 from '../forms/text-field/InputField2';
import { Button } from '../button/Button';
import ItemSlide from '../caroussel/item-slide/ItemSlide';
import Carousel from '../caroussel/CarousselHome';

type TestimoniesProps = {
  content: { bubbleMessage: string };
};
  const reports = [
    {
      id: 1,

      //
    },
    {
      id: 2,
    },
    {
      id: 3,
    },

    {
      id: 4,
    },

    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];
const Testimonies: React.FC<TestimoniesProps> = ({ content }) => {
  const [step, setstep] = useState((1/reports.length)*100);
  const [totalRaw, setTotalRaw] = useState(0);
  const changeStep = (total: number, step: number) => {
    const value = (step / total) * 100;
    setstep(value)
  };
    const getTotal = (total: number) => {
     
      setstep(total);
    };
  return (
    <div className="sm:mb-8 relative h-full lg:w-full lg:my-24 px-4 lg:px-[10rem] mb-[10%] sm:mt-0 mt-[-70px]">
      {/* <Image
        className="absolute lg:hidden w-40 lg:w-[20rem] lg:-top-[14rem] -lg:left-64 rtl:-right-[4rem] -top-[8.4rem] rtl:-z-20 -z-10 -left-16"
        src={FormRefferal}
        alt="Form"
      /> */}
      {/* <div className="relative rtl:-scale-x-100">
        <div className="relative lg:ml-[16rem] rtl:mr-24 lg:rtl:mr-[400px] lg:mb-20">
          <ChatBubble message={content?.bubbleMessage} />
        </div>
        <Image
          className="pt-[6rem] lg:hidden lg:w-[40rem] lg:pt-[8rem] absolute -z-10 -right-[6rem] top-[4rem]"
          src={ChatPerson}
          alt="Person talking"
        />
        Chat person without form
        <Image
          className="pt-[6rem] lg:block hidden lg:w-[40rem] lg:pt-[4rem] absolute -z-10 -right-[6rem] top-[7rem]"
          src={ChatPersonWithoutForm}
          alt="Person talking"
        />
      </div> */}
      <div className="relative ">
        {/* <div className="absolute w-6/12 h-[80%] overflow-hidden flex justify-end">
          <ChatBubble message={content?.bubbleMessage} />
        </div> */}
        <div className="w-full">
          {/* <div className="flex justify-end mt-14 ">
           
            <Image
              className=" sm:mt-[30%] mt-[50%] w-6/12 z-50 "
              src={ChatPersonWithoutForm}
              alt="Person talking"
            />
          </div> */}
          {/* <ItemSlide content={content?.bubbleMessage} /> */}
          <Carousel content={content?.bubbleMessage} getStep={changeStep} />
          <div className="">
            <div className="w-full m-auto relative h-48">
              <ProgressBar percentage={step} />
              <Image
                className="absolute top-[-25%] right-[-8vw] object-contain sm:hidden block z-20"
                src={verctor15}
                alt="Person talking"
              />{' '}
              <Image
                className="absolute top-[-2%] right-[0] object-contain sm:hidden block z-20"
                src={verctor16}
                alt="Person talking"
              />{' '}
              <Image
                className="left-[-15rem] -top-[140px] absolute h-auto object-contain hidden sm:block z-20"
                src={verctor6}
                alt="Person talking"
              />{' '}
              <Image
                className="left-[-10rem] -top-[150px] absolute h-auto object-contain hidden sm:block z-20"
                src={verctor8}
                alt="Person talking"
              />
            </div>
          </div>
        </div>

        {/* <div className="w-[90%] m-auto z-10 2xl:mt-[0%] "> */}
        {/* <Image
            className="4xl:mt-[10%] 2xl:mt-[10%] lg:mt-[10%] mt-[30%] w-6/12 z-50"
            src={ChatPersonWithoutForm}
            alt="Person talking"
          /> */}

        {/* <Image
            className=" border object-contain md:block hidden  absolute"
            src={form}
            alt="Person talking"
          />{' '}
          <Image
            className="mt-[-27%] ml-[50%] object-contain sm:hidden block text-end"
            src={form2}
            alt="Person talking"
          /> */}
        {/* </div> */}
      </div>

      <div className="block sm:hidden ">
        <div>
          <h1 className="text-[#2F804A] font-semibold">
            Anmerkungen und Feedback
          </h1>
          <div>
            <p>
              Du hast Probleme mit unserem Meldeformular oder eine allgemeine
              Frage oder Anmerkung die Du mitteilen möchtest?
            </p>
            <p>
              Schreib’ uns gerne eine E-Mail über das untenstehende Formular und
              wir nehmen Deine Information auf.
            </p>
          </div>
        </div>
        <form action="">
          <div className="mt-5">
            <div className="grid grid-cols-2 items-center gap-x-2">
              <div className="mt-0 space-y-1">
                <InputField2 name="firstName" placeholder="Vorname*" />
                <InputField2 name="firstName" placeholder="Nachname*" />
                <InputField2 name="firstName" placeholder="Thema*" />
                <InputField2 name="firstName" placeholder="Email*" />
              </div>
              <div className="h-[100%]">
                <textarea
                  placeholder="Nachrict*"
                  className="appearance-none border rounded-lg w-full py-3 px-3 leading-tight border-gray-300  focus:outline-none focus:border-primaryColor focus:bg-white placeholder-primaryColor placeholder:text-sm h-[100%]"
                />
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <Button className="bg-[#DC6756] w-fit py-1 rounded-xl pl-2">Senden</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonies;
