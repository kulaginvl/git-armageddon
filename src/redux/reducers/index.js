import { combineReducers } from 'redux';

import filters from './filters';
import asteroids from './asteroids';
import distriction from './distriction';

const rootReducer = combineReducers({
  filters,
  asteroids,
  distriction,
});

export default rootReducer;
