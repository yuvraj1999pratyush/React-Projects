import { combineReducers } from "redux";

import apiReducer from "./apiReducer.js";

const rootReducer = combineReducers({
    data : apiReducer
});

export default rootReducer; 