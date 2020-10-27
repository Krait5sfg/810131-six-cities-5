import React from 'react';
import PropTypes from 'prop-types';
import CityItem from '../city-item/city-item';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {SotringType} from '../../utils/const';

const CityList = ({cities, activeCity, changeCity, updateOffers, sortingType}) => {

  const onCityLinkClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
    updateOffers(sortingType);
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
  updateOffers: PropTypes.func.isRequired,
  sortingType: PropTypes.string.isRequired
};

// связывает store c пропсами компонента
const mapStateToProps = (({PROCESS}) => ({
  activeCity: PROCESS.city,
  cities: PROCESS.cities,
  sortingType: PROCESS.sortingType
}));

// связывает методы сo store
const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  updateOffers(sortingType) {
    dispatch(ActionCreator.updateOffers());
    switch (sortingType) {
      case SotringType.POPULAR:
        dispatch(ActionCreator.sortPopular());
        break;
      case SotringType.LOW_TO_HIGH:
        dispatch(ActionCreator.sortLowToHigh());
        break;
      case SotringType.HIGH_TO_LOW:
        dispatch(ActionCreator.sortHighToLow());
        break;
      case SotringType.TOP_RATED:
        dispatch(ActionCreator.sortTopRated());
    }
  }
}));

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
