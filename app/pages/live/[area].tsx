import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Area, Camera, Live } from '../../interfaces/LiveType';
import { LiveDataList } from '../../utils/LiveData';
import Layout from '../../components/Layout';
import LiveCameraMap from '../../components/LiveCameraMap';

// ページ本体
const LivePage: React.FC<Live> = ({ area, cameraList }) => (
  <Layout title={area.name}>
    <LiveCameraMap
      area={area}
      cameraList={cameraList}
    />
  </Layout>
);
export default LivePage;

// 動的ルーティング定義(〜/live/[area]のパスを生成する)
export const getStaticPaths: GetStaticPaths = async () => {
  // paramsの中のarea:はファイル名の[area]と合わせること
  const paths = LiveDataList.map((liveData: Live) => (
    { params: { area: liveData.area.pathName } }
  ));
  // これでgetStaticPropsでparamsが使用できる
  return { paths, fallback: false };
};

// ビルド時静的生成(propsとして使用するデータを生成する)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // getStaticPathsで生成されたパスを元に描画エリアとライブカメラ一覧を取得
  const areaName = params?.area;
  let area: Area = {
    name: '', pathName: '', location: { lat: 0, lng: 0 }, zoom: 0,
  };
  let cameraList: Camera[] = [];
  LiveDataList.forEach((live: Live) => {
    if (areaName === live.area.pathName) {
      area = live.area;
      cameraList = live.cameraList;
    }
  });
  // これでlivePageでpropsとして使用できる
  return { props: { area, cameraList } };
};
