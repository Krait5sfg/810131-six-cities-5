import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';

const App = ({leaseCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage leaseCount={leaseCount} />
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
  leaseCount: PropTypes.number.isRequired
};

export default App;
