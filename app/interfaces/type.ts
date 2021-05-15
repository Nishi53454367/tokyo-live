/** GoogleMap座標 */
export type Location = {
  /** 緯度 */
  lat: number;
  /** 経度 */
  lng: number;
};

/** YouTubeライブカメラ情報 */
export type CameraInfo = {
  /** チャンネルID */
  channelId: string;
  /** キーワード */
  q: string;
  /** カメラ座標 */
  location: Location;
  /** 動画ID */
  videoId: string;
};

/** YouTubeDataSearchAPI パラメータ */
export type SearchAPIParams = {
  /** プロパティ */
  part: string;
  /** リソース種類 */
  type: string;
  /** イベント種類 */
  eventType: string;
  /** 検索結果最大数 */
  maxResults: number;
  /** Webサイト埋め込み可能 */
  videoEmbeddable: boolean,
  /** チャンネルID */
  channelId: string;
  /** キーワード */
  q: string;
};

/** YouTubeDataSearchAPI 検索結果 */
export type SearchAPIResponse = {
  /** ステータスコード */
  statusCode: string;
  /** APIレスポンス */
  result: {
    items: [{
      id: {
        videoId: string;
      }
    }];
  }
  /** エラーメッセージ */
  errMsg: string;
};
