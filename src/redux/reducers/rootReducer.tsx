import { combineReducers } from 'redux';
// import { createLogger } from "redux-logger";
import searchRobots from './searchReducer';
import requestRobots from './requestReducer';

const rootReducer = combineReducers({
  searchRobots: searchRobots,
  requestRobots: requestRobots,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
