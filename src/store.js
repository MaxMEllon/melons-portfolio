import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createShigaMiddleware from "redux-shiga";
import rootShiga from "./modules/shiga";

const shigaMiddleware = createShigaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

export default (reducer, initialState) => {
  // regist middlewares
  const middlewares = [shigaMiddleware];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  shigaMiddleware.run(rootShiga);

  return store;
};
