import {ActionCreator} from '../store/action';
import {adaptToClient, adaptToClientUserData, adaptToClientComments} from '../utils/common';
import {AuthorizationStatus, Request} from '../utils/const';

// пустой catch нужен для того чтобы в консоли оставить только сетевые ошибки
// его нужно указывать во всех функциях потому подключение к API идет через экземпляр axious
export const getOffersFromApi = () => (dispatch, _getState, api) => (
  api.get(Request.OFFER_DATA)
    .then(({data}) => {
      const modifiedToClientOffers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.loadOffers(modifiedToClientOffers));
    }).catch(() => {})
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
    }).catch(() => {})
);

// запрос активного предложения
export const getActiveOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${Request.OFFER_DATA}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateActiveOffer(adaptToClient(data)));
    }).catch(() => {})
);

// запрос предложений неподалеку
export const getNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${Request.OFFER_DATA}/${id}/nearby`)
    .then(({data}) => {
      const modifiedToClientNearbyOffers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.updateNearbyOffers(modifiedToClientNearbyOffers));
    }).catch(() => {})
);

// запрос комментариев активного предложения
export const getActiveOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`${Request.OFFER_COMMENT}${id}`)
    .then(({data}) => {
      const modifiedComments = data.map((comment) => adaptToClientComments(comment));
      dispatch(ActionCreator.updateActiveOfferComments(modifiedComments));
    }).catch(() => {})
);

// отправка комментария. в ответ приходят все комментарии к предложению + новое
// {review: comment, rating} - это деструктуризация
export const sendComment = (id, {review: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${Request.OFFER_COMMENT}${id}`, {comment, rating})
    .then(({data}) => {
      const offerModifiedComments = data.map((oneComment) => adaptToClientComments(oneComment));
      dispatch(ActionCreator.updateActiveOfferComments(offerModifiedComments));
    }).catch(() => {})
);

// загрузка Избранных предложений
export const getFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(Request.FAVORITE)
    .then(({data}) => {
      const modifiedFavoriteOffers = data.map((favoriteOffer) => adaptToClient(favoriteOffer));
      dispatch(ActionCreator.updateFavoriteOffers(modifiedFavoriteOffers));
    }).catch(() => {})
);

// обновление статуса избранное в предложении.
// В зависимости от того где происходит вызов меняется атрибут action
export const sendFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${Request.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(ActionCreator.changeFavoriteStatus(adaptToClient(data)));
    }).catch(() => {})
);
