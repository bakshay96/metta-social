import { legacy_createStore,combineReducers,applyMiddleware  } from "redux";
import {thunk} from "redux-thunk";
import { reducer as searchReducer } from "./reducer";

// all in one root reducer

// store export and added thunk middleware.
export const store=legacy_createStore(searchReducer,applyMiddleware(thunk));