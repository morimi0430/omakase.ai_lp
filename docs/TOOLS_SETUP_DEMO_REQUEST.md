# 資料請求フォーム — 各ツールの設定

送信先は **`POST /api/document-request`**。候補日フィールドはない。

## 送る項目

| キー | 説明 | 例 |
|---|---|---|
| lastName, firstName | 姓・名 | 山田, 太郎 |
| company, department, position | 会社名・部署・役職 | ABC株式会社, 営業部, 部長 |
| email, phone | メール・電話 | xxx@example.com, 03-1234-5678 |
| form_type | 固定値 | `document_request` |

実装: `components/document-request/DocumentRequestForm.tsx` → `app/api/document-request/route.ts`。

---

## 1. この LP（Next.js）

追加作業は不要（実装済み）。

環境変数: `HUBSPOT_ACCESS_TOKEN`, `ZAPIER_DOCUMENT_WEBHOOK_URL`。手順は `docs/HUBSPOT_SETUP.md`。

---

## 2. Zapier

トリガーは「Webhooks by Zapier」の Catch Hook。上記キーを Slack 等にマッピングする。

候補日キー（`preferred_date_1` など）は送っていない。

---

## 3. HubSpot

この API がコンタクトを直接 upsert する。Zapier 経由で HubSpot に書く必要はない。

送るプロパティは `email`, `firstname`, `lastname`, `company`, `jobtitle`, `phone`。詳細は `docs/HUBSPOT_SETUP.md`。

---

## 4. GTM / GA4

送信成功時:

```
dataLayer.push({
  event: 'form_submit_inquiry',
  form_type: 'inquiry',
  company,
  department,
})
```

候補日は dataLayer に含めていない。GTM / GA4 の追加作業は通常不要。

---

## まとめ

| ツール | やること |
|---|---|
| LP | なし（実装済み） |
| Zapier | Catch Hook で上表のキーを通知先にマッピング |
| HubSpot | Private App のトークンを環境変数に入れる |
| GTM / GA4 | 通常なし |
