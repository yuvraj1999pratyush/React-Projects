import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import { applyMiddleware, createStore } from 'redux';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;