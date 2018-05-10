import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import movies from './reducers';
import thunk from 'redux-thunk';


export default createStore(movies, composeWithDevTools(applyMiddleware(thunk,logger)));
