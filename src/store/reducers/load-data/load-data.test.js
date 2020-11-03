import {ActionType} from '../../action';
import {loadData} from './load-data';
import {createApi} from '../../../services/api';
import {getOffersFromApi} from '../../api-actions';
import MockAdapter from 'axios-mock-adapter';

const api = createApi(() => {});

const offers = [
  {
    accommodation: {
      bedroomsCount: 1,
      features: [`Dishwasher`, `Towels`, `Washer`, `Fridge`, `Breakfast`, `Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 2,
      isPremium: true,
      price: 241,
      rating: 4.4,
      title: `The Joshua Tree House`,
      type: `room`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.237402, 6.797314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 1,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    accommodation: {
      bedroomsCount: 2,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 4,
      isPremium: false,
      price: 300,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.247402, 6.777314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 2,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    accommodation: {
      bedroomsCount: 3,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 3,
      isPremium: false,
      price: 400,
      rating: 3,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.257402, 6.787314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 3,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    accommodation: {
      bedroomsCount: 3,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 3,
      isPremium: false,
      price: 100,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.267402, 6.797314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 4,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    accommodation: {
      bedroomsCount: 4,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 2,
      isPremium: true,
      price: 200,
      rating: 5,
      title: `Beatufil place`,
      type: `room`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.277402, 6.807314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 5,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: true,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(loadData(void 0, {})).toEqual({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(loadData({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })).toEqual({
    allOffers: offers,
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = getOffersFromApi();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});
