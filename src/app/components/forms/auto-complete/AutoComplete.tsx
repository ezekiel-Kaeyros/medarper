import { getFormCookies } from '@/cookies/cookies';
import { FIFTH_FORM } from '@/cookies/cookies.d';
import { cities } from '@/utils/data';
import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

type Item = {
  id: number;
  name: string;
  postalCode: number;
};

type AutoCompleteProps = {
  handleOnSearch?: any;
  handleOnSelect: any;
  handleOnHover?: () => void;
  handleOnFocus?: () => void;
  handleOnClear?: () => void;
   valueInput:string
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
  handleOnFocus,
  handleOnHover,
  handleOnSearch,
  handleOnSelect,
  handleOnClear,
  valueInput
}) => {
  const [location, setLocation] = useState<string>(valueInput);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const formValues = getFormCookies(FIFTH_FORM);
    console.log('formValues', formValues);
    
  formValues &&
    formValues.happenedOnline == false &&
    setLocation(formValues?.state);
  }, [location]);

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
    <ReactSearchAutocomplete<Item>
      items={cities}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      showItemsOnFocus={false}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      inputSearchString={location}
      autoFocus
      formatResult={formatResult}
      onClear={handleOnClear}
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
  );
};

export default AutoComplete;
