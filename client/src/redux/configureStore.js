import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import filmsReducer from "./features/film";


const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    films: filmsReducer,

  }),
  applyMiddleware(thunk, logger)
);
