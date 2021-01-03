import { Area, Camera, Live } from '../interfaces/LiveType';

// ライブカメラ情報一覧
export const LiveDataList: Live[] = [
  {
    area: {
      name: '東京都', pathName: 'tokyo', location: { lat: 35.6684415, lng: 139.6007827 }, zoom: 11,
    },
    cameraList: [
      { id: 'lkIJYc4UH60', location: { lat: 35.659548, lng: 139.70055 } },
      { id: '6YRUWrkV2R4', location: { lat: 35.659664, lng: 139.759321 } },
    ],
  },
  {
    area: {
      name: '大阪府', pathName: 'osaka', location: { lat: 34.6777645, lng: 135.4160244 }, zoom: 12,
    },
    cameraList: [
      { id: 'gYCpTUlMkek', location: { lat: 34.668886, lng: 135.501285 } },
    ],
  },
];

// 日本全体の座標と全ライブカメラ情報一覧を返す
export const getNationwideLiveDataList = (): Live => {
  const area: Area = {
    name: '全国', pathName: '', location: { lat: 38.6803521, lng: 140.1719602 }, zoom: 5.5,
  };
  const cameraList: Camera[] = [];
  LiveDataList.forEach(
    (live: Live) => live.cameraList.forEach(
      (camera: Camera) => cameraList.push(camera),
    ),
  );
  return { area, cameraList };
};
