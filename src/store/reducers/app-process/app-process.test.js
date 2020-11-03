import {appProcess} from './app-process';
import {ActionType} from '../../action';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appProcess(void 0, {})).toEqual({
    city: `Paris`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Popular`,
    idActiveCardForMap: 0,
  });
});

it(`Reducer should change city`, () => {
  expect(appProcess({
    city: `Paris`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Popular`,
    idActiveCardForMap: 0,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Cologne`,
  })).toEqual({
    city: `Cologne`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Popular`,
    idActiveCardForMap: 0,
  });
});

it(`Reducer should change sotring type`, () => {
  expect(appProcess({
    city: `Paris`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Popular`,
    idActiveCardForMap: 0,
  }, {
    type: ActionType.UPDATE_SORTING_TYPE,
    payload: `Price: low to high`,
  })).toEqual({
    city: `Paris`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Price: low to high`,
    idActiveCardForMap: 0,
  });
});

it(`Reducer should update id active card for map`, () => {
  expect(appProcess({
    city: `Paris`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Popular`,
    idActiveCardForMap: 0,
  }, {
    type: ActionType.UPDATE_ID_ACTIVE_CARD_FOR_MAP,
    payload: 2,
  })).toEqual({
    city: `Paris`,
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    sortingType: `Popular`,
    idActiveCardForMap: 2,
  });
});
