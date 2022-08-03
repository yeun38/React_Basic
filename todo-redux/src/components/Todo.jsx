import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { todoRemove, todoToggle } from "../redux/modules/todos";
const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const onRemove = (id) => {
    dispatch(
      todoRemove({
        id: id,
      })
    );
  };
  const onToggle = (id) => {
    dispatch(
      todoToggle({
        id: id,
      })
    );
  };
  return (
    <ListWrapper>
      {todos.map((todo) =>
        todo.isDone === false ? (
          <TodoContainer key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
            <BtnContainer>
              <RmBtn onClick={() => onRemove(todo.id)}>삭제하기</RmBtn>
              <DoneBtn onClick={() => onToggle(todo.id)}>완료하기</DoneBtn>
            </BtnContainer>
          </TodoContainer>
        ) : (
          ""
        )
      )}
    </ListWrapper>
  );
};

export { Todo };

const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const RmBtn = styled.button`
  background-color: #fff;
  border: 2px solid red;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

const DoneBtn = styled.button`
  background-color: #fff;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

const CancelBtn = styled.button`
  background-color: #fff;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;
