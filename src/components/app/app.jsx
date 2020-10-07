import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';
import {City} from '../../utils/const';
import {PropertyType} from '../../utils/property-type';

const App = ({offers, reviews}) => {

  const [firstOffer] = offers;
  const favoriteOffers = offers.filter((offer) => offer.isFavorites ? true : false);
  const amsterdamOffers = offers.filter((offer) => offer.city === City.AMSTERDAM ? true : false);


  const handleLinkEmailClick = (evt, history) => {
    evt.preventDefault();
    history.push(`/favorites`);
  };

  const handleLinkCardClick = (evt, history) => {
    evt.preventDefault();
    history.push(`/offer/1704`);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <MainPage
            leaseCount={amsterdamOffers.length}
            offers={amsterdamOffers}
            onLinkCardClick={(evt) => handleLinkCardClick(evt, history)}
            onLinkEmailClick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites" render={({history}) => (
          <FavoritePage favoriteOffers={favoriteOffers}
            onLinkCardClick={(evt) => handleLinkCardClick(evt, history)} />
        )}>
        </Route>
        <Route exact path="/offer/:id" render={({history}) => (
          <OfferPage
            offer={firstOffer}
            reviews={reviews}
            onLinkEmailCick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropertyType.OFFER).isRequired,
  reviews: PropTypes.arrayOf(PropertyType.REVIEW).isRequired,
};

export default App;
