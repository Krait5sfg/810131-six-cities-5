import {ActionCreator} from '../store/action';
import {adaptToClient} from '../utils/common';


export const getOffersFromApi = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const modifiedToClientOffers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.loadOffers(modifiedToClientOffers));
      dispatch(ActionCreator.updateOffers());
    })
);

