import {ActionCreator, ActionType} from './action';

describe(`ActionCreator work correctly`, () => {

  it(`ActionCreator for change city return correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    });
  });

  it(`ActionCreator for sorting type return correct action`, () => {
    expect(ActionCreator.updateSortingType(`Popular`)).toEqual({
      type: ActionType.UPDATE_SORTING_TYPE,
      payload: `Popular`
    });
  });

  it(`ActionCreator for update id active card for map return correct action`, () => {
    expect(ActionCreator.updateIdActiveCardForMap(1)).toEqual({
      type: ActionType.UPDATE_ID_ACTIVE_CARD_FOR_MAP,
      payload: 1
    });
  });

  it(`ActionCreator for load offers work correct`, () => {
    expect(ActionCreator.loadOffers([{fake: true}])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for require authorization work correct`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });

  it(`ActionCreator for update user work correct`, () => {
    expect(ActionCreator.updateUser({fake: true})).toEqual({
      type: ActionType.UPDATE_USER,
      payload: {fake: true}
    });
  });

  it(`ActionCreator for update active offer work correct`, () => {
    expect(ActionCreator.updateActiveOffer({fake: true})).toEqual({
      type: ActionType.UPDATE_ACTIVE_OFFER,
      payload: {fake: true}
    });
  });

  it(`ActionCreator for update nearby offers work correct`, () => {
    expect(ActionCreator.updateNearbyOffers([{fake: true}])).toEqual({
      type: ActionType.UPDATE_NEARBY_OFFERS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for update comments for active offer work correct`, () => {
    expect(ActionCreator.updateActiveOfferComments([{fake: true}])).toEqual({
      type: ActionType.UPDATE_ACTIVE_OFFER_COMMENTS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for update favorite offers work correct`, () => {
    expect(ActionCreator.updateFavoriteOffers([{fake: true}])).toEqual({
      type: ActionType.UPDATE_FAVORITE_OFFERS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for change favorite status work correct`, () => {
    expect(ActionCreator.changeFavoriteStatus({fake: true})).toEqual({
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: {fake: true}
    });
  });

  it(`ActionCreator for change favorite status in favorite offers work correct`, () => {
    expect(ActionCreator.changeFavoriteStatusInFavoriteOffers(1)).toEqual({
      type: ActionType.CHANGE_FAVORITE_STATUS_IN_FAVORITE_OFFERS,
      payload: 1
    });
  });

});
