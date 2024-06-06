import styled from "styled-components";

import CharacterLogo from "../imgs/characterLogo.svg";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60px;
  height: 100%;
  box-shadow: 1px 0px 5px 0px #c0c0c0;
`;

const Character = styled.img`
  width: 28px;
  height: 48px;
`;

export default function SideBar() {
  return (
    <Sidebar>
      <Character src={CharacterLogo} alt="캐릭터 로고" />
    </Sidebar>
  );
}
