import React from 'react';
import Board from '../components/Board';

const policy: React.FC = () => (
  <Board>
    <div>
      <div>当サービスでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。</div>
      <div>
        Googleアナリティクスはデータの収集のためにCookieを使用しています。
        データは匿名で収集されており、個人を特定するものではありません。
      </div>
      <div>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</div>
      <div>
        規約に関しての詳細は
        <a target="_blank" rel="noreferrer" href="https://marketingplatform.google.com/about/analytics/terms/jp/">Googleアナリティクスサービス利用規約</a>
        や
        <a target="_blank" rel="noreferrer" href="https://policies.google.com/technologies/ads?hl=ja/">Googleポリシーと規約</a>
        をご覧ください。
      </div>
    </div>
  </Board>
);

export default policy;
