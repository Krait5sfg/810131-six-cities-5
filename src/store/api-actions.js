import {ActionCreator} from '../store/action';
import {adaptToClient, adaptToClientUserData} from '../utils/common';
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

// проверка авторизован пользователь или нет
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Request.AUTHORIZATION)
    .then((response) => {
      dispatch(ActionCreator.updateUser(adaptToClientUserData(response.data)));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((error) => {
      throw error;
    })
);

// авторизация
export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Request.AUTHORIZATION, {email, password})
    .then((response) => {
      dispatch(ActionCreator.updateUser(adaptToClientUserData(response.data)));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
);
