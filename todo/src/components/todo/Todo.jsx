import React from "react";
import "./style.css";

function Todo({ user, onRemove, onToggle }) {
  console.log(user.id);
  return (
    <div className="todo-container">
      <h2>{user.title}</h2>
      <div>{user.content}</div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => onRemove(user.id)} // 매개변수 유무에 따라 함수값 or 화살표함수
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => onToggle(user.id)}
        >
          {user.isDone === false ? "완료하기" : "취소하기"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
