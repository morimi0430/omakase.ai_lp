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

1. **`components/DocumentRequestForm.tsx`**
   - 「デモ・ミーティングの希望日」の見出しと、第一候補日・第二候補日の入力欄（`preferredDate1` / `preferredDate2`）を削除またはコメントアウトする。
   - `formData` の初期値から `preferredDate1` / `preferredDate2` を削除してもよい（型で optional のままならそのままでも可）。
   - 送信 body に `preferred_date_1` / `preferred_date_2` を含めないようにする。

2. **送信先 API**
   - **候補日なしだけ使う**なら、Zapier にだけ送ればよいので、送信先を **`/api/webhook/document`** にするとよい。
   - そうすると HubSpot 用の `HUBSPOT_ACCESS_TOKEN` は不要。

### 2-2. 送信先を Zapier のみにする

**A. 既存の Zapier 専用 API を使う（おすすめ）**

- `DocumentRequestForm.tsx` の送信先を **`/api/webhook/document`** に変更する。
- `/api/webhook/document` は受け取った JSON をそのまま Zapier に転送するだけなので、候補日キーがなくても問題ありません。

**B. `/api/demo-request` のまま使う**

- そのままでも、候補日を送らなければ HubSpot には `email` だけ（または日付なし）で upsert されるだけです。
- 候補日を一切送りたくない・HubSpot を叩きたくない場合は、上記 A に切り替えるか、`/api/demo-request` 内で HubSpot 呼び出しをスキップする分岐を入れる必要があります。

---

## 3. Zapier 側

- **トリガー**: これまでどおり「Webhooks by Zapier」の「Catch Hook」。
- **受け取るデータ**: 氏名・会社・部署・役職・メール・電話など（候補日なし）。
- **アクション**: Slack への通知など、既存の Zap のままでよい。

---

## 4. HubSpot について

- 候補日を使わない場合は **HubSpot に送る必要はありません**。
- 送信先に `/api/webhook/document` だけを使えば、`HUBSPOT_ACCESS_TOKEN` の設定も、HubSpot のカスタムプロパティ（第一・第二候補日）の作成も不要です。

---

## 5. まとめ（候補日あり vs 候補日なし）

| 項目           | 候補日あり（2つ）           | 候補日なし（一択＝なし）     |
|----------------|----------------------------|------------------------------|
| フォーム       | 第一・第二候補日あり       | 候補日フィールドなし         |
| 送信先         | `/api/demo-request`        | `/api/webhook/document` 推奨 |
| Zapier         | 全項目を転送 → Slack 等   | 同左                         |
| HubSpot        | 日程のみ保存               | 使わない                     |
| 環境変数       | `HUBSPOT_ACCESS_TOKEN` 要  | 不要                         |

候補日をやめて「候補日一択（＝実質なし）」にする場合は、上記の「候補日なし」の手順に合わせてフォームと送信先を変更すればよいです。
