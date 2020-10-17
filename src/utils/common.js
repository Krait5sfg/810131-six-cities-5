import {SotringType} from './const';

export const getRating = (rating) => {
  const roundRating = Math.round(rating);
  return roundRating > 0 && roundRating <= 5 ? `${roundRating * 20}%` : false;
};

export const sortActionTypeUpdateOffers = (sortingType, currentCityOffers) => {
  switch (sortingType) {
    case SotringType.POPULAR:
      return currentCityOffers;
    case SotringType.LOW_TO_HIGH:
      return currentCityOffers.sort((firstOffer, secondOffer) => firstOffer.accommodation.price > secondOffer.accommodation.price ? 1 : -1);
    case SotringType.HIGH_TO_LOW:
      return currentCityOffers.sort((firstOffer, secondOffer) => firstOffer.accommodation.price > secondOffer.accommodation.price ? -1 : 1);
    case SotringType.TOP_RATED:
      return currentCityOffers.sort((firstOffer, secondOffer) => firstOffer.accommodation.rating > secondOffer.accommodation.rating ? -1 : 1);
  }
  return false;
};
