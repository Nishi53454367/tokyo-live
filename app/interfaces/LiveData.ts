export type Camera = {
  id: string;
  lat: number;
  lng: number;
};

export type Live = {
  area: string;
  cameraList: Camera[];
};
