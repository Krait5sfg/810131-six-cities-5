import {combineReducers} from 'redux';
import {loadData} from './load-data/load-data';
import {appProcess} from './app-process/app-process';

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`
};

// объединяет редусеры в один
export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.PROCESS]: appProcess
});
