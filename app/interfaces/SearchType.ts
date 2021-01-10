// YouTubeDataSearchAPIパラメータ
export type SearchAPIParams = {
  part: string;
  type: string;
  eventType: string;
  maxResults: 1;
  channelId: string;
  q: string;
};

// 検索結果
export type SearchResponse = {
  statusCode: string;
  // YouTubeDataSearchAPIレスポンス
  result: {
    items: [{
      id: {
        videoId: string;
      }
    }];
  }
  message: string;
};
