import styled from "styled-components";
import Logo from "../../imgs/eng_logo.svg";

import "../../assets/font.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { detailState } from "../../atom";
import { useRecoilState } from "recoil";

const StyleContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0px 1px 5px #c0c0c0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  /* display: ${({ isResult }) => (isResult ? "block" : "flex")}; */
  /* margin-left: ${({ isResult }) => (isResult ? "228px" : "0")}; */
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const EngLogo = styled.img`
  alt: "hot-spot-logo";

  width: 90px;
  height: 29px;
  margin-top: 5px;
`;

const Title = styled.div`
  margin-top: 13px;

  color: #410a0a;
  font-family: Dream5;
`;

const ReturnBtn = styled.button`
  border: 1px solid #410a0a;
  border-radius: 30px;
  margin-top: 4px;

  background-color: white;
  width: 79px;
  height: 32px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #410a0a;
  font-family: Dream5;
`;

const LoginBtn = styled.button`
  border: 0;
  background-color: white;
  font-family: Dream5;
  font-size: 16px;
`;

function getTitle(isHeader) {
  switch (isHeader) {
    case "test":
      return <Title>맵기 레벨 검사</Title>;
    case "ramentest":
      return <Title>맵기 레벨 검사</Title>;
    default:
      return null;
  }
}

export default function Header({ isHeader }) {
  const isResult = isHeader === "result";
  const [onLogin, setOnLogin] = useState();

  function getButton(isHeader) {
    switch (isHeader) {
      case "test":
        return (
          // <Link to="/test">
          <ReturnBtn>처음으로</ReturnBtn>
          // </Link>
        );
      case "ramentest":
        return (
          // <Link to="/test">
          <ReturnBtn>처음으로</ReturnBtn>
          // </Link>
        );
      case "main":
        return (
          <>
            {onLogin ? (
              <></>
            ) : (
              <LoginBtn
                onClick={() =>
                  (window.location.href = "http://localhost:8080/login/test")
                }
              >
                로그인
              </LoginBtn>
            )}
          </>
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8080/auth/mypage`, {
      credentials: "include",
      redirect: "manual",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.email);
        setOnLogin(data.email);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <StyleContainer>
      <TitleContainer>
        <Link to="/">
          <EngLogo src={Logo} isResult={isResult} />
        </Link>
        {getTitle(isHeader)}
        {getButton(isHeader)}
      </TitleContainer>
    </StyleContainer>
  );
}
