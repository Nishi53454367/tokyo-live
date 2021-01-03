import { Area, Camera, Live } from '../interfaces/LiveType';

// ライブカメラ情報一覧
export const LiveDataList: Live[] = [
  {
    area: {
      name: '東京都', pathName: 'tokyo', location: { lat: 35.6684415, lng: 139.6007827 }, zoom: 11,
    },
    cameraList: [
      { id: 'lkIJYc4UH60', location: { lat: 35.659707, lng: 139.70046 } }, // 渋谷スクランブル交差点1
      { id: 'EB9qcDfufOU', location: { lat: 35.65947788422368, lng: 139.7010070528134 } }, // 渋谷スクランブル交差点2
      { id: 'zGfw93Dqzg8', location: { lat: 35.661101, lng: 139.700828 } }, // 渋谷公園通りマルイ
      { id: 'jvF2pnB8Sbs', location: { lat: 35.65858, lng: 139.745406 } }, // 東京タワー
      { id: 'oGShh37QT1M', location: { lat: 35.65921225966917, lng: 139.73021199176415 } }, // 六本木けやき坂
      { id: '6YRUWrkV2R4', location: { lat: 35.659664, lng: 139.759321 } }, // 汐留
      { id: 'U-raZi-kJzE', location: { lat: 35.666699191623785, lng: 139.77229064204482 } }, // 築地本願寺
      { id: 'R5aSDEsvGFY', location: { lat: 35.698295, lng: 139.771001 } }, // 秋葉原オノデン
      { id: 'JvcQ78u8dQ4', location: { lat: 35.697388, lng: 139.444146 } }, // 国立市 富士見通り
    ],
  },
  {
    area: {
      name: '山梨県', pathName: 'yamanashi', location: { lat: 35.5687448, lng: 138.095465 }, zoom: 9,
    },
    cameraList: [
      { id: 'nj5DJB7ZsL4', location: { lat: 35.498530043145216, lng: 138.76882169762285 } }, // 河口湖
    ],
  },
  {
    area: {
      name: '大阪府', pathName: 'osaka', location: { lat: 34.6777645, lng: 135.4160244 }, zoom: 12,
    },
    cameraList: [
      { id: 'gYCpTUlMkek', location: { lat: 34.668886, lng: 135.501285 } }, // 道頓堀
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
