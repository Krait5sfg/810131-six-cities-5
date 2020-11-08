import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../utils/property-type';
import {TypePage} from '../../utils/const';

const PlaceCardList = ({offers, typePage, onFavoriteButtonClick}) => {

  const placeCards = offers.map((offer) => {
    return (
      <PlaceCard offer={offer}
        key={offer.id}
        typePage={typePage}
        onFavoriteButtonClick={onFavoriteButtonClick}
      />
    );
  });

  let elementClassName = ``;
  if (typePage === TypePage.MAIN) {
    elementClassName = `cities__places-list tabs__content`;
  } else if (typePage === TypePage.OFFER) {
    elementClassName = `near-places__list`;
  }

  return (
    <div className={`${elementClassName} places__list`}>
      {placeCards}
    </div >
  );

};

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  typePage: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired
};

export default PlaceCardList;
