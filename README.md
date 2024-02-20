## Get Started

### NodeJSのセットアップ(未だの場合)
https://nodejs.org/en/download/

以下が通ればOKです。
```
$ node -v
$ npm -v
```

### Google Claspのセットアップ(未だの場合)
```
$ npm i -g @google/clasp
$ clasp login # GASのプロジェクトにアクセスできるアカウントでログインしてください。
```

### プロジェクトのセットアップ
```
$ cp .env.sample .env
$ cp .clasp.json.sample .clasp.json
$ sed -i '' "s|\"rootDir\": \"\"|\"rootDir\": \"$(pwd)\"|" .clasp.json
$ cp package.json.sample package.json
$ npm install
```
`.env` ファイルに本番用、開発用プロジェクトの各Script IDを設定

各GASプロジェクトの「プロジェクトの設定」>「ID」

## コードのGASへの反映
### ステージング用のプロジェクトへの反映
```
npm run push:stg
```
### 本番用のプロジェクトへの反映
```
npm run push:prod
```