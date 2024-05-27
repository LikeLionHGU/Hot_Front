import styled from "styled-components";
import Header from "../../components/header/header";

import { ReactComponent as Wallpaper } from "../../imgs/mywall.svg";
import { ReactComponent as Char } from "../../imgs/charimg.svg";
import { ReactComponent as MyBtn } from "../../imgs/mybtn.svg";
import { useNavigate } from "react-router";

const MyPageContainer = styled.div``;

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
  margin-top: 87px;
`;

const CharText = styled.div`
  color: white;
  margin-left: 50px;
`;

const Level = styled.div`
  margin-top: 93px;
  margin-left: 34px;
  font-size: 16px;
`;

const CharName = styled.div`
  margin-top: 9px;
  font-size: 20px;
`;

const Btn = styled.div`
  width: 228px;
  height: 58px;
  margin-top: 104px;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 101px;
  margin-left: 108px;
`;

const RContent = styled.h2`
  display: block;
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

  function toTest() {
    navigate("/test");
  }
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
                <Char />
              </CharImg>
              <CharText>
                <Level>맵기 레벨</Level>
                <CharName>5단계 : 실비요정</CharName>
              </CharText>
              <Btn>
                <MyBtn onClick={toTest} />
              </Btn>
            </CharContainer>
            <Review>
              <RContent>리뷰 내역</RContent>
              <ReviewBox>
                <Name>음식점 이름 > </Name>
                <Detail>
                  <Fire>불점 5개</Fire>
                  <Date>등록 날짜</Date>
                </Detail>
                <Menu>
                  <MenuBox>음식 메뉴 1</MenuBox>
                  <MenuBox>음식 메뉴 아무거나</MenuBox>
                  <MenuBox>음식 메뉴 아무거나</MenuBox>
                </Menu>
              </ReviewBox>
              <ReviewBox>
                <Name>음식점 이름 > </Name>
                <Detail>
                  <Fire>불점 10개</Fire>
                  <Date>등록 날짜</Date>
                </Detail>
                <Menu>
                  <MenuBox>음식 메뉴 1</MenuBox>
                  <MenuBox>음식 메뉴 2</MenuBox>
                  <MenuBox>음식 메뉴 3</MenuBox>
                </Menu>
              </ReviewBox>
            </Review>
          </ContentContainer>
        </Wall>
      </MyPageContainer>
    </>
  );
}
