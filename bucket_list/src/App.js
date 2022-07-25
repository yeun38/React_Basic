import React from "react";
import logo from "./logo.svg";
import BucketList from "./BucketList";
// import "./style.css";
import styled from "styled-components";
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <MyApp>
        <MyContainer>
          <Title>내 버킷리스트</Title>
          <hr className="line" />
          <BucketList list={this.state.list} />
        </MyContainer>
      </MyApp>
    );
  }
}
const MyApp = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const MyContainer = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;

  border: 1px solid #ddd;
  border-radius: 3px;

  padding: 16px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

export default App;
