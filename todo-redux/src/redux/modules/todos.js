// Action value
const ADD_TODO = "ADD_TODO";
const TODO_REMOVE = "TODO_REMOVE";
const TODO_TOGGLE = "TODO/TOGGLE";
// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const todoRemove = (payload) => {
  return {
    type: TODO_REMOVE,
    payload,
  };
};

export const todoToggle = (payload) => {
  return {
    type: TODO_TOGGLE,
    payload,
  };
};
// 초기 상태값
const initialState = {
  todos: [{ id: 1, title: "testtitle", content: "testcontent", isDone: false }],
};
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
