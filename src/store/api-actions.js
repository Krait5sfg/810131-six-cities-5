import {ActionCreator} from '../store/action';
import {adaptToClient} from '../utils/common';
import {AuthorizationStatus} from '../utils/const';

const Request = {
  AUTHORIZATION: `/login`,
  OFFER_DATA: `/hotels`,
};

export const getOffersFromApi = () => (dispatch, _getState, api) => (
  api.get(Request.OFFER_DATA)
    .then(({data}) => {
      const modifiedToClientOffers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.loadOffers(modifiedToClientOffers));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Request.AUTHORIZATION)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => {
      throw error;
    })
);

