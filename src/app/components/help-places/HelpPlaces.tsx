'use client';

import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { NavigationControl, GeolocateControl } from 'react-map-gl';
import IoMdAirplanee from '../../../../public/icons/location-sign-svgrepo-com.svg';
import events from './airports.json';
import MarkerPopUp from '../marker/marker';
import AutoComplete from '../forms/autocompleteHome/autocomplete';

type HelpPlacesProps = {
  content: {
    referralCounseling: {
      title: string;
      filterPlace: string;
      description: string;
      placeOrLocation: string;
    };
  };
};

type selectedMarkerProps = {
  code: string;
  lat: number;
  lon: number;
  name: string;
  city: string;
  state: string;
  country: string;
  id: number;
};

const HelpPlaces: React.FC<HelpPlacesProps> = ({ content }) => {
  const [locations, setLocations] = useState<selectedMarkerProps[]>(events);
  const [showPopup, setShowPopup] = useState<any>({});
  const [location, setLocation] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  // Autocomplete selected location
  const handleOnSelect = (item: any) => {
    // the item selected
    const filteredEvents = events.filter(
      (event) => event?.name.toLowerCase().includes(item.name.toLowerCase())
    );

    setLocations(filteredEvents);
  };

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <div className="flex text-white justify-between lg:h-[30rem] flex-col sm:flex-row">
        <div className="full bg-[#BD9D75] w-full flex justify-center h-full">
          <div className="flex flex-col w-[70%] sm:w-[80%] lg:w-[45%] mt-10 gap-y-10 h-full">
            <div className="font-bold text-3xl">
              {content?.referralCounseling?.title}
            </div>
            <div className="my-2 text-xl">
              {content?.referralCounseling?.description}
            </div>
            <div className="my-3 flex flex-col gap-y-3 text-xl">
              {content?.referralCounseling?.filterPlace}
            </div>
            <div className="w-[80%] pb-10 lg:pb-0">
              {/* <Searchbar onSearch={handleSearch} /> */}
              <AutoComplete
                handleOnSelect={handleOnSelect}
                events={events}
                // events={events}
                handleSearch={handleInputChange}
                placeholder={content.referralCounseling.placeOrLocation}
              />
            </div>
          </div>
        </div>
        <div className="text-black border-4 w-full lg:h-full h-[490px]">
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
            <MarkerPopUp
              // events={locations}
              events={inputValue.length === 0 ? events : locations}
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              icon={IoMdAirplanee}
            />
            <GeolocateControl position="top-left" />
            <NavigationControl position="top-left" />
          </Map>
        </div>
      </div>
      {/* <div className="lg:bg-gray-200 w-full lg:h-[740px] sm:h-[400px]">
        <Image
          className="  object-cover h-full w-full"
          src={MapImage}
          alt="Map"
        />
      </div> */}
      {/* <AutoComplete handleOnSelect={handleOnSelect} /> */}
    </div>
  );
};

export default HelpPlaces;
