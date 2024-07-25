import AntiMuslimComponent from '@/app/components/anti-muslim/AntiMuslim';
import AntiMuslimDetailComponent from '@/app/components/anti-muslim/anti-muslim-detail/AntiMuslimDetail';
import CookieConsent from '@/app/components/banners/CookieConsent';
import Footer from '@/app/components/footer/Footer';
import MultiStepForm from '@/app/components/forms/multistep/MultiStepForm';
// import Header from '@/app/components/header/header';
import Header from '../../components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import VerweisberatungComponent from '@/app/components/verweisberatung/Verweisberatung';

export default async function Verweisberatung({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="overflow-x-hidden rtl:overflow-x-hidden">
      <Header lang={lang} />

      <div className=" bg-white py-3">
        <VerweisberatungComponent />
      </div>
      <Footer lang={lang} content={page?.home} />
    </div>
  );
}
