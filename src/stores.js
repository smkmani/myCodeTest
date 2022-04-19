import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReduser';

//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware());

export default store;
