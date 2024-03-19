import HelpQuestion from '@/app/components/faq/HelpQuestion';
import Footer from '@/app/components/footer/Footer';
import EmailField from '@/app/components/forms/email-field/EmailField';
import InputField from '@/app/components/forms/text-field/InputField';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import TextArea from '@/app/components/forms/text-area/TextArea';
import { Button } from '@/app/components/button/Button';
import HeroSection2 from '@/app/components/hero-section2/HeroSection2';
import SearchBar from './component/search-bar/SearchBar';
import ContactForm from './component/contact-form/ContactForm';
import Faqs from './component/faqs/Faqs';
import HelpPlaces from '@/app/components/help-places/HelpPlaces';
import CookieConsent from '@/app/components/banners/CookieConsent';

export default async function helpcenter({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="overflow-x-hidden">
      <Header lang={lang} />
      <div className="lg:mt-16 ">
        <h1 className="mx-4 lg:mx-[10rem] font-bold text-black text-3xl mb-6 lg:text-primaryColor lg:text-5xl">
          {page.helpCenter.title}
        </h1>
        <SearchBar searchBarTranslation={page.helpCenter.search} />
        <HeroSection2 heroTranslation={page.helpCenter.hero}/>
        <p className="mt-6 text-xl mx-4 lg:mx-[10rem]">
          {page.helpCenter.desc1}
        </p>
        {/* Faqs section */}
        <div className="mx-4 lg:mx-[10rem]">
          <Faqs faqsTranslation={page.helpCenter.faqs}/>
        </div>

        {/* Maps */}
        <div className="py-16">
          <HelpPlaces content={page?.home} />
        </div>

        <div className="mx-4 lg:mx-[10rem]">
          <h1 className="font-bold text-black text-2xl mb-4 mt-6">
            {page.helpCenter.title1}
          </h1>
          <p>
            {page.helpCenter.desc2}
          </p>
          <br />
          <p>
          {page.helpCenter.desc3}
          </p>
        </div>
        {/* Contact form section */}
        <div className="mx-4 lg:mx-[10rem]">
          <ContactForm formTranslation={page.helpCenter.form} />
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
