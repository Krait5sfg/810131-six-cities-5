import {ActionType} from '../../action';
import reviews from '../../../mocks/reviews';

const initialState = {
  allOffers: [],
  reviews
};

// reduсer отвечает за загружаемые данные
const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {allOffers: action.payload});
  }
  return state;
};

export {loadData};
