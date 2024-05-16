## 概要

自己学習用に「パズルゲーム　えトリス」を単独で開発しました。  
アップロードした画像、もしくは AI が生成した画像を使用して、パズルを組み立てるゲームです。  
下記URLから実際に遊ぶことが出来ます。  
※同タブで遷移してしまうので、右クリックで別タブで開くことをお勧めします。

メインページ ： https://nakamotohiroki.github.io/etris-pages  

webGLページ ： https://nakamotohiroki.github.io/etris-pages/webGL  
※端末によっては重たい処理のため、注意が必要です。

## 経歴

2021 年 8 月 ：　自己学習としてベースを作成  
2022 年 10 月　：　画像生成 AI を使ったページの追加  
2023 年 12 月　：　CodePipeline+EC2 から GitHubActions+GitHubPages に変更

## システム構成図

<img src="https://github.com/nakamotohiroki/etris-pages/assets/85219228/50044073-dfb1-466e-85ec-0cca4710b47b" width="80%" alt="画像読み込みエラー">

## 主な使用技術

フロントエンド ： Next.js(SSG), React, TypeScript, Emotion css, react-query, GSAP, Lottie, three.js

バックエンド API： AWS Lambda, Amazon API Gateway, Python, PyTorch

ホスティング先 ： GitHub Pages, S3+CloudFront
