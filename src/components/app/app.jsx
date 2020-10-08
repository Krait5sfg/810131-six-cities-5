import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';
import {City} from '../../utils/const';
import {OfferPropTypes, ReviewPropTypes} from '../../utils/property-type';

const ID = 1704;

const PagePath = {
  MAIN: `/`,
  FAVORITE: `/favorites`,
  OFFER: `/offer/:id`,
  LOGIN: `/login`
};

const App = ({offers, reviews}) => {

  const [firstOffer] = offers;
  const favoriteOffers = offers.filter((offer) => offer.isFavorites);
  const amsterdamOffers = offers.filter((offer) => offer.city === City.AMSTERDAM);


  const handleLinkEmailClick = (evt, history) => {
    evt.preventDefault();
    history.push(PagePath.FAVORITE);
  };

  const handleLinkCardClick = (evt, history) => {
    evt.preventDefault();
    history.push(`${PagePath.OFFER}${ID}`);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PagePath.MAIN} render={({history}) => (
          <MainPage
            offers={amsterdamOffers}
            onLinkCardClick={(evt) => handleLinkCardClick(evt, history)}
            onLinkEmailClick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
        <Route exact path={PagePath.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={PagePath.FAVORITE} render={({history}) => (
          <FavoritePage favoriteOffers={favoriteOffers}
            onLinkCardClick={(evt) => handleLinkCardClick(evt, history)} />
        )}>
        </Route>
        <Route exact path={PagePath.OFFER} render={({history}) => (
          <OfferPage
            offer={firstOffer}
            reviews={reviews}
            onLinkEmailClick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default App;
