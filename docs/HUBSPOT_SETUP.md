# 資料請求の送信（HubSpot / Zapier）

フォーム（`/document-request`）は **`POST /api/document-request`** 1本で次を同時に実行する。

- **Zapier** … 全項目を転送（Slack 通知など）
- **HubSpot** … 同じメールのコンタクトを upsert（作成または更新）

希望日時・ミーティング予約 API は使っていない。

---

## 1. HubSpot

### 1-1. Private App（アクセストークン）

1. HubSpot の **設定** → **インテグレーション** → **Private Apps**
2. アプリを作成し、Scopes で次を付ける
   - **crm.objects.contacts.write**
   - **crm.objects.contacts.read**（あればデバッグしやすい）
3. Access token をコピーし、`HUBSPOT_ACCESS_TOKEN` に入れる（`.env` と Vercel）

ミーティング用スコープ（`scheduler.meetings...`）は不要。

### 1-2. コンタクトに送る項目

標準プロパティだけ使う。希望日時用のカスタムプロパティは作っていない。

| HubSpot プロパティ | フォームの値 |
|---|---|
| `email`（upsert のキー） | メール |
| `firstname` | 名 |
| `lastname` | 姓 |
| `company` | 会社名 |
| `jobtitle` | 役職 |
| `phone` | 電話 |

同じメールで再送信すると、上記プロパティが更新される。

---

## 2. このリポジトリ

`.env` / Vercel に次を入れる（値はチャットや Git に書かない）。

```env
HUBSPOT_ACCESS_TOKEN=
ZAPIER_DOCUMENT_WEBHOOK_URL=
```

確認:

1. `npm run dev`
2. `/document-request` から送信
3. HubSpot のコンタクトと、Zapier 先（Slack 等）に届くこと

---

## 3. 役割分担

| 送り先 | 内容 |
|---|---|
| **Zapier** | `lastName`, `firstName`, `company`, `department`, `position`, `email`, `phone`, `form_type: document_request` |
| **HubSpot** | 上表の標準プロパティ（部署は送っていない） |

Zapier の URL を変えるときは `ZAPIER_DOCUMENT_WEBHOOK_URL` を更新する（Vercel も同様。入れたあと再デプロイ）。
