import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';
import {City} from '../../utils/const';

const App = ({leaseCount, offers, reviews}) => {

  const [firstOffer] = offers;
  const favoriteOffers = offers.filter((offer) => offer.isFavorites ? true : false);
  const amsterdamOffers = offers.filter((offer) => offer.city === City.AMSTERDAM ? true : false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage leaseCount={leaseCount} offers={amsterdamOffers} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritePage favoriteOffers={favoriteOffers} />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage offer={firstOffer} reviews={reviews} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  leaseCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    offerId: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    starsCount: PropTypes.number.isRequired,
    commentText: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
  })).isRequired,
};

export default App;
