import Footer from '@/app/components/footer/Footer';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import coach from '../../../../public/images/Logo Coach_mit Untertitel neu druck transparent  1.svg';
import coach2 from '../../../../public/coach.svg';
import aking from '../../../../public/akkinder.svg';
import inter from '../../../../public/interkultur.svg';
import Logo2 from '../../../../public/images/Group 61 (1).svg';
import mira from '../../../../public/images/Group 60.svg';
import miq from '../../../../public/images/g8.svg';
import dina from '../../../../public/images/logo_dina (1).svg';
import elipse from '../../../../public/images/Ellipse 95.svg';
import Image from 'next/image';
import Header from '../../components/header/header';
import AboutUsImage from '../../../../public/icons/Group 56 (1).svg';
import VectorTail from '../../../../public/icons/Vectortail.svg';
import AboutImage2 from '../../../../public/icons/Group 56.svg';
import vec from '../../../../public/images/Vector (9).svg';
import CookieConsent from '@/app/components/banners/CookieConsent';
import Link from 'next/link';

export default async function about({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, navigation } = await getDictionary(lang);
  return (
    <div>
      <Header lang={lang} />
      <div className="overflow-x-hidden rtl:overflow-x-hidden">
        <div className="">
          {/* Desktop only */}
          <div className="flex lg:pr-[10rem] sm:pr-[5rem] rtl:lg:pl-[10rem] rtl:sm:pl-[5rem] rtl:sm:pr-0 rtl:lg:pr-0">
            <div className="relative sm:flex hidden ">
              <Image
                // className="xl:-mt-28 sm:-mt-16 rtl:scale-y-[-1] rtl:rotate-180"
                className="xl:-mt-28 sm:-mt-16 rtl:scale-y-[-1] rtl:rotate-180"
                src={AboutImage2}
                alt="form behind title"
              />
              <h1 className="absolute sm:top-[150px] md:top-[130px] lg:top-[150px] xl:top-[200px] xl:left-32 left-20 rtl:left-[180px] xl:text-4xl sm:text-2xl font-bold text-white">
                MEDAR <br />
                NRW
              </h1>
            </div>
            <div className="flex items-center mx-4 sm:mx-0 relative sm:sticky">
              <Image
                className=" sm:h-[300px] sm:w-[900px] xl:h-[400px] xl:w-[1000px] object-center object-cover"
                src={AboutUsImage}
                alt="Image about us"
              />
              <div className="sm:hidden absolute bottom-0 -mb-16 -ml-8">
                <div className="relative">
                  <Image src={VectorTail} alt="icontail" className="w-[80%]" />
                  <h1 className="absolute top-8 left-10 font-bold text-white rtl:left-16">
                    MEDAR <br />
                    NRW
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* End Desktop only section */}
          <div className="mx-4 lg:mx-[10rem] mt-20 sm:mt-0">
            <p className="xl:text-3xl lg:text:-2xl pr-4 lg:mt-0 mt-6">
              MEDAR steht für Melde- und Dokumentationsstelle für
              antimuslimischen Rassismus und ist ein Projekt, welches
              antimuslimischen Rassismus in NRW aufzeigen möchte.
            </p>
            <br />
            <br />
            <p className="xl:text-3xl lg:text:-2xl pr-4">
              {/* {page?.about?.whoWeAre?.mission?.desc1} <br /> */}
              {/* {page?.about?.whoWeAre?.mission?.des2} */}
              Unser Ziel ist es, eine umfassende Statistik über
              Diskriminierungserfahrungen zu erstellen, um auf diese Weise
              Bewusstsein zu schaffen und Veränderungen anzustoßen. Wir glauben
              an die Macht der gemeinsamen Stimme und möchten Betroffenen und
              Zeug*innen eine Plattform bieten, um ihre Geschichten und
              Erfahrungen zu teilen.
            </p>
            <h1 className="xl:text-[50px] md:text-3xl font-bold mt-10">
              Unsere Ziele
            </h1>
            <div className="flex items-center  mt-3  bg-colorAbout p-2">
              <Image src={elipse} alt="" />
              <span className="xl:text-3xl lg:text:-2xl text-lg pr-4 ml-3">
                Dokumentation und Analyse von antimuslimischen Rassismus
              </span>
            </div>
            <div className="flex items-center  mt-3  bg-colorAbout p-2">
              <Image src={elipse} alt="" />
              <span className="xl:text-3xl lg:text:-2xl text-lg pr-4 ml-3">
                Sichtbarmachung & Dunkelfelderhellung von antimuslimischem
                Rassismus in NRW
              </span>
            </div>
            <div className="flex items-center  mt-3  bg-colorAbout p-2">
              <Image src={elipse} alt="" />
              <span className="xl:text-3xl lg:text:-2xl text-lg pr-4 ml-3">
                Sensibilisierung zum Thema
              </span>
            </div>
            <div className="flex items-center  mt-3  bg-colorAbout p-2">
              <Image src={elipse} alt="" />
              <span className="xl:text-3xl lg:text:-2xl text-lg pr-4 ml-3">
                Jährliche Berichte zum Phänomen veröffentlichen
              </span>
            </div>
            <div className="flex items-center  mt-3  bg-colorAbout p-2">
              <Image src={elipse} alt="" />
              <span className="xl:text-3xl lg:text:-2xl text-lg pr-4 ml-3">
                Mehrdimensionale Betrachtung von Diskriminierungsvorfällen
              </span>
            </div>
          </div>

          <div className="bg-colorPage lg:px-40 px-5 py-7 mt-6 block">
            <h1 className="xl:text-[50px] md:text-3xl font-bold">
              Unser Selbstverständnis
            </h1>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-4 mt-5">
              Die Reihenfolge gibt keine Auskunft über die Wichtigkeit der
              einzelnen Punkte. Alle Punkte sind gleichermaßen von zentraler
              Bedeutung.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              AN DER SEITE VON BETROFFENEN
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-4 mt-5">
              Wir  setzen uns  für  marginalisierte  Menschen ein,  deshalb 
              orientiert sich  unsere  Arbeit an  den  Bedürfnissen von
              Betroffenen.
            </p>
            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              PARTEILICHKEIT & VERTRAULICHKEIT
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-4 mt-5">
              Wir positionieren uns auf der Seite der Betroffenen und behandeln
              alle Informationen vertraulich.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              INTERSEKTIONALITÄT
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-4 mt-5">
              Diskriminierung  muss immer  intersektional  gedacht werden, 
              deshalb  legen wir  einen  besonderen Fokus auf
              Mehrfachdiskriminierung.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              KONSEQUENTER DATENSCHUTZ
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-4 mt-5">
              Wir verpflichten uns zu einem konsequenten Datenschutz und
              handhaben jegliche Daten mit besonderer Vorsicht.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              ZUSAMMENARBEIT MIT COMMUNITIES
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-4 mt-5">
              Wir stehen in engem Austausch mit unseren Communities und
              berücksichtigen ihre Interessen in unserer Arbeit.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              ENGER AUSTAUSCH ZWISCHEN DEN MELDESTELLEN
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Wir sind ein Netzwerk verschiedener Meldestellen, die eng
              zusammenarbeiten, sich regelmäßig und intensiv austauschen und
              gemeinsam an konzeptionellen Fragen und Herausforderungen
              arbeiten.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              KOOPERATION MIT BERATUNGSSTELLEN
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Wir stehen in engem Kontakt zu Beratungsstellen für Betroffene von
              Gewalt und Diskriminierung in NRW und arbeiten stetig an einer
              breit aufgestellten Verweisstruktur.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              NIEDRIGSCHWELLIGKEIT UND REFLEXION VON BARRIEREN
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Unser Anspruch ist es, möglichst niedrigschwellig und barrierearm
              zu arbeiten, damit unsere Meldestellen von so vielen wie möglich
              genutzt werden können und auf Informationen leicht zugegriffen
              werden können.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              SENSIBILISIERUNG FÜR UNGLEICHWERTIGKEITSIDEOLOGIEN
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Unser Ziel ist es, über Ungleichwertigkeitsideologien,
              rassistische und queerfeindliche Diskriminierung und Gewalt auf
              allen gesellschaftlichen Ebenen aufzuklären und ein besseres
              gesellschaftliches Miteinander zu fördern.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              MEHRSPRACHIGKEIT
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Entsprechend unserer Ressourcen, bieten wir den Betroffenen an,
              sich auf ihrer Erstsprache mit uns auszutauschen.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              STÄRKUNG UND EMPOWERMENT UNSERER ZIELGRUPPEN
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Wir unterstützen unsere Communities dabei, ein Bewusstsein für
              ihre (Menschen-)Rechte zu entwickeln, um Diskriminierungen,
              Rassismen und Einschränkungen nicht mehr hinzunehmen, sondern
              aktiv und angstfrei dagegen vorzugehen und diese zu melden.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              RECHTE
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Wir setzen uns für Grund- und Menschenrechte ein und weisen auf
              gesetzliche Lücken im Schutz marginalisierter Menschen hin.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              MACHTKRITIK
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Wir klären über benachteiligende Machtstrukturen - auf
              individueller, struktureller und institutioneller Ebene - auf und
              machen diese Strukturen sichtbar. Unsere Arbeit soll langfristig
              dazu beitragen, bestehende Machtstrukturen aufzubrechen und
              abzubauen.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              SICHTBARMACHUNG
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Mit unserer Arbeit möchten wir Diskriminierung und Gewalt in NRW
              sichtbar machen, damit Prozesse angestoßen werden, die zu einem
              besseren gesellschaftlichen Zusammenleben führen.
            </p>

            <h2 className="text-[#2F804A] xl:text-3xl lg:text-2xl mt-9 font-[500]">
              SOLIDARITÄT
            </h2>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Wir ermutigen alle Menschen, die Diskriminierung und Gewalt
              beobachten, diese als gesamtgesellschaftlich relevante Phänomene
              zu verstehen und als Verbündete zu agieren.  
            </p>
          </div>

          <div className="py-6 lg:px-40 px-5 block">
            <h1 className="xl:text-[50px] md:text-3xl font-bold">
              Projektträger
            </h1>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Betrieben wird MEDAR NRW aus einem Zusammenschluss von zwei
              Organisationen:
            </p>
            <Image
              src={Logo2}
              alt=""
              className=" xl:w-4/12 w-auto h-auto  mt-10"
            />
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              interKultur e.V. ist eine überparteiliche und überreligiöse,
              fachliche Einrichtung, in der Respekt, Akzeptanz,
              Gleichberechtigung und Teilhabe – unabhängig von kultureller oder
              religiöser Zugehörigkeit – den Grundsatz der Begegnung bilden. Als
              migrations- und diskriminierungssensible Einrichtung, verfügt
              interKultur e.V. über ein anerkanntes Interkulturelles Zentrum,
              die Trägerschaft eines Bürger*innenhauses (Köln), einer
              Jugendhilfeeinrichtung und KIM-Stelle (Kommunalen
              Integrationsmanagement), die von einer fachlich sehr erfahrenen
              Gruppe von Menschen mit und ohne Migrationsbiographien begleitet
              werden. Dabei steht der Träger für eine demokratische
              Gesellschaft, was sich mit den Zielen des Teilhabe- und
              Integrationsgesetzes des Landes NRW deckt.
            </p>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Zu den weiteren Handlungsfeldern gehören politische, soziale und
              kulturelle Bildung, pädagogische Hilfen, Inklusionsbegleitung und
              Beratungsangebote (27 Sprachgruppen). Eine bedeutende Stärke ist
              die Bedienung der Schnittstelle zwischen Wissenschaft und Praxis,
              die insbesondere durch den Pädagogischen Geschäftsführer Prof. Dr.
              Kemal Bozay sichergestellt wird.
            </p>
            <Image
              src={coach}
              alt=""
              className=" xl:w-4/12 w-auto h-auto  mt-10"
            />
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Coach e. V. versteht sich als Raum des Empowerments und der
              Solidarität für junge Menschen, die von Rassismus und Ausgrenzung
              betroffen sind und gleichzeitig als Lern- und Erlebnisraum, in dem
              demokratische Bildung möglich wird.{' '}
            </p>
            <p className="xl:text-3xl lg:text:-2xl text-lg pr-6 mt-5">
              Der Verein hat es sich zur Aufgabe gemacht, insbesondere junge
              Menschen mit Zuwanderungsgeschichte bei ihrer Bildung und
              Integration hin zu einem gelingenden Übergang Schule/Beruf zu
              unterstützen. Die Arbeit des Vereins ist geleitet vom Gedanken der
              Prävention. Schwerpunkte sind die Bereiche Beratung, Elternarbeit,
              bildungs- und themenorientierte Gruppenarbeit, Hausaufgabenhilfe,
              Sprachförderung, Berufswahlorientierung, Bewerbungshilfen und
              Freizeitangebote. Für Coach e. V. ist es unverzichtbar, dass die
              Eltern aktiv beteiligt werden, wenn Kinder und Jugendliche in
              Schule und beruflicher Bildung gezielt gefördert werden. Coach
              e.V. ist im Rahmen diverser Projekte wie z.B. „Empowerment
              Akademie“ oder „House of Resources“ sowie “Labor für Empowerment,
              Resilienz und solidarisches Handeln” landes-, bundesweit und
              international vernetzt und kann insbesondere im Themenkontext
              rassismuskritische und empowermentorientierte Bildungsarbeit auf
              entsprechende Netzwerkpartner*innen zurückgreifen.
            </p>

            <h1 className="xl:text-[41px] md:text-3xl font-bold mt-10">
              {' '}
              Wir arbeiten im Verbund mit:
            </h1>
            <Image
              src={miq}
              alt=""
              className=" xl:w-4/12 w-auto h-auto  mt-10"
            />
            <Link href="https://www.dina-nrw.vercel.app/de">
              <div className="flex items-center text-[#2F804A] mt-3 mb-9">
                <Image src={vec} alt="" />
                <span className="ml-3">https://www.dina-nrw.vercel.app/de</span>
              </div>
            </Link>
            <Image
              src={dina}
              alt=""
              className=" xl:w-4/12 w-auto h-auto  mt-10"
            />
            <Link href="https://www.dina-nrw.vercel.app/de">
              <div className="flex items-center text-[#2F804A] mt-3 mb-9">
                <Image src={vec} alt="" />
                <span className="ml-3">https://www.dina-nrw.vercel.app/de</span>
              </div>
            </Link>

            <Image
              src={mira}
              alt=""
              className=" xl:w-4/12 w-auto h-auto  mt-10"
            />
            <Link href="https://www.dina-nrw.vercel.app/de">
              <div className="flex items-center text-[#2F804A] mt-3 mb-24">
                <Image src={vec} alt="" />
                <span className="ml-3">https://www.dina-nrw.vercel.app/de</span>
              </div>
            </Link>
          </div>

          <div className="mx-4 lg:mx-[10rem]  lg:mt-16 sm:mt-4 hidden mt-2">
            <h1 className="font-bold text-black text-3xl mb-6">
              {/* {page?.about?.whoWeAre?.selfEsteem?.title} */}
              Unser Leitbild
            </h1>
            <p>
              {/* {page?.about?.whoWeAre?.selfEsteem?.desc1} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident. ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Excepteur sint occaecat cupidatat non proident.
              <br />
              <br />
              {/* {page?.about?.whoWeAre?.selfEsteem?.des2} */}
              proident. ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Excepteur sint occaecat cupidatat non proident. Excepteur sint
              occaecat
            </p>
          </div>
          <div className="mx-4 lg:mx-[10rem] mt-8 lg:mt-16 sm:mt-4 hidden ">
            <h1 className="font-bold text-black text-2xl lg:text-3xl mb-6">
              {/* {page?.about?.title1} */}
              Unser Selbstverständnis
            </h1>

            <p>
              {/* {page?.about?.whoWeAre?.selfEsteem?.desc1} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident. ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Excepteur sint occaecat cupidatat non proident.
              <br />
              <br />
              {/* {page?.about?.whoWeAre?.selfEsteem?.des2} */}
              proident. ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Excepteur sint occaecat cupidatat non proident. Excepteur sint
              occaecat
            </p>
            <h1 className="font-bold text-black text-2xl lg:text-3xl mb-6 mt-10">
              Projektträger
            </h1>
            <div className="grid gap-2 grid-cols-2 mb-6">
              <div>
                <Image className="w-64" src={inter} alt="" />
              </div>
              <div>
                <Image className="w-64" src={coach2} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="mx-4 py-8  lg:mx-[10rem] mt-8 lg:mt-16 sm:mt-4 block sm:hidden ">
            <h1 className="font-bold text-black text-2xl lg:text-3xl mb-6">
              {page?.about?.title2}
            </h1>
            <div className="grid gap-1 grid-cols-1">
              <div>
                <Image className="w-96" src={aking} alt="" />
              </div>
            </div>
          </div> */}
        </div>

        <Footer content={page?.home} lang={lang} />

        <CookieConsent
          cookieConsentTranslation={page?.cookiesConsent}
          lang={lang}
        />
      </div>
    </div>
  );
}
