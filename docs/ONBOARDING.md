# Git / ディレクトリ / Vercel

このリポジトリの権限、フォルダ構成、本番公開の手順。  
ページ一覧や作業の詳細は [README.md](../README.md)。

---

## 最初にやること（権限）

Git と Vercel はもりみさん（GitHub: morimi0430）のプロジェクト。アカウント追加を頼む。

| サービス | URL |
|---|---|
| GitHub | [github.com/morimi0430/omakase.ai_lp](https://github.com/morimi0430/omakase.ai_lp) |
| Vercel | [vercel.com/misakimori-zealscojps-projects](https://vercel.com/misakimori-zealscojps-projects) |

- GitHub: Collaborator（書き込み可）
- Vercel: チーム / プロジェクトのメンバー。Environment Variables も見られること

---

## このプロジェクトは何か

**Omakase AI の宣伝用サイト（ランディングページ）。**

- 本番 URL: [https://omakase-voice-ai.com](https://omakase-voice-ai.com)
- 中身: トップ、資料請求、補助金、電話AI、導入インタビュー、業界別LP など
- 技術: Next.js

画面を直す → GitHub に上げる → Vercel が本番に反映する。

---

## Git（コードの保管庫）

### たとえ

- **GitHub** = 共有フォルダ（インターネット上）
- **git** = そのフォルダの「いつ・誰が・何を変えたか」を残す道具
- **clone** = 共有フォルダを自分の PC にコピーする
- **commit** = この時点の変更を記録する
- **push** = 記録した変更を GitHub に送る（Vercel がこれを見て本番を更新する）

リポジトリ:

[https://github.com/morimi0430/omakase.ai_lp](https://github.com/morimi0430/omakase.ai_lp)

### セットアップ

1. [GitHub](https://github.com) にログインできること
2. もりみさんに上のリポジトリへ追加してもらう
3. 自分の PC に Git が入っていること（`git --version` で確認）
4. ターミナルでコピーする

```bash
git clone https://github.com/morimi0430/omakase.ai_lp.git
cd omakase.ai_lp
```

### 日常の流れ

ブランチ戦略はない。**main だけ**に push する。

```bash
# 最新を取る
git pull origin main

# ファイルを直したあと
git add .
git status          # 秘密ファイル（.env）が入っていないか確認
git commit -m "何を直したか一言"
git push origin main
```

**やってはいけないこと**

- `.env` を GitHub に上げない（中身は秘密）
- `git push --force` を main に使わない（履歴を壊す）

---

## ディレクトリ（フォルダの見方）

```
omakase.ai_lp/
├── app/                  どの URL で何を出すか
│   ├── page.tsx          トップ（ / ）
│   ├── subsidy/          補助金（ /subsidy ）
│   ├── phone-subsidy/    電話AI（ /phone-subsidy ）
│   ├── document-request/ 資料請求
│   └── api/              フォーム送信先
├── components/           画面の部品
│   ├── subsidy/          補助金LP専用
│   ├── phone-subsidy/    電話AI LP専用
│   ├── industries/       業界LP（tob / kaigo）
│   └── document-request/ 資料請求フォーム
├── lib/                  文章データ・公開スイッチ
│   ├── featureFlags.ts   ページの出し分け（true / false）
│   ├── interviews.ts     導入インタビュー本文
│   └── phone-interviews.ts 電話LPのインタビュー
├── public/               画像・PDF・動画
├── docs/                 このガイドや設計メモ
├── .env.example          必要な設定の名前だけ（値は空）
└── README.md             ページ一覧・作業の要約
```

**直し方の目安**

| やりたいこと | 見る場所 |
|---|---|
| トップの見た目 | `app/page.tsx` と `components/` 直下（Hero, Plan など） |
| 補助金の文言・締切 | `app/subsidy/page.tsx` と `components/subsidy/` |
| 電話AI | `app/phone-subsidy/` と `components/phone-subsidy/` |
| インタビュー追加 | `lib/interviews.ts` または `lib/phone-interviews.ts` |
| ページを隠す / 出す | `lib/featureFlags.ts` |
| 画像を差し替え | `public/images/`（`docs/IMAGE_DIRECTORY_STRATEGY.md`） |

---

## 自分の PC で動かす

権限が付いたら次を実行する。

```bash
cd omakase.ai_lp
npm install
cp .env.example .env
```

`.env` の **値** は GitHub にはない。もりみさんに聞くか、Vercel の Environment Variables を見る。

値を入れたら:

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。手元の確認用で、外部には公開されない。

| コマンド | 意味 |
|---|---|
| `npm run dev` | 確認用サーバーを起動 |
| `npm run lint` | コードのチェック |
| `npm run build` | 本番と同じ組み立て |

---

## Vercel（本番に出す仕組み）

### たとえ

- 自分の PC の `localhost` = 下書き
- **Vercel** = 下書きをインターネットに出す印刷所
- GitHub の `main` に push すると、Vercel が組み立てて [omakase-voice-ai.com](https://omakase-voice-ai.com) に載せる

ダッシュボード（もりみさんのチーム）:

[https://vercel.com/misakimori-zealscojps-projects](https://vercel.com/misakimori-zealscojps-projects)

プレビュー URL 例: `omakase-ai-lp.vercel.app`（GitHub の About に記載）

### 役割

| 内容 | 誰 |
|---|---|
| チーム / プロジェクトに自分を追加 | もりみさん |
| Environment Variables（下の表）が入っているか確認 | もりみさん、または追加後の自分 |
| コードを直して `git push` | 自分 |
| ドメイン（omakase-voice-ai.com）の DNS | もりみさん |

### Vercel に入れる環境変数

Project → Settings → Environment Variables。  
少なくとも **Production**。プレビューでもフォームを試すなら Preview にも同じものを入れる。

| 名前 | 無いとどうなる |
|---|---|
| `HUBSPOT_ACCESS_TOKEN` | 資料請求が失敗する（500） |
| `ZAPIER_DOCUMENT_WEBHOOK_URL` | 資料請求が失敗する（500） |
| `NEXT_PUBLIC_OMAKASE_WIDGET_LOADER_MAIN` | サイト上のチャットウィジェットが出ない |
| `NEXT_PUBLIC_OMAKASE_WIDGET_LOADER_KAIGO` | 介護LPのウィジェットが出ない |
| `NEXT_PUBLIC_SITE_URL` | 未設定でも本番ドメインで動く |

`NEXT_PUBLIC_` で始まるものは、入れたあと再デプロイする（ビルド時に埋め込まれる）。

値はチャットや GitHub に貼らない。

---

## フォームが届く仕組み

資料請求（`/document-request`）の送信先は次の2つ。

1. **Zapier** → Slack など社内通知
2. **HubSpot** → お客様情報の保存

Zapier / HubSpot のアカウント権限がなければもりみさんに頼む。コードを直すだけでは通知先は見えない。

---

## 困ったとき

| 症状 | まず見ること |
|---|---|
| GitHub に入れない | もりみさんに Collaborator 追加を頼む |
| Vercel の画面が開けない | もりみさんにチーム追加を頼む |
| ローカルは動くが本番の資料請求が失敗 | Vercel の環境変数 5 つと再デプロイ |
| ローカルでウィジェットが出ない | 仕様。localhost では読み込まない |
| 介護LP（`/industries/kaigo`）が 404 | `lib/featureFlags.ts` の `KAIGO_LP_ENABLED` が false |

設計の詳細は `docs/` のほかのファイル。ページ一覧は [README.md](../README.md)。
