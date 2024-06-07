import styled from "styled-components";
import CharacterLogo from "../../imgs/characterLogo.svg";

const Sidebar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const Character = styled.img`
  width: 28px;
  height: 48px;
  margin-top: 10px;
  margin-right: 14px;
`;

export default function MapLogo() {
  return (
    <Sidebar>
      <Character src={CharacterLogo} alt="캐릭터 로고" />
    </Sidebar>
  );
}
