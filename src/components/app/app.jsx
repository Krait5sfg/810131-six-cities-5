import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';
import {OfferPropTypes} from '../../utils/property-type';
import {PagePath, AuthorizationStatus} from '../../utils/const';
import {connect} from 'react-redux';
import {selectCityOffers} from '../../selector/selector';
import PrivateRoute from '../private-route/private-route';

const App = ({allOffers, offers, city, authorizationStatus}) => {

  const favoriteOffers = allOffers.filter((offer) => offer.isFavorite);

  const onLinkEmailClick = (evt, history) => {
    evt.preventDefault();
    history.push(authorizationStatus === AuthorizationStatus.NO_AUTH
      ? PagePath.LOGIN
      : PagePath.FAVORITE);
  };

  const onFavoriteButtonClick = (evt, history) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(PagePath.LOGIN);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PagePath.MAIN} render={({history}) => (
          <MainPage
            offers={offers}
            city={city}
            onLinkEmailClick={(evt) => onLinkEmailClick(evt, history)}
            onFavoriteButtonClick={(evt) => onFavoriteButtonClick(evt, history)}
          />
        )}>
        </Route>
        <Route exact path={PagePath.LOGIN}>
          <LoginPage city={city} />
        </Route>
        <PrivateRoute
          render={({history}) => {
            return (
              <FavoritePage
                favoriteOffers={favoriteOffers}
                onLinkEmailClick={(evt) => onLinkEmailClick(evt, history)} />
            );
          }}
          path={PagePath.FAVORITE}
          exact />
        <Route exact path={`${PagePath.OFFER}:id`} render={({history, match}) => (
          <OfferPage
            idActiveOffer={+match.params.id}
            onLinkEmailClick={(evt) => onLinkEmailClick(evt, history)}
            onFavoriteButtonClick={(evt) => onFavoriteButtonClick(evt, history)}
          />
        )}>
        </Route>
      </Switch>
    </BrowserRouter >
  );
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (({DATA, PROCESS, USER}) => ({
  allOffers: DATA.allOffers,
  offers: selectCityOffers({DATA, PROCESS}),
  city: PROCESS.city,
  authorizationStatus: USER.authorizationStatus,
}));

export {App};
export default connect(mapStateToProps)(App);
