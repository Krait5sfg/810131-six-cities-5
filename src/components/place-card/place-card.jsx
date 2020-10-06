import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = ({offer}) => {

  const getRating = (rating) => {
    let result = ``;
    switch (Math.floor(rating)) {
      case 1:
        result = `20%`;
        break;
      case 2:
        result = `40%`;
        break;
      case 3:
        result = `60%`;
        break;
      case 4:
        result = `80%`;
        break;
      case 5:
        result = `100%`;
    }
    return result;
  };
  const rating = getRating(offer.accommodation.rating);

  return (
    <article key={offer.id} className="cities__place-card place-card">
      <div className="place-card__mark">
        {offer.accommodation.isPremium ? <span>Premium</span> : <span />}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.accommodation.price}{` `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
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
          <a href="#">{offer.accommodation.title}</a>
        </h2>
        <p className="place-card__type">{offer.accommodation.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired
};

export default PlaceCard;
