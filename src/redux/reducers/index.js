import { combineReducers } from 'redux';

import filterReducer from './filters';
import asteroidsReducer from './asteroids';

const rootReducer = combineReducers({ filters: filterReducer, asteroids: asteroidsReducer });

export default rootReducer;
