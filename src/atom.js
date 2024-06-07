import { atom, useRecoilState } from "recoil";

const detailState = atom({
  key: "detailState",
  default: false, // 기본값은 사이드바가 닫혀있는 상태
});
