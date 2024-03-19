import React from 'react';
import { CustomLink } from '../custom-link/CustomLink';
import Image from 'next/image';
import ImageAboutUs from '../../../../public/icons/peopleAboutUs.svg';

type AboutUsProps = {
  content: { title: string; description: string; learnMore: string };
  lang: string;
};
const AboutUs: React.FC<AboutUsProps> = ({ content, lang }) => {
  return (
    <div className="text-primaryColor mx-4 lg:mx-[10rem] pt-16 lg:pt-48 lg:px-0">
      <h1 className="font-bold lg:hidden text-xl lg:text-2xl my-2">
        {content?.title}
      </h1>
      <p className="max-w-[15rem] lg:hidden lg:max-w-[30rem] text-sm lg:text-xl">
        {content?.description}
      </p>
      <div className="w-fit ml-auto rtl:mr-auto rtl:ml-0 pr-8">
        <h1 className="font-bold hidden lg:block text-xl lg:text-4xl lg:mb-4 lg:text-right my-2">
          {content?.title}
        </h1>
        <p className="max-w-[15rem] hidden lg:block lg:max-w-[50rem] text-sm lg:text-2xl lg:text-right">
          {content?.description}
        </p>
        <div className="ml-auto lg:text-xl w-fit">
          <CustomLink link={`/${lang}/`}>{content?.learnMore}</CustomLink>
        </div>
      </div>
      <Image
        className="w-[10rem] lg:w-[30rem] rtl:-scale-x-100"
        src={ImageAboutUs}
        alt="People holding a phone"
      />
    </div>
  );
};

export default AboutUs;
