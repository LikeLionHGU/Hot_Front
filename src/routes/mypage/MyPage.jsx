import styled from "styled-components";
import Header from "../../components/header/header";

import wallpaper from "../../imgs/mywall.jpeg";
import { ReactComponent as MyBtn } from "../../imgs/mybtn.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const MyPageContainer = styled.div`
  margin-top: 40px;
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
  height: 228px;
  border-radius: 100%;
  background-color: white;
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
  margin-top: 80px;
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
  const [data, setData] = useState([]);
  const [userName, setuserName] = useState(null);
  const [characterName, setcharacterName] = useState(null);
  const [characterMyPageImage, setcharacterMyPageImage] = useState(null);
  const [userSpicyLevel, setuserSpicyLevel] = useState(null);

  const [error, setError] = useState();

  function toTest() {
    navigate("/test");
  }

  useEffect(() => {
    fetch(`http://localhost:8080/auth/mypage/memberInfo`, {
      redirect: "manual",
      credentials: "include",
    })
      .then((res) => {
        setError(null);
        if (res.status === 500) setError("서버 에러");
        return res.json();
      })
      .then((res) => {
        setuserName(res.userName);
        setcharacterName(res.characterName);
        setcharacterMyPageImage(res.characterMyPageImage);
        setuserSpicyLevel(res.userSpicyLevel);
      })
      .catch((error) => {
        console.error("Error occurred while fetching:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/auth/mypage/reviewlist`, {
      redirect: "manual",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.reviewList);
      })
      .catch((error) => {
        console.error("Error occurred while fetching:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <MyPageContainer>
        <Wall>
          <WallImg>
            <img src={wallpaper} alt="Wallpaper" />
          </WallImg>
          <ContentContainer>
            <CharContainer>
              <CharImg>
                {
                  <img
                    src={characterMyPageImage}
                    style={{ width: "60%", marginLeft: "45px" }}
                    alt="Character"
                  />
                }
              </CharImg>
              <CharText>
                <UserId>{userName}</UserId>
                <Level>맵기 레벨</Level>
                <CharName>
                  {userSpicyLevel}단계 : {characterName}
                </CharName>
              </CharText>
              <Btn>
                <MyBtn onClick={toTest} />
              </Btn>
            </CharContainer>
            <ScrollContainer>
              <Review>
                <RContent>리뷰 내역</RContent>
                {data.map((review, index) => (
                  <ReviewBox key={index}>
                    <Name>{review.title} </Name>
                    <Detail>
                      <Fire>불점 {review.reviewSpicyLevel}개</Fire>
                    </Detail>
                    <Menu>
                      {review.foodName ? (
                        review.foodName
                          .split(",")
                          .map((foodName, idx) => (
                            <MenuBox key={idx}>{foodName}</MenuBox>
                          ))
                      ) : (
                        <MenuBox>메뉴 정보 없음</MenuBox>
                      )}
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
