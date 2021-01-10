# youtube-liveCamera-map
YouTubeの街角ライブ配信をGoogleMap上で見れるサービスです。

# コンテナ起動手順
ビルド
```
docker-compose build
```

node_modulesインストール
```
docker-compose run --rm node sh
yarn install
exit
```

起動
```
docker-compose up -d
```