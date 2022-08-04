import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { customAlphabet } from "nanoid";

import { addTodo } from "../../redux/modules/todos";

const nanoid = customAlphabet("0123456789abcdef", 6);

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" && content === "") return;
    setTitle("");
    setContent("");
    dispatch(
      addTodo({
        id: nanoid(),
        title,
        content,
        isDone: false,
      })
    );
    console.log(nanoid());
  };
  return (
    <AddForm onSubmit={onSubmit}>
      <InputG>
        <Label>제목</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>내용</Label>
        <Input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </InputG>
      <InputBtn>추가하기</InputBtn>
    </AddForm>
  );
}

export { Form };

const AddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  height: 100px;
  padding: 0px 30px;
  border-radius: 12px;
`;

const InputG = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const InputBtn = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
