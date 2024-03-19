import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

type event = {
  code: string;
  lat: number;
  lon: number;
  name: string;
  city: string;
  state: string;
  country: string;
  id: number;
};

type AutoCompleteProps = {
  handleOnSearch?: () => void;
  handleOnSelect: any;
  handleOnHover?: () => void;
  handleOnFocus?: () => void;
  handleSearch?: any;
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
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
  handleOnFocus,
  handleOnHover,
  handleOnSearch,
  handleOnSelect,
  events,
  handleSearch,
}) => {
  const [location, setLocation] = useState<string>('');

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>
          {item?.name}
        </span>
      </>
    );
  };

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[80%]">
        <ReactSearchAutocomplete<event>
          items={events}
          // items={cities}
          onSearch={handleSearch}
          onHover={handleOnHover}
          showItemsOnFocus={false}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          inputSearchString={location}
          autoFocus={false}
          formatResult={formatResult}
          styling={{
            height: '44px',
            border: '1px solid #dfe1e5',
            borderRadius: '0.4rem',
            zIndex: 20,
            boxShadow: 'rgba(32, 33, 36, 0) 0px 1px 6px 0px',
            hoverBackgroundColor: '#eee',
            color: '#212121',
            fontSize: '16px',
            fontFamily: '',
            iconColor: 'white',
            lineColor: 'rgb(232, 234, 237)',
            placeholderColor: 'grey',
            clearIconMargin: '3px 14px 0 0',
            searchIconMargin: '0 0 0 .4rem',
          }}
        />
      </div>
      {/* <div className="w-[20%]">
        <Button className="bg-white p-4">
          <Image src={RightArrowIcon} alt="Launch search" />
        </Button>
      </div> */}
    </div>
  );
};

export default AutoComplete;
