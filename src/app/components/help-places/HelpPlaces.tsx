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
      <div className="flex text-white justify-between lg:h-[30rem]">
        <div className="full bg-[#DCBE98] w-full">
          <div className="p-2 lg:pl-[15%] py-5 lg:py-10 flex flex-col justify-between h-full w-full lg:w-[60%]">
            <div className="font-bold text-md">
              {content?.referralCounseling?.title}
            </div>
            <div className="my-2">
              {content?.referralCounseling?.description}
            </div>
            <div className="my-3 text-sm">
              {content?.referralCounseling?.filterPlace}
            </div>
            <div className="flex items-center">
              {/* <div className="bg-white rounded-full py-1 px-2 text-black text-sm"> */}
              <div className="w-full">
                {/* <Searchbar onSearch={handleSearch} /> */}
                <AutoComplete
                  handleOnSelect={handleOnSelect}
                  events={events}
                  // events={events}
                  handleSearch={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full text-black">
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
