import {ActionType} from '../../action';
import {user} from './user';
import {AuthorizationStatus} from '../../../utils/const';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {},
  });
});

it(`Reducer should update authorizationStatus`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {},
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {},
  });
});

it(`Reducer should update user`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {},
  }, {
    type: ActionType.UPDATE_USER,
    payload: {fake: true},
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {fake: true},
  });
});
