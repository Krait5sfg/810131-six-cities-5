import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';

const App = ({leaseCount, offers, reviews}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage leaseCount={leaseCount} offers={offers} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritePage />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  leaseCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
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
