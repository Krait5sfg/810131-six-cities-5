import {ActionType} from '../../action';
import {user} from './user';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
    user: {},
  });
});

it(`Reducer should update authorizationStatus`, () => {
  expect(user({
    authorizationStatus: `NO_AUTH`,
    user: {},
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: `AUTH`,
  })).toEqual({
    authorizationStatus: `AUTH`,
    user: {},
  });
});

it(`Reducer should update user`, () => {
  expect(user({
    authorizationStatus: `AUTH`,
    user: {},
  }, {
    type: ActionType.UPDATE_USER,
    payload: {fake: true},
  })).toEqual({
    authorizationStatus: `AUTH`,
    user: {fake: true},
  });
});
