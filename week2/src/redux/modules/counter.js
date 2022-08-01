// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const DELETE_NUMBER = "DELETE_NUMBER";
// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload, // key와 value가 같으면 아래와 같이 줄여서 작성할 수 있습니다.
  };
};
export const deleteNumber = (payload) => {
  return {
    type: DELETE_NUMBER,
    payload, // key와 value가 같으면 아래와 같이 줄여서 작성할 수 있습니다.
  };
};
// Initial State
const initialState = {
  number: 0,
};
// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      console.log(state.number);
      return {
        number: state.number + action.payload,
      };
    case DELETE_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};
// export default reducer
export default counter;
