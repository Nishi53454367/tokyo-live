# youtube-liveCamera-map
YouTubeのライブ配信をGoogleMap上で見れるサービスです。

こちらのQiita記事で紹介しています。  
https://qiita.com/Nishi53454367/items/dc144f0e1712a2487bdb

# 使用技術
- 言語：TypeScript
- ライブラリ、FW：React、Next.js
- CSSフレームワーク：Material-UI

# ローカル環境構築手順
## ビルド
```
docker-compose build
```

## node_modulesインストール
```
docker-compose run --rm node sh
yarn install
exit
```

## コンテナ起動
```
docker-compose up -d
```

## .env.localをapp直下に作成
ファイル中身
```
NEXT_PUBLIC_GOOGLE_API_KEY={GoogleMapAPIキー}
```

## 画面起動
http://localhost:3000
