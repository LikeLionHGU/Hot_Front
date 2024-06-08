import styled from "styled-components";
import CharacterLogo from "../../imgs/characterLogo.svg";
import { useNavigate } from "react-router-dom";

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

  &:hover {
    cursor: pointer;
  }
`;

export default function MapLogo() {
  const navigate = useNavigate();

  function toMain() {
    navigate("/");
  }
  return (
    <Sidebar>
      <Character onClick={toMain} src={CharacterLogo} alt="캐릭터 로고" />
    </Sidebar>
  );
}
