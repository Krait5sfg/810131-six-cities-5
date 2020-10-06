import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLocationList from '../favorite-location-list/favorite-location-list';

const FavoritePage = ({favoriteOffers}) => {

  const allCities = favoriteOffers.map((offer) => offer.city);
  const uniqueCities = [...new Set(allCities)];

  const favoriteLocationListElements = uniqueCities.map((city, index) => {
    const cityFavoriteOffers = favoriteOffers.filter((offer) => offer.city === city);
    return (
      <FavoriteLocationList city={city} key={index} cityFavoriteOffers={cityFavoriteOffers} />
    );
  });

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
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteLocationListElements}
            </ul>
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
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape({
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
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    isFavorites: PropTypes.bool.isRequired,
  })).isRequired,
};

export default FavoritePage;
