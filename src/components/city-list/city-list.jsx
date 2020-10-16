import React from 'react';
import PropTypes from 'prop-types';
import CityItem from '../city-item/city-item';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const CityList = ({cities, activeCity, changeCity, getOffers}) => {

  const onCityLinkClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
    getOffers();
  };

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
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

// связывает store c пропсами компонента
const mapStateToProps = (({city, cities}) => ({
  activeCity: city,
  cities
}));

// связывает методы сo store
const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffers() {
    dispatch(ActionCreator.getOffers());
  }
}));

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
