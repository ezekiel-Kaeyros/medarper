import CookieConsent from '@/app/components/banners/CookieConsent';
import Faq from '@/app/components/faqPage/Faq';
import Footer from '@/app/components/footer/Footer';
import Formfaq from '@/app/components/forms/form-faq/FormFaq';
import MultiStepForm from '@/app/components/forms/multistep/MultiStepForm';
import Header from '@/app/components/header/header';
import HelpPlaces from '@/app/components/help-places/HelpPlaces';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function FaqPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="overflow-x-hidden rtl:overflow-x-hidden">
      <Header lang={lang} />

      <div className="my-5 sm:mb-0 mb-7">
        <Faq />
      </div>
      <div className="sm:px-0 px-5">
        <HelpPlaces content={page?.home} />
      </div>

      <div className="my-14 lg:px-40 px-5">
        <h1 className="text-[#2F804A] lg:text-[45px] sm:text-3xl text-xl font-bold mb-10">
          Anmerkungen und Feedback
        </h1>
        <p className="xl:text-3xl lg:text:-2xl pr-4 lg:mt-0 mt-6">
          Du hast Probleme mit unserem Meldeformular oder eine allgemeine Frage
          oder Anmerkung die Du mitteilen möchtest?
        </p>
        <p className="xl:text-3xl lg:text:-2xl pr-4  mt-6 mb-12">
          Schreib’ uns gerne eine E-Mail über das untenstehende Formular und wir
          nehmen Deine Information auf.
        </p>
        <Formfaq />
      </div>

      <Footer lang={lang} content={page?.home} />
    </div>
  );
}
