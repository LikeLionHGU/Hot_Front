import styled from "styled-components";
// import Font from "../../assets/font.css";
import FirePoint from "../../imgs/firePoint.svg";
import NonFirePoint from "../../imgs/nonFirePoint.svg";
import { useEffect, useState } from "react";

const Sidebar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  color: #410a0a;
  font-family: Dream5;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-right: 20px;
`;

const Name = styled.div`
  font-size: 28px;
`;

const GeneralText = styled.div`
  margin-top: 35px;
`;

const InputContent = styled.textarea`
  font-size: 13px;
  border: 1px solid #410a0a;
  border-radius: 10px;
  outline: none;
  resize: none;

  margin-top: 10px;
  padding: 15px;
  width: 230px;
  ::placeholder {
    color: #c0c0c0;
    font-family: none;
  }
`;

const TwoBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
`;

const CancelReview = styled.button`
  color: #410a0a;
  border: 1px solid #410a0a;
  border-radius: 20px;
  background-color: white;
  padding: 10px;

  width: 80px;
  font-family: Dream5;
  &:hover {
    cursor: pointer;
  }
`;

const SubmitReview = styled.button`
  color: #410a0a;
  border-radius: 20px;
  border: none;
  background-color: #f6b95b;
  padding: 10px;

  width: 80px;
  font-family: Dream5;

  &:hover {
    cursor: pointer;
  }
`;

function FirePoints() {
  const totalPoints = 5;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index + 1);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      {[...Array(totalPoints)].map((_, index) => (
        <img
          key={index}
          src={index < selectedIndex ? FirePoint : NonFirePoint}
          alt={index < selectedIndex ? "불점" : "비 불점"}
          onClick={() => handleClick(index)}
          style={{ cursor: "pointer", marginRight: "5px" }}
        />
      ))}
    </div>
  );
}

export default function OnLogin() {
  const [formData, setFormData] = useState({
    storeId: "",
    userEmail: "",
    reviewSpicyLevel: "",
    title: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendData = async () => {
    try {
      const response = await fetch("http://223.p-e.kr:8080/post/store/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };
  return (
    <Sidebar>
      <SidebarContainer>
        <Name>식당이름</Name>
        <GeneralText>당신의 불점은?</GeneralText>
        <FirePoints />
        <GeneralText>어떤 음식을 드셨나요?</GeneralText>
        <InputContent
          value={formData.title}
          placeholder="음식은 맛있으셨나요?"
          rows={"3"}
        />
        <GeneralText>어떤 점이 좋았나요?(선택)</GeneralText>
        <InputContent
          value={formData.comment}
          placeholder="식당을 이용하면서 좋았던 점이나 개선할 점이 있다면 남겨주세요."
          rows={"7"}
        />
        <TwoBtn>
          <CancelReview>취소</CancelReview>
          <SubmitReview>등록</SubmitReview>
        </TwoBtn>
      </SidebarContainer>
    </Sidebar>
  );
}
