# 課題名
課題選考_地域コミュニティイベント管理アプリ

# 概要
このアプリは、地域住民が気軽にイベント情報を探し、参加し、交流できる場を提供するための
フロントエンド Web アプリケーションです。  
「もっと気軽に地域のイベントを知りたい」「多様な世代が交流できる場が欲しい」
といった住民の声をもとに開発しました。

## セットアップ手順
1.  Node.jsのLTSをインストール
2.  Vite + React プロジェクト作成　　　※ここから先はVscode内のWindws Powershellを使う
  → npm create vite@latest community-event-app　を実行
3.  依存パッケージのインストール
  → まずディレクトリ先に移動するため　cd community-event-app　を実行
  → npm install　を実行
4.  開発サーバーの起動
  → npm run dev
・ターミナルに http://localhost:5173/ が表示されるのでブラウザでアクセス
5.  開発に使用するライブラリ導入
   → npm install react-router-dom　（ルーティング）
   → npm install jotai　（状態管理）
   → npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion　（UIコンポーネント）

## 使用技術・ライブラリ
- フロントエンドフレームワーク : React
- ビルドツール : Vite
- UI ライブラリ : Chakra UI
- ルーティング : React Router
- 状態管理 : jotai
- CSS 管理 : 各ページ専用の CSS ファイルを併用

- ## ディレクトリ構成
  src/
  -- assets/  背景画像などの静的ファイル
  -- components/  Navbar など共通コンポーネント
  -- data/  イベントデータ (events.js)
  -- pages/  ページコンポーネント (Home, EventList, EventDetail, StaffRecruit)
  -- styles/  各ページごとの CSS ファイル
  -- App.jsx  ルーティング設定

## 実装機能
・ トップページ（アプリ紹介）
- イベント一覧（カテゴリ選択 & フィルター）
- イベント詳細ページ（背景画像付き / 一覧に戻るボタン）
- イベントスタッフ募集ページ（ボランティア応募機能）

## 動作確認方法
1.  `npm run dev` でローカルサーバーを起動
2.  ブラウザで `http://localhost:5173/` にアクセス
