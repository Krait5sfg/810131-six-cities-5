import {ActionCreator} from '../store/action';
import {adaptToClient, adaptToClientUserData, adaptToClientComments} from '../utils/common';
import {AuthorizationStatus} from '../utils/const';

const Request = {
  AUTHORIZATION: `/login`,
  OFFER_DATA: `/hotels`,
  OFFER_COMMENT: `/comments/`
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

// запрос активного предложения
export const getActiveOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${Request.OFFER_DATA}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateActiveOffer(adaptToClient(data)));
    })
);

// запрос предложений неподалеку
export const getNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${Request.OFFER_DATA}/${id}/nearby`)
    .then(({data}) => {
      const modifiedToClientNearbyOffers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.updateNearbyOffers(modifiedToClientNearbyOffers));
    })
);

// запрос комментариев активного предложения
export const getActiveOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`${Request.OFFER_COMMENT}${id}`)
    .then(({data}) => {
      const modifiedComments = data.map((comment) => adaptToClientComments(comment));
      dispatch(ActionCreator.updateActiveOfferComments(modifiedComments));
    })
);
