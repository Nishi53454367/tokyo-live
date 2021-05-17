import { CameraInfo } from '../interfaces/type';

/** YouTubeライブカメラ情報一覧を取得 */
const GetCameraInfoList = (): CameraInfo[] => [
  // 宮城
  {
    channelId: 'UCKYimk34K4xqApVYTKg6sow', q: '仙台マークワン屋上', location: { lat: 38.26191822373228, lng: 140.8813481561511 }, videoId: 'Mwj81Enkd8c',
  },

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

  // 神奈川
  {
    channelId: 'UCKtFn0R-NGm6cocqdoGAQTA', q: '横浜汽車道', location: { lat: 35.452190678008606, lng: 139.63524405749328 }, videoId: 'bUIhlxNMeCU',
  },

  // 静岡
  {
    channelId: 'UCkUdb6wh-TE9MK7Q2VTE5-A', q: 'さった峠　広重の富士山', location: { lat: 35.071539263806514, lng: 138.54125932519224 }, videoId: 'CWNjN2bYzsA',
  },
  {
    channelId: 'UCJKH8wYxFYeufDnvy1MPofA', q: '［ザザシティ浜松］PTZ', location: { lat: 34.70537327557009, lng: 137.73012470697802 }, videoId: 'rJhqEueJf9U',
  },

  // 群馬
  {
    channelId: 'UCbn5eHDjwmPC2K9RG8P0i_A', q: '草津温泉「湯畑」湯滝前', location: { lat: 36.62338661406197, lng: 138.59692722865566 }, videoId: 'GzbPVzPnT-U',
  },

  // 長野
  {
    channelId: 'UCy9ww22FuUlXd0c6B8INJVQ', q: '長野市街地', location: { lat: 36.65058896053399, lng: 138.18318525644685 }, videoId: 'zUka6hg6wP0',
  },

  // 山梨
  {
    channelId: 'UCiIA2H7KnbK7Wsyhpw1_glw', q: '河口湖駅前', location: { lat: 35.498530043145216, lng: 138.76882169762285 }, videoId: 'tLQOIro0kgc',
  },

  // 大阪
  {
    channelId: 'UCQ2mmGKtrBp6rL8tSMJCCwA', q: '道頓堀', location: { lat: 34.668886, lng: 135.501285 }, videoId: 'jdUVPRrjBPw',
  },

  // 兵庫
  {
    channelId: 'UCnpKhR0jbJgGyvKr5BaRt9w', q: '明石海峡大橋', location: { lat: 34.633529452359326, lng: 135.0344058782148 }, videoId: 'gLUx48f1wH4',
  },

  // 香川
  {
    channelId: 'UCcNpMZYWUnTNePHU0IO38pQ', q: '父母ヶ浜', location: { lat: 34.18942, lng: 133.6487658 }, videoId: 'zWZJnXqoDVg',
  },

  // 愛媛
  {
    channelId: 'UClAtpDytL1hmOUeiJaNrHlQ', q: '道後温泉本館ライブカメラ（本館カメラ）', location: { lat: 33.85218000114081, lng: 132.78605045021052 }, videoId: '4vpIzKSWL7k',
  },

  // 鹿児島
  {
    channelId: 'UCynXCHprmOfyGzGSnqgp6Wg', q: '桜島と鹿児島市内', location: { lat: 31.575231222557242, lng: 130.52634223469576 }, videoId: 'i5MyvNYBCtI',
  },

  // 沖縄
  {
    channelId: 'UCUUH2KqMbaWF5ywYItYQcMQ', q: '石垣島', location: { lat: 24.33798997974339, lng: 124.15761501636929 }, videoId: '_KCqyXtqTzk',
  },
];

export default GetCameraInfoList;
