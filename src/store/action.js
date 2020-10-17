export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_TOP_RATED: `SORT_TOP_RATED`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS
  }),
  updateSortingType: (sortingType) => ({
    type: ActionType.UPDATE_SORTING_TYPE,
    payload: sortingType
  }),
  sortLowToHigh: () => ({
    type: ActionType.SORT_LOW_TO_HIGH,
  }),
  sortPopular: () => ({
    type: ActionType.SORT_POPULAR,
  }),
  sortHighToLow: () => ({
    type: ActionType.SORT_HIGH_TO_LOW,
  }),
  sortTopRated: () => ({
    type: ActionType.SORT_TOP_RATED,
  })
};
