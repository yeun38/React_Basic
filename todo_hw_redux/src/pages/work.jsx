import React from "react";
import { useParams } from "react-router-dom";

const Work = () => {
  const param = useParams();
  // 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.
  console.log(param);
  return <div>Work</div>;
};

export default Work;
