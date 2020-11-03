import {getOffersFromApi} from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import {adaptToClient} from '../utils/common';
import {createApi} from '../services/api';
import {ActionType} from './action';

const api = createApi(() => {});

const offerFromApi = {
  city: {},
  host: {},
  location: {}
};

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to / hotels`, () => {
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
});
