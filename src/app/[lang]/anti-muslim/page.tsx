import AntiMuslimComponent from '@/app/components/anti-muslim/AntiMuslim';
import CookieConsent from '@/app/components/banners/CookieConsent';
import Footer from '@/app/components/footer/Footer';
import MultiStepForm from '@/app/components/forms/multistep/MultiStepForm';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function AntiMuslim({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="overflow-x-hidden rtl:overflow-x-hidden ">
      <Header lang={lang} />

      <div className="xl:px-40 px-5 bg-colorPage sm:mt-0 mt-3">
        <AntiMuslimComponent />
      </div>
      <Footer lang={lang} content={page?.home} />
    </div>
  );
}
