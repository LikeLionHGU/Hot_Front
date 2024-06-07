import styled from "styled-components";

import CharacterLogo from "../../imgs/completeReview.svg";
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
  margin-right: 75px;
`;

const Character = styled.img`
  margin-top: 210px;
`;

const CheckBtn = styled.button`
  border: 0px;
  border-radius: 4px;

  margin-top: 150px;
  padding: 15px 60px;

  background-color: #f6b95b;
  color: #410a0a;
  font-family: Dream5;

  &:hover {
    cursor: pointer;
  }
`;

export default function CompleteReview() {
  return (
    <Sidebar>
      <SidebarContainer>
        <Character src={CharacterLogo} alt="캐릭터 로고" />
        <CheckBtn>확인</CheckBtn>
      </SidebarContainer>
    </Sidebar>
  );
}
