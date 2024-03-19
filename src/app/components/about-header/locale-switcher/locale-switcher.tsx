'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';
import Image from 'next/image';
import LanguageIcon from '../../../../../public/icons/languageIcon.svg';
import { transformLanguageAbbrevation } from '@/utils/utils';

type LocaleSwitcherProps = {
  title: string;
};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ title }) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className="flex border rounded-lg border-[#E6F0E9] items-center justify-between text-xs gap-x-3 rtl:gap-x-0">
      <div className="flex rtl:w-[2rem]  py-2 rounded-tl-lg rtl:rounded-tr-lg rtl:rounded-br-lg  rounded-bl-lg bg-gray-200 w-[1.5rem] items-center">
        <Image
          className="w-36 ml-[0.3rem] mr-2 rtl:ml-2"
          src={LanguageIcon}
          alt="Language icon"
        />
        <div className="ml-2  rtl:mr-3">{title}</div>
      </div>
      <div
        className="px-2 flex justify-between
    space-x-4 rtl:space-x-1 rtl:items-center"
      >
        {i18n.locales.map((locale) => {
          return (
            <li className="rtl:flex rtl:pr-3" key={locale}>
              <Link href={redirectedPathName(locale)} className="py-2">
                {transformLanguageAbbrevation(locale)}
              </Link>
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default LocaleSwitcher;
