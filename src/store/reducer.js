import offers from '../mocks/offers';
import {City} from '../utils/const';
import {ActionType} from './action';

const initialState = {
  city: City.AMSTERDAM,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === initialState.city)});
  }
  return state;
};

export {reducer};
