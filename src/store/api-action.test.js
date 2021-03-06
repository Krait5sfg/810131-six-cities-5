import {getOffersFromApi, checkAuth, login, getActiveOffer, getNearbyOffers, getActiveOfferComments, sendComment, getFavoriteOffers, sendFavoriteStatus} from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import {adaptToClient, adaptToClientUserData, adaptToClientComments} from '../utils/common';
import {Request} from '../utils/const';
import {createApi} from '../services/api';
import {ActionType} from './action';
import {AuthorizationStatus} from '../utils/const';

const ID = 1;
const FAVORITE_STATUS = 0;
const SUCCESS_CODE_REQUEST = 200;

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
      .reply(SUCCESS_CODE_REQUEST, [offerFromApi]);

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
      .reply(SUCCESS_CODE_REQUEST, userDataFromApi);

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_USER,
          payload: adaptToClientUserData(userDataFromApi),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a error API call to get /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const errorLoader = checkAuth();

    apiMock
      .onGet(Request.AUTHORIZATION)
      .reply(401);

    return errorLoader(dispatch, () => {}, api)
      .catch((error) => {
        expect(error).toEqual(error);
      });
  });

  it(`Should make a correct API call to post /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({login: `Oliver.conner@gmail.com`, password: `123`});

    apiMock
      .onPost(Request.AUTHORIZATION)
      .reply(SUCCESS_CODE_REQUEST, userDataFromApi);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_USER,
          payload: adaptToClientUserData(userDataFromApi),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const activOfferLoader = getActiveOffer(ID);

    apiMock
      .onGet(`${Request.OFFER_DATA}/${ID}`)
      .reply(SUCCESS_CODE_REQUEST, offerFromApi);

    return activOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_ACTIVE_OFFER,
          payload: adaptToClient(offerFromApi),
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = getNearbyOffers(ID);

    apiMock
      .onGet(`${Request.OFFER_DATA}/${ID}/nearby`)
      .reply(200, [offerFromApi]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_NEARBY_OFFERS,
          payload: [adaptToClient(offerFromApi)],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const activeOfferCommentsLoader = getActiveOfferComments(ID);

    apiMock
      .onGet(`${Request.OFFER_COMMENT}${ID}`)
      .reply(SUCCESS_CODE_REQUEST, [commentFromApi]);

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
      .reply(SUCCESS_CODE_REQUEST, [offerFromApi]);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_OFFERS,
          payload: [adaptToClient(offerFromApi)],
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoriteOffersLoader = sendFavoriteStatus(ID, FAVORITE_STATUS);

    apiMock
      .onPost(`${Request.FAVORITE}/${ID}/${FAVORITE_STATUS}`)
      .reply(SUCCESS_CODE_REQUEST, offerFromApi);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS,
          payload: adaptToClient(offerFromApi),
        });
      });
  });

});

