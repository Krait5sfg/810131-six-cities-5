import {createSelector} from 'reselect';
import {SotringType} from '../utils/const';

const getAllOffers = (({DATA}) => DATA.allOffers);
const getCity = (({PROCESS}) => PROCESS.city);
const getSortingType = (({PROCESS}) => PROCESS.sortingType);

export const selectCityOffers = createSelector([getAllOffers, getSortingType, getCity], (allOffers, sortingType, city) => {
  const cityOffers = allOffers.filter((offer) => offer.city === city);
  switch (sortingType) {
    case SotringType.POPULAR:
      return cityOffers;
    case SotringType.HIGH_TO_LOW:
      return cityOffers.sort((firstOffer, secondOffer) => secondOffer.accommodation.price - firstOffer.accommodation.price);
    case SotringType.LOW_TO_HIGH:
      return cityOffers.sort((firstOffer, secondOffer) => firstOffer.accommodation.price - secondOffer.accommodation.price);
    case SotringType.TOP_RATED:
      return cityOffers.sort((firstOffer, secondOffer) => secondOffer.accommodation.rating - firstOffer.accommodation.rating);
  }
  return false;
});

