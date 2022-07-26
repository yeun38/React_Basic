// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);
  console.log(count);
  const nemo_count = Array.from({ length: count }, (v, i) => i);

  const addNemo = () => {
    setCount(count + 1);
  };
  const removeNemo = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      window.alert("네모가 없어요");
    }
  };
  return (
    <div>
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
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 빼기</button>
      </div>
    </div>
  );
};

export default Nemo;
