import { createStore, combineReducers } from 'redux';
import reducers from './reducers/index';

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
  })
);

export default store;
