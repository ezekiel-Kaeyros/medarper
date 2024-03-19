import React, { FC } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import Image from 'next/image';

type MarkerPopUpProps = {
  events: Array<{
    code: string;
    lat: number;
    lon: number;
    name: string;
    city: string;
    state: string;
    country: string;
    id: number;
  }>;
  showPopup: any;
  setShowPopup: any;
  icon: any;
};

const MarkerPopUp: FC<MarkerPopUpProps> = ({
  events,
  showPopup,
  setShowPopup,
  icon,
}) => {
  return (
    <>
      {events.map((event, index) => {
        return (
          <div className="" key={event.id}>
            <Marker
              key={event.id}
              latitude={event.lat}
              longitude={event.lon}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setShowPopup({ [event.id]: true });
              }}
            >
              <Image
                src={icon}
                alt="Marker Icon"
                className="marker-btn w-10 cursor-pointer"
              />

              {showPopup[event.id] && (
                <Popup
                  key={index}
                  latitude={event.lat}
                  longitude={event.lon}
                  onClose={() => setShowPopup(false)}
                  closeButton={true}
                  // offsetLeft={10}
                >
                  <span
                    style={{ fontSize: '1vw', fontFamily: 'Poppins' }}
                    className="text-black"
                  >
                    {event.name}
                  </span>
                </Popup>
              )}
            </Marker>
          </div>
        );
      })}
    </>
  );
};

export default MarkerPopUp;
