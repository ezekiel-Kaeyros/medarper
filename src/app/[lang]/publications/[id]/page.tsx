import Footer from '@/app/components/footer/Footer';
import AboutHeader from '@/app/components/about-header/AboutHeader';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Link from 'next/link';
import SpeakAloudIcon from '../../../../../public/icons/readAloud.svg';
import PubImg1 from '../../../../../public/images/img_pub1.svg';
import PubImg2 from '../../../../../public/images/img_pub2.svg';
import PubImg3 from '../../../../../public/images/img_pub3.svg';
import PubImg4 from '../../../../../public/images/img_pub4.svg';
import Header from '../../about/components/header/header';
import CookieConsent from '@/app/components/banners/CookieConsent';
import { combinedArr } from '@/utils/utils';

export default async function themId({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) {
  const { page } = await getDictionary(lang);

  const data = [
    {
      img1: PubImg1,
    },
    {
      img1: PubImg2,
    },
    {
      img1: PubImg3,
    },
    {
      img1: PubImg4,
    },
  ];
  /* const usePathId = usePathname();
    const pathid = usePathId.split("/").pop(); */

  const combinedArray = combinedArr(data, page.puclicationDetails.data);

  const filterTheme = combinedArray?.filter(
    (oneTheme: { id: number }) => oneTheme.id === parseInt(`${id}`)
  );
  const {
    title,
    date,
    description1,
    subheader1,
    text1,
    text2,
    text3,
    img1,
    text4,
  } = filterTheme[0];
  return (
    <div className="overflow-x-hidden">
      <Header image={img1} lang={lang} />
      <div className="mx-4 lg:mx-[10rem] mt-4 lg:mt-16 ">
        <Image
          className="w-24 ml-auto my-4"
          src={SpeakAloudIcon}
          alt="Speak aloud"
          width={20}
          height={20}
        />

        {/* Desktop only */}

        <Image
          className="hidden lg:block w-24 lg:object-cover h-[28rem] my-8 lg:w-full"
          src={img1.src}
          alt="dynamic image"
          width={20}
          height={20}
        />
        {/* End desktop only section */}

        <div className="my-16">
          <h1 className="font-bold text-black text-2xl mb-2">{title}</h1>
          <h1 className="font-muted text-muted text-sm lg:text-xl mb-2">
            {date}
          </h1>
          <h1 className="font-muted text-muted text-sm lg:text-xl mb-6">
            {description1}
          </h1>
          <h1 className="font-bold text-black text-2xl mb-2">{subheader1}</h1>
          <p className="font-muted text-muted text-sm lg:text-xl mb-2">
            {text1}
          </p>
          <p className="font-muted text-muted text-sm lg:text-xl mb-2">
            {text2}
          </p>
          <p className="font-muted text-muted text-sm lg:text-xl mb-2">
            {text3}
          </p>
          <Image
            className="h-full w-24 lg:w-full lg:h-[20rem] lg:my-8 lg:object-cover rounded-lg"
            src={img1.src}
            alt="Map"
            width={20}
            height={20}
          />
          <p className="font-muted text-muted text-sm lg:text-xl mt-6">
            {text4}
          </p>
        </div>
      </div>
      <Footer content={page?.home} lang={lang}/>
      <CookieConsent
        cookieConsentTranslation={page?.cookiesConsent}
        lang={lang}
      />
    </div>
  );
}
