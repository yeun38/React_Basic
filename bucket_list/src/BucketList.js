// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

const BucketList = (props) => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
  const my_lists = props.list;

  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
  return (
    <ListStyle>
      {
        // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요.
        // 자세한 사용법은 아래 링크를 확인해주세요.
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        my_lists.map((list, index) => {
          // 콘솔을 확인해봅시다 :)
          console.log(list);
          return <Item key={index}>{list}</Item>;
        })
      }
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Item = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
font-weight: 700;
}`;
// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;
