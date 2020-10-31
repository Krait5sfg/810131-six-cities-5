import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FavoriteLocationList from '../favorite-location-list/favorite-location-list';
import {OfferPropTypes} from '../../utils/property-type';
import User from '../user/user';
import {connect} from 'react-redux';
import {getFavoriteOffers} from '../../store/api-actions';
import Header from '../header/header';

class FavoritePage extends PureComponent {

  componentDidMount() {
    const {updateFavoriteOffers} = this.props;
    updateFavoriteOffers();
  }

  render() {
    const {favoriteOffers, onLinkEmailClick} = this.props;
    const isEmpty = !favoriteOffers.length;
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
        <Header>
          <User onLinkEmailClick={onLinkEmailClick} />
        </Header>

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
  }
}

FavoritePage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onLinkEmailClick: PropTypes.func.isRequired,
  updateFavoriteOffers: PropTypes.func.isRequired
};

const mapStateToProps = (({DATA}) => {
  return {
    favoriteOffers: DATA.favoriteOffers
  };
});

const mapDispatchToProps = ((dispatch) => ({
  updateFavoriteOffers() {
    dispatch(getFavoriteOffers());
  },
}));

export {FavoritePage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
