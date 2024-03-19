import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Header from '../components/header/header';
import HeroSection from '../components/hero-section/HeroSection';
import HelpPlaces from '../components/help-places/HelpPlaces';
import Testimonies from '../components/testimonies/Testimonies';
import AboutUs from '../components/about-us/AboutUs';
import Footer from '../components/footer/Footer';
import CookieConsent from '../components/banners/CookieConsent';
import FormLanding from '../../../public/icons/Vector (2).svg';
import FormPeople from '../../../public/icons/Vector4.svg';
import Image from 'next/image';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="overflow-x-hidden">
      <Header lang={lang} />
      <HeroSection content={page?.home} lang={lang} />
      <HelpPlaces content={page?.home} />
      <Testimonies content={page?.home} />
      {/* <AboutUs content={page?.home?.aboutUs} lang={lang} /> */}
      <Footer content={page?.home} lang={lang} />
      <CookieConsent
        cookieConsentTranslation={page?.cookiesConsent}
        lang={lang}
      />
    </div>
  );
}
