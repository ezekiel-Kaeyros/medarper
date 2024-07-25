'use client';
import img1 from '../../../../public/images/Rectangle 247.svg';
import img2 from '../../../../public/images/Rectangle 247 (4).svg';
import img3 from '../../../../public/images/Rectangle 247 (1).svg';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import Link from 'next/link';
import AboutUsImage from '../../../../public/images/aboutusImg.png';
import AboutImage from '../../../../public/images/Vector (6).svg';
import AboutImage2 from '../../../../public/images/Vector (8).svg';
import vec from '../../../../public/images/Vector (9).svg';
import vector10 from '../../../../public/images/Vector (10).svg';
import CookieConsent from '@/app/components/banners/CookieConsent';
import Link from 'next/link';
import Logo from '../../../../public/logo.svg';
import SpeakAloudIcon from '../../../../public/icons/readAloud.svg';
import BackgroundCircle from '../../../../public/icons/Vector (5).svg';
import backgroundTail6 from '../../../../public/icons/Vector (6).svg';
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

 const publication = Publications.filter((item) => item.id?.toString() === '1');
const VerweisberatungComponent2 = () => {
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

        <div className="mx-10">
          <h1 className="xl:text-[70px] md:text-3xl text-lg font-bold text-[#2F804A] ">
            Verweisberatung
          </h1>
          <div className="xl:text-3xl ms:text-lg font-[300] mt-5 text-justify">
            <p className="">
              In Nordrhein-Westfalen existieren insgesamt 42 sogenannte
              Servicestellen für Antidiskriminierungsarbeit.
            </p>
            <p>
              Hier haben wir eine Liste dieser Beratungsstellen, die dir bei
              spezifischen oder allgemeinen Anliegen weiterhelfen können. 
            </p>
          </div>
        </div>

        <div className="w-full py-5 bg-colorPage ">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              Gleich­behandlungs­büro Aachen
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              {' '}
              <p>Gleichbehandlungsbüro</p>
              <p>Mariahilfstraße 16</p>
              <p>52062 Aachen</p>
              <p className="underline">0241 406500</p>
              <p className="underline">gbb@paez-aachen.de</p>
              <p className="underline">www.gleichbehandlungsbuero.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>Marie-ThereseAden-Ugbomah</p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>
                  rassistischeDiskriminierung, Anti-Muslimischer Rassismus,
                  Anti-Schwarzer Rassismus,Behörden
                </p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>Arabisch,Deutsch, Englisch, weitere über Dolmetscher</p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>
                  PädagogischesZentrum Aachen e.V. (Mitglied im Verband: Der
                  Paritätische NRW)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-5 bg-white">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              Servicestelle für Anti­diskriminierungs­arbeit
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              {' '}
              <p>
                Servicestellefür Antidiskriminierungsarbeit des CV
                Arnsberg-Sundern
              </p>
              <p> Clemens-August-Straße 15</p>
              <p>59821 Arnsberg</p>
              <p className="underline">02931 545054</p>
              <p className="underline">d.bueenfeld@caritas-arnsberg.de</p>
              <p className="underline">www.caritas-arnsberg.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>DanielBüenfeld</p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>rassistischeDiskriminierung</p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>Deutsch,Englisch</p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>
                  CaritasverbandArnsberg-Sundern e.V. (Mitglied im Verband: DiCV
                  Paderborn)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-5 bg-colorPage ">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              Antidiskriminierungsbüro imRhein-Erft-Kreis
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              {' '}
              <p>Antidiskriminierungsbüroim Rhein-Erft-Kreis</p>
              <p>Zeppelinstraße 25</p>
              <p>50126 Bergheim</p>
              <p className="underline">02271 606122</p>
              <p className="underline">db@drk-rhein-erft.de</p>
              <p className="underline">www.drk-rhein-erft.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>Rahel Lorenz,Eliana Ratka</p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>rassistischeDiskriminierung</p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>Deutsch,Englisch, Portugisisch, weitere über Dolmetscher</p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>DRKKreisverband Rhein-Erft e.V.  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-5 bg-white">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              Servicestelle für Anti­diskriminierungs­arbeit
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              {' '}
              <p>Servicestellefür Antidiskriminierungsarbeit</p>
              <p> Herforder Straße 74</p>
              <p>33602 Bielefeld</p>
              <p className="underline">0521 921 6434</p>
              <p className="underline">antidiskriminierungsarbeit@awo-owl.de</p>
              <p className="underline">www.awo-fachdienste-migration.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>SophieBrzezinski, Thomas Hellmund, Daniel Kröger</p>
                <p>Beratungsschwerpunkte</p>
              </div>
              <div className="mb-8">
                <p>
                  rassistische Diskriminierung,Anti-Muslimischer Rassismus,
                  Anti-Schwarzer Rassismus, Sinti*zze und Rom*nja
                </p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>Deutsch,Englisch</p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>ArbeiterwohlfahrtBezirksverband Ostwestfalen-Lippe e.V.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-5 bg-colorPage ">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              Servicestelle für Anti­diskriminierungs­arbeit
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              <p>
                Servicestellefür Antidiskriminierungsarbeit im Handlungsfeld
                Wohnen
              </p>
              <p>Borsigstraße 1</p>
              <p>44145 Dortmund </p>
              <p className="underline">01761 80222929</p>
              <p className="underline">antidiskriminierung@drkborken.de</p>
              <p className="underline">www.drkborken.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>
                  ReginaHermanns, Tülin Kabis-Staubach, Annika Stremmer,
                  Ann-Kathrin Thymian
                </p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>rassistischeDiskriminierung, Wohnen</p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>
                  Arabisch,Assyrisch, Deutsch, Englisch, Kurdisch, Portugisisch,
                  Spanisch, Türkisch
                </p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>
                  PlanerladengGmbH (Mitglied im Verband: Der Paritätische NRW)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-white">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              ADIRA
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              {' '}
              <p>
                ADIRA(Antidiskriminierungsberatung und Intervention bei
                Antisemitismus undRassismus)
              </p>
              <p> Prinz-Friedrich-Karl-Straße 9</p>
              <p>44135 Dortmund</p>
              <p className="underline">00231 55747251</p>
              <p className="underline">kontakt@adira-nrw.de</p>
              <p className="underline">www.adira-nrw.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>
                  ReginaHermanns, Tülin Kabis-Staubach, Annika Stremmer,
                  Ann-Kathrin Thymian
                </p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>rassistischeDiskriminierung, Wohnen</p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>
                  Arabisch,Assyrisch, Deutsch, Englisch, Kurdisch, Portugisisch,
                  Spanisch, Türkisch
                </p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>
                  PlanerladengGmbH (Mitglied im Verband: Der Paritätische NRW)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-colorPage ">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              Servicestelle für Anti­diskriminierungs­arbeit
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              <p>
                Servicestellefür Antidiskriminierungsarbeit im Handlungsfeld
                Wohnen
              </p>
              <p>Borsigstraße 1</p>
              <p>44145 Dortmund </p>
              <p className="underline">01761 80222929</p>
              <p className="underline">antidiskriminierung@drkborken.de</p>
              <p className="underline">www.drkborken.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>
                  ReginaHermanns, Tülin Kabis-Staubach, Annika Stremmer,
                  Ann-Kathrin Thymian
                </p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>rassistischeDiskriminierung, Wohnen</p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>
                  Arabisch,Assyrisch, Deutsch, Englisch, Kurdisch, Portugisisch,
                  Spanisch, Türkisch
                </p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>
                  PlanerladengGmbH (Mitglied im Verband: Der Paritätische NRW)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-colorPage ">
          <div className="px-10">
            <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
              AmuRa
            </h1>
            <div className="font-[300] xl:text-3xl lg:text-lg text-md">
              <p>
                AMuRa –Servicestelle für Antimuslimischem Rassismus und zur
                Stärkung
              </p>
              <p>intersektionalerFeminismen</p>
              <p>Grunewaldstraße 79 </p>
              <p className="underline">0177 5894587</p>
              <p className="underline">beratung@mina-duisburg.de</p>
              <p className="underline">www.mina-duisburg.de</p>
              <div className="my-8">
                <p>Ansprechpersonen</p>

                <p>Eva Mughal</p>
              </div>
              <div className="mb-8">
                <p>Beratungsschwerpunkte</p>

                <p>
                  rassistische Diskriminierung,Anti-Muslimischer Rassismus,
                  Sexismus
                </p>
              </div>
              <div className="mb-8">
                <p>Sprache in der Beratung</p>
                <p>Deutsch,weitere über Dolmetscher</p>
              </div>
              <div className="mb-8">
                <p>Träger</p>
                <p>
                  MuslimischesFamilienbildungszentrum - MINA e.V. (Mitglied im
                  Verband: Der Paritätische NRW)
                </p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
};
