export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_ACTIVE_OFFER: `UPDATE_ACTIVE_OFFER`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS,
    payload: []
  }),
  updateActiveOffer: (offer) => ({
    type: ActionType.UPDATE_ACTIVE_OFFER,
    payload: offer
  })
};
