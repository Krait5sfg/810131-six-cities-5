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

    case ActionType.CHANGE_FAVORITE_STATUS_IN_ALL_OFFERS:
      const index = state.allOffers.findIndex((offer) => offer.id === action.payload.id);
      const changedAllOffers = [
        ...state.allOffers.slice(0, index),
        action.payload,
        ...state.allOffers.slice(index + 1)
      ];
      return Object.assign({}, state, {allOffers: changedAllOffers});

    case ActionType.CHANGE_FAVORITE_STATUS_IN_NEARBY_OFFERS:
      const indexElement = state.nearbyOffers.findIndex((offer) => offer.id === action.payload.id);
      const changedNearbyOffers = [
        ...state.nearbyOffers.slice(0, indexElement),
        action.payload,
        ...state.nearbyOffers.slice(indexElement + 1)
      ];
      return Object.assign({}, state, {nearbyOffers: changedNearbyOffers});

    case ActionType.CHANGE_FAVORITE_STATUS_IN_ACTIVE_OFFER:
      return Object.assign({}, state, {activeOffer: action.payload});

    case ActionType.REMOVE_NO_FAVORITE_OFFER:
      return Object.assign({}, state, {favoriteOffers: state.favoriteOffers.slice(0).filter((offer) => offer.id !== action.payload.id)});
  }
  return state;
};

export {loadData};
