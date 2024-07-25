'use client';
import img1 from '../../../../public/images/Rectangle 247.svg';
import img2 from '../../../../public/images/Rectangle 247 (4).svg';
import img3 from '../../../../public/images/Rectangle 247 (1).svg';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import Link from 'next/link';
import AboutUsImage from '../../../../public/images/Group 56 (1).svg';
import AboutImage from '../../../../public/images/Vector (6).svg';
import AboutImage2 from '../../../../public/images/Vector (8).svg';
import vec from '../../../../public/images/Vector (21).svg';
import vector10 from '../../../../public/images/Vector (10).svg';
import CookieConsent from '@/app/components/banners/CookieConsent';
import Link from 'next/link';
import Logo from '../../../../public/logo.svg';
import SpeakAloudIcon from '../../../../public/icons/readAloud.svg';
import BackgroundCircle from '../../../../public/icons/Vector (5).svg';
import backgroundTail6 from '../../../../public/icons/Vector (6).svg';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { NavigationControl, GeolocateControl } from 'react-map-gl';
import MarkerPopUp from '../marker/marker';
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

const VerweisberatungComponent = () => {
  const param = useParams();
  const data = { id: param ? param.id : '' };

  const publication = Publications.filter(
    (item) => item.id?.toString() === '1'
  );

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  return (
    <div>
      <div className="relative h-[250px] sm:h-[300px] xl:h-[550px] w-full px-5 sm:px-0 mb-24">
        {/* <div className="w-full h-full object-cover border-5 border-[#EAD3B5] sm:scale-y-[-1] sm:rotate-180 sm:ml-20 xl:ml-40 rtl:mr-40 object-center"> */}
        <div className="w-full h-full object-cover border-5 border-[#EAD3B5] sm:ml-20 xl:ml-40 rtl:mr-40 object-center">
          {/* <Image
            src={AboutUsImage}
            alt=""
            className="w-full h-full object-cover border-5 border-[#EAD3B5] sm:scale-y-[-1] sm:rotate-180 sm:ml-20 xl:ml-40 rtl:mr-40 object-center"
          /> */}
          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            initialViewState={{
              latitude: 51.47728820466454,
              longitude: 7.469916873834864,
              zoom: 10,
            }}
            maxZoom={20}
            minZoom={3}
          >
            {/* <MarkerPopUp
              events={inputValue.length === 0 ? events : locations}
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              icon={IoMdAirplanee}
            /> */}
            <GeolocateControl position="top-left" />
            <NavigationControl position="top-left" />
          </Map>
        </div>
        <Image
          src={BackgroundCircle}
          alt="bg-circle"
          className="hidden sm:block top-[200px] xl:top-[380px] absolute w-[25%] xl:w-[15%] z-[-1] rtl:scale-y-[-1] rtl:rotate-180"
        />
        <div className="top-[180px] absolute h-fit w-full flex sm:hidden -left-3">
          <div className="relative w-[200px]">
            <Image src={vec} alt="backgoundtail6" className="" />
            <h1 className=" text-white font-bold text-xl sm:hidden block absolute top-12 left-3 rtl:left-14 w-[55%] text-center">
              {/* {publication.length > 0 && publication[0].title} */}
              Verweisberatung
            </h1>
          </div>
        </div>
        {/* <h1 className="absolute z-20 bottom-[10%] left-[15%] text-white font-bold text-3xl border-2">
          {publication.length > 0 && publication[0].title}
        </h1> */}
      </div>
      {/* <Image
        className="w-[61px] ml-auto sm:mt-0  sm:hidden mt-[118px]"
        src={SpeakAloudIcon}
        alt="Speak aloud"
      /> */}
      <div className="px-10 bg-white">
        <h1 className="xl:text-[70px] md:text-3xl text-lg font-bold text-[#2F804A] ">
          Verweisberatung
        </h1>
        <div className="xl:text-2xl ms:text-lg font-[300] md:py-10 py-5 text-justify">
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

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Gleich­behandlungs­büro Aachen
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
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

      <div className="w-full md:py-10 py-5 bg-withe ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
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

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Antidiskriminierungsbüro imRhein-Erft-Kreis
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
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

      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
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

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit </p>
            <p>Nordring 52</p>
            <p>46325 Borken</p>
            <p className="underline">01761 80222929</p>
            <p className="underline">antidiskriminierung@drkborken.de</p>
            <p className="underline">www.drkborken.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Sara Jrab</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>Rotes Kreuz imKreis Borken e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            ADIRA
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
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

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
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

      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle T.O. Hope - LGBTIQA*
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>ServicestelleT.O. Hope - LGBTIQA*</p>
            <p> Münsterstraße 54</p>
            <p>44145 Dortmund</p>
            <p className="underline">0231 97062647</p>
            <p className="underline">selda@trainofhope-do.de</p>
            <p className="underline">www.trainofhope-do.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Seldaİlter-Şirin</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>
                rassistischeDiskriminierung, Anti-Muslimischer Rassismus,
                LSBTIQ*, Justiz
              </p>
              <p>Sprache in der Beratung</p>
            </div>
            <div className="mb-8">
              {/* <p>Sprache in der Beratung</p> */}
              <p>Deutsch, Englisch,Türkisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>
                Train of HopeDortmund e.V. (Mitglied im Verband: Der
                Paritätische NRW)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            AmuRa
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>
              AMuRa –Servicestelle für Antimuslimischem Rassismus und zur
              Stärkung
            </p>
            <p>intersektionalerFeminismen</p>
            <p>Grunewaldstraße 79 </p>
            <p>47053 Duisburg</p>
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

      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            ARIC NRW - Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Hochfeldstraße 42</p>
            <p>47053 Duisburg</p>
            <p className="underline">0203 284873</p>
            <p className="underline">sservicestelle@aric-nrw.de</p>
            <p className="underline">www.aric-nrw.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>GülgünTeyhani, Martha Jah+</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, Türkisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>ARIC-NRW e.V.(Mitglied im Verband: Der Paritätische NRW)</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full py-5 bg-white">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-5">
            Servicestelle T.O. Hope - LGBTIQA*
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>ServicestelleT.O. Hope - LGBTIQA*</p>
            <p> Münsterstraße 54</p>
            <p>44145 Dortmund</p>
            <p className="underline">0231 97062647</p>
            <p className="underline">selda@trainofhope-do.de</p>
            <p className="underline">www.trainofhope-do.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Seldaİlter-Şirin</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>
                rassistischeDiskriminierung, Anti-Muslimischer Rassismus,
                LSBTIQ*, Justiz
              </p>
              <p>Sprache in der Beratung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch, Englisch,Türkisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>
                Train of HopeDortmund e.V. (Mitglied im Verband: Der
                Paritätische NRW)
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Bahnhofstraße 24</p>
            <p>48249 Dülmen</p>
            <p className="underline">02594 910020</p>
            <p className="underline">ma.stukowski@awo-msl-re.de</p>
            <p className="underline">www.awo-msl-re.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>MargaritaStukowski</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>
                rassistischeDiskriminierung, Anti-Muslimischer Rassismus, Alter,
                Behinderten-Feindlichkeit
              </p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch, Englisch,Russisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>AWOUnterbezirk Münsterland-Recklinghausen</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Philippstraße 4</p>
            <p>52349 Düren</p>
            <p>02421 188181</p>
            <p className="underline">0231 97062647</p>
            <p className="underline">
              antidiskriminierungsstelle@evangelische-gemeinde-dueren.org
            </p>
            <p className="underline">www.evangelischegemeinde-dueren.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>EvangelischeGemeinde zu Düren</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            SABRA
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>
              SABRA -Servicestelle für Antidiskriminierungsarbeit Beratung bei
              Rassismus undAntisemitismus
            </p>
            <p>Paul-Spiegel-Platz 1</p>
            <p>40476 Düsseldorf</p>
            <p className="underline">0211 94195988</p>
            <p className="underline">sabra@jgdus.de</p>
            <p className="underline">www.sabra-jgd.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>SebastianMohr, Katja Kuklinski, Clemens Hötzel</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Antisemitismus</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch, Englisch, Russisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>JüdischeGemeinde Düsseldorf</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Briedestraße 1-9</p>
            <p>40599 Düsseldorf</p>
            <p>0211 22991915</p>
            <p className="underline">Hosai.Jabari-Harsini@drk-duesseldorf.de</p>
            <p className="underline">www.DRK-duesseldorf.de</p>
            <p className="underline">www.evangelischegemeinde-dueren.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>HosaiJabari-Harsini, Mariana Domishlyarova</p>
            </div>
            <div className="my-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, Bildung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Arabisch,Deutsch, Englisch, Paschto, Persisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DRK-KreisverbandDüsseldorf e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Euskirchener Rotkreuzhaus, Kommerner Straße 39-41</p>
            <p>53879 Euskirchen</p>
            <p className="underline">02251 107951</p>
            <p className="underline">jrass@drk-eu.de</p>
            <p className="underline">www.drk-eu.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Judith Raß</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Arbeit</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DRKKreisverband Euskirchen e.V.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Bahnhofsvorplatz 4</p>
            <p>45879 Gelsenkirchen</p>
            <p className="underline">0209 957146520</p>
            <p className="underline">
              antidiskriminierung@caritas-gelsenkirchen.de
            </p>
            <p className="underline">www.caritas-gelsenkirchen.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>PhilippWiesmann</p>
            </div>
            <div className="my-8">
              {' '}
              <p>Beratungsschwerpunkte</p>
              <p>
                rassistischeDiskriminierung, Anti-Muslimischer Rassismus,
                Sinti*zze und Rom*nja
              </p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>CaritasVerband für die Stadt Gelsenkirchen e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Talstraße 1</p>
            <p>51643 Gummersbach</p>
            <p className="underline">0171 2944314</p>
            <p className="underline">Ingrid.forsting@caritas-oberberg.de</p>
            <p className="underline">www.caritas-oberberg.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>IngridForsting</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Behörden, Bildung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, Spanisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>Caritasverbandfür den Oberbergischen Kreis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>ServicestelleHamm</p>
            <p> Südenwall 21a</p>
            <p>59065 Hamm</p>
            <p className="underline">0173 1946323</p>
            <p className="underline">wilhelm@awo-rle.de</p>
            <p className="underline">www.awo-rle.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>NataliaWilhelm</p>
            </div>
            <div className="my-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, Russisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>AWOUnterbezirk Ruhr-Lippe-Ems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle gegen anti­musli­mischenRassismus
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellegegen antimuslimischen Rassismus</p>
            <p>Hafenstraße 10</p>
            <p>59067 Hamm</p>
            <p className="underline">02381 87189240</p>
            <p className="underline">willers@multikulti-forum.de</p>
            <p className="underline">www.multikulti-forum.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Jannik Willers</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Anti-Muslimischer Rassismus</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>
                MultikulturellesForum e.V. (Mitglied im Verband: Der
                Paritätische NRW)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Rudolf-Diesel-Straße19</p>
            <p>52525 Heinsberg</p>
            <p className="underline">02431 802334</p>
            <p className="underline">e.havenith@drk-heinsberg.de</p>
            <p className="underline">www.drk-heinsberg.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>Eva Havenith</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, Wohnen</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DRKKreisverband Heinsberg e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Auf der Freiheit 25</p>
            <p>32052 Herford</p>
            <p className="underline">05221 599837</p>
            <p className="underline">selda.oezen@dw-herford.de</p>
            <p className="underline">www.diakonie-herford.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Selda Özen</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Anti-Muslimischer Rassismus</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DiakonischesWerk im Ev. Kirchenkreis Herford e. V.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Wittekindstraße 21</p>
            <p>32051 Herford</p>
            <p className="underline">05221 1789823</p>
            <p className="underline">
              antidiskriminierungsstelle@drk-herford.de
            </p>
            <p className="underline">www.drk-herford.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>MalikaMansouri</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, Anti-Muslimischer Rassismus</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Arabisch,Deutsch, Englisch, Tamazight, Türkisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DRK KV Herford- Stadt e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle fürAntidiskriminierungsarbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellegegen Diskriminierung</p>
            <p>Hauptstraße 221</p>
            <p>44649 Herne</p>
            <p className="underline">02325 6999191</p>
            <p className="underline">antidiskriminierung-herne@planb-ruhr.de</p>
            <p className="underline">www.planb-ruhr.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>AntonioMartinez S., Berfin Güzel-Aksevi</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>
                rassistischeDiskriminierung, Sinti*zze und Rom*nja, Behörden
              </p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, Romanes, Türkisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>PLANB Ruhre.V. (Mitglied im Verband: Der Paritätische NRW)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Vitusstraße 20</p>
            <p>45699 Herten</p>
            <p className="underline">02366 180712</p>
            <p className="underline">.grosser@haus-der-kulturen.de</p>
            <p className="underline">www.haus-der-kulturen.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>JessicaGroßer, Annelie Rutecki</p>
            </div>
            <div className="mb-8">
              {' '}
              <p>Beratungsschwerpunkte</p>
              <p>
                rassistischeDiskriminierung, Anti-Muslimischer Rassismus,
                Anti-Schwarzer Rassismus, Sexismus,Bildung
              </p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>
                Deutsch,Englisch, Französisch, Niederländisch, Persisch,
                Türkisch, weitere überDolmetscher
              </p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DiakonischesWerk im Kirchenkreis Recklinghausen gGmbH</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Vinnstraße 40</p>
            <p>47475 Kamp-Lintfort</p>
            <p className="underline">0160 96977633</p>
            <p className="underline">ada@awo-kv-wesel.de</p>
            <p className="underline">www.awo-kv-wesel.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>MisbahShahzad, Mohamed Tajni</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>
                rassistischeDiskriminierung, Anti-Muslimischer Rassismus,
                Anti-Schwarzer Rassismus, Sexismus,Bildung
              </p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>
                Arabisch,Deutsch, Englisch, Französisch, Hindi, Paschto,
                Punjabi, Spanisch, Urdu
              </p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>AWOKreisverband Wesel e.V.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Thaerstraße 21</p>
            <p>47533 Kleve</p>
            <p className="underline">0157 79014291</p>
            <p className="underline">ada@awo-kreiskleve.de</p>
            <p className="underline">www.awo-kreiskleve.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>Nazim Dogu,Ulrike Koopmann</p>
            </div>
            <div className="mb-8">
              {' '}
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>
                Arabisch, Deutsch,Englisch, Kurdisch, Niederländisch, Spanisch
              </p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>AWOKreisverband Kleve e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            ADB rubicon
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>AntidiskriminierungsbüroADB rubicon</p>
            <p>Rubensstraße 8-10</p>
            <p>50667 Köln</p>
            <p className="underline">0221 276699933</p>
            <p className="underline">
              antidiskriminierungsbuero@rubicon-koeln.de
            </p>
            <p className="underline">www.rubicon-koeln.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Gema RodríguezDíaz</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, LSBTIQ*</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>
                Deutsch,Englisch, Französisch, Italienisch, Portugisisch,
                Spanisch
              </p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>Rubicon e.V.(Mitglied im Verband: Der Paritätische NRW)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Anti­Diskriminierungs­BüroKöln
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>
              Anti­Diskriminierungs­BüroKöln,Öffentlichkeit gegen Gewalt e.V.
            </p>
            <p> Berliner Straße 97 - 99</p>

            <p>51063 Köln</p>
            <p className="underline">0221 96476300</p>
            <p className="underline">info@oegg.de</p>
            <p className="underline">www.oegg.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>Lisa Adeniyan,Arta Karāne</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, Französisch, Lettisch, Russisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>
                Öffentlichkeitgegen Gewalt e.V. (Mitglied im Verband: Der
                Paritätische NRW)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Bertramsrtaße 12-22</p>
            <p>51103 Köln</p>
            <p className="underline">0221 98577618</p>
            <p className="underline">adb@caritas-koeln.de</p>
            <p className="underline">www.caritas-koeln.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>ThivithaHimmen, Kornelia Meder</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Arbeit</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, Tamilisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>Caritasverbandfür die Stadt Köln</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            BANDAS
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>
              BANDAS –Beratung und Antidiskriminierungsarbeit für Schüler*innen
            </p>
            <p> Amsterdamer Straße 232</p>
            <p>50735 Köln</p>
            <p className="underline">0160 5500522</p>
            <p className="underline">bandas@awo-mittelrhein.de</p>
            <p className="underline">www.bandas-awo-mittelrhein.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>MecedesPascual Iglesias, Madalena Bothe, Simon Schulz</p>
            </div>
            <div className="mb-8">
              {' '}
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, Bildung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, Spanisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>AWOMittelrhein e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Kirchstraße 6-8</p>
            <p>42799 Leichlingen</p>
            <p className="underline">0157 77 20 82 10</p>
            <p className="underline">sabine.kall@diakonie-leverkusen.de</p>
            <p className="underline">www.diakonie-leverkusen.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Sabine Kall,Simona Böckler</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Arbeit</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, Italienisch, Spanisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DiakonischesWerk Leverkusen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Goldstraße 30</p>
            <p>48147 Münster</p>
            <p className="underline">0151 74478041</p>
            <p className="underline">chiara.bruechert@caritas-ms.de</p>
            <p className="underline">www.caritas-ms.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>ChiaraBrüchert</p>
            </div>
            <div className="mb-8">
              {' '}
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, Arbeit</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>CaritasMünster</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Berliner Platz 33</p>
            <p>48143 Münster</p>
            <p className="underline">0151 72847298</p>
            <p className="underline">mohamed.kouras@drk-muenster.de</p>
            <p className="underline">www.drk-muenster.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Mohamed Kouras</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistische Diskriminierung,Arbeit, Bildung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Arabisch,Deutsch, Französisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DRKKreisverband Münster</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Löherweg 9</p>
            <p>57462 Olpe</p>
            <p className="underline">02761 2643</p>
            <p className="underline">blumentrath@kv-olpe.drk.de</p>
            <p className="underline">www.drk-kv-olpe.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>KarinBlumentrath</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>
                rassistischeDiskriminierung, Alter, Behinderten-Feindlichkeit
              </p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Arabisch,Deutsch, Englisch, Französisch, Türkisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DRKKreisverband Olpe e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Langenohlgasse 2</p>
            <p>33098 Paderborn</p>
            <p className="underline">05251 8891234</p>
            <p className="underline">ada@caritas-pb.de</p>
            <p className="underline">www.caritas-pb.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>MatthiasZimoch</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Arbeit</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>CaritasverbandPaderborn e.V.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Gemünderstraße 40</p>
            <p>53937 Schleiden</p>
            <p className="underline">0172 2172680</p>
            <p className="underline">l.v.seggern@caritas-eifel.de</p>
            <p className="underline">www.caritas-eifel.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>Lena von Seggern</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, LSBTIQ*, Bildung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, Französisch, Spanisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>Caritasverbandfür die Region Eifel e.V.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Lindenstraße 58</p>
            <p>53721 Siegburg</p>
            <p className="underline">0163 3472697</p>
            <p className="underline">ada@kurdische-gemeinschaft.de</p>
            <p className="underline">www.kurdische-gemeinschaft.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>Laura Leinroth</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>
                KurdischeGemeinschaft Rhein-Sieg/Bonn e.V. (Mitglied im Verband:
                Der Paritätische NRW)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Sandstraße 28</p>
            <p>57072 Siegen</p>
            <p className="underline">0271 3878315</p>
            <p className="underline">lisa.bleckmann@vaks.info</p>
            <p className="underline">www.vaks.info/</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>LisaBleckmann, Lali Mgaloblishvili, Amel Aouaj</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>
                Verein fürsoziale Arbeit und Kultur Südwestfalen e.V. (Mitglied
                im Verband: DerParitätische NRW)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Kasernenstraße 23</p>
            <p>42651 Solingen</p>
            <p className="underline">0212 287602</p>
            <p className="underline">ada@evangelische-kirche-solingen.de</p>
            <p className="underline">www.ada-diakonie-solingen.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>N.N.</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Behörden, Justiz</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>
                Deutsch,Englisch, Französisch, Griechisch, weitere über
                Dolmetscher
              </p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DiakonischesWerk Solingen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-5 bg-white ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            {' '}
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p> Bahnhofsplatz 6</p>
            <p>48565 Steinfurt</p>
            <p className="underline">0152 09116160</p>
            <p className="underline">r.nguyen-scharf@awo-msl-re.de</p>
            <p className="underline">www.awo-msl-re.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>
              <p>RosaNguyen-Scharf</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>
              <p>rassistischeDiskriminierung, LSBTIQ*</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>

              <p>Deutsch,Englisch, Vietnamesisch</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>AWO UnterbezirkMünsterland-Recklinghausen</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 py-5 bg-colorPage ">
        <div className="px-10">
          <h1 className="xl:text-[50px] md:text-2xl text-base font-bold mb-8">
            Servicestelle für Anti­diskriminierungs­arbeit
          </h1>
          <div className="font-[300] xl:text-2xl lg:text-lg text-md">
            <p>Servicestellefür Antidiskriminierungsarbeit</p>
            <p>Sternstraße 19</p>
            <p>34414 Warburg</p>
            <p className="underline">05641 788817</p>
            <p className="underline">hansmeyer@diakonie-pbhx.de</p>
            <p className="underline">www.diakonie-pbhx.de</p>
            <div className="my-8">
              <p>Ansprechpersonen</p>

              <p>JuliaHansmeyer</p>
            </div>
            <div className="mb-8">
              <p>Beratungsschwerpunkte</p>

              <p>rassistischeDiskriminierung, Wohnen</p>
            </div>
            <div className="mb-8">
              <p>Sprache in der Beratung</p>
              <p>Deutsch,Englisch, weitere über Dolmetscher</p>
            </div>
            <div className="mb-8">
              <p>Träger</p>
              <p>DiakoniePaderborn-Höxter e.V.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerweisberatungComponent;
