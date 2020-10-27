import {ActionCreator} from '../store/action';
import {adaptToClient} from '../utils/common';
import {AuthorizationStatus} from '../utils/const';

export const getOffersFromApi = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const modifiedToClientOffers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.loadOffers(modifiedToClientOffers));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => {
      throw error;
    })
);

