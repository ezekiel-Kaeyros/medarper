import React from 'react';
import coach from '../../../../public/images/Logo Coach_mit Untertitel neu druck transparent  1.svg';
import coach2 from '../../../../public/images/Group 61 (1).svg';
import coach3 from '../../../../public/images/Vector (1).svg';
import dina from '../../../../public/images/logo_dina (1).svg';
import miq from '../../../../public/images/g8.svg';
import mira from '../../../../public/images/Group 60.svg';
import Image from 'next/image';

const CopyrightSection = () => {
  return (
    <>
      <div className="xl:h-[480px] py-5  sm:block hidden xl:px-32 lg:px-20 xl:pr-[10rem] lg:pr-[7rem]">
        <div className="flex justify-between px-4 pt-5">
          <div className='lg:w-6/12 w-8/12'>
            <h2 className="text-[#2F804A] xl:text-3xl font-bold">
              Projektträger:innen:
            </h2>

            <div className="flex mt-8">
              <Image
                src={coach2}
                alt=""
                className="w-[45%]  shrink-0 xl:mr-8 lg:mr-6 mr-5 object-contain 2xl:w-[45%]"
              />
              <Image
                src={coach}
                alt=""
                className="w-[40%]  shrink-0 object-contain 2xl:w-[45%]"
              />
            </div>
          </div>

          <div className='w-4/12'>
            <h2 className="text-[#2F804A] xl:text-3xl font-bold">
              Gefördert durch:
            </h2>
            <Image
              src={coach3}
              alt=""
              className="w-full  shrink-0 mt-8 object-cover 2xl:w-[90%]"
            />
          </div>
        </div>

        <div className="mt-12 px-4">
          <h2 className="text-[#2F804A] xl:text-3xl font-bold">
            Kooperationspartner:innen:
          </h2>

          <div className="flex mt-8">
            <Image
              src={dina}
              alt=""
              className="xl:w-[320px] sm:w-3/12 lg:h-[97px] h-[87px] shrink-0 xl:mr-0 mr-4 object-contain 2xl:w-3/12"
            />
            <Image
              src={miq}
              alt=""
              className="xl:w-[346.3px] sm:w-3/12 lg:h-[61px] h-[70px]  shrink-0 xl:mr-10 mr-4 object-contain 2xl:w-3/12"
            />
            <Image
              src={mira}
              alt=""
              className="xl:w-[300.69px] sm:w-3/12 lg:h-[91.06px] h-[80px] shrink-0 object-contain 2xl:w-3/12"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:text-2xl sm:text-base text-xs flex justify-center py-3 bg-[#D9D9D9] text-[#696969] font-bold xl:px-32 lg:px-20 xl:pr-[10rem] lg:pr-[7rem]">
        <span>&copy;Copyright 2023 - Interkultur e.V</span>
      </div>
    </>
  );
};

export default CopyrightSection;
