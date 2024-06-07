import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import CharacterLogo from "../imgs/characterLogo.svg";
import { ReactComponent as Spotimg } from "../../imgs/spotimg.svg";
import { ReactComponent as Phoneimg } from "../../imgs/phoneimg.svg";
import { ReactComponent as Clockimg } from "../../imgs/clockimg.svg";
import { ReactComponent as Writeimg } from "../../imgs/writeimg.svg";
// import { ReactComponent as Profile } from "../../imgs/profile.svg";
import FirePoint from "../../imgs/firePoint.svg";
import NonFirePoint from "../../imgs/nonFirePoint.svg";

import { useRecoilState } from "recoil";
import { storeIdState } from "../../atom";

const ScrollContainer = styled.div`
  overflow: scroll;

  /* width: 372px; */
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
  margin-bottom: 30px;
  /* border: 1px solid black; */
`;

const Character = styled.img`
  width: 28px;
  height: 48px;
`;

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
  margin-bottom: 6px;
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
const UserChar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #410a0a;
`;

const UserName = styled.div`
  margin-bottom: 5px;
  font-family: Dream5;
  color: #410a0a;
  font-size: 14px;
`;

const UserId = styled.div`
  margin-bottom: 5px;
  /* font-family: Dream5; */
  color: #410a0a;
  font-size: 13px;
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

function FirePoints({ score }) {
  const totalPoints = 5;
  const firePoints = Array(Math.ceil(score)).fill(FirePoint);
  const nonFirePoints = Array(totalPoints - Math.ceil(score)).fill(
    NonFirePoint
  );

  return (
    <div>
      {firePoints.map((src, index) => (
        <img
          key={`fire-${index}`}
          src={src}
          alt="불점"
          style={{ marginRight: "5px" }}
        />
      ))}
      {nonFirePoints.map((src, index) => (
        <img
          key={`nonfire-${index}`}
          src={src}
          alt="비 불점"
          style={{ marginRight: "5px" }}
        />
      ))}
    </div>
  );
}

export default function ReviewList() {
  const [data, setData] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [localNumberAddress, setLocalNumberAddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [ID, setID] = useRecoilState(storeIdState);
  const [review, setReview] = useState({});
  // console.log(ID);

  useEffect(() => {
    fetch(`http://223.p-e.kr:8080/get/stores/detail?storeId=${ID}`, {
      redirect: "manual",
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        // setID(res.ID);
        setStoreName(res.storeName);
        setLocalNumberAddress(res.localNumberAddress);
        setphoneNumber(res.phoneNumber);
        // console.log(res);
      })
      .catch((error) => {
        console.error("Error occurred while fetching:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/get/store/reviewList?storeId=${ID}`, {
      redirect: "manual",
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error occurred while fetching:", error);
      });
  }, [ID]);

  useEffect(() => {
    fetch(`http://223.p-e.kr:8080/get/store/spicy-level?storeId=${ID}`, {
      redirect: "manual",
      // credentials: "include",
    })
      .then((review) => review.json())
      .then((review) => {
        setReview(review);
      });
  }, [ID]);

  const spicyLevel = review.spicyLevelList?.at(0) || 0;

  return (
    <>
      {/* <Sidebar>
        <Link to="/">
          <Character src={CharacterLogo} alt="캐릭터 로고" />
        // </Link> */}
      <ScrollContainer>
        <SideBox>
          <BoxTop>
            <StoreName>{storeName}</StoreName>
            <FirePoints score={spicyLevel} />
          </BoxTop>
          <BoxMid>
            <StoreDetail>
              <Spotimg />
              <DetailText>{localNumberAddress}</DetailText>
            </StoreDetail>
            <StoreDetail>
              <Phoneimg />
              <DetailText>{phoneNumber}</DetailText>
              {/* <DetailText>식당 영업중 • 영업시간</DetailText> */}
            </StoreDetail>
            <StoreDetail>{/* <Clockimg /> */}</StoreDetail>
          </BoxMid>
          <BoxBottom>
            <ReviewTop>
              <Re>리뷰</Re>
              <ReCount>
                {review.reviewCountList && review.reviewCountList[0]}개
              </ReCount>
              <Writeimg />
              {/* <WriteBtn onClick={}>리뷰 쓰기</WriteBtn> */}
            </ReviewTop>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((review, index) => (
                <ReviewBox key={index}>
                  <UserInfo>
                    <UserChar>
                      {<img src={review.reviewUserImage} alt="Character" />}
                    </UserChar>
                    <UserBox>
                      <UserName>{review.reviewerName}</UserName>
                      <UserId>{review.reviewerNickName}</UserId>
                    </UserBox>
                  </UserInfo>
                  <ReviewInfo>
                    <Fire>불점 {review.reviewSpicyLevel}개</Fire>
                  </ReviewInfo>
                  <ReviewContent>
                    <MenuBox>
                      {review.title ? (
                        review.title
                          .split(",")
                          .map((title, idx) => <Menu key={idx}>{title}</Menu>)
                      ) : (
                        <Menu>메뉴 정보 없음</Menu>
                      )}
                    </MenuBox>
                    <Review>{review.comment}</Review>
                  </ReviewContent>
                </ReviewBox>
              ))
            ) : (
              <></>
            )}
          </BoxBottom>
        </SideBox>
      </ScrollContainer>
      {/* </Sidebar> */}
    </>
  );
}
