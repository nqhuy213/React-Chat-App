import {applyMiddleware, createStore } from "redux";
import combinedReducer from './combinedReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

export const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)