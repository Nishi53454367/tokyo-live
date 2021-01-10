import axios from 'axios';
import { SearchAPIParams, SearchResponse } from '../interfaces/SearchType';

// YouTubeDataSearchAPI(v3)を使用して動画に埋め込むvideoIdを取得
async function LiveDataSearch(params: SearchAPIParams): Promise<SearchResponse> {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)}`;
  return axios.get(url, { params })
    .then((result) => (
      {
        statusCode: String(result.status),
        result: result.data,
        message: '',
      }))
    .catch((error) => {
      // 200系以外は全部こっち
      if (error.response) {
        return {
          statusCode: String(error.response.status),
          result: error.response.data,
          message: String(error.response.data.message),
        };
      }
      return {
        statusCode: 'レスポンス受信失敗',
        result: error.message,
        message: String(error.message),
      };
    });
}

export default LiveDataSearch;
