import { CameraInfo } from '../interfaces/type';

/** YouTubeライブカメラ情報一覧を取得 */
const GetCameraInfoList = (): CameraInfo[] => [
  // 東京
  {
    channelId: 'UCGCZAYq5Xxojl_tSXcVJhiQ', q: '渋谷スクランブル交差点', location: { lat: 35.659707, lng: 139.70046 }, videoId: 'HpdO5Kq3o7Y',
  },
  {
    channelId: 'UC1LK8PM_k4Fak8v4PBtcQIQ', q: '公園通り商店街マルイ', location: { lat: 35.661101, lng: 139.700828 }, videoId: 'zGfw93Dqzg8',
  },
  {
    channelId: 'UCKyXyJMijwyBebgI9wmzFcw', q: '東京タワー', location: { lat: 35.65858, lng: 139.745406 }, videoId: 'SiT4cyLwc8s',
  },
  {
    channelId: 'UCbTLJi8lXWIt_d1AtRv4Nmw', q: '汐留', location: { lat: 35.659664, lng: 139.759321 }, videoId: 'QOjmvL3e7Lc',
  },
  {
    channelId: 'UChRQpufaxclkezElsQ04VXw', q: 'オノデン', location: { lat: 35.698295, lng: 139.771001 }, videoId: 'duJGyLbCK-s',
  },
  {
    channelId: 'UCJrDvNbGDWn0NcxhOyG8TmA', q: '千鳥ヶ淵', location: { lat: 35.690966, lng: 139.747651 }, videoId: 'yIoPisyFE64',
  },

  // 山梨
  {
    channelId: 'UCiIA2H7KnbK7Wsyhpw1_glw', q: '河口湖駅前', location: { lat: 35.498530043145216, lng: 138.76882169762285 }, videoId: 'tLQOIro0kgc',
  },

  // 大阪
  {
    channelId: 'UCQ2mmGKtrBp6rL8tSMJCCwA', q: '道頓堀', location: { lat: 34.668886, lng: 135.501285 }, videoId: 'jdUVPRrjBPw',
  },
];

export default GetCameraInfoList;
