// src/App.js

import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const App = () => {
  const boxList = ["red", "green", "blue"];

  const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간 박스";
      case "green":
        return "초록 박스";
      case "blue":
        return "파란 박스";
      default: //개발자가 실수로 기본 동작을 포함하는 것을 잊었는지 여부를 명확하게 하기 위해 기본 동작이 무엇인지 항상 명시적으로 명시하는 것이 좋습니다.
        return "검정 박스";
    }
  };

  return (
    <StContainer>
      {boxList.map((box) => (
        <StBox borderColor={box}>{getBoxName(box)}</StBox>
      ))}
    </StContainer>
  );
};

export default App;
