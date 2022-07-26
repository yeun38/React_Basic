import React from "react";
import BucketList from "./BucketList";
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

  componentDidMount() {}

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  };
  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어요");
    }
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count);
    return (
      <div className="App">
        {nemo_count.map((n, i) => {
          return (
            <div
              key={i} //key임의지정 오류를 적게 보기 위함.
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#ddd",
                margin: "10px",
              }}
            >
              nemonemo mongmumi
            </div>
          );
        })}
        <div>
          <button
            onClick={() => {
              this.addNemo();
            }}
          >
            하나 추가
          </button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
      </div>
    );
  }
}

export default App;
