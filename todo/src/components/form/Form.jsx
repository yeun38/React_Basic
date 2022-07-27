import React from "react";
import "./style.css";

function Form({ title, content, onChange, onCreate }) {
  return (
    <div className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          className="add-input"
          name="title"
          onChange={onChange}
          value={title}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          className="add-input"
          name="content"
          onChange={onChange}
          value={content}
        />
      </div>
      <button className="add-button" onClick={onCreate}>
        추가하기
      </button>
    </div>
  );
}

export { Form };
