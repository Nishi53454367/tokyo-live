import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import YouTube from 'react-youtube';
import { Camera, Live } from '../../interfaces/LiveData';
import LiveDataList from '../../utils/LiveDataList';

type Props = {
  cameraList: Camera[];
};

const opts = {
  height: '240',
  width: '360',
};

// ページ本体
const livePage: React.FC<Props> = ({ cameraList }) => (
  <div>
    {cameraList.map((camera: Camera) => (
      <div key={camera.id}>
        <YouTube videoId={camera.id} opts={opts} />
      </div>
    ))}
  </div>
);
export default livePage;

// 動的ルーティング定義
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LiveDataList.map((liveData: Live) => (
    { params: { area: liveData.area } }
  ));
  return { paths, fallback: false };
};

// ビルド時静的生成
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const area = params?.area;
  // ルーティングされたエリアのライブカメラ情報を取得
  let cameraList: Camera[] = [];
  LiveDataList.forEach((live: Live) => {
    if (area === live.area) {
      cameraList = live.cameraList;
    }
  });
  return { props: { cameraList } };
};
