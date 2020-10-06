import React from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../utils/common';
import {TypeAccomodation} from '../../utils/const';

const PlaceCard = ({offer, handlePlaceCardMouseEnter}) => {

  const {id, images, accommodation, isFavorites} = offer;
  const {isPremium, price, title, type} = accommodation;
  const [firstImage] = images;

  const rating = getRating(offer.accommodation.rating);

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => handlePlaceCardMouseEnter(id)}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={firstImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}{` `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorites ? `place-card__bookmark-button button place-card__bookmark-button--active` : `place-card__bookmark-button button `} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{TypeAccomodation[type.toUpperCase()]}</p>
      </div>
    </article >
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    city: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    accommodation: PropTypes.shape({
      isPremium: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      bedroomsCount: PropTypes.string.isRequired,
      guestsLimit: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.array.isRequired,
    }).isRequired,
    isFavorites: PropTypes.bool.isRequired,
  }).isRequired,
  handlePlaceCardMouseEnter: PropTypes.func.isRequired
};

export default PlaceCard;