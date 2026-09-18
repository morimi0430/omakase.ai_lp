# Omakase AI LP

[Omakase AI](https://omakase-voice-ai.com) のマーケティング用ランディングページ群。Next.js（App Router）で、本番ドメインは `https://omakase-voice-ai.com`。

Git・Vercel・ディレクトリの説明は [docs/ONBOARDING.md](docs/ONBOARDING.md) です。  
権限はもりみさんのプロジェクトに追加してもらいます。

## ページ

| URL | 役割 | 入口 | 公開 |
|---|---|---|---|
| `/` | メインLP | `app/page.tsx` | 常時 |
| `/document-request` | 資料請求 | `app/document-request/` | 常時 |
| `/document-request/thank-you` | 送信完了 | 同上 | 常時 |
| `/industries/tob` | 法人・BtoB LP | `components/industries/tob/` | 常時 |
| `/industries/kaigo` | 人材エージェントLP | `components/industries/kaigo/` | `KAIGO_LP_ENABLED`（現在 off） |
| `/job/[jobId]` | 介護LPの架空求人 | `app/job/` + `lib/kaigo-jobs.ts` | 同上 |
| `/subsidy` | 補助金LP | `app/subsidy/page.tsx` | `SUBSIDY_LP_ENABLED` |
| `/phone-subsidy` | 電話AI LP | `app/phone-subsidy/page.tsx` | 常時 |
| `/phone-subsidy/interview/[slug]` | 電話LPインタビュー | `lib/phone-interviews.ts` | 常時 |
| `/interview/[slug]` | 導入インタビュー | `lib/interviews.ts` | 常時 |
| `/demo-request` | 旧URL | `next.config.ts` で `/document-request` へリダイレクト | — |

公開切替は `lib/featureFlags.ts` のみ。

## 起動

```bash
npm install
cp .env.example .env   # 値は 1Password / Vercel から
npm run dev
```

- `npm run lint` — ESLint
- `npm run build` — 本番ビルド

Node はローカルと Vercel で揃える。

## ディレクトリ

```
app/                 ルートと API
components/          共通 UI
  subsidy/           /subsidy
  phone-subsidy/     /phone-subsidy
  industries/        /industries/{slug}
  document-request/  資料請求フォーム
lib/                 マスタデータ・featureFlags
public/              画像・PDF・動画
docs/                設計・運用メモ
```

新規業界LPは `lib/industries.ts` にスラッグを足し、`components/industries/{slug}/` を作り、`app/industries/[slug]/page.tsx` の分岐に1行足す。詳細は `docs/COMPONENT_STRATEGY.md` と `docs/LP_CREATION_RULES.md`。

## フォームと外部連携

| 画面 | API | 送り先 |
|---|---|---|
| 資料請求 `DocumentRequestForm` | `POST /api/document-request` | Zapier（Slack 等）+ HubSpot upsert |

必要な環境変数:

| 変数 | 用途 |
|---|---|
| `HUBSPOT_ACCESS_TOKEN` | 資料請求のコンタクト upsert |
| `ZAPIER_DOCUMENT_WEBHOOK_URL` | 資料請求の Slack 等通知 |
| `NEXT_PUBLIC_SITE_URL` | OGP・canonical（未設定時は本番ドメイン） |
| `NEXT_PUBLIC_OMAKASE_WIDGET_LOADER_MAIN` | メイン用ウィジェット |
| `NEXT_PUBLIC_OMAKASE_WIDGET_LOADER_KAIGO` | 介護ページ用ウィジェット |

ウィジェット URL は `NEXT_PUBLIC_` のためブラウザに出る。Git に直書きしないための分離。localhost ではウィジェットを読まない（403 回避）。

計測はルートレイアウトの GTM（`GTM-NVD669VW`）。資料請求成功時に `form_submit_inquiry` を `dataLayer.push`。

案内PDFは `lib/inquiryDocument.ts` → `public/document/`。

**Vercel にも同じ変数を入れる。** 未設定だと資料請求が 500 になる。

## よくある作業

- 導入インタビュー: `lib/interviews.ts`、画像は `public/images/common/interview/{slug}/`
- 電話LPインタビュー: `lib/phone-interviews.ts`（構造がメインと違う）
- 補助金の締切・文言: `app/subsidy/page.tsx` と `components/subsidy/`
- 画像配置: `docs/IMAGE_DIRECTORY_STRATEGY.md`

## 注意

- メインLP（`/`）は Figma 準拠。サブLPは `docs/LP_CREATION_RULES.md`（ブレークポイントは 768px のみ、横余白は `Container`）。
- 介護求人は架空データ。公開時は差し替えが必要。
- プライバシーポリシー / 利用規約は `omakase.ai` 側。このリポジトリでは管理しない。
