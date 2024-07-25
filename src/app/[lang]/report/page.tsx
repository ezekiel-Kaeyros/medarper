import CookieConsent from '@/app/components/banners/CookieConsent';
import Footer from '@/app/components/footer/Footer';
import MultiStepForm from '@/app/components/forms/multistep/MultiStepForm';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function report({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  console.log(lang, 'this is my language');
  return (
    <div className="overflow-x-hidden">
      <Header lang={lang} />
      <div className="mt-8 sm:mx-auto sm:mt-16 lg:mx-auto max-w-xl lg:max-w-full lg:mt-24 ">
        <MultiStepForm formTranslation={page?.melden} lang={lang} />
      </div>
      <Footer content={page?.home} lang={lang} />

      <CookieConsent
        cookieConsentTranslation={page?.cookiesConsent}
        lang={lang}
      />
    </div>
  );
}
