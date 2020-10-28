export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_TOP_RATED: `SORT_TOP_RATED`,
  UPDATE_ID_ACTIVE_CARD_FOR_MAP: `UPDATE_ID_ACTIVE_CARD_FOR_MAP`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  UPDATE_USER: `UPDATE_USER`,
  UPDATE_ID_ACTIVE_OFFER: `UPDATE_ID_ACTIVE_OFFER`,
  UPDATE_ACTIVE_OFFER: `UPDATE_ACTIVE_OFFER`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  updateSortingType: (sortingType) => ({
    type: ActionType.UPDATE_SORTING_TYPE,
    payload: sortingType
  }),
  updateIdActiveCardForMap: (id) => ({
    type: ActionType.UPDATE_ID_ACTIVE_CARD_FOR_MAP,
    payload: id
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  updateUser: (userInformation) => ({
    type: ActionType.UPDATE_USER,
    payload: userInformation
  }),
  updateIdActiveOffer: (id) => ({
    type: ActionType.UPDATE_ID_ACTIVE_OFFER,
    payload: id
  }),
  updateActiveOffer: (activeOffer) => ({
    type: ActionType.UPDATE_ACTIVE_OFFER,
    payload: activeOffer
  }),
};
