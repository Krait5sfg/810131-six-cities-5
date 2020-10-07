import React from 'react';
import PropTypes from 'prop-types';
import {TypeAccomodation} from '../../utils/const';
import {getRating} from '../../utils/common';
import {PropertyType} from '../../utils/property-type';

const FavoritePlaceCard = ({favoriteOffer, onLinkCardClick}) => {
  const {images, accommodation} = favoriteOffer;
  const [firstImage] = images;
  const {price, rating, title, type} = accommodation;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={onLinkCardClick}>
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
          <a href="#" onClick={onLinkCardClick}>{title}</a>
        </h2>
        <p className="place-card__type">{TypeAccomodation[type.toUpperCase()]}</p>
      </div>
    </article >
  );
};

FavoritePlaceCard.propTypes = {
  onLinkCardClick: PropTypes.func.isRequired,
  favoriteOffer: PropertyType.OFFER,
};

export default FavoritePlaceCard;
