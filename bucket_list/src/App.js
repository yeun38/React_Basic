import React from "react";
import logo from "./logo.svg";
import BucketList from "./BucketList";
import "./style.css";
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
      <div className="App">
        <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="line" />
          <BucketList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
