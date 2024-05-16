## 概要
自己学習用に「パズルゲーム　えトリス」を単独で開発いたしました。
↓から実際に遊ぶことが出来ます。
https://nakamotohiroki.github.io/etris-pages/

## 遊び方
画像をアップロード、もしくはAIが生成したものから選択して、パズルを組み立てるゲームです。

## 経歴
2021年8月から自己学習としてベースを作成
2022年10月に画像生成AIを使ったページの追加
2023年12月にEC2+CodePipelineからGitHubActions+GitHubPagesに変更

## 使用技術
・フロントエンド
Next.js(SSG), React, TypeScript, Emotion css, GSAP, Lottie, three.js

・バックエンドAPI(画像生成AI、画像取得)
AWS Lambda, Amazon API Gateway, Python, PyTorch

・ホスティング先
フロント資源：GitHub Pages
生成画像：S3 + CloudFront
