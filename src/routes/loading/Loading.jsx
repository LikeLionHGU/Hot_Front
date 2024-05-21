import styled from "styled-components";
import { useState, useEffect } from "react";
import { ReactComponent as PepperImg1 } from "../../imgs/pepperimg1.svg";
import { ReactComponent as PepperImg2 } from "../../imgs/pepperimg2.svg";
import { ReactComponent as PepperImg3 } from "../../imgs/pepperimg3.svg";
import { ReactComponent as PepperImg4 } from "../../imgs/pepperimg4.svg";

const LoadingContainer = styled.div`
  position: absolute;
  top: 40%;
`;

const LoadingImg = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.h2`
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  const getImageComponent = () => {
    switch (currentImage) {
      case 1:
        return <PepperImg1 />;
      case 2:
        return <PepperImg2 />;
      case 3:
        return <PepperImg3 />;
      case 4:
        return <PepperImg4 />;
      default:
        return null;
    }
  };

  return (
    <LoadingContainer>
      <LoadingImg>{getImageComponent()}</LoadingImg>
      <LoadingText>맵기력 측정하는 중...</LoadingText>
    </LoadingContainer>
  );
}
