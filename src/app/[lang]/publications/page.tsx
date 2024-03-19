import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Link from 'next/link';
import Publication from '@/app/components/pub/Publication';
import PubImg1 from '../../../../public/images/img_pub1.svg';
import PubImg2 from '../../../../public/images/img_pub2.svg';
import PubImg3 from '../../../../public/images/img_pub3.svg';
import PubImg4 from '../../../../public/images/img_pub4.svg';
import PaginationButtons from './components/pagination-buttons/paginationButtons';
import CookieConsent from '@/app/components/banners/CookieConsent';
import { combinedArr } from '@/utils/utils';

export default async function publication({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  
  const data = [
    {
      imgPub: PubImg1,
    },
    {
      imgPub: PubImg2,
    },
    {
      imgPub: PubImg3,
    },
    {
      imgPub: PubImg4,
    },
  ];

  const combinedArray = combinedArr(data, page.publications.data)

  return (
    <div className="overflow-x-hidden rtl:overflow-x-hidden">
      <Header lang={lang} />
      <div className="px-2 rtl:-px-[-0.5rem] lg:my-6 pt-4 bg-gray-100 lg:px-[10rem] lg:pt-16 ">
        {combinedArray?.map(
          (theme: {
            id: number;
            title: string;
            date: string;
            description1: string;
            subheader1: string;
            imgPub: string;
          }) => (
            <Link key={theme?.id} href={`/publications/${theme?.id}`}>
              <Publication
                content={{
                  publicationElement: {
                    imgPub: theme?.imgPub,
                    date: theme?.date,
                    title: theme?.title,
                    filterPlace: theme?.description1,
                    description: theme?.subheader1,
                    key: theme.id
                  },
                }}
              />
            </Link>
          )
        )}
        {/* Pagination */}
        <div className="mx-auto pt-4 pb-8 w-fit">
          <PaginationButtons />
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
