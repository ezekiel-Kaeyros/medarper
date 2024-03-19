'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import LocaleSwitcher from '../locale-switcher/locale-switcher';
import Image from 'next/image';
import Logo from '../../../../../public/logo.svg';
import TalkingPerson from '../../../../../public/icons/talkingIcon.svg';
import DrawerImg from '../../../../../public/images/drawerBg.svg';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import bgPath from '../../../../../public/images/bg_about.svg';

type NavBarProps = {
  navigation: {
    bgPath?: string
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
  };
  lang: string;
};

const NavBar: React.FC<NavBarProps> = ({ navigation, lang }) => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  let domNode = useClickOutside(() => {
    setNavbar(false);
    setToggle1(false);
    setToggle2(false);
  });

  return (
    <>
      <Image
        src={bgPath}
        className={` object-cover absolute top-0 left-0 right-0 w-full -z-10 md:relative md:object-none`}
        alt="Hero Image"
      />
      <div className="flex md:mx-[250px] justify-center relative pt-0 md:pt-0  md:absolute md:top-48 z-10 mx-0   md:mx-8 text-white flex-col">
        <nav ref={domNode} className="w-full relative ">
          <div className="ltr:justify-between px-4 mx-auto md:w-full md:items-center md:flex md:px-8">
            <div className="md:pl-32 rtl:md:pr-32">
              <div className="flex  items-center w-full justify-between py-3 md:py-2 md:block">
                <Link className=" w-full ltr:scale-x-100" href="/">
                  <Image src={Logo} alt="Logo medar" />
                </Link>
                <div className="md:hidden flex items-center">
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
                        <path d="M31.6721 0H0V2.84922H31.6721V0Z" fill="#2B8049" />
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
              <div className="text-sm md:max-w-sm">
                {navigation?.logoDescription}
              </div>
              <div className="my-1 md:hidden">
                <LocaleSwitcher title={navigation?.language} />
              </div>
            </div>

            <div
              className={`flex-1 h-screen  bg-neutral-200 w-2/3 top-0 absolute p-8  z-30 opacity-100 right-0  justify-self-center pb-3  md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <Image
                src={DrawerImg}
                className="absolute md:hidden -z-10 top-0 bottom-0 right-0 w-full left-0"
                alt="Background color of drawer"
              />
              {/* Mobile navigation */}
              <nav className="container md:hidden  text-white z-50 ">
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
                        {navigation?.partners}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col my-1">
                      <div className="font-bold text-xl hover:border-b-[1px] border-primaryColor w-16">
                        {navigation?.glossary}
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
                        {navigation?.impressum}
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Desktop navigation */}
            <div className="absolute rtl:lg:max-w-md rtl:lg:mr-auto rtl:lg:left-32 rtl:lg:ml-8 gap-x-4 md:flex md:items-center md:justify-between md:right- lg:right-32 md:pr-8 xl:right-32 top-4 hidden">
              <Image
                className="w-12 rtl:-scale-x-100"
                src={TalkingPerson}
                alt="Talking person icon"
              />
              <div className="w-[26rem]">
                <LocaleSwitcher title={navigation?.language} />
              </div>
            </div>
            <ul className="gap-x-4 rtl:lg:ml-32 rtl:lg:mr-auto shadow-sm rounded-md px-8 mt-[8rem] w-full hidden md:flex md:max-w-lg md:mr-0  lg:mr-32 xl:mr-32 items-center  justify-between">
              <div className=" text-primaryColor  text-xl">{navigation?.home}</div>
              <li>
                <div ref={domNode} className="flex relative flex-col">
                  <div
                    className={`cursor-pointer text-xl hover:border-b-[1px] ${toggle1 && 'border-primaryColor border-b-[1px]'
                      }  w-16`}
                  >
                    <div onClick={() => setToggle1(!toggle1)} className="w-24">
                      {navigation?.about?.title}
                    </div>
                  </div>

                  {toggle1 && (
                    <div className="ml-3 z-10 -left-4 absolute w-48 rounded-md p-4 gap-y-1 bg-white shadow-lg top-8 flex flex-col">
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
                  )}
                </div>
              </li>
              <li className="my-2">
                <div ref={domNode} className="flex relative flex-col">
                  <div
                    onClick={() => setToggle2(!toggle2)}
                    className={`cursor-pointer text-xl hover:border-b-[1px] ${toggle1 && 'border-primaryColor border-b-[1px]'
                      }  w-16`}
                  >
                    {navigation?.networks?.title}
                  </div>

                  {toggle2 && (
                    <div className="ml-3 z-10 -left-4 absolute w-48 rounded-md p-4 gap-y-1 bg-white shadow-lg top-8 flex flex-col">
                      <Link className="py-1 hover:opacity-80" href={`/${lang}`}>
                        {navigation?.networks?.subtitles?.promoters}
                      </Link>
                      <Link className="py-1 hover:opacity-80" href={`/${lang}/publications`}>
                        {navigation?.networks?.subtitles?.publications}
                      </Link>
                      <Link className="py-1 hover:opacity-80" href={`/${lang}`}>
                        {navigation?.networks?.subtitles?.reportPortals}
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="flex flex-col my-1">
                  <Link
                    href="/ "
                    className="text-xl hover:border-b-[1px] border-primaryColor w-16"
                  >
                    {navigation?.partners}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>

  );
};

export default NavBar;
