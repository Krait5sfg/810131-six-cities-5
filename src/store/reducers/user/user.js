import {AuthorizationStatus} from '../../../utils/const';
import {ActionType} from '../../../store/action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {},
};

// отвечает за авторизацию
const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});
    case ActionType.UPDATE_USER:
      return Object.assign({}, state, {user: action.payload});
  }
  return state;
};

export {user};
