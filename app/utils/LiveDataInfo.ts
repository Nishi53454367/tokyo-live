import { Area, CameraInfo, LiveInfo } from '../interfaces/LiveType';

// ライブカメラ情報一覧
export const LiveInfoList: LiveInfo[] = [
  {
    area: {
      name: '東京都', location: { lat: 35.6684415, lng: 139.6007827 }, zoom: 11,
    },
    cameraInfoList: [
      { channelId: 'UCGCZAYq5Xxojl_tSXcVJhiQ', q: '渋谷スクランブル交差点', location: { lat: 35.659707, lng: 139.70046 } },
      { channelId: 'UC1LK8PM_k4Fak8v4PBtcQIQ', q: '公園通り商店街マルイ', location: { lat: 35.661101, lng: 139.700828 } },
      { channelId: 'UCKyXyJMijwyBebgI9wmzFcw', q: '東京タワー', location: { lat: 35.65858, lng: 139.745406 } },
      { channelId: 'UCbTLJi8lXWIt_d1AtRv4Nmw', q: '汐留', location: { lat: 35.659664, lng: 139.759321 } },
      { channelId: 'UChRQpufaxclkezElsQ04VXw', q: 'オノデン', location: { lat: 35.698295, lng: 139.771001 } },
      { channelId: 'UCJrDvNbGDWn0NcxhOyG8TmA', q: '千鳥ヶ淵', location: { lat: 35.690966, lng: 139.747651 } },
    ],
  },
  {
    area: {
      name: '山梨県', location: { lat: 35.5687448, lng: 138.095465 }, zoom: 9,
    },
    cameraInfoList: [
      { channelId: 'UCiIA2H7KnbK7Wsyhpw1_glw', q: '河口湖駅前', location: { lat: 35.498530043145216, lng: 138.76882169762285 } },
    ],
  },
  {
    area: {
      name: '大阪府', location: { lat: 34.6777645, lng: 135.4160244 }, zoom: 12,
    },
    cameraInfoList: [
      { channelId: 'UCQ2mmGKtrBp6rL8tSMJCCwA', q: '道頓堀', location: { lat: 34.668886, lng: 135.501285 } },
    ],
  },
];

// 日本全体の座標と全ライブカメラ情報一覧を返す
export const getNationwideLiveInfoList = (): LiveInfo => {
  const area: Area = {
    name: '日本全体', location: { lat: 38.6803521, lng: 140.1719602 }, zoom: 5.5,
  };
  const cameraInfoList: CameraInfo[] = [];
  LiveInfoList.forEach(
    (liveInfo: LiveInfo) => liveInfo.cameraInfoList.forEach(
      (cameraInfo: CameraInfo) => cameraInfoList.push(cameraInfo),
    ),
  );
  return { area, cameraInfoList };
};
