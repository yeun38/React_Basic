import React from "react";
import Nemo from "./BucketList";
// import "./style.css";
import styled from "styled-components";
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      count: 3,
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Nemo />
      </div>
    );
  }
}

export default App;
