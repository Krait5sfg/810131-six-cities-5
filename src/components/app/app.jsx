import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorite-page/favorite-page';
import OfferPage from '../offer-page/offer-page';
import {OfferPropTypes, ReviewPropTypes} from '../../utils/property-type';
import {PagePath} from '../../utils/const';
import {connect} from 'react-redux';

const App = ({allOffers, offers, reviews, city}) => {

  const [firstOffer] = allOffers;
  const favoriteOffers = allOffers.filter((offer) => offer.isFavorite);

  const handleLinkEmailClick = (evt, history) => {
    evt.preventDefault();
    history.push(PagePath.FAVORITE);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PagePath.MAIN} render={({history}) => (
          <MainPage
            offers={offers}
            city={city}
            onLinkEmailClick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
        <Route exact path={PagePath.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={PagePath.FAVORITE}>
          <FavoritePage favoriteOffers={favoriteOffers} />
        </Route>
        <Route exact path={`${PagePath.OFFER}:id`} render={({history}) => (
          <OfferPage
            offer={firstOffer}
            offers={offers}
            reviews={reviews}
            onLinkEmailClick={(evt) => handleLinkEmailClick(evt, history)} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (({allOffers, offers, city, reviews}) => ({
  allOffers,
  offers,
  city,
  reviews
}));

export {App};
export default connect(mapStateToProps)(App);
