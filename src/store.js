import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = { thunk };

const store = createStore(
  rootReducer,
  initialState,
<<<<<<< HEAD
  applyMiddleware(...middleware));
=======
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);
>>>>>>> development

export default store;
