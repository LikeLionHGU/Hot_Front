import styled from "styled-components";

import CharacterLogo from "../../imgs/nonLoginLogo.svg";
import Font from "../../assets/font.css";

const Sidebar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Character = styled.img`
  margin-top: 50px;
`;

const LoginBtn = styled.button`
  border: 0px;
  border-radius: 4px;

  margin-top: 50px;
  padding: 15px 60px;

  background-color: #f6b95b;
  color: #410a0a;
  font-family: Dream5;

  &:hover {
    cursor: pointer;
  }
`;

export default function NonLogin() {
  return (
    <Sidebar>
      <SidebarContainer>
        <Character src={CharacterLogo} alt="캐릭터 로고" />
        <LoginBtn
          onClick={() =>
            (window.location.href = "http://localhost:8080/login/test")
          }
        >
          로그인
        </LoginBtn>
      </SidebarContainer>
    </Sidebar>
  );
}
