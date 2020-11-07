import {ActionType} from '../../action';
import {loadData} from './load-data';

const offers = [{fake: true}, {fake: true}, {fake: true}];

const comments = [{fake: true}, {fake: true}, {fake: true}];

const offer = {fake: true};

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

it(`Reducer should update active offer`, () => {
  expect(loadData({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  }, {
    type: ActionType.UPDATE_ACTIVE_OFFER,
    payload: offer,
  })).toEqual({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: offer,
    nearbyOffers: [],
    favoriteOffers: []
  });
});

it(`Reducer should update nearbyOffers`, () => {
  expect(loadData({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  }, {
    type: ActionType.UPDATE_NEARBY_OFFERS,
    payload: offers,
  })).toEqual({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: offers,
    favoriteOffers: []
  });
});

it(`Reducer should update active offer comments`, () => {
  expect(loadData({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  }, {
    type: ActionType.UPDATE_ACTIVE_OFFER_COMMENTS,
    payload: comments,
  })).toEqual({
    allOffers: [],
    activeOfferComments: comments,
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  });
});

it(`Reducer should update favorite offers`, () => {
  expect(loadData({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: []
  }, {
    type: ActionType.UPDATE_FAVORITE_OFFERS,
    payload: offers,
  })).toEqual({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: offers
  });
});

it(`Reducer should change favorite status in all offers except favoriteOffers`, () => {
  expect(loadData({
    allOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
    activeOfferComments: [],
    activeOffer: {id: 1, isFavorite: false},
    nearbyOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
    favoriteOffers: []
  }, {
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: {id: 1, isFavorite: true},
  })).toEqual({
    allOffers: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
    activeOfferComments: [],
    activeOffer: {id: 1, isFavorite: true},
    nearbyOffers: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
    favoriteOffers: []
  });
});

it(`Reducer should delete offer without favorite status true in favorite offers`, () => {
  expect(loadData({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: [{id: 1, isFavorite: true}, {id: 2, isFavorite: true}, {id: 3, isFavorite: true}]
  }, {
    type: ActionType.CHANGE_FAVORITE_STATUS_IN_FAVORITE_OFFERS,
    payload: 1,
  })).toEqual({
    allOffers: [],
    activeOfferComments: [],
    activeOffer: {},
    nearbyOffers: [],
    favoriteOffers: [{id: 2, isFavorite: true}, {id: 3, isFavorite: true}]
  });
});
