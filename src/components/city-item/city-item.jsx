import React from 'react';
import PropTypes from 'prop-types';

const CityItem = ({onCityLinkClick, city, activeCity}) => {
  const activeClassName = city === activeCity ? `tabs__item--active` : ``;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClassName}`} href="#" onClick={onCityLinkClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  onCityLinkClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default CityItem;
