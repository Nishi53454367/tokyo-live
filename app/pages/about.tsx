import React from 'react';
import { Typography } from '@material-ui/core';
import Board from '../components/Board';

const about: React.FC = () => (
  <Board>
    <div>
      <Typography variant="h6">
        このサービスについて
      </Typography>
      <div>YouTubeに投稿されているライブカメラをGoogleMap上で見れるサービスです。</div>
      <hr />
      <Typography variant="h6">
        注意点
      </Typography>
      <li>メンテナンス等により予告なくサービスを停止することがあります</li>
      <li>YouTubeや投稿者の都合により動画は見れなくなる可能性があります</li>
      <li>ライブカメラの座標は多少ズレていることがあります</li>
    </div>
  </Board>
);

export default about;
