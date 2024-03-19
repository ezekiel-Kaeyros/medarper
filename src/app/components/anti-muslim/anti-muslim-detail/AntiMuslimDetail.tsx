'use client';
import img1 from '../../../../../public/images/Rectangle 247.svg';
import img2 from '../../../../../public/images/Rectangle 247 (4).svg';
import img3 from '../../../../../public/images/Rectangle 247 (1).svg';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import Link from 'next/link';
import AboutUsImage from '../../../../../public/images/aboutusImg.png';
import AboutImage from '../../../../public/images/Vector (6).svg';
import AboutImage2 from '../../../../public/images/Vector (8).svg';
import vec from '../../../../public/images/Vector (9).svg';
import vector10 from '../../../../../public/images/Vector (10).svg';
import CookieConsent from '@/app/components/banners/CookieConsent';
import Link from 'next/link';
import Logo from '../../../../../public/logo.svg';
import SpeakAloudIcon from '../../../../../public/icons/readAloud.svg';
import BackgroundCircle from '../../../../../public/icons/Vector (5).svg';
import backgroundTail6 from '../../../../../public/icons/Vector (6).svg';
// import Publication from './publication/Publication';

type TypePublication = {
  id?: string;
  img: any;
  date: string;
  text: string;
  title: string;
};

const Publications: TypePublication[] = [
  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 1',
    id: '1',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 2',
    id: '2',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 3',
    id: '3',
  },

  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 4',
    id: '4',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 5',
    id: '5',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 12',
    id: '12',
  },
  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 6',
    id: '6',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 7',
    id: '7',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 8',
    id: '8',
  },
  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 9',
    id: '9',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 10',
    id: '10',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 11',
    id: '11',
  },
];

const AntiMuslimDetailComponent = () => {
  const param = useParams();
  const data = { id: param ? param.id : '' };

  const publication = Publications.filter(
    (item) => item.id?.toString() === data.id.toString()
  );

  return (
    <div>
      <div className="relative h-[250px] sm:h-[300px] xl:h-[550px] w-full px-5 sm:px-0">
        <Image
          src={publication.length > 0 && publication[0].img}
          alt=""
          className="w-full h-full object-cover border-5 border-[#EAD3B5] sm:scale-y-[-1] sm:rotate-180 sm:ml-20 xl:ml-40 rtl:mr-40 object-center"
        />
        <Image
          src={BackgroundCircle}
          alt="bg-circle"
          className="hidden sm:block top-[200px] xl:top-[300px] absolute w-[25%] xl:w-[15%] z-[-1] rtl:scale-y-[-1] rtl:rotate-180"
        />
        <div className="top-[180px] absolute h-fit w-full flex justify-center sm:hidden">
          <div className="relative w-[200px]">
            <Image src={backgroundTail6} alt="backgoundtail6" className="" />
            <h1 className=" text-black font-bold text-xl sm:hidden block absolute top-10 left-5 rtl:left-14 w-[55%] text-center">
              {publication.length > 0 && publication[0].title}
            </h1>
          </div>
        </div>
        {/* <h1 className="absolute z-20 bottom-[10%] left-[15%] text-white font-bold text-3xl border-2">
          {publication.length > 0 && publication[0].title}
        </h1> */}
      </div>
      {/* <Image
        className="w-[61px] ml-auto sm:mt-0  sm:hidden mt-[118px]"
        src={SpeakAloudIcon}
        alt="Speak aloud"
      /> */}
      <div className="xl:px-40 px-5 mt-20">
        <h1 className=" text-black font-bold text-2xl sm:block hidden xl:text-3xl lg:text-2xl">
          {publication.length > 0 && publication[0].title}
        </h1>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation!
        </p>
        <h1 className=" font-bold lg:text-5xl sm:text-xl text-[22px]">
          Subheader
        </h1>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Proident. ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Excepteur sint occaecat cupidatat non proident. Excepteur sint
          occaecat. Proident. ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Excepteur sint occaecat cupidatat non proident. Excepteur
          sint occaecat
        </p>

        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation!
        </p>

        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Excepteur sint occaecat cupidatat non proident. ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
          non proident. cupidatat non proident. Excepteur sin.
        </p>

        <h1 className=" font-bold lg:text-5xl sm:text-xl text-[22px]">
          Subheader 2
        </h1>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Excepteur sint occaecat cupidatat non proident. ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
          non proident.
        </p>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation!
        </p>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation! <br />
          Excepteur sint occaecat cupidatat non proident. ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
          non proident. cupidatat non proident. Excepteur sin.
        </p>

        <div className="lg:px-40 px-5 w-full lg:h-[550px] h-[350px] lg:my-9 my-5">
          <Image
            src={img3}
            alt=""
            className="w-full h-full object-cover   z-10 "
          />
        </div>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation!
        </p>
        <p className="xl:text-3xl lg:text-2xl pr-4 lg:my-5 my-6">
          Excepteur sint occaecat cupidatat non proident. ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
          non proident.
        </p>

        <p className="xl:text-xl lg:text-lg text-sm pr-4 lg:my-5 my-6 text-[#2B8049]">
          {publication.length > 0 && publication[0].date}
        </p>
      </div>
    </div>
  );
};
export default AntiMuslimDetailComponent;
