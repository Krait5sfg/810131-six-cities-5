import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../utils/common';
import {TypeAccommodation} from '../../utils/const';
import ReviewForm from '../review-form/review-form';
import {OfferPropTypes, ReviewPropTypes} from '../../utils/property-type';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import {TypePage} from '../../utils/const';
import PlaceCardList from '../place-card-list/place-card-list';
import {connect} from 'react-redux';
import User from '../user/user';
import {AuthorizationStatus} from '../../utils/const';
import {getActiveOffer} from '../../store/api-actions';


const MAX_IMAGE_ON_PAGE = 6;
const MAX_OFFER_ON_PAGE = 3;

class OfferPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {idActiveOffer, updateActiveOffer} = this.props;

    // Запрос на сервер для получения активного предложения
    updateActiveOffer(idActiveOffer);
  }

  render() {
    const {offer} = this.props;
    if (Object.keys(offer).length) {
      const {offers, reviews, onLinkEmailClick, city, authorizationStatus} = this.props;
      const {id, images, accommodation, host, description, isFavorite} = offer;
      const {isPremium, rating, title, type, bedroomsCount, guestsLimit, price, features} = accommodation;

      // три предложения за исключением выведенного на страницу
      const otherOffers = offers.filter((offering) => offering.id !== id && offering.city === city).slice(0, MAX_OFFER_ON_PAGE);

      const offerPageReviews = reviews
        .filter((review) => review.offerId === id)
        .sort((firstReview, secondReview) => firstReview < secondReview ? -1 : 1);


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
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="/">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <User onLinkEmailClick={onLinkEmailClick} />
                  </ul>
                </nav>
              </div>
            </div>
          </header>

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
                    <button className={`property__bookmark-button button ${favoriteButtonClass}`} type="button">
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
                    <ReviewList offerPageReviews={offerPageReviews} />
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <ReviewForm /> : ``}
                  </section>
                </div>
              </div>
              <Map typePage={TypePage.OFFER} city={city} offers={otherOffers} />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <PlaceCardList offers={otherOffers} typePage={TypePage.OFFER} />
              </section>
            </div>
          </main>
        </div >
      );
    }
    return <h2 style={{position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>Loading...</h2>;
  }
}

OfferPage.propTypes = {
  onLinkEmailClick: PropTypes.func.isRequired,
  offer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    OfferPropTypes
  ]),
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  idActiveOffer: PropTypes.number.isRequired,
  updateActiveOffer: PropTypes.func.isRequired
};

// связывает store c пропсами компонента
const mapStateToProps = (({PROCESS, USER, DATA}) => ({
  city: PROCESS.city,
  authorizationStatus: USER.authorizationStatus,
  idActiveOffer: PROCESS.idActiveOffer,
  offer: DATA.activeOffer
}));

const mapDispatchToProps = ((dispatch) => ({
  updateActiveOffer(id) {
    dispatch(getActiveOffer(id));
  }
}));

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
