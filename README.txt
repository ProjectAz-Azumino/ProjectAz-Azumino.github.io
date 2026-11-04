# Project Az Website
GitHub Pages向けの静的ポートフォリオサイトです。

## ファイル構成
- index.html: トップページ
- profile.html: プロフィール
- works.html: 作品一覧
- links.html: SNSリンク
- updates.html: 更新履歴
- css/style.css: 共通デザイン・Webフォント
- js/main.js: ダーク/ライトテーマ切り替え

## 公開前に変更するところ
- `profile.html` のプロフィール文
- `works.html` の作品タイトル・説明・リンク (`href="#"` を実際のURLに)
- `links.html` の各SNSリンク（現在は一般サイトへの仮リンク）
- `updates.html` の日付と更新内容
- トップページの `AZ` をアイコン画像に差し替える場合は `.avatar` 内を画像タグに変更

## GitHub Pages
リポジトリの Settings → Pages → Deploy from a branch → main / root を選択。
