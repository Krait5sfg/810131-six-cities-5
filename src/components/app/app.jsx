import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';
import {City} from '../../utils/const';
import {OfferPropTypes, ReviewPropTypes} from '../../utils/property-type';


const PagePath = {
  MAIN: `/`,
  FAVORITE: `/favorites`,
  LOGIN: `/login`
};

const App = ({offers, reviews}) => {

  const [firstOffer] = offers;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const amsterdamOffers = offers.filter((offer) => offer.city === City.AMSTERDAM);


  const handleLinkEmailClick = (evt, history) => {
    evt.preventDefault();
    history.push(PagePath.FAVORITE);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PagePath.MAIN} render={({history}) => (
          <MainPage
            offers={amsterdamOffers}
            onLinkEmailClick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
        <Route exact path={PagePath.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={PagePath.FAVORITE}>
          <FavoritePage favoriteOffers={favoriteOffers} />
        </Route>
        <Route exact path={`/offer/:id`} render={({history}) => (
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
