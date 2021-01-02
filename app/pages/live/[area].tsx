import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Location,
  Area,
  Camera,
  Live,
} from '../../interfaces/LiveData';
import LiveDataList from '../../utils/LiveDataList';
import LiveCameraMap from '../../components/LiveCameraMap';

// ページ本体
const livePage: React.FC<Live> = ({ area, cameraList }) => {
  // マーカー押下時の対象ライブカメラの描画有無
  const [infoWindows, setInfoWindows] = useState<boolean[]>(Array(cameraList.length));
  // マーカー押下時の中心座標
  const [
    center, setCenter,
  ] = useState<Location>(area.location);
  // ウインドウオープン(マーカー押下)
  const enableInfoWindows = (index: number, location: Location) => {
    setInfoWindows(
      [
        ...infoWindows.slice(0, index),
        true,
        ...infoWindows.slice(index + 1),
      ],
    );
    setCenter({ ...center, lat: location.lat, lng: location.lng });
  };
  // ウインドウクローズ
  const disableInfoWindows = (index: number) => {
    setInfoWindows(
      [
        ...infoWindows.slice(0, index),
        false,
        ...infoWindows.slice(index + 1),
      ],
    );
  };
  // UI
  return (
    <LiveCameraMap
      cameraList={cameraList}
      infoWindows={infoWindows}
      center={center}
      enableInfoWindows={enableInfoWindows}
      disableInfoWindows={disableInfoWindows}
    />
  );
};
export default livePage;

// 動的ルーティング定義(〜/live/[area]のパスを生成する)
export const getStaticPaths: GetStaticPaths = async () => {
  // paramsの中のarea:はファイル名の[area]と合わせること
  const paths = LiveDataList.map((liveData: Live) => (
    { params: { area: liveData.area.name } }
  ));
  // これでgetStaticPropsでparamsが使用できる
  return { paths, fallback: false };
};

// ビルド時静的生成(propsとして使用するデータを生成する)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // getStaticPathsで生成されたパスを元に描画エリアとライブカメラ一覧を取得
  const areaName = params?.area;
  let area: Area = { name: '', location: { lat: 0, lng: 0 } };
  let cameraList: Camera[] = [];
  LiveDataList.forEach((live: Live) => {
    if (areaName === live.area.name) {
      area = live.area;
      cameraList = live.cameraList;
    }
  });
  // これでlivePageでpropsとして使用できる
  return { props: { area, cameraList } };
};
