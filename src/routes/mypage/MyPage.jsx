import styled from "styled-components";
import Header from "../../components/header/header";

import { ReactComponent as Wallpaper } from "../../imgs/mywall.svg";
// import { ReactComponent as Char } from "../../imgs/charimg.svg";
import Char from "../../imgs/charimg.svg";
import { ReactComponent as MyBtn } from "../../imgs/mybtn.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const MyPageContainer = styled.div`
  margin-top: 70px;
`;

const Wall = styled.div`
  margin-left: 228px;
  position: relative;
`;

const WallImg = styled.div`
  margin-top: -60px;
  position: absolute;
  z-index: -2;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CharContainer = styled.div`
  margin-left: 42px;
`;

const CharImg = styled.div`
  width: 228px;
  margin-top: 87px;
`;

const CharText = styled.div`
  color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserId = styled.div`
  margin-top: 22px;
  font-size: 22px;
  font-family: Dream5;
  font-weight: bold;
`;
const Level = styled.div`
  margin-top: 45px;
  font-size: 16px;
`;

const CharName = styled.div`
  margin-top: 9px;
  font-size: 22px;
  font-family: Dream5;
  font-weight: bold;
`;

const Btn = styled.div`
  width: 228px;
  height: 58px;
  margin-top: 104px;
`;

const ScrollContainer = styled.div`
  overflow: scroll;

  width: 1000px;
  height: 750px;

  &::-webkit-scrollbar {
    width: 12px;
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

const Review = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 101px;
  margin-left: 108px;
`;

const RContent = styled.div`
  display: block;
  font-family: Dream5;
  font-size: 24px;
  margin-bottom: 25px;
  color: #410a0a;
`;

const ReviewBox = styled.div`
  width: 648px;
  height: 120px;
  border: 2px solid #e2dddd;
  border-radius: 8px;
  margin-bottom: 22px;
  padding-top: 16px;
`;

const Name = styled.div`
  margin-bottom: 12px;
  margin-left: 22px;
  font-size: 14px;
  color: #410a0a;
  font-family: Dream5;
`;

const Detail = styled.div`
  margin-left: 22px;
  display: flex;
  font-size: 13px;
`;

const Fire = styled.div`
  color: #410a0a;
  margin-right: 12px;
`;

const Date = styled.div`
  color: #afa4a4;
`;

const Menu = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;
  margin-left: 22px;
  display: flex;
  font-size: 13px;
  color: #410a0a;
`;

const MenuBox = styled.div`
  width: auto;
  height: 25px;
  border: 1px solid #afa4a4;
  border-radius: 60px;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 6px;
`;

export default function MyPage() {
  const navigate = useNavigate();
  const characterMyPageImage = Char;
  const userName = ["사건은다가와아오에"];
  const characterName = ["맵구", "맵노스", "맵물주", "위암플래너", "실비요정"];
  const [reviewList, setReviewList] = useState([]);

  function toTest() {
    navigate("/test");
  }

  useEffect(() => {
    const dummyData = {
      reviewList: [
        {
          title: "하하",
          comment: "추천",
          spicyLevel: 5,
          reviewImage: null,
          foodName: "음식 메뉴",
          storeId: "26546824",
          userEmail: "22000116@handong.ac.kr",
        },
        {
          title: "하하",
          comment: "추천",
          reviewSpicyLevel: 4,
          reviewImage: null,
          foodName: null,
          storeId: "26546824",
          userEmail: "22000116@handong.ac.kr",
        },
        {
          title: "하하",
          comment: "추천",
          reviewSpicyLevel: 2,
          reviewImage: null,
          foodName: null,
          storeId: "26546824",
          userEmail: "22000116@handong.ac.kr",
        },
      ],
    };
    setReviewList(dummyData.reviewList);
  }, []);

  return (
    <>
      <Header />
      <MyPageContainer>
        <Wall>
          <WallImg>
            <Wallpaper />
          </WallImg>
          <ContentContainer>
            <CharContainer>
              <CharImg>
                <img src={characterMyPageImage} />
                {/* <img src={characterMyPageImage} /> */}
                {/* <Char /> */}
              </CharImg>
              <CharText>
                <UserId>{userName}</UserId>
                <Level>맵기 레벨</Level>
                <CharName>{characterName[0]}</CharName>
              </CharText>
              <Btn>
                <MyBtn onClick={toTest} />
              </Btn>
            </CharContainer>
            <ScrollContainer>
              <Review>
                <RContent>리뷰 내역</RContent>
                {reviewList.map((review, index) => (
                  <ReviewBox key={index}>
                    <Name>음식점 이름 > </Name>
                    <Detail>
                      <Fire>불점 {review.spicyLevel}개</Fire>
                      <Date>{review.spicyLevel}</Date>
                    </Detail>
                    <Menu>
                      <MenuBox>{review.foodName}</MenuBox>
                    </Menu>
                  </ReviewBox>
                ))}
              </Review>
            </ScrollContainer>
          </ContentContainer>
        </Wall>
      </MyPageContainer>
    </>
  );
}
