import {ActionType} from '../../action';
import reviews from '../../../mocks/reviews';

const initialState = {
  allOffers: [],
  reviews,
  activeOffer: {}
};

// reduсer отвечает за загружаемые данные
const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {allOffers: action.payload});

    case ActionType.UPDATE_ACTIVE_OFFER:
      return Object.assign({}, state, {activeOffer: action.payload});
  }
  return state;
};

export {loadData};
