import Header from "../components/header/header";
import styled from "styled-components";

import SlibFairyBig from "../imgs/silbifairy_big.svg";
import MaepguSmall from "../imgs/maepgu_small.svg";
import DownArrow from "../imgs/downArrow.svg";
import UpArrow from "../imgs/upArrow.svg";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Above = styled.div`
  display: flex;
`;

const AboveLeft = styled.div``;

const AboveRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Bottom = styled.div``;

export default function TestResult() {
  return (
    <>
      <Header />
      <StyleContainer>
        <Above>
          <AboveLeft>
            <div>5단계 : 실비요정</div>
            <img src={SlibFairyBig} alt="big" />
          </AboveLeft>
          <AboveRight>
            <div>캐릭터 설명</div>
            <button>지도 보러가기</button>
          </AboveRight>
        </Above>
        <div>다른 캐릭터들 보러 가기</div>
        <img src={DownArrow} alt="downarrow" />
        <img src={UpArrow} alt="uparrow" />
        <div>내 캐릭터 보러 가기</div>
        <Bottom>
          <img src={MaepguSmall} alt="1" />
          <img src={MaepguSmall} alt="2" />
          <img src={MaepguSmall} alt="3" />
          <img src={MaepguSmall} alt="4" />
        </Bottom>
      </StyleContainer>
    </>
  );
}
