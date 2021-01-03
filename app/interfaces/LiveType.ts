// GoogleMap座標
export type Location = {
  lat: number;
  lng: number;
};

// GoogleMap描画エリア情報
export type Area = {
  name: string;
  pathName: string;
  location: Location;
  zoom: number;
};

// Youtubeライブカメラ情報
export type Camera = {
  id: string;
  location: Location;
};

// 描画エリア上のライブカメラ
export type Live = {
  area: Area;
  cameraList: Camera[];
};
