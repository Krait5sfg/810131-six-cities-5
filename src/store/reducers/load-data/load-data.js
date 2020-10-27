import {ActionType} from '../../action';
import reviews from '../../../mocks/reviews';
import {City} from '../../../utils/const';

const initialState = {
  city: City.AMSTERDAM,
  allOffers: [],
  offers: [],
  reviews
};

// reduсer отвечает за загружаемые данные
const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {allOffers: action.payload});

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});

    case ActionType.UPDATE_OFFERS:
      return Object.assign({}, state, {offers: state.allOffers.slice(0).filter((offer) => offer.city === state.city)});

    case ActionType.SORT_LOW_TO_HIGH:
      return Object.assign({}, state, {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => firstOffer.accommodation.price - secondOffer.accommodation.price)});

    case ActionType.SORT_POPULAR:
      return Object.assign({}, state, {offers: state.allOffers.slice(0).filter((offer) => offer.city === state.city)});

    case ActionType.SORT_HIGH_TO_LOW:
      return Object.assign({}, state, {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => secondOffer.accommodation.price - firstOffer.accommodation.price)});

    case ActionType.SORT_TOP_RATED:
      return Object.assign({}, state, {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => secondOffer.accommodation.rating - firstOffer.accommodation.rating)});

  }
  return state;
};

export {loadData};
