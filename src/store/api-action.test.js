import {getOffersFromApi, checkAuth, login, getActiveOffer, getNearbyOffers, getActiveOfferComments, sendComment, getFavoriteOffers, sendFavoriteStatus} from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import {adaptToClient, adaptToClientUserData, adaptToClientComments} from '../utils/common';
import {Request} from '../utils/const';
import {createApi} from '../services/api';
import {ActionType, ActionCreator} from './action';

const ID = 1;
const FAVORITE_STATUS = 0;

const api = createApi(() => {});

const offerFromApi = {
  city: {},
  host: {},
  location: {}
};

const userDataFromApi = {
  "avatar_url": ``,
  "email": ``,
  "id": 1,
  "is_pro": false,
  "name": ``
};

const commentFromApi = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1,
  "rating": 4,
  "user": {
    "avatar_url": `img/1.png`,
    "id": 4,
    "is_pro": false,
    "name": `Max`
  }
};

const commentFromApplication = {
  review: `some text`,
  rating: `3`
};

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = getOffersFromApi();
    apiMock
      .onGet(Request.OFFER_DATA)
      .reply(200, [offerFromApi]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptToClient(offerFromApi)],
        });
      });
  });

  it(`Should make a correct API call to get /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = checkAuth();

    apiMock
      .onGet(Request.AUTHORIZATION)
      .reply(200, userDataFromApi);

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_USER,
          payload: adaptToClientUserData(userDataFromApi),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`,
        });
      });
  });

  it(`Should make a correct API call to post /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({login: `Oliver.conner@gmail.com`, password: `123`});

    apiMock
      .onPost(Request.AUTHORIZATION)
      .reply(200, userDataFromApi);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_USER,
          payload: adaptToClientUserData(userDataFromApi),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`,
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const activOfferLoader = getActiveOffer(ID);

    apiMock
      .onGet(`${Request.OFFER_DATA}/${ID}`)
      .reply(200, {
        city: {},
        host: {},
        location: {},
        id: 1
      });

    return activOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_ACTIVE_OFFER,
          payload: adaptToClient({
            city: {},
            host: {},
            location: {},
            id: 1
          }),
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = getNearbyOffers(ID);

    apiMock
      .onGet(`${Request.OFFER_DATA}/${ID}/nearby`)
      .reply(200, [{
        city: {},
        host: {},
        location: {},
        id: 1
      }]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_NEARBY_OFFERS,
          payload: [adaptToClient({
            city: {},
            host: {},
            location: {},
            id: 1
          })],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const activeOfferCommentsLoader = getActiveOfferComments(ID);

    apiMock
      .onGet(`${Request.OFFER_COMMENT}${ID}`)
      .reply(200, [commentFromApi]);

    return activeOfferCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_ACTIVE_OFFER_COMMENTS,
          payload: [adaptToClientComments(commentFromApi)],
        });
      });
  });

  it(`Should make a correct API call to post /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sentCommentLoader = sendComment(ID, commentFromApplication);

    apiMock
      .onPost(`${Request.OFFER_COMMENT}${ID}`)
      .reply(200, [commentFromApi]);

    return sentCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_ACTIVE_OFFER_COMMENTS,
          payload: [adaptToClientComments(commentFromApi)],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = getFavoriteOffers();

    apiMock
      .onGet(Request.FAVORITE)
      .reply(200, [offerFromApi]);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_OFFERS,
          payload: [adaptToClient(offerFromApi)],
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/1 on main page`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoriteOffersLoader = sendFavoriteStatus(ID, FAVORITE_STATUS, ActionCreator.changeFavoriteStatusInAllOffers);

    apiMock
      .onPost(`${Request.FAVORITE}/${ID}/${FAVORITE_STATUS}`)
      .reply(200, offerFromApi);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS_IN_ALL_OFFERS,
          payload: adaptToClient(offerFromApi),
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/1 on offer page in nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const nearbyFaforiteOffersLoader = sendFavoriteStatus(ID, FAVORITE_STATUS, ActionCreator.changeFavoriteStatusNearbyOffers);

    apiMock
      .onPost(`${Request.FAVORITE}/${ID}/${FAVORITE_STATUS}`)
      .reply(200, offerFromApi);

    return nearbyFaforiteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS_IN_NEARBY_OFFERS,
          payload: adaptToClient(offerFromApi),
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/1 on offer page in active offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoriteActiveOfferLoader = sendFavoriteStatus(ID, FAVORITE_STATUS, ActionCreator.changeFavoriteStatusActiveOffer);

    apiMock
      .onPost(`${Request.FAVORITE}/${ID}/${FAVORITE_STATUS}`)
      .reply(200, offerFromApi);

    return favoriteActiveOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS_IN_ACTIVE_OFFER,
          payload: adaptToClient(offerFromApi),
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/1 on favorite page`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoriteOffersLoader = sendFavoriteStatus(ID, FAVORITE_STATUS, ActionCreator.removeNoFavoriteOffer);

    apiMock
      .onPost(`${Request.FAVORITE}/${ID}/${FAVORITE_STATUS}`)
      .reply(200, offerFromApi);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REMOVE_NO_FAVORITE_OFFER,
          payload: adaptToClient(offerFromApi),
        });
      });
  });

});

