'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import LocaleSwitcher from '../locale-switcher/locale-switcher';
import Image from 'next/image';
import Logo from '../../../../../public/logo.svg';
import TalkingPerson from '../../../../../public/icons/talkingIcon.svg';
import HeaderForm from '../../../../../public/images/NavBarForm.svg';
import DrawerImg from '../../../../../public/images/drawerBg.svg';
import img from '../../../../../public/images/Vector (2).svg';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import CookieConsent from '../../banners/CookieConsent';
import { Button } from '../../button/Button';
import { usePathname } from 'next/navigation';

type NavBarProps = {
  navigation: {
    home: string;
    menu: string;
    logoDescription: string;
    language: string;
    about: {
      title: string;
      subtitles: { who: string; what: string; contact: string };
    };
    networks: {
      title: string;
      subtitles: {
        promoters: string;
        publications: string;
        reportPortals: string;
      };
    };
    partners: string;
    glossary: string;
    datenschutz: string;
    impressum: string;
    faq: string;
    anti: string;
    btn: string;
  };
  lang: string;
  bgPath?: string;
};

const NavBar: React.FC<NavBarProps> = ({ navigation, lang }) => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const pathname = usePathname();
  const urlSpli = pathname.split('/');
  let domNode = useClickOutside(() => {
    setNavbar(false);
    setToggle1(false);
    setToggle2(false);
  });

  return (
    <>
      {/* <Image
        className="absolute  z-0 hidden lg:block lg:right-[-30px] lg:top-[-40px]"
        src={HeaderForm}
        alt="Form"
      /> */}
      <nav ref={domNode} className="w-screen  relative bg-white sm:pb-0 ">
        <div className="sm:flex hidden justify-between xl:px-40 lg:px-20 sm:px-5 lg:mt-5">
          <div className="flex justify-center items-center">
            <div className="z-50">
              <Link className=" w-full ltr:scale-x-100 z-50" href="/">
                <Image
                  className=" lg:w-[20rem] z-50"
                  src={Logo}
                  alt="Logo medar object-contain"
                />
              </Link>

              <p className="lg:text-2xl">
                {navigation?.logoDescription?.split('|')[0]}|
              </p>
              <p className="lg:text-2xl md:text-base text-sm">
                {navigation?.logoDescription?.split('|')[1]}
              </p>
            </div>
          </div>
          <div className="xl:w-4/12 lg:w-5/12 sm:w-7/12 rounded-xl border lg:h-44 h-32">
            <LocaleSwitcher title={navigation?.language} />
          </div>
        </div>

        <div className="w-screen sm:flex hidden h-24 bg-[#BD9D75] mt-8 shrink-0 xl:px-40 lg:px-20 px-5 justify-between items-center py-1 text-white font-bold xl:text-2xl lg:text-lg">
          <Link href={`/${lang}/report`}>
            {' '}
            <Button className={`h-full py-5 bg-[#E3775F] rounded-lg`}>
              <span
                className={`${
                  pathname.includes('/' + lang + '/report') && 'text-[#2F804A]'
                }`}
              >
                {' '}
                {navigation.btn}
              </span>
            </Button>
          </Link>

          <li className="relative [&>*]:hover:flex list-none">
            <Link href={`/${lang}/anti-muslim`}>
              <span
                className={`${
                  pathname.includes('/' + lang + '/anti-muslim') &&
                  'text-[#2F804A]'
                }`}
              >
                {navigation.anti}
              </span>
            </Link>
            <ul className="hidden bg-[#BD9D75] shadow-lg py-3 px-6 text-sm left-0 flex-col  absolute top-8 z-20 pt-4 text-white w-[18rem]">
              <Link
                href={`/${lang}/`}
                className="py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md"
              >
                Was ist AMR?
              </Link>
              <Link
                className="py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md"
                href={`/${lang}/`}
              >
                Glossar
              </Link>
              <Link
                className="py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md"
                href={`/${lang}/`}
              >
                Aktuelles
              </Link>
            </ul>
          </li>

          <li className="relative [&>*]:hover:flex list-none">
            <Link href={`/${lang}/about`}>
              <span
                className={`${
                  (pathname.includes('/' + lang + '/about') &&
                    'text-[#2F804A]') ||
                  (pathname.includes('/' + lang + '/verweisberatung') &&
                    'text-[#2F804A]')
                }`}
              >
                {navigation.about.title}
              </span>
            </Link>
            <ul className="hidden bg-[#BD9D75] shadow-lg py-3 px-6 text-sm left-0 flex-col  absolute top-8 z-20 pt-4 text-white w-[18rem]">
              <Link
                href={`/${lang}/`}
                className="py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md"
              >
                MEDAR NRW
              </Link>
              <Link
                className="py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md"
                href={`/${lang}/`}
              >
                Meldestellenvebund
              </Link>
              <Link
                className="py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md"
                href={`/${lang}/`}
              >
                Kooperation/Netzwerke
              </Link>
              <Link
                className={`py-2 pl-2 hover:font-bold hover:bg-[#dbbb94] hover:rounded-md ${
                  pathname.includes('/' + lang + '/verweisberatung') &&
                  'text-[#2F804A] bg-[#dbbb94] rounded-md'
                }`}
                href={`/${lang}/verweisberatung`}
              >
                Verweisberatung
              </Link>
            </ul>
          </li>
          <Link href={`/${lang}/faq`}>
            {' '}
            <span
              className={`${
                pathname.includes('/' + lang + '/faq') && 'text-[#2F804A]'
              }`}
            >
              {' '}
              {navigation.faq}
            </span>
          </Link>
        </div>
        <div className="ltr:justify-between px-4 mx-auto sm:w-full sm:justify-between sm:hidden sm:px-8">
          <div className="xl:pl-32 rtl:xl:pr-32">
            <div className="flex  items-center w-full justify-between py-3 md:py-2 md:block">
              <div>
                <Link className=" w-full ltr:scale-x-100" href="/">
                  <Image
                    className="md:pt-16 lg:w-[25rem] "
                    src={Logo}
                    alt="Logo medar"
                  />
                </Link>
              </div>

              <div className="sm:hidden flex items-center">
                <Image
                  className="w-12 rtl:-scale-x-100"
                  src={TalkingPerson}
                  alt="Talking person icon"
                />
                <button
                  className="p-2 z-50 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      viewBox="0 0 20 20"
                      fill="#2B8049"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="32"
                      height="28"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.6721 0H0V2.84922H31.6721V0Z"
                        fill="#2B8049"
                      />
                      <path
                        d="M31.6721 12.3934H0V15.2426H31.6721V12.3934Z"
                        fill="#2B8049"
                      />
                      <path
                        d="M31.6721 25.1508H0V28H31.6721V25.1508Z"
                        fill="#2B8049"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="text-sm md:max-w-sm lg:text-xl lg:max-w-md z-50">
              <div>{navigation?.logoDescription?.split('|')[0]}|</div>
              <div>{navigation?.logoDescription?.split('|')[1]}</div>
            </div>
            <div className="my-4 sm:hidden">
              {/* {!pathname.includes('/' + lang + '/') && ( */}
              <LocaleSwitcher title={navigation?.language} />
              {/* )} */}
            </div>
          </div>

          <div
            className={`flex-1 h-screen  bg-neutral-200 w-2/3 top-0 absolute p-8  z-30 opacity-100 right-0  justify-self-center pb-3  md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <Image
              src={DrawerImg}
              className="absolute sm:hidden -z-10 top-0 bottom-0 right-0 w-full left-0"
              alt="Background color of drawer"
            />
            {/* Mobile navigation */}
            <nav className="container sm:hidden  text-white z-80 ">
              <h1 className="font-bold mb-8 uppercase">{navigation?.menu}</h1>
              <ul className="gap-x-8">
                <li>
                  <div className="font-bold text-primaryColor mb-2 text-xl">
                    {navigation?.home}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-xl hover:border-b-[1px] border-primaryColor w-16">
                      <div className="w-24">{navigation?.about?.title}</div>
                    </div>
                    <div className="ml-3 flex flex-col">
                      <Link className="py-1" href={`/${lang}/about`}>
                        {navigation?.about?.subtitles?.who}
                      </Link>
                      <Link className="py-1" href={`/${lang}`}>
                        {navigation?.about?.subtitles?.what}
                      </Link>
                      <Link className="py-1" href={`/${lang}`}>
                        {navigation?.about?.subtitles?.contact}
                      </Link>
                      <Link className="py-1" href={`/${lang}/verweisberatung/`}>
                        Verweisberatung
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="my-2">
                  <div className="flex flex-col">
                    <div className="font-bold text-xl hover:border-b-[1px] border-primaryColor w-16">
                      {navigation?.networks?.title}
                    </div>
                    <div className="ml-3 flex flex-col">
                      <Link className="py-1" href={`/${lang}`}>
                        {navigation?.networks?.subtitles?.promoters}
                      </Link>
                      <Link className="py-1" href={`/${lang}/publications`}>
                        {navigation?.networks?.subtitles?.publications}
                      </Link>
                      <Link className="py-1" href={`/${lang}`}>
                        {navigation?.networks?.subtitles?.reportPortals}
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col my-1">
                    <div className="font-bold text-xl hover:border-b-[1px] border-primaryColor w-16">
                      {navigation?.datenschutz}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col my-1">
                    <div className="font-bold text-xl hover:border-b-[1px] border-primaryColor w-16">
                      {navigation?.datenschutz}
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden w-full sm:flex md:mx-[10rem] md:mt-16">
            {/* <div className="w-auto"> */}
            <LocaleSwitcher title={navigation?.language} />
            {/* </div> */}
            {/* <Image
            className="w-12 ml-4 rtl:-scale-x-100"
            src={TalkingPerson}
            alt="Talking person icon"
          /> */}
          </div>
          {/* Desktop navigation
        <div className="rtl:lg:max-w-md rtl:lg:mr-auto rtl:lg:left-32 rtl:lg:ml-8 gap-x-4 md:flex md:items-center md:justify-between md:pr-8 top-4 hidden"></div>
        <ul className="lg:text-2xl mf:flex lg:text-primaryColor lg:h-fit rtl:lg:ml-32 rtl:lg:mr-auto  rounded-md px-8 mt-6 w-full hidden md:flex md:max-w-3xl md:mr-0  lg:mr-32 xl:mr-32 items-center  justify-between">
          Form
          <Image
            className="absolute z-0 hidden lg:block right-0"
            src={HeaderForm}
            alt="Form"
          />
          End form

          <li className="w-fit ">
            <div
              ref={domNode}
              className="flex [&>*]:hover:flex relative flex-col"
            >
              <div
                className={`cursor-pointer text-[17px] xl:text-2xl hover:border-b-[1px]
                 hover:border-primaryColor  w-fit `}
              >
                <div className="w-fit">{navigation?.about?.title}</div>
              </div>
              About us subsection

              <div className="hidden ml-3 z-10 lg:text-sm -left-4 absolute w-48 rounded-md p-4 gap-y-1 bg-white shadow-lg top-8  flex-col">
                <Link className="py-1 hover:opacity-80" href={`/${lang}/about`}>
                  {navigation?.about?.subtitles?.who}
                </Link>
                <Link className="py-1 hover:opacity-80" href={`/${lang}`}>
                  {navigation?.about?.subtitles?.what}
                </Link>
                <Link className="py-1 hover:opacity-80" href={`/${lang}`}>
                  {navigation?.about?.subtitles?.contact}
                </Link>
              </div>
            </div>
          </li>
          <li className="relative w-fit z-10">
            <div className="flex flex-col my-1 ">
              <Link
                href={`/${lang}/publications`}
                className="text-[17px] xl:text-2xl hover:border-b-[1px] border-primaryColor"
              >
                {navigation?.networks.subtitles?.publications}
              </Link>
            </div>
          </li>
          <li className="my-2 w-fit pl-4">
            <div ref={domNode} className="flex relative flex-col">
              <div
                onClick={() => setToggle2(!toggle2)}
                className={`cursor-pointer text-[17px] xl:text-2xl hover:border-b-[1px] ${
                  toggle2 && 'border-primaryColor border-b-[1px]'
                } `}
              >
                {navigation?.networks?.title}
              </div>

              {toggle2 && (
                <div
                  onMouseLeave={() => setToggle2(false)}
                  className="ml-3 z-10 lg:text-sm -left-4 absolute w-48 rounded-md p-4 gap-y-1 bg-white shadow-lg top-8 flex flex-col"
                >
                  <Link className="py-1 hover:opacity-80" href={`/${lang}`}>
                    {navigation?.networks?.subtitles?.promoters}
                  </Link>
                  <Link
                    className="py-1 hover:opacity-80"
                    href={`/${lang}/publications`}
                  >
                    {navigation?.networks?.subtitles?.publications}
                  </Link>
                  <Link className="py-1 hover:opacity-80" href={`/${lang}`}>
                    {navigation?.networks?.subtitles?.reportPortals}
                  </Link>
                </div>
              )}
            </div>
          </li>

          <li className="relative w-fit z-10">
            <div className="flex flex-col my-1">
              <Link
                href={`/${lang}`}
                className="text-[17px] xl:text-2xl hover:border-b-[1px] border-primaryColor"
              >
                {navigation?.datenschutz}
              </Link>
            </div>
          </li>
        </ul> */}
        </div>
        {/* Desktop only locale switcher */}
        {/* <div className="flex w-full sm:hidden md:mx-[10rem] md:mt-16">
        <div className="w-auto">
          <LocaleSwitcher title={navigation?.language} />
        </div>
        <Image
          className="w-12 ml-4 rtl:-scale-x-100"
          src={TalkingPerson}
          alt="Talking person icon"
        />
      </div> */}
      </nav>
    </>
  );
};

export default NavBar;
