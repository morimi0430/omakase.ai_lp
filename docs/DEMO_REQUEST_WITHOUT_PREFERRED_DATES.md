# デモリクエスト（候補日なし）の場合

フォームに **第一・第二候補日を設けず**、デモ希望の連絡だけ受け付けるパターンです。  
日程は後から別手段（メール・Slack でやりとりなど）で決める想定です。

---

## 1. 送信の流れ（候補日なし）

- **フォーム項目**: 姓・名・会社名・部署・役職・メール・電話・同意のみ（候補日フィールドは出さない）
- **送信先**: **Zapier のみ**（Slack 通知など）
- **HubSpot**: 使わない（日程を保存しないため）

---

## 2. このリポジトリでやること

### 2-1. フォームから候補日を外す

1. **`components/document-request/DocumentRequestForm.tsx`**
   - 「デモ・ミーティングの希望日」の見出しと、第一候補日・第二候補日の入力欄（`preferredDate1` / `preferredDate2`）を削除またはコメントアウトする。
   - `formData` の初期値から `preferredDate1` / `preferredDate2` を削除してもよい（型で optional のままならそのままでも可）。
   - 送信 body に `preferred_date_1` / `preferred_date_2` を含めないようにする。

2. **送信先 API**
   - 現行の送信先は **`/api/document-request`**（Zapier + HubSpot）。
   - 旧 `/api/webhook/document` は削除済み。

### 2-2. 送信先を Zapier のみにする

現行は `/api/document-request` が Zapier と HubSpot の両方に送る。HubSpot を止めたい場合は、そのルート内の HubSpot 呼び出しを外す。

---

## 3. Zapier 側

- **トリガー**: これまでどおり「Webhooks by Zapier」の「Catch Hook」。
- **受け取るデータ**: 氏名・会社・部署・役職・メール・電話など（候補日なし）。
- **アクション**: Slack への通知など、既存の Zap のままでよい。

---

## 4. HubSpot について

- 候補日を使わない場合は **HubSpot に送る必要はありません**。
- HubSpot に送らない運用にする場合は、`/api/document-request` から HubSpot 呼び出しを外す。その場合 `HUBSPOT_ACCESS_TOKEN` は不要。

---

## 5. まとめ（候補日あり vs 候補日なし）

| 項目           | 候補日あり（2つ）           | 候補日なし（一択＝なし）     |
|----------------|----------------------------|------------------------------|
| フォーム       | 第一・第二候補日あり       | 候補日フィールドなし         |
| 送信先         | `/api/document-request`    | `/api/document-request`      |
| Zapier         | 全項目を転送 → Slack 等   | 同左                         |
| HubSpot        | 日程のみ保存               | 使わない                     |
| 環境変数       | `HUBSPOT_ACCESS_TOKEN` 要  | 不要                         |

候補日をやめて「候補日一択（＝実質なし）」にする場合は、上記の「候補日なし」の手順に合わせてフォームと送信先を変更すればよいです。
