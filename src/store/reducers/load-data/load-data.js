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

    case ActionType.CHANGE_FAVORITE_STATUS:
      const result = {};
      let index = state.allOffers.findIndex((offer) => offer.id === action.payload.id);
      if (index !== -1) {
        const changedAllOffers = [
          ...state.allOffers.slice(0, index),
          action.payload,
          ...state.allOffers.slice(index + 1)
        ];
        result.allOffers = changedAllOffers;
      }
      index = state.nearbyOffers.findIndex((offer) => offer.id === action.payload.id);
      if (index !== -1) {
        const changedNearbyOffers = [
          ...state.nearbyOffers.slice(0, index),
          action.payload,
          ...state.nearbyOffers.slice(index + 1)
        ];
        result.nearbyOffers = changedNearbyOffers;
      }

      if (state.activeOffer.id === action.payload.id) {
        result.activeOffer = action.payload;
      }
      return Object.assign({}, state, result);

  }
  return state;
};

export {loadData};
