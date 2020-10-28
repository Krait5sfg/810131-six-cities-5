import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLocationList from '../favorite-location-list/favorite-location-list';
import {OfferPropTypes} from '../../utils/property-type';
import User from '../user/user';

const FavoritePage = ({favoriteOffers, onLinkEmailClick}) => {

  const isEmpty = favoriteOffers.length ? false : true;
  const classNameForDiv = isEmpty ? `page--favorites-empty` : ``;
  const classNameForMain = isEmpty ? `page__main--favorites-empty` : ``;
  const classNameForFavoriteSection = isEmpty ? `favorites--empty` : ``;

  const allCities = favoriteOffers.map((offer) => offer.city);
  const uniqueCities = [...new Set(allCities)];

  const favoriteLocationListElements = uniqueCities.map((city, index) => {
    const cityFavoriteOffers = favoriteOffers.filter((offer) => offer.city === city);
    return (
      <FavoriteLocationList
        city={city}
        key={index}
        cityFavoriteOffers={cityFavoriteOffers} />
    );
  });

  return (
    <div className={`page ${classNameForDiv}`}>
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

      <main className={`page__main page__main--favorites ${classNameForMain}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${classNameForFavoriteSection}`}>
            {isEmpty ?
              <React.Fragment>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </React.Fragment>
              :
              <React.Fragment>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoriteLocationListElements}
                </ul>
              </React.Fragment>
            }
          </section>

        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div >
  );
};

FavoritePage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onLinkEmailClick: PropTypes.func.isRequired
};

export default FavoritePage;
