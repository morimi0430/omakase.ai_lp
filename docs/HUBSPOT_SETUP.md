# デモリクエスト送信の仕組み

フォーム送信は **1本の API（`/api/demo-request`）** で次の2つを同時に実行します。

- **Zapier** … 全項目をそのまま転送（既存の Slack 通知など）
- **HubSpot** … 予約ページの**空き時間を API で取得**し、フォームに候補として表示。ユーザーが選んだ希望日時だけをコンタクトに保存。カレンダー埋め込みは使わず、すべて自前 UI です。

---

## 1. HubSpot でやること

### 1-1. Private App（アクセストークン）を作成

1. HubSpot の **設定（歯車）** → **インテグレーション** → **Private Apps**
2. **Create a private app** で名前を付けて作成
3. **Scopes** で以下にチェック:
   - **crm.objects.contacts.write**（コンタクトの作成・更新）
   - **crm.objects.contacts.read**（あればデバッグしやすい）
   - **scheduler.meetings.meeting-link.read**（予約ページの空き時間取得に必須）
4. **Create app** 後、**Show token** で **Access token** をコピー

### 1-2. コンタクトのカスタムプロパティを作成（希望日時一択用）

HubSpot には **希望日時（日付+時間）1つだけ** 送るため、次の1つだけ作成すれば十分です。

1. **設定** → **プロパティ** → **Contact properties**
2. **Create property** で以下を追加:

| ラベル（表示名） | 内部名（Internal name） | タイプ   |
|------------------|-------------------------|----------|
| 希望日時         | `first_preferred_date`  | DateTime |

※ 氏名・会社・部署などは Zapier → Slack 用に送っているだけで、HubSpot には送りません。

---

## 2. このリポジトリでやること

### 2-1. 環境変数を設定

`.env` または `.env.local` に次を追加:

```env
# Private App の Access token（必須）
HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# 予約ページの URL の slug（必須・空き時間表示用）
# 例: https://meetings-na2.hubspot.com/marino-kozaka なら marino-kozaka
HUBSPOT_MEETING_SLUG=marino-kozaka
```

- **HUBSPOT_ACCESS_TOKEN**: Private App のトークン
- **HUBSPOT_MEETING_SLUG**: HubSpot の「ミーティング」で作った予約ページの URL の最後の部分（スラッグ）。空き時間取得 API でこのページの空き枠を取得します。

### 2-2. 動作確認

1. `npm run dev` で起動
2. `/document-request` のフォームから送信
3. HubSpot の **コンタクト** に、同じメールのコンタクトが作成 or 更新され、候補日・部署などが入っているか確認

---

## 3. API の役割分担

| 送り先   | 送る内容 |
|----------|----------|
| **Zapier** | 全項目（氏名・会社・部署・役職・メール・電話・希望日）→ Slack 通知などに利用。**候補日一択でも Slack に通知したいなら Zapier は必要。** 通知不要なら Zap をオフにすればよい。 |
| **HubSpot** | **希望日時（一択）のみ**: `email`（upsert キー）、`first_preferred_date`（YYYY-MM-DDTHH:mm）。カレンダー埋め込みは使わない。 |

同じメールで再度送信すると、HubSpot のそのコンタクトは **希望日だけ更新**（upsert）されます。

---

## 4. Zapier の URL を変えたい場合

Zapier の Webhook URL を変更した場合は、`app/api/demo-request/route.ts` の `ZAPIER_WEBHOOK_URL` を書き換えてください。
