import React from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../utils/common';
import {offerPropTypes} from '../../utils/property-type';
import {Link} from 'react-router-dom';
import {TypeAccommodation, PagePath, FavoriteStatus, TypePage} from '../../utils/const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {sendFavoriteStatus} from '../../store/api-actions';
import {REMOVAL_ID_VALUE} from '../../utils/const';

const PlaceCard = ({offer, typePage, updateIdActiveCardForMap, onFavoriteButtonClick, updateFavoriteStatus}) => {

  const {id, previewImage, accommodation, isFavorite} = offer;
  const {isPremium, price, title, type, rating} = accommodation;
  const formattedRating = getRating(rating);
  const favoriteButtonClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  let classNameArticleTag = ``;
  let classNameFirstDivTag = ``;
  if (typePage === TypePage.MAIN) {
    classNameArticleTag = `cities__place-card`;
    classNameFirstDivTag = `cities__image-wrapper`;
  } else if (typePage === TypePage.OFFER) {
    classNameArticleTag = `near-places__card`;
    classNameFirstDivTag = `near-places__image-wrapper`;
  }

  return (
    <article
      className={`${classNameArticleTag} place-card`}
      onMouseEnter={() => typePage === TypePage.MAIN ? updateIdActiveCardForMap(id) : false}
      onMouseLeave={() => typePage === TypePage.MAIN ? updateIdActiveCardForMap(REMOVAL_ID_VALUE) : false}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className={`${classNameFirstDivTag} place-card__image-wrapper`}>
        <Link to={`${PagePath.OFFER}${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </ Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}{` `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favoriteButtonClass}`}
            type="button"
            onClick={(evt) => {
              onFavoriteButtonClick(evt);
              updateFavoriteStatus(id, isFavorite ? FavoriteStatus.REMOVAL : FavoriteStatus.ADDITION);
            }}>
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
          <Link to={`${PagePath.OFFER}${id}`} >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{TypeAccommodation[type.toUpperCase()]}</p>
      </div>
    </article >
  );
};

PlaceCard.propTypes = {
  updateIdActiveCardForMap: PropTypes.func.isRequired,
  offer: offerPropTypes,
  typePage: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  updateIdActiveCardForMap(id) {
    dispatch(ActionCreator.updateIdActiveCardForMap(id));
  },
  updateFavoriteStatus(id, status) {
    dispatch(sendFavoriteStatus(id, status));
  }
}));

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
