'use client';
import React from 'react';
import { Button } from '../button/Button';
import Link from 'next/link';
import Image from 'next/image';
import MedarLogo from '../../../../public/icons/medarLogo.svg';
import InterkulturLogo from '../../../../public/images/Download (1) 2.svg';
import MinisteriumLogo from '../../../../public/icons/ministeriumLogo.svg';
import InstaLogo from '../../../../public/images/Group 62.svg';
import FacebookLogo from '../../../../public/images/Vector.svg';
import CoachLogo from '../../../../public/icons/coachLogo.svg';
import CopyrightSection from './CopyrightSection';
import LogoFooter from '../../../../public/images/footerLogo.svg';
import { usePathname } from 'next/navigation';
import FirstSectionFooter from './first-section/FirstSectionFooter';

type FooterProps = {
  content: {
    sendButton: string;
    aboutMedar: string;
    helpCenter: string;
    impressum: string;
    publications: string;
    datenschutz: string;
    support: string;
    funded: string;
  };
  lang: string;
};

const Footer: React.FC<FooterProps> = ({ content, lang }) => {
  const pathname = usePathname();

  let path = pathname?.split('/')[2];
  return (
    <>
      {/* {} <FirstSectionFooter /> */}
      <footer className="w-full lg:mt-40">
        <div className="flex w-[12rem]  mx-auto  justify-center ">
          {path !== 'report' && (
            <Button
              className="text-center my-4 lg:hidden text-xs sm:text-base"
              variant="default"
              href="/report"
            >
              {content?.sendButton}
            </Button>
          )}
        </div>
        {/* <div className="hidden py-16 pl-2 lg:flex lg:items-center lg:justify-between">
          <div className="w-fit  h-24">
            <Image
              className="w-full h-full "
              src={InterkulturLogo}
              alt="Interkultur e.V logo"
            />
          </div>
          <div className="w-fit h-24  o">
            <Image
              className="w-full  h-full"
              src={CoachLogo}
              alt="Coach e.V logo"
            />
          </div>

          <div className="w-fit h-24  ">
            <Image
              className="w-full  h-full"
              src={MinisteriumLogo}
              alt="Ministerium Logo"
            />
          </div>
        </div> */}
        <div className="sm:flex hidden px-4 lg:mb-8  font-bold items-center my-4 text-black justify-between xl:h-[480px] xl:px-32 lg:px-20 xl:pr-[10rem] lg:pr-[7rem]">
          <div className="flex flex-col py-2">
            <Image
              className=" xl:w-[232px] lg:w-[90%] sm:w-[70%] xl:h-[157px] sm:h-[40%] shrink-0 object-contain"
              src={LogoFooter}
              alt="Footer logo"
            />
            <div className="flex mt-6 xl:pl-5">
              <Image
                className=" xl:w-16 xl:h-16 w-4/12 mr-3 h-[10%]
                "
                src={FacebookLogo}
                alt="Footer logo"
              />
              <Image
                className=" xl:w-16 xl:h-16 mr-3 w-4/12 h-[10%]"
                src={InstaLogo}
                alt="Footer logo"
              />
            </div>
          </div>
          <div className="flex flex-col py-2 xl:text-2xl lg:text-xl sm:text-sm">
            <h2 className="xl:text-2xl font-bold lg:py-2 py-1">
              Vorfall melden
            </h2>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              FAQ
            </Link>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Datenschutz
            </Link>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Impressum
            </Link>
          </div>
          <div className="flex flex-col py-2 xl:text-2xl lg:text-xl sm:text-sm">
            <h2 className=" font-bold lg:py-2 py-1">MEDAR NRW</h2>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Meldestellenverbung
            </Link>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Kooperationsnetzwerke
            </Link>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Verweisberatung
            </Link>
          </div>
          <div className="flex flex-col py-2 xl:text-2xl lg:text-xl sm:text-sm">
            <h2 className=" font-bold lg:py-2 py-1">Was ist AMR?</h2>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Glossar
            </Link>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Aktuelles
            </Link>
            <Link
              className="py-1 lg:py-2 xl:text-2xl lg:text-xl "
              href={`/${lang}/`}
            >
              Kontakt
            </Link>
          </div>
          {/* <div>{content?.impressum}</div> */}
        </div>
        {/* <div className="h-[1px] bg-white"></div> */}

        <div className=" sm:hidden     py-4 text-white">
          <div className="w-full flex justify-between border-b-2 border-white   font-bold px-4">
            <div className="flex flex-col py-2 text-[12px] font-bold">
              <Link className="py-1 lg:py-2 " href={`/${lang}/`}>
                {content?.aboutMedar}
              </Link>
              <Link className="py-1 lg:py-2  " href={`/${lang}/`}>
                {content?.publications}
              </Link>
            </div>
            <div className="flex flex-col py-2 text-[12px]">
              <Link className="py-1 lg:py-2  " href={`/${lang}/`}>
                {content?.aboutMedar}
              </Link>
              <Link className="py-1 lg:py-2  " href={`/${lang}/`}>
                {content?.publications}
              </Link>
            </div>

            <div className="flex flex-col py-2 text-[12px]">
              <Link className="py-1 lg:py-2  " href={`/${lang}/`}>
                Impressum
              </Link>
            </div>
          </div>

          <div className="flex items-center xl:px-32 lg:px-20 xl:pr-[10rem] lg:pr-[7rem] px-4">
            <Image className="w-24" src={LogoFooter} alt="Medar logo" />

            <div className="flex space-y-2 ml-8 rtl:mr-8 flex-col">
              <div className="lg:text-xl"></div>
              <div className="flex space-x-2">
                <Image
                  className="w-16"
                  src={InterkulturLogo}
                  alt="Interkultur e.V logo"
                />
                <Image className="w-24" src={CoachLogo} alt="Coach e.V logo" />
              </div>
              <div className="lg:text-xl"></div>
              <Image
                className="w-48"
                src={MinisteriumLogo}
                alt="Ministerium Logo"
              />
            </div>
          </div>
        </div>
      </footer>
      <CopyrightSection />
    </>
  );
};

export default Footer;
