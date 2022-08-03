import { createStore } from "redux";
import { combineReducers } from "redux";

import todos from "../modules/todos";
// const rootReducer = combineReducers({});
// const store = createStore(rootReducer);

const store = combineReducers({
  todos,
});
export default createStore(store);
