'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';
import Image from 'next/image';
import LanguageIcon from '../../../../../public/icons/languageIcon.svg';
import { transformLanguageAbbrevation } from '@/utils/utils';
import { clearFormCookies } from '@/cookies/cookies';
import img from '../../../../../public/images/Vector (2).svg';
import img2 from '../../../../../public/images/Group 3.svg';

type LocaleSwitcherProps = {
  title: string;
};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ title }) => {
  const pathName = usePathname();
  const urlSplit=pathName.split('/')
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    // console.log("segments.join('/')", segments.join('/'));
    
    return segments.join('/');
  };

  const cancelReport = () => {
    clearFormCookies();
  };

  return (
    <>
      <div className="sm:flex hidden h-full  text-end">
        <div className="h-full bg-[#E6F0E9] flex justify-center items-center w-[15%] rounded-l-lg">
          <Image src={img2} alt="" className="h-8 w-10" />
        </div>
        <div className="h-full grid grid-cols-3 px-2 w-[70%]">
          {i18n.locales.map((locale) => {
            return (
              <div
                className={`flex justify-center items-center px-4 ${
                  urlSplit[1] == locale && 'bg-[#E6F0E9]'
                }`}
                key={locale}
                // onClick={()=>{}}
              >
                <a
                  href={redirectedPathName(locale)}
                  className="py-2"
                  onClick={() => cancelReport()}
                >
                  {transformLanguageAbbrevation(locale)}
                </a>
              </div>
            );
          })}
        </div>

        <div className="h-full bg-[#BD9D75] flex justify-center items-center w-[15%] rounded-r-lg">
          <Image src={img} alt="" className="h-7 w-6" />
        </div>
      </div>
      <ul className="flex border rounded-lg border-[#E6F0E9] items-center justify-between text-xs lg:text-xl gap-x-3 rtl:gap-x-0 sm:hidden">
        <div className="flex rtl:w-[2rem]  py-2 rounded-tl-lg rtl:rounded-tr-lg rtl:rounded-br-lg  rounded-bl-lg bg-gray-200 w-[1.5rem] lg:w-[2rem] items-center">
          <Image
            className="w-36 lg:w-64 ml-[0.3rem] mr-2 lg:mr-4 rtl:ml-2"
            src={LanguageIcon}
            alt="Language icon"
          />
          <div className="ml-2  rtl:mr-3">{title}</div>
        </div>
        <div
          className="px-2 flex justify-between lg:space-x-8
          space-x-2 rtl:space-x-1 rtl:items-center"
        >
          {i18n.locales.map((locale) => {
            return (
              <li className="rtl:flex rtl:pr-3" key={locale}>
                <a
                  href={redirectedPathName(locale)}
                  className="py-2"
                  onClick={() => cancelReport()}
                >
                  {transformLanguageAbbrevation(locale)}
                </a>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default LocaleSwitcher;
