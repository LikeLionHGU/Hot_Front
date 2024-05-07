import { useRecoilState } from "recoil";
import { isHeaderState } from "../../atom";

import styled from "styled-components";
import Logo from "../../imgs/eng_logo.svg";

const StyleContainer = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 1px 5px #c0c0c0;

  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

const EngLogo = styled.img`
  alt: "hot-spot-logo";

  width: 90px;
  height: 29px;
  margin-top: 5px;
`;

const Title = styled.div`
  margin-top: 5px;
`;

const ReturnBtn = styled.button`
  border: 1px solid #410a0a;
  border-radius: 30px;

  background-color: white;
  width: 79px;
  height: 32px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBtn = styled.button`
  border: 0;
  background-color: white;
`;

function title(isHeader) {
  switch (isHeader) {
    case "test":
      return <Title>맵기 레벨 검사</Title>;
    default:
      return "";
  }
}

function logReturnBtn(isHeader) {
  switch (isHeader) {
    case "test":
      return <ReturnBtn>처음으로</ReturnBtn>;
    case "main":
      return <LoginBtn>로그인</LoginBtn>;
    default:
      return "";
  }
}

export default function header(isHeader) {
  return (
    <StyleContainer>
      <TitleContainer>
        <EngLogo src={Logo}></EngLogo>
        {title(isHeader)}
        {logReturnBtn("main")}
      </TitleContainer>
    </StyleContainer>
  );
}
