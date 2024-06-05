import React, { useState, useEffect } from "react";
import { Map, useMap, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

import SideBar from "../../components/SideBar.jsx";
import FirePoint from "../../imgs/firePoint.svg";
import NonFirePoint from "../../imgs/nonFirePoint.svg";
import CloseImg from "../../imgs/close.svg";

const regdata = [
  {
    storeName: "그레이스홀",

    yaxis: 36.10240728030978,
    xaxis: 129.3819895660373,
    // latlng: { lat: 36.10240728030978, lng: 129.3819895660373 },
  },

  // {
  //   storeName: "닭칼국수",
  //   // latlng: { lat: 36.09931365660396, lng: 129.39997835387143 },
  // },
  // {
  //   storeName: "더가든파티",
  //   // latlng: { lat: 36.0111163119898, lng: 129.363948229105 },
  // },
  // {
  //   storeName: "동순관",
  //   // latlng: { lat: 36.0111163119898, lng: 129.363948229105 },
  // },
];

const StyleContainer = styled.div`
  overflow: hidden;
  body {
    margin: 0;
    padding: 0;
  }

  display: flex;
`;

// const StyledSideBar = styled(SideBar)`
//   box-shadow: 1px 0px 5px #c0c0c0;
// `;

const InfoContainer = styled.div`
  width: 250px;
  height: 100px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoAbove = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoMiddle = styled.div`
  display: flex;
`;

function FirePoints({ score }) {
  const totalPoints = 5;
  const firePoints = Array(score).fill(FirePoint);
  const nonFirePoints = Array(totalPoints - score).fill(NonFirePoint);

  return (
    <div>
      {firePoints.map((src, index) => (
        <img key={`fire-${index}`} src={src} alt="불점" />
      ))}
      {nonFirePoints.map((src, index) => (
        <img key={`nonfire-${index}`} src={src} alt="비 불점" />
      ))}
    </div>
  );
}

export default function MapContainer() {
  // 인포윈도우 Open 여부를 저장
  // 현 위치 찍기. 일단 카카오 본사 위치

  const [data, setData] = useState([]);

  const [currentPosition, setCurrentPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCurrentPosition({ lat, lng });

          const url = `http://223.p-e.kr:8080/get/stores?x=${lng}&y=${lat}&radius=1250`;
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              setData(data);
            })
            .catch((e) => setData(regdata));
        },
        () => {
          alert("위치 정보를 가져오는데 실패했습니다.");
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    } else {
      alert("Geolocation을 사용할 수 없습니다.");
    }
  }, []);

  const EventMarkerContainer = ({
    position,
    storeName,
    localNumberAddress,
    storeId,
  }) => {
    const map = useMap();
    const [isOpen, setIsOpen] = useState(false);
    const [review, setReview] = useState([]);

    const handleIsOpen = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        const urlR = `http://223.p-e.kr:8080/get/store/spicy-level?storeId=${storeId}`;

        fetch(urlR)
          .then((response) => response.json())
          .then((review) => {
            setReview(review);
          });
      }
    };
    console.log(review);
    // const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        // onClick={(marker) => map.panTo(marker.getPosition())}
        // onMouseOver={() => setIsVisible(true)}
        // onMouseOut={() => setIsVisible(false)}

        onClick={(marker) => {
          map.panTo(marker.getPosition()); // 지도 중앙을 마커
          console.log(marker.getPosition());
          handleIsOpen(); // 열고 닫는거
        }}
        image={{
          src: "https://raw.githubusercontent.com/LikeLionHGU/Hot_Front/6d359b4c9a92ef99cf7abe47149b0ffadba76aaf/src/imgs/marker.svg",
          size: { width: 22, height: 32 }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 11,
              y: 38,
            },
          },
        }}
      >
        {isOpen && (
          <InfoContainer>
            <InfoAbove>
              <div>{storeName}</div>
              <img onClick={handleIsOpen} src={CloseImg} alt="닫기 표시" />
            </InfoAbove>
            {review.map((reviewData, index) => (
              <InfoMiddle key={index}>
                <FirePoints score={reviewData.spicyLevelList} />
                <div>{reviewData.reviewCountList}</div>
              </InfoMiddle>
            ))}
            <div>{localNumberAddress}</div>
          </InfoContainer>
        )}
      </MapMarker>
    );
  };

  return (
    <StyleContainer>
      <SideBar />

      <Map center={currentPosition} style={{ width: "100vw", height: "100vh" }}>
        {data.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.xaxis}-${value.yaxis}`}
            position={{ lng: value.xaxis, lat: value.yaxis }}
            storeName={value.storeName}
            localNumberAddress={value.localNumberAddress}
            storeId={value.storeId}
          />
        ))}
      </Map>
    </StyleContainer>
  );
}
