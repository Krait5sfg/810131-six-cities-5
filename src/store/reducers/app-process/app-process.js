import {SotringType} from '../../../utils/const';
import {ActionType} from '../../action';

const initialState = {
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  sortingType: SotringType.POPULAR,
  idActiveCardForMap: 0,
};

// reducer отвечает за состояние приложения
const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_ID_ACTIVE_CARD_FOR_MAP:
      return Object.assign({}, state, {idActiveCardForMap: action.payload});

    case ActionType.UPDATE_SORTING_TYPE:
      return Object.assign({}, state, {sortingType: action.payload});
  }
  return state;
};

export {appProcess};
