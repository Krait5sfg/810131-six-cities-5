import React from 'react';
import PropTypes from 'prop-types';

const YesPlace = ({offerCount, city, children}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCount} places to stay in {city}</b>
      {children}
    </section>
  );
};

YesPlace.propTypes = {
  offerCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default YesPlace;
