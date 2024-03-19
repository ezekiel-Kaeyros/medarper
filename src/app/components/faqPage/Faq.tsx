'use client';
import Image from 'next/image';
import search from '../../../../public/images/Vector (11).svg';
import FaqItem from '../faq/FaqItem';
import { useState } from 'react';
import Accordion from '../accordion/Accordion';
import { CustomLink } from '../custom-link/CustomLink';
import bgTailVector from '../../../../public/icons/tailvector.svg';
import bgCircle from '../../../../public/icons/bgCircle.svg';
const faq = [
  { title: 'Wer kann melden?' },
  { title: 'Was kann gemeldet werden?' },
  { title: 'Ich brauche akut Hilfe und Beratung. Was kann ich tun?' },
  { title: 'Was ist antimuslimischer Rassismus?' },
  {
    title:
      'Warum dürfen Diskriminierungsfälle unabhängig von der Strafbarkeit oder unabhängig vom Strafrecht" gemeldet werden?',
  },

  { title: 'Werden Täter*innen bei der Polizei angezeigt?' },
  { title: 'Wie aussagefähig sind Eure Statistiken?' },
  { title: 'Wo finde ich Beratung gegen Rassismus/Queerfeindlichkeit?' },
  { title: 'Kann ich Videos oder Tonaufnahmen schicken?' },
  { title: 'Werde ich benachteiligt, wenn ich etwas melde?' },
  { title: 'Warum sollte ich überhaupt etwas melden?' },
  { title: 'Kann ich persönlich vorbeikommen und/oder telefonisch melden?' },
];
const Faq = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleLarge, setToggleLarge] = useState<boolean>(false);
  const [isAll, setTisAll] = useState<boolean>(false);

  const handleToggle = (toggle: boolean) => {
    setToggle(!toggle);
  };
  return (
    <div className="lg:py-9 sm:py-5 py-1">
      <div className="sm:relative">
        <div className="absolute -z-10 w-full h-full sm:flex flex-col justify-between hidden">
          <div>
            <Image
              src={bgTailVector}
              alt="vector"
              className="sm:w-[30%] lg:w-[35%] -ml-10"
            />
          </div>
          <div>
            <Image
              src={bgCircle}
              alt="vector"
              className="sm:w-[30%] lg:w-[30%] float-right"
            />
          </div>
        </div>

        <div className="lg:px-40 px-5">
          <h1 className="xl:text-[70px] lg:text-4xl text-2xl text-[#2F804A] font-bold lg:mb-9 mb-5 sm:block hidden">
            Hilfecenter
          </h1>
          {/* <h1 className="sm:hidden font-bold text-[22px]">Hilfecenter</h1> */}
          <div className="relative w-full  md:h-14 h-[30px] border rounded-xl lg:mt-9 mt-5 sm:mb-0 mb-4">
            <input
              type="text"
              className="w-full h-full rounded-xl lg:pl-[8%] pl-[12%] lg:text-2xl sm:text-base text-[10px] text-[#4F4949] font-[300]"
              placeholder="Hier Stichwort eingeben z.B. Datenschutz oder Beratung"
            />
            <div className="absolute left-0 top-0 bg-colorPage lg:w-[6%] w-[10%] h-full"></div>
            <Image
              src={search}
              alt=""
              className="h-[80%] top-[10%] absolute lg:w-[2%] lg:left-[2%] w-[5%] left-[2.5%]"
            />
          </div>
          <h1 className="text-[#2F804A] lg:text-[45px] sm:text-3xl text-xl font-bold  lg:my-9 sm:my-5 sm:block hidden">
            {/* Anmerkungen und Feedback */}
            Wie melde ich
          </h1>
          <div className="  hidden sm:block w-11/12 m-auto lg:mb-9 sm:mb-5">
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
              className="w-full h-[25rem] lg:h-[634.96px] mb-2 border-[5px] border-[#EAD3B5]"
              src="https://www.youtube.com/embed/J_Kb0wFQ65A"
              title="What is Antiracism?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full m-auto sm:hidden">
            <Accordion
              handleToggle={() => handleToggle(toggle)}
              toggle={toggle}
              title={'content?.howTo'}
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
            />
          </div>
          <p className="xl:text-3xl lg:text:-2xl pr-4 lg:mt-0 mt-6">
            Excepteur sint occaecat cupidatat non proident. ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>

      <div className="lg:px-40 px-5">
        <div className="my-10 sm:block hidden">
          {faq.map((item, index) => (
            <FaqItem
              title={item.title}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi."
              key={index}
            />
          ))}
        </div>
        <div className="lg:my-10 my-5 sm:hidden ">
          {faq.map((item, index) => {
            if (!isAll) {
              if (index < 8) {
                return (
                  <FaqItem
                    title={item.title}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi."
                    key={index}
                  />
                );
              }
            } else {
              return (
                <FaqItem
                  title={item.title}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi."
                  key={index}
                />
              );
            }
          })}

          <div
            onClick={() => {
              setTisAll((isAll) => !isAll);
            }}
          >
            <CustomLink link={``}>{'alle Antworten lesen'}</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
