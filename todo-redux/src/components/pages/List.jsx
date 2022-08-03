import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Todo } from "../Todo";
import { Todo2 } from "../Todo2";
// input으로 들어온 값을 List에 뿌리기

const List = () => {
  // const todos = useSelector((state) => state.todos.todos);
  return (
    <ListContainer>
      <ListName>Working..🔥</ListName>
      <Todo />
      <ListName>Working..🔥</ListName>
      <Todo2 />
    </ListContainer>
  );
};

export { List };

const ListContainer = styled.div`
  padding: 0 24px;
`;

const ListName = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
`;
