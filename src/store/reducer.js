import reviews from '../mocks/reviews';
import {City} from '../utils/const';
import {ActionType} from './action';
import {SotringType} from '../utils/const';

const initialState = {
  city: City.AMSTERDAM,
  allOffers: [],
  offers: [],
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  sortingType: SotringType.POPULAR,
  idActiveCardForMap: 0,
  reviews
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});

    case ActionType.UPDATE_OFFERS:
      return Object.assign({}, state, {offers: state.allOffers.slice(0).filter((offer) => offer.city === state.city)});

    case ActionType.UPDATE_SORTING_TYPE:
      return Object.assign({}, state, {sortingType: action.payload});

    case ActionType.SORT_LOW_TO_HIGH:
      return Object.assign({}, state, {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => firstOffer.accommodation.price - secondOffer.accommodation.price)});

    case ActionType.SORT_POPULAR:
      return Object.assign({}, state, {offers: state.allOffers.slice(0).filter((offer) => offer.city === state.city)});

    case ActionType.SORT_HIGH_TO_LOW:
      return Object.assign({}, state, {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => secondOffer.accommodation.price - firstOffer.accommodation.price)});

    case ActionType.SORT_TOP_RATED:
      return Object.assign({}, state, {offers: state.offers.slice(0).sort((firstOffer, secondOffer) => secondOffer.accommodation.rating - firstOffer.accommodation.rating)});

    case ActionType.UPDATE_ID_ACTIVE_CARD_FOR_MAP:
      return Object.assign({}, state, {idActiveCardForMap: action.payload});

    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {allOffers: action.payload});
  }
  return state;
};

export {reducer};
