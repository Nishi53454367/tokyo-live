import React from 'react';
import { GetStaticProps } from 'next';
import { Live } from '../../interfaces/LiveType';
import { getNationwideLiveDataList } from '../../utils/LiveData';
import Layout from '../../components/Layout';
import LiveCameraMap from '../../components/LiveCameraMap';

// ページ本体
const LiveTopPage: React.FC<Live> = ({ area, cameraList }) => (
  <Layout title="全国">
    <LiveCameraMap
      area={area}
      cameraList={cameraList}
    />
  </Layout>
);
export default LiveTopPage;

// 日本全体の座標と全ライブカメラ情報一覧をpropsに設定
export const getStaticProps: GetStaticProps = async () => ({ props: getNationwideLiveDataList() });
