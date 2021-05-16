import React from 'react';
import { GetStaticProps } from 'next';
import LiveCameraMap from '../components/LiveCameraMap';
import { CameraInfo, SearchAPIParams, SearchAPIResponse } from '../interfaces/type';
import GetCameraInfoList from '../utils/GetCameraInfoList';
import GetVideoId from '../utils/GetVideoId';

type Props = {
  cameraList: CameraInfo[];
};

/** ページ本体 */
const IndexPage: React.FC<Props> = ({ cameraList }) => (
  <LiveCameraMap
    cameraList={cameraList}
  />
);
export default IndexPage;

/** ビルド時静的生成(IndexPageでPropsとして使用するデータを生成する) */
export const getStaticProps: GetStaticProps = async () => {
  // 1日当たりのYouTubeDataSearchAPI(v3)リクエスト可能数を消費させないよう開発時はリストの内容をそのまま返却
  if (process.env.NODE_ENV === 'development') {
    return { props: { cameraList: GetCameraInfoList() } };
  }

  // YouTubeライブカメラ情報一覧を取得
  const cameraInfoList = GetCameraInfoList();

  // YouTubeライブカメラ情報一覧を元に最新のvideoIdをYouTubeDataSearchAPI(v3)から取得して返却
  const cameraList: CameraInfo[] = [];
  for await (const cameraInfo of cameraInfoList) {
    const searchAPIParams: SearchAPIParams = {
      part: 'snippet',
      type: 'video',
      eventType: 'live',
      maxResults: 1,
      videoEmbeddable: true,
      channelId: cameraInfo.channelId,
      q: cameraInfo.q,
    };
    const response: SearchAPIResponse = await GetVideoId(searchAPIParams);
    if (RegExp(/^2[0-9]{2}$/u).test(response.statusCode)) {
      if (response.result.items.length === 1) {
        cameraList.push({
          channelId: cameraInfo.channelId,
          q: cameraInfo.q,
          location: cameraInfo.location,
          videoId: response.result.items[0].id.videoId,
        });
        console.log(`${cameraInfo.q} videoId: ${response.result.items[0].id.videoId}`);
      } else {
        console.log(`${cameraInfo.q} 取得失敗`);
      }
    } else {
      console.log(`${cameraInfo.q} 取得失敗`);
    }
  }
  return { props: { cameraList } };
};
