import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { todoRemove, todoToggle } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const Todo2 = () => {
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
  const navigate = useNavigate();
  return (
    <ListWrapper>
      {todos.map((todo) =>
        todo.isDone === true ? (
          <TodoContainer key={todo.id}>
            <button
              onClick={() => {
                navigate(`/detail/${todo.id}`);
              }}
            >
              상세보기
            </button>
            <TodoTitle>{todo.title}</TodoTitle>
            <TodoContent>{todo.content}</TodoContent>
            <BtnContainer>
              <RmBtn onClick={() => onRemove(todo.id)}>삭제하기</RmBtn>
              <CancelBtn onClick={() => onToggle(todo.id)}>취소하기</CancelBtn>
            </BtnContainer>
          </TodoContainer>
        ) : (
          ""
        )
      )}
    </ListWrapper>
  );
};

export { Todo2 };

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

const TodoTitle = styled.h1`
  margin: 5px auto;
`;
const TodoContent = styled.p`
  margin: 20px auto 40px;
`;

// const DoneBtn = styled.button`
//   background-color: #fff;
//   border: 2px solid green;
//   border-radius: 8px;
//   cursor: pointer;
//   height: 40px;
//   width: 50%;
// `;

const CancelBtn = styled.button`
  background-color: #fff;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;
