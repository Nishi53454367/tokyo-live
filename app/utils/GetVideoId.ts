import axios from 'axios';
import { SearchAPIParams, SearchAPIResponse } from '../interfaces/type';

/** YouTubeDataSearchAPI(v3)を使用して動画に埋め込むvideoIdを取得 */
async function GetVideoId(params: SearchAPIParams): Promise<SearchAPIResponse> {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)}`;
  return axios.get(url, { params })
    .then((result) => (
      {
        statusCode: String(result.status),
        result: result.data,
        errMsg: '',
      }))
    .catch((error) => {
      // 200系以外は全部こっち
      if (error.response) {
        return {
          statusCode: String(error.response.status),
          result: error.response.data,
          errMsg: String(error.response.data.message),
        };
      }
      return {
        statusCode: 'レスポンス受信失敗',
        result: error.message,
        errMsg: String(error.message),
      };
    });
}

export default GetVideoId;
