import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createShigaMiddleware from "redux-shiga";
import actionTiming from "redux-action-timing-middleware";
import rootShiga from "./modules/redux/shiga";

const shigaMiddleware = createShigaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

export default (reducer, initialState) => {
  // regist middlewares
  const middlewares = [actionTiming(), shigaMiddleware];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  shigaMiddleware.run(rootShiga);

  return store;
};
