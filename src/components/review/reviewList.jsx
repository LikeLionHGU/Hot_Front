import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CharacterLogo from "../imgs/characterLogo.svg";
import { ReactComponent as Spotimg } from "../imgs/spotimg.svg";
import { ReactComponent as Phoneimg } from "../imgs/phoneimg.svg";
import { ReactComponent as Clockimg } from "../imgs/clockimg.svg";
import { ReactComponent as Writeimg } from "../imgs/writeimg.svg";
import { ReactComponent as Profile } from "../imgs/profile.svg";
import FirePoint from "../imgs/firePoint.svg";
import NonFirePoint from "../imgs/nonFirePoint.svg";

const ScrollContainer = styled.div`
  overflow: scroll;

  width: 372px;
  height: 750px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 100%;
    background-color: #e2dddd;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    height: 160px;
    background-color: #afa4a4;
  }
  &::-webkit-scrollbar-track {
    background-color: #e2dddd;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60px;
  height: 100%;
  box-shadow: 5px black;
`;

const SideBox = styled.div`
  /* width: 372px; */
  height: 100%;
  /* border: 1px solid black; */
`;

const Character = styled.img`
  width: 28px;
  height: 48px;
`;

const score = 3;

function FirePoints({ score }) {
  const totalPoints = 5;
  const firePoints = Array(score).fill(FirePoint);
  const nonFirePoints = Array(totalPoints - score).fill(NonFirePoint);

  return (
    <div>
      {firePoints.map((src, index) => (
        <img key={`fire-${index}`} src={src} alt="불점" />
      ))}
      {nonFirePoints.map((src, index) => (
        <img key={`nonfire-${index}`} src={src} alt="비 불점" />
      ))}
    </div>
  );
}

const BoxTop = styled.div`
  border-bottom: 1px solid #e2dddd;
  padding-top: 33px;
  padding-bottom: 24px;
  text-align: center;
  margin: auto;
`;

const StoreName = styled.div`
  font-family: Dream5;
  font-size: 24px;
  margin-bottom: 27px;
`;

const BoxMid = styled.div`
  padding-top: 20px;
  /* padding-bottom: 20px; */
  margin-left: 30px;
`;

const StoreDetail = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 9px;
  margin-bottom: 2px;
`;

const DetailText = styled.div`
  margin-left: 9px;
  margin-bottom: 24px;
`;

const BoxBottom = styled.div`
  border-top: 1px solid #e2dddd;
  padding-top: 22px;
`;
const ReviewBox = styled.div`
  border-bottom: 1px solid #e2dddd;
  margin-left: 30px;
  margin-right: 30px;
  padding-bottom: 30px;
`;

const ReviewTop = styled.div`
  display: flex;
  margin-left: 30px;
`;
const Re = styled.div`
  font-family: Dream5;
  color: #410a0a;
  font-size: 17px;
  margin-right: 8px;
`;
const ReCount = styled.div`
  font-family: Dream5;
  color: #afa4a4;
  font-size: 17px;
  margin-right: 50px;
`;
const WriteBtn = styled.div`
  color: #410a0a;
  font-size: 14px;
  margin-left: 6px;
`;
const UserInfo = styled.div`
  margin-top: 30px;
  display: flex;
`;
const UserBox = styled.div`
  display: block;
  margin-left: 10px;
  margin-top: 5px;
`;
const UserChar = styled.div``;
const UserId = styled.div`
  margin-bottom: 5px;
  font-family: Dream5;
  color: #410a0a;
  font-size: 14px;
`;
const UserCharName = styled.div`
  color: #410a0a;
  font-size: 13px;
`;
const ReviewInfo = styled.div`
  margin-top: 18px;
  display: flex;
`;
const Fire = styled.div`
  margin-right: 12px;
  color: #410a0a;
  font-size: 13px;
`;
const Date = styled.div`
  color: #afa4a4;
  font-size: 13px;
`;
const ReviewContent = styled.div``;
const MenuBox = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
`;
const Menu = styled.div`
  border-radius: 16px;
  border: 1px solid #afa4a4;
  color: #410a0a;
  font-size: 13px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
const Review = styled.div`
  color: #410a0a;
  font-size: 13px;
`;
export default function SideBar() {
  return (
    <>
      {/* <Sidebar>
        
        <Link to="/">
          <Character src={CharacterLogo} alt="캐릭터 로고" />
        // </Link> */}
      <ScrollContainer>
        <SideBox>
          <BoxTop>
            <StoreName>카페 브리즈나인</StoreName>
            <FirePoints score={score} />
          </BoxTop>
          <BoxMid>
            <StoreDetail>
              <Spotimg />
              <DetailText>식당 주소</DetailText>
            </StoreDetail>
            <StoreDetail>
              <Phoneimg />
              <DetailText>식당 영업중 • 영업시간</DetailText>
            </StoreDetail>
            <StoreDetail>
              <Clockimg />
              <DetailText>식당 전화번호</DetailText>
            </StoreDetail>
          </BoxMid>
          <BoxBottom>
            <ReviewTop>
              <Re>리뷰</Re>
              <ReCount>리뷰 수</ReCount>
              <Writeimg />
              <WriteBtn>리뷰 쓰기</WriteBtn>
            </ReviewTop>
            <ReviewBox>
              <UserInfo>
                <UserChar>
                  <Profile />
                </UserChar>
                <UserBox>
                  <UserId>사용자 아이디</UserId>
                  <UserCharName>맵기 검사 캐릭터</UserCharName>
                </UserBox>
              </UserInfo>
              <ReviewInfo>
                <Fire>불점 5개</Fire>
                <Date>등록 날짜</Date>
              </ReviewInfo>
              <ReviewContent>
                <MenuBox>
                  <Menu>음식 메뉴 1</Menu>
                  <Menu>음식 메뉴 1</Menu>
                </MenuBox>
                <Review>
                  식당에서 먹은 거 있으면 코멘트 달고 없으면 어쩌구저쩌구
                </Review>
              </ReviewContent>
            </ReviewBox>
            <ReviewBox>
              <UserInfo>
                <UserChar>
                  <Profile />
                </UserChar>
                <UserBox>
                  <UserId>사용자 아이디</UserId>
                  <UserCharName>맵기 검사 캐릭터</UserCharName>
                </UserBox>
              </UserInfo>
              <ReviewInfo>
                <Fire>불점 5개</Fire>
                <Date>등록 날짜</Date>
              </ReviewInfo>
              <ReviewContent>
                <MenuBox>
                  <Menu>음식 메뉴 1</Menu>
                  <Menu>음식 메뉴 1</Menu>
                </MenuBox>
                <Review>
                  식당에서 먹은 거 있으면 코멘트 달고 없으면 어쩌구저쩌구
                </Review>
              </ReviewContent>
            </ReviewBox>
          </BoxBottom>
        </SideBox>
      </ScrollContainer>
      {/* </Sidebar> */}
    </>
  );
}
