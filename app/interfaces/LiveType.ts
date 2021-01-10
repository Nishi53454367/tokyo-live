// GoogleMap座標
export type Location = {
  lat: number;
  lng: number;
};

// GoogleMap描画エリア情報
export type Area = {
  name: string;
  location: Location;
  zoom: number;
};

// YouTubeライブカメラ情報
export type CameraInfo = {
  channelId: string;
  q: string;
  location: Location;
};

// エリアごとのライブカメラ情報
export type LiveInfo = {
  area: Area;
  cameraInfoList: CameraInfo[];
};

// YouTubeライブカメラ(描画データ)
export type Camera = {
  videoId: string;
  location: Location;
};

// 画面Props
export type LiveProps = {
  area: Area;
  cameraList: Camera[];
};
