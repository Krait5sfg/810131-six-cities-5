import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardList from '../place-card-list/place-card-list';
import {OfferPropTypes} from '../../utils/property-type';
import Map from '../map/map';
import {TypePage} from '../../utils/const';
import {connect} from 'react-redux';
import CityList from '../city-list/city-list';
import Sorting from '../sorting/sorting';

const MainPage = ({city, offers, onLinkEmailClick}) => {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#" onClick={onLinkEmailClick}>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <Sorting />
              <PlaceCardList offers={offers} typePage={TypePage.MAIN} />
            </section>
            <div className="cities__right-section">
              <Map
                typePage={TypePage.MAIN}
                city={city}
                offers={offers}
              />
            </div>
          </div >
        </div >
      </main >
    </div >
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onLinkEmailClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

// связывает store c пропсами компонента
const mapStateToProps = (({city, offers}) => ({
  city,
  offers,
}));

export {MainPage};
export default connect(mapStateToProps)(MainPage);
