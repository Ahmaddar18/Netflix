import { combineReducers } from "redux"

import moviesReducer from "./movies"

export default combineReducers({
    user: moviesReducer
});
