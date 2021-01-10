import React from 'react';
import { GetStaticProps } from 'next';
import LiveCameraMap from '../components/LiveCameraMap';
import {
  LiveInfo, Camera, LiveProps,
} from '../interfaces/LiveType';
import { SearchAPIParams, SearchResponse } from '../interfaces/SearchType';
import { getNationwideLiveInfoList } from '../utils/LiveDataInfo';
import LiveDataSearch from '../utils/LiveDataSearch';

// ページ本体
const IndexPage: React.FC<LiveProps> = ({ area, cameraList }) => (
  <LiveCameraMap
    area={area}
    cameraList={cameraList}
  />
);
export default IndexPage;

// ビルド時静的生成(propsとして使用するデータを生成する)
export const getStaticProps: GetStaticProps = async () => {
  // 日本全体の座標と全ライブカメラ情報一覧を取得
  const liveInfo: LiveInfo = getNationwideLiveInfoList();
  // ライブカメラ情報一覧を元にPropsに設定するデータを作成
  const cameraList: Camera[] = [];
  for (const cameraInfo of liveInfo.cameraInfoList) {
    const searchAPIParams: SearchAPIParams = {
      part: 'snippet',
      type: 'video',
      eventType: 'live',
      maxResults: 1,
      channelId: cameraInfo.channelId,
      q: cameraInfo.q,
    };
    const response: SearchResponse = await LiveDataSearch(searchAPIParams);
    if (RegExp(/^2[0-9]{2}$/u).test(response.statusCode)) {
      cameraList.push({
        videoId: response.result.items[0].id.videoId,
        location: cameraInfo.location,
      });
    }
  }
  // Props返却(これでページ本体(IndexPage)で使用できる)
  return { props: { area: liveInfo.area, cameraList } };
};
