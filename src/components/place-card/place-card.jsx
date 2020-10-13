import React from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../utils/common';
import {TypeAccommodation} from '../../utils/const';
import {OfferPropTypes} from '../../utils/property-type';
import {Link} from 'react-router-dom';


const PlaceCard = ({offer, onPlaceCardMouseEnter}) => {

  const {id, images, accommodation, isFavorite} = offer;
  const {isPremium, price, title, type, rating} = accommodation;
  const [firstImage] = images;

  const formattedRating = getRating(rating);
  const favoriteButtonClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onPlaceCardMouseEnter(id)}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer/:1704">
          <img className="place-card__image" src={firstImage} width="260" height="200" alt="Place image" />
        </ Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}{` `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favoriteButtonClass}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: formattedRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/:1704">{title}</Link>
        </h2>
        <p className="place-card__type">{TypeAccommodation[type.toUpperCase()]}</p>
      </div>
    </article >
  );
};

PlaceCard.propTypes = {
  onPlaceCardMouseEnter: PropTypes.func.isRequired,
  offer: OfferPropTypes,
};

export default PlaceCard;
