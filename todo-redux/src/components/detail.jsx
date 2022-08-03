import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const item = useSelector((state) => state.todos.todos);
  let findItem = item.find((item) => {
    return item.id == param.id;
  });
  console.log(param);
  return (
    <DetailContainer>
      <DetailBox>
        <div>
          <Top>
            <div>id : {param.id}</div>
            <PreBtn
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </PreBtn>
          </Top>
          <DetailTitle>{findItem.title}</DetailTitle>
          <DetailMain>{findItem.content}</DetailMain>
        </div>
      </DetailBox>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;

const PreBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const DetailTitle = styled.h1`
  padding: 0px 24px;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const DetailMain = styled.main`
  padding: 0px 24px;
  display: block;
`;
