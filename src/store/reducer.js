import offers from '../mocks/offers';
import {City} from '../utils/const';
import {ActionType} from './action';
import {SotringType} from '../utils/const';

const defaultOffers = offers.filter((offer) => offer.city === City.AMSTERDAM);

const initialState = {
  city: City.AMSTERDAM,
  offers: defaultOffers,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  sortingType: SotringType.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.UPDATE_OFFERS:

      const {sortingType} = state;

      switch (sortingType) {
        case SotringType.POPULAR:
          return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === state.city)});
        case SotringType.LOW_TO_HIGH:
          return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === state.city).sort((firstOffer, secondOffer) => firstOffer.accommodation.price > secondOffer.accommodation.price ? 1 : -1)});
        case SotringType.HIGH_TO_LOW:
          return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === state.city).sort((firstOffer, secondOffer) => firstOffer.accommodation.price > secondOffer.accommodation.price ? -1 : 1)});
        case SotringType.TOP_RATED:
          return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === state.city).sort((firstOffer, secondOffer) => firstOffer.accommodation.rating > secondOffer.accommodation.rating ? -1 : 1)});
      }
      break;

    case ActionType.UPDATE_SORTING_TYPE:
      return Object.assign({}, state, {sortingType: action.payload});
    case ActionType.SORT_LOW_TO_HIGH:
      return Object.assign({}, state, {offers: state.offers.sort((firstOffer, secondOffer) => firstOffer.accommodation.price > secondOffer.accommodation.price ? 1 : -1)});
    case ActionType.SORT_POPULAR:
      return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === state.city)});
    case ActionType.SORT_HIGH_TO_LOW:
      return Object.assign({}, state, {offers: state.offers.sort((firstOffer, secondOffer) => firstOffer.accommodation.price > secondOffer.accommodation.price ? -1 : 1)});
    case ActionType.SORT_TOP_RATED:
      return Object.assign({}, state, {offers: state.offers.sort((firstOffer, secondOffer) => firstOffer.accommodation.rating > secondOffer.accommodation.rating ? -1 : 1)});
  }
  return state;
};

export {reducer};
