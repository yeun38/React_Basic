import React from "react";

function Todo({ user, onRemove, onToggle }) {
  console.log(user.id);
  return (
    <div className="todo-container">
      <h2>{user.title}</h2>
      <div>{user.content}</div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => onRemove(user.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => onToggle(user.id)}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default Todo;
