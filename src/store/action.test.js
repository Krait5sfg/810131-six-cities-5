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

});
