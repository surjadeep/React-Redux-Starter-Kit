import { createStore } from 'redux';
import rootReducer from './reducers'; // import the root reducer
const defaultState = {}; // create an object for the default data

const store = createStore(rootReducer, defaultState);

export default store;
