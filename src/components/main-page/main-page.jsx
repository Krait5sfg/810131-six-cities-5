import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCardList from '../place-card-list/place-card-list';
import {OfferPropTypes} from '../../utils/property-type';
import Map from '../map/map';
import {TypePage} from '../../utils/const';
import CityList from '../city-list/city-list';
import Sorting from '../sorting/sorting';
import NoPlace from '../no-place/no-place';
import YesPlace from '../yes-place/yes-place';
import User from '../user/user';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {REMOVAL_ID_VALUE} from '../../utils/const';

class MainPage extends PureComponent {

  componentDidMount() {
    const {updateIdActiveCardForMap} = this.props;
    // сбрасывает id активной карточки
    updateIdActiveCardForMap(REMOVAL_ID_VALUE);
  }

  render() {
    const {city, offers, onLinkEmailClick, onFavoriteButtonClick} = this.props;
    // опред классы для стр. в зависимости пустая или нет
    const isMainPageEmpty = !offers.length;
    const classNameForMainTag = isMainPageEmpty ? `page__main--index-empty` : ``;
    const classNameForPlaceContainer = isMainPageEmpty ? `cities__places-container--empty` : ``;

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
                  <User onLinkEmailClick={onLinkEmailClick} />
                </ul>
              </nav>
            </div>
          </div >
        </header >

        <main className={`page__main page__main--index ${classNameForMainTag}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">
            <div className={`cities__places-container ${classNameForPlaceContainer} container`}>
              {isMainPageEmpty
                ? <NoPlace city={city} />
                : <YesPlace offerCount={offers.length} city={city}>
                  <Sorting />
                  <PlaceCardList offers={offers} typePage={TypePage.MAIN} onFavoriteButtonClick={onFavoriteButtonClick} />
                </YesPlace>
              }
              <div className="cities__right-section">
                {isMainPageEmpty
                  ? ``
                  : <Map
                    typePage={TypePage.MAIN}
                    city={city}
                  />}
              </div>
            </div >
          </div >
        </main >
      </div >
    );
  }
}

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onLinkEmailClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  updateIdActiveCardForMap: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  updateIdActiveCardForMap(id) {
    dispatch(ActionCreator.updateIdActiveCardForMap(id));
  }
}));

export {MainPage};
export default connect(null, mapDispatchToProps)(MainPage);
