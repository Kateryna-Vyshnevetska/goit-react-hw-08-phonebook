import { createStore, combineReducers } from "redux";
import { profileReducer, phoneBookReducer, errors } from "./reducers";

const rootReducers = combineReducers({
  profile: profileReducer,
  contacts: phoneBookReducer,
  errors: errors,
  // loading,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
