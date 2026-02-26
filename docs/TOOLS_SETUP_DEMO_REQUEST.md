# デモリクエストフォーム（候補日付き）— 各ツールで必要な操作

LP のフォームから送信されるデータには、次のフィールドが含まれます。

| キー | 説明 | 例 |
|-----|------|-----|
| timestamp | 送信日時（日本時間） | 2025/02/24 15:30:00 |
| lastName, firstName | 姓・名 | 山田, 太郎 |
| company, department, position | 会社名・部署・役職 | ABC株式会社, 営業部, 部長 |
| email, phone | メール・電話番号 | xxx@example.com, 03-1234-5678 |
| **preferred_date_1** | デモ・MTG 第一候補日 (YYYY-MM-DD) | 2025-03-10 |
| **preferred_date_2** | デモ・MTG 第二候補日 (YYYY-MM-DD) | 2025-03-12 |

未入力の場合は `preferred_date_1` / `preferred_date_2` は送信されません。

---

## 1. このLP（Next.js）

**必要な操作: なし**

- フォーム・API・送信ペイロードの実装は済んでいます。
- Webhook 先: `/api/webhook/document` → Zapier にそのまま転送。

---

## 2. Zapier

**必要な操作: 既存の Zap に「候補日」をマッピングする**

1. **Zap を開く**  
   トリガーが「Webhooks by Zapier」の「Catch Hook」で、このLPのフォーム送信を受けている Zap。

2. **テストでデータを確認**  
   - 「Test trigger」で最新の送信を取得。  
   - ペイロードに `preferred_date_1` / `preferred_date_2` が出ているか確認。

3. **アクションで候補日を渡す**  
   - 例: **HubSpot - Create or Update Contact**（または Deal 更新など）の場合  
     - マッピングに以下を追加:
       - `preferred_date_1` → HubSpot の「第一候補日」プロパティ  
       - `preferred_date_2` → HubSpot の「第二候補日」プロパティ  
   - HubSpot の日付型プロパティには、**YYYY-MM-DD** の文字列のまま渡して問題ないことが多いです。形式が合わない場合は Zapier の「Formatter」で日付に変換。

4. **他のアクション（Slack・スプレッドシートなど）**  
   候補日も表示・記録したい場合は、それぞれのアクションのフィールドに `preferred_date_1` / `preferred_date_2` をマッピングするだけです。

---

## 3. HubSpot

**必要な操作: コンタクト（またはデール）に「候補日」用のプロパティを作成し、Zapier からマッピングする**

1. **プロパティを作成**
   - **設定** → **プロパティ** → **コンタクトのプロパティ**（または **デールのプロパティ**）
   - 「プロパティを作成」で以下を追加:

   | ラベル（表示名） | 内部名（API名）例 | タイプ |
   |-----------------|-------------------|--------|
   | 第一候補日      | first_preferred_date など | 日付 |
   | 第二候補日      | second_preferred_date など | 日付 |

   - 内部名は HubSpot が表示する名前（英数字）を控えておく。

2. **Zapier でマッピング**
   - Zapier の HubSpot アクションで、上記のプロパティを選択。
   - 値に Webhook の `preferred_date_1` → 第一候補日、`preferred_date_2` → 第二候補日 をマッピング。

3. **確認**
   - テスト送信で HubSpot のコンタクト（またはデール）に候補日が入るか確認。

---

## 4. GTM（Google Tag Manager）

**必要な操作: 通常はなし（必要に応じて変数追加）**

- フォーム送信時は既に `dataLayer.push({ event: 'form_submit_document_request', ... })` を送っています。
- 候補日を GTM 経由で GA4 や他ツールに送りたい場合のみ:
  - データレイヤーに `preferred_date_1` / `preferred_date_2` を追加する（フォーム送信時の `dataLayer.push` にこれらのキーを足す必要あり）。
  - GTM で「データレイヤー変数」を追加し、タグのパラメータに渡す。

現状の実装ではフォーム送信時に候補日は dataLayer に含めていないため、**Zapier / HubSpot だけで候補日を扱うなら GTM の変更は不要**です。

---

## 5. GA4（Google Analytics 4）

**必要な操作: 通常はなし（必要に応じてカスタムディメンション）**

- 送信済みイベント: `form_submit_document_request`（company, department など）。
- 候補日を GA4 で分析したい場合は、GTM で `preferred_date_1` / `preferred_date_2` を送るようにしたうえで、GA4 の「カスタムディメンション」に登録し、イベントパラメータとして送信する設定が必要です。必須ではありません。

---

## まとめ

| ツール | やること |
|--------|----------|
| **LP（Next.js）** | なし（実装済み） |
| **Zapier** | 既存 Zap のアクションで `preferred_date_1` / `preferred_date_2` をマッピング |
| **HubSpot** | コンタクト（またはデール）に「第一候補日」「第二候補日」の日付プロパティを作成 → Zapier でマッピング |
| **GTM** | 候補日をタグに渡す必要がなければ不要 |
| **GA4** | 候補日を分析したい場合のみカスタムディメンション等を検討 |
