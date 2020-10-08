import React from 'react';
import PropTypes from 'prop-types';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import {OfferPropTypes} from '../../utils/property-type';

const FavoriteLocationList = ({city, cityFavoriteOffers, onLinkCardClick}) => {

  const cityFavoriteOffersElements = cityFavoriteOffers.map((offer, index) => {
    return (
      <FavoritePlaceCard favoriteOffer={offer} key={index} onLinkCardClick={onLinkCardClick} />
    );
  });

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityFavoriteOffersElements}
      </div>
    </li>
  );
};

FavoriteLocationList.propTypes = {
  onLinkCardClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  cityFavoriteOffers: PropTypes.arrayOf(OfferPropTypes).isRequired
};

export default FavoriteLocationList;
