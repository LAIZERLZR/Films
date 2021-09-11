import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import filmsReducer from "./features/film";
import genresReducer from "./features/genres"
import filmReducer from "./features/film";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    films: filmsReducer,
    genres: genresReducer,
    film: filmReducer,
  }),
  applyMiddleware(thunk, logger)
);
