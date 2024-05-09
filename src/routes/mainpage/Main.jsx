import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../imgs/textlogo.svg";
import { ReactComponent as Ment } from "../../imgs/mention.svg";
import { ReactComponent as TestBtn } from "../../imgs/testbutton.svg";
import { ReactComponent as MapBtn } from "../../imgs/mapbutton.svg";

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  height: 70px;
  display: flex;
`;

const Logo = styled.div`
  margin-top: 25px;
`;

const LogIn = styled.button`
  margin-top: 0px;
  border: none;
  background-color: transparent;
`;

const Body = styled.div`
  width: 100%;
`;

const Mention = styled.div`
  display: block;
  margin: auto auto;
  margin-top: 70px;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 54px;
`;

const BtnBlock = styled.div`
  margin-right: 72px;
`;

// const Ment = styled.h1`
//   margin-top: 0px;
//   margin-bottom: 0px;
// `;

export default function Main() {
  return (
    <StyleContainer>
      <Header>
        <Logo>
          <LogoImg></LogoImg>
        </Logo>
        <LogIn>로그인</LogIn>
      </Header>
      <Body>
        <Mention>
          <Ment>
            {/* 매운 것에 진심인 당신.
            <br />
            자신의 한계를 알고 싶다면? */}
            <Mention />
          </Ment>
        </Mention>
        <Btn>
          <BtnBlock>
            <TestBtn />
          </BtnBlock>
          <MapBtn />
        </Btn>
      </Body>
    </StyleContainer>
  );
}
