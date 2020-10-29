import {ActionType} from '../../action';

const initialState = {
  allOffers: [],
  activeOfferComments: [],
  activeOffer: {},
  nearbyOffers: [],
  favoriteOffers: []
};

// reduсer отвечает за загружаемые данные
const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {allOffers: action.payload});

    case ActionType.UPDATE_ACTIVE_OFFER:
      return Object.assign({}, state, {activeOffer: action.payload});

    case ActionType.UPDATE_NEARBY_OFFERS:
      return Object.assign({}, state, {nearbyOffers: action.payload});

    case ActionType.UPDATE_ACTIVE_OFFER_COMMENTS:
      return Object.assign({}, state, {activeOfferComments: action.payload});

    case ActionType.UPDATE_FAVORITE_OFFERS:
      return Object.assign({}, state, {favoriteOffers: action.payload});
  }
  return state;
};

export {loadData};
