import React from 'react';
import PropTypes from 'prop-types';
import CityItem from '../city-item/city-item';

const CityList = ({onCityLinkClick, cities, activeCity}) => {

  const cityItemElements = cities.map((city, index) =>
    <CityItem key={index}
      onCityLinkClick={onCityLinkClick}
      city={city}
      isActive={activeCity === city}
    />);

  return (
    <ul className="locations__list tabs__list" >
      {cityItemElements}
    </ul>
  );
};

CityList.propTypes = {
  onCityLinkClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CityList;
