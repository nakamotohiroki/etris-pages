## 概要

自己学習用に「パズルゲーム　えトリス」を単独で開発しました。

下記URLから実際に遊ぶことが出来ます。
https://nakamotohiroki.github.io/etris-pages/
※同タブで遷移してしまうので、右クリックで別タブで開くことをお勧めします。

## 遊び方

画像をアップロード、もしくは AI が生成したものから選択して、パズルを組み立てるゲームです。

## 経歴

2021 年 8 月から自己学習としてベースを作成
2022 年 10 月に画像生成 AI を使ったページの追加
2023 年 12 月に EC2+CodePipeline から GitHubActions+GitHubPages に変更

## システム構成図

<img src="https://github.com/nakamotohiroki/etris-pages/assets/85219228/50044073-dfb1-466e-85ec-0cca4710b47b" width="80%" alt="画像読み込みエラー">

## 使用技術

・フロントエンド
Next.js(SSG), React, TypeScript, Emotion css, GSAP, Lottie, three.js

・バックエンド API(画像生成 AI、画像取得)
AWS Lambda, Amazon API Gateway, Python, PyTorch

・ホスティング先
フロント資源：GitHub Pages
生成画像：S3 + CloudFront
