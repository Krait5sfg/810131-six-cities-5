import React from 'react';
import PropTypes from 'prop-types';
import {TypeAccomodation} from '../../utils/const';
import {getRating} from '../../utils/common';

const FavoritePlaceCard = ({favoriteOffer}) => {
  const {images, accommodation} = favoriteOffer;
  const [firstImage] = images;
  const {price, rating, title, type} = accommodation;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={firstImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}{` `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
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

FavoritePlaceCard.propTypes = {
  favoriteOffer: PropTypes.shape({
    images: PropTypes.array.isRequired,
    accommodation: PropTypes.shape({
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired
};

export default FavoritePlaceCard;
