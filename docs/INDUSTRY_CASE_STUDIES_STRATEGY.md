# 業界別事例紹介ページ - ディレクトリ構成・URL戦略

## 前提・制約について

本ドキュメントの推奨（同一ドメイン・サブパス・`/industries/{slug}/` など）は、**「そのままでは運用できない」** 事情がある場合があります。  
その場合は以下を検討してください。

- **URL・ドメイン**: 社内ポリシーや既存サイト構成でサブパスが使えない → サブドメインや別パス（例: `/case-study/`）に読み替え
- **ディレクトリ**: Next.js 以外や既存CMSと連携する → App Router のフォルダ案は参考にしつつ、実際のルーティングは環境に合わせて調整
- **フッター・リンク**: 事例一覧や業界リンクの実装タイミングが異なる → マスタ（`lib/industries.ts`）だけ先に整え、リンクは後から追加

運用チームの制約に合わせて、**「どこを変えずに守るか」「どこを現実的に変更するか」** を切り分けて適用してください。

---

## 1. 現在のディレクトリ構成（概要）

```
omakase_LP/
├── app/
│   ├── api/                    # Webhook（資料請求・お問い合わせ）
│   │   └── webhook/
│   ├── document-request/       # 資料請求フロー（/document-request, /document-request/thank-you）
│   ├── globals.css
│   ├── layout.tsx              # ルートレイアウト（GTM・Omakaseウィジェット）
│   └── page.tsx                # メインLP（/）
├── components/                 # 共通UI（Header, Footer, Hero, Form 等）
├── public/
│   ├── document/               # PDF等
│   └── images/                 # 共通・PC・モバイル用画像
├── types/
└── next.config.ts
```

- **メインLP**: `/`（`app/page.tsx`）
- **サブページ例**: `/document-request`、`/document-request/thank-you`
- **フッター**: 現状はプライバシーポリシー・利用規約のみ。業界一覧リンクは未実装。

---

## 2. ドメイン・URL戦略（Google検索を意識）

**メインドメイン**: `https://omakase-voice-ai.com/`

### 方針: 同一ドメイン・パスで業界事例を集約

| 方式 | URL例 | メリット | デメリット |
|------|--------|----------|------------|
| **サブパス（推奨）** | `https://omakase-voice-ai.com/industries/kaigo/` | ドメインオーソリティを分散させない、サイト内で一貫、sitemapで一元管理 | 特になし |
| サブドメイン | `https://kaigo.omakase-voice-ai.com/` | 業界ごとに完全分離 | オーソリティが分散、運用・SSL・設定が増える |
| 別ドメイン | 別サイト | 業界専用ブランド向き | メインサイトの評価を引き継ぎにくい |

**推奨**: すべて **同一ドメイン + サブパス** で運用する。

### 推奨URL設計

- **業界事例のベースパス**: `/industries/` または `/case-study/`
  - **採用案**: **`/industries/{業界スラッグ}/`**
- 理由:
  - 「業界」「事例」がURLに含まれ、検索意図と合致しやすい
  - 将来「業界一覧」ページ（`/industries/`）を置きやすい
  - 英語スラッグにするとURLが短く、国際化にも対応しやすい

### URL例（SEOを意識したスラッグ）

| 業界 | スラッグ | 公開URL |
|------|----------|---------|
| 介護 | `kaigo` | `https://omakase-voice-ai.com/industries/kaigo/` |
| 人材 | `jinzai` | `https://omakase-voice-ai.com/industries/jinzai/` |
| EC・小売 | `ec-retail` | `https://omakase-voice-ai.com/industries/ec-retail/` |
| 医療・クリニック | `medical` | `https://omakase-voice-ai.com/industries/medical/` |
| 教育 | `education` | `https://omakase-voice-ai.com/industries/education/` |

- スラッグは **短く・キーワードを含む・ローマ字** に統一すると、リンク共有・sitemap・解析がしやすい。
- 日本語キーワード（例: 「介護」「Omakase 事例」）は **title・description・h1・本文** でしっかり使う。

---

## 3. 業界事例用のディレクトリ構成（推奨）

### 3.1 App Router でのフォルダ配置

```
app/
├── page.tsx                      # メインLP（変更なし）
├── layout.tsx
├── document-request/
│   ├── page.tsx
│   └── thank-you/
│       └── page.tsx
└── industries/                   # ★ 業界事例の親パス
    ├── page.tsx                  # 業界一覧ページ（/industries/）
    └── [slug]/                   # 動的ルート（介護・人材など）
        └── page.tsx              # 例: /industries/kaigo/
```

- **`/industries/`**: 業界一覧（フッターの「事例紹介」からリンク）
- **`/industries/[slug]/`**: 各業界LP（`kaigo`, `jinzai` 等）

`[slug]` で「介護」「人材」などを1本の `page.tsx` にまとめ、slug に応じて表示内容を切り替える実装がおすすめ（コンポーネント・データの共通化がしやすい）。

### 3.2 共通コンポーネント・データの置き場所

**詳細は `docs/COMPONENT_STRATEGY.md` を参照。**

- **業界ごと**: `components/industries/{業界スラッグ}/` にその業界のLP・UIを集約（例: `kaigo/KaigoLP.tsx`）。業界ごとに「どこに何があるか」が分かる構成。
- **共有**: `components/industries/IndustrySection.tsx`、`components/industries/index.ts`（slug → LP マップ）。横余白は `Container` のみ使用。
- **マスタ**: `lib/industries.ts` でスラッグ一覧・メタ・`getIndustryBySlug`。

### 3.3 静的アセット（業界別画像など）

```
public/
└── images/
    ├── common/                   # 既存
    └── industries/               # 業界事例用
        ├── kaigo/
        │   ├── hero.png
        │   └── ...
        └── jinzai/
            └── ...
```

- 業界ごとに `industries/{slug}/` でまとめておくと管理しやすい。

---

## 4. フッターとの連携

- フッターに **「事例紹介」または「業界別のご紹介」** のようなブロックを追加する。
- リンク先:
  - **一覧**: `https://omakase-voice-ai.com/industries/`
  - **介護**: `https://omakase-voice-ai.com/industries/kaigo/`
  - **人材**: `https://omakase-voice-ai.com/industries/jinzai/`
  - （今後追加する業界も同様）

これで「Omakase 介護」「Omakase 事例 人材」などの検索から、メインドメインの評価を活かしたページに誘導しやすくなる。

---

## 5. SEOまわり（検索に引っ掛けるために）

- **同一ドメイン**のまま `omakase-voice-ai.com` で運用するため、ドメイン評価はメインLPと共有される。
- 各業界ページで実施したいこと:
  - **title**: 「Omakase.ai 事例｜介護業界のAI音声・チャット接客」など、業界名＋サービス名
  - **description**: 1〜2文で介護向けのメリット・キーワードを記載
  - **h1**: ページ内容を表す1本（例: 「介護業界のAI接客」）
  - **内部リンク**: メインLP・資料請求・他業界事例へのリンク
- **sitemap**: `app/industries/` と `app/industries/[slug]/` を対象に含める（Next.js の sitemap 設定で `/industries` と各スラッグを列挙）。
- **canonical**: 各業界ページのURLを canonical に指定（重複コンテンツ防止）。

---

## 6. 今後の追加手順（運用イメージ）

1. **新規業界を追加するとき**
   - `lib/industries.ts`（または同様のマスタ）に `slug`・表示名・メタ情報を1件追加
   - 必要なら `public/images/industries/{slug}/` に画像を追加
   - `app/industries/[slug]/page.tsx` で slug に応じた表示がすでに分岐していれば、マスタの追加のみで対応可能
2. **フッター**
   - 業界一覧または主要業界へのリンクを、マスタから生成するか、固定で並べる

---

## 7. まとめ

| 項目 | 推奨 |
|------|------|
| ドメイン | すべて `https://omakase-voice-ai.com/` のまま |
| 業界事例のURL | `https://omakase-voice-ai.com/industries/{業界スラッグ}/` |
| 業界一覧URL | `https://omakase-voice-ai.com/industries/` |
| フォルダ | `app/industries/page.tsx`（一覧）、`app/industries/[slug]/page.tsx`（個別） |
| フッター | 「事例紹介」ブロックを追加し、一覧＋各業界へリンク |
| SEO | title/description/h1 で業界キーワード、同一ドメイン・sitemap・canonical を活用 |

この構成にすれば、メインLPと整合が取りやすく、Google検索で「Omakase 介護」「Omakase 事例」などに引っ掛けやすい形で業界事例を増やしていけます。
