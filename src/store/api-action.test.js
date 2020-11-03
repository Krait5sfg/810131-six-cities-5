import {getOffersFromApi, checkAuth} from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import {adaptToClient, adaptToClientUserData, adaptToClientComments} from '../utils/common';
import {createApi} from '../services/api';
import {ActionType} from './action';

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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = getOffersFromApi();
    apiMock
      .onGet(`/hotels`)
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

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = checkAuth();

    apiMock
      .onGet(`/login`)
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
});

