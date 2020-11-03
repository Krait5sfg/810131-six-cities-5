import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../utils/common';
import {TypeAccommodation} from '../../utils/const';
import ReviewForm from '../review-form/review-form';
import {OfferPropTypes} from '../../utils/property-type';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import {TypePage} from '../../utils/const';
import PlaceCardList from '../place-card-list/place-card-list';
import {connect} from 'react-redux';
import User from '../user/user';
import {AuthorizationStatus, FavoriteStatus} from '../../utils/const';
import {getActiveOffer, getNearbyOffers, sendFavoriteStatus} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import Header from '../header/header';
import Loading from '../loading/loading';

const MAX_IMAGE_ON_PAGE = 6;

class OfferPage extends PureComponent {

  componentDidUpdate(previousProps) {
    const {idActiveOffer, updateActiveOffer, updateNearbyOffers} = this.props;
    if (previousProps.idActiveOffer !== idActiveOffer) {
      updateActiveOffer(idActiveOffer);
      updateNearbyOffers(idActiveOffer);
    }

  }

  componentDidMount() {
    const {idActiveOffer, updateActiveOffer, updateNearbyOffers} = this.props;

    // Запросы на сервер
    updateActiveOffer(idActiveOffer);
    updateNearbyOffers(idActiveOffer);

  }

  render() {
    const {offer, nearbyOffers} = this.props;
    if (Object.keys(offer).length && nearbyOffers.length) {
      const {onLinkEmailClick, authorizationStatus, onFavoriteButtonClick, updateFavoriteStatus} = this.props;
      const {id, images, accommodation, host, description, city, isFavorite} = offer;
      const {isPremium, rating, title, type, bedroomsCount, guestsLimit, price, features} = accommodation;

      const favoriteButtonClass = isFavorite ? `property__bookmark-button--active` : ``;

      const forRenderImages = images.length > MAX_IMAGE_ON_PAGE ? images.slice(0, MAX_IMAGE_ON_PAGE) : [...images];

      const imagesElements = forRenderImages.map((image, index) => {
        return (
          <div className="property__image-wrapper" key={index}>
            <img className="property__image" src={image} alt="Photo studio" />
          </div>
        );
      });

      const featuresElements = features.map((feature, index) => {
        return (
          <li className="property__inside-item" key={index}>
            {feature}
          </li>
        );
      });

      const premiumMarkElement = isPremium ? <div className="property__mark"><span>Premium</span></div> : ``;

      return (
        <div className="page">
          <Header>
            <User onLinkEmailClick={onLinkEmailClick} />
          </Header>

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {imagesElements}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {premiumMarkElement}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <button className={`property__bookmark-button button ${favoriteButtonClass}`}
                      type="button"
                      onClick={
                        (evt) => {
                          onFavoriteButtonClick(evt);
                          updateFavoriteStatus(id, isFavorite ? FavoriteStatus.REMOVAL : FavoriteStatus.ADDITION);
                        }
                      }>
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: getRating(rating)}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {TypeAccommodation[type.toUpperCase()]}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedroomsCount} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {guestsLimit} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;{` `}night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {featuresElements}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                        <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="property__user-name">
                        {host.name}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {description}
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <ReviewList idActiveOffer={id} />
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <ReviewForm idActiveOffer={id} /> : ``}
                  </section>
                </div>
              </div>
              <Map typePage={TypePage.OFFER} city={city} />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <PlaceCardList offers={nearbyOffers} typePage={TypePage.OFFER} onFavoriteButtonClick={onFavoriteButtonClick} />
              </section>
            </div>
          </main>
        </div >
      );
    }
    return <Loading />;
  }
}

OfferPage.propTypes = {
  onLinkEmailClick: PropTypes.func.isRequired,
  offer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    OfferPropTypes
  ]),
  nearbyOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  idActiveOffer: PropTypes.number.isRequired,
  updateActiveOffer: PropTypes.func.isRequired,
  updateNearbyOffers: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired
};

// связывает store c пропсами компонента
const mapStateToProps = (({USER, DATA}) => ({
  authorizationStatus: USER.authorizationStatus,
  offer: DATA.activeOffer,
  nearbyOffers: DATA.nearbyOffers,
}));

const mapDispatchToProps = ((dispatch) => ({
  updateActiveOffer(id) {
    dispatch(getActiveOffer(id));
  },
  updateNearbyOffers(id) {
    dispatch(getNearbyOffers(id));
  },
  updateFavoriteStatus(id, status) {
    dispatch(sendFavoriteStatus(id, status, ActionCreator.changeFavoriteStatusActiveOffer));
  }
}));

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
