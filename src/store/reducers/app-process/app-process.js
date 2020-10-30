import {SotringType} from '../../../utils/const';
import {ActionType} from '../../action';
import {City} from '../../../utils/const';

const initialState = {
  city: City.PARIS,
  cities: [City.PARIS, City.COLOGNE, City.BRUSSELS, City.AMSTERDAM, City.HAMBURG, City.DUSSELDORF],
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

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
  }
  return state;
};

export {appProcess};
