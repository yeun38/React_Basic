import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// const rootReducer = combineReducers({});
// const store = createStore(rootReducer);

const store = combineReducers({
  todos,
});
export default createStore(store);
// export default store;

//리덕스 정책
//단일 스토어, 다수 리듀서
