import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {PagePath, AuthorizationStatus} from '../../utils/const';
import {OfferPropTypes} from '../../utils/property-type';

const PrivateRoute = ({component: FavoritePage, path, exact, authorizationStatus, favoriteOffers}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => authorizationStatus === AuthorizationStatus.NO_AUTH
        ? <Redirect to={PagePath.LOGIN} />
        : <FavoritePage favoriteOffers={favoriteOffers} />} />
  );
};

const mapStateToProps = (({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
}));

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
