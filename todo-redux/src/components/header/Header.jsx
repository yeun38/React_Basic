import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div>My Todo List</div>
      <div>React</div>
    </HeaderContainer>
  );
};

export { Header };

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 0px 20px;
  align-items: center;
  height: 50px;
`;
