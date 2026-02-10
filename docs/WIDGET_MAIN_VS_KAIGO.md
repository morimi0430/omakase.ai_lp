# ウィジェット表示：メインページと介護ページの差分・原因整理

修正は行わず、現状の動きと想定原因だけ整理する。

---

## 1. 共通の構造

- **レイアウト**: どちらも `app/layout.tsx` のルートレイアウトを通る。
- **ウィジェット読み込み**: レイアウトの `<body>` 末尾で `<OmakaseWidgetLoader />` を 1 回だけレンダー。
- **OmakaseWidgetLoader**: クライアントコンポーネント。`usePathname()` と `useEffect` で「今のパス」を見て、loader の URL を切り替えて `<script>` を 1 本だけ注入する。

→ **メインも介護も、同じコンポーネント・同じレイアウト**でウィジェットを読んでいる。差が出るのは「どの URL の loader を読むか」だけ。

---

## 2. メインページ（/）の流れ

| 項目 | 内容 |
|------|------|
| ルート | `app/page.tsx` |
| children | `<main>` + Header, Hero, About, Form, Footer など |
| レイアウト | 上記の body 末尾に `OmakaseWidgetLoader` |

**クライアントでの動き:**

1. `OmakaseWidgetLoader` がマウント。
2. `usePathname()` → `"/"`（または `window.location.pathname` が `"/"`）。
3. `isKaigoPath("/")` → `false`。
4. `loaderUrl = MAIN_WIDGET_LOADER`（メイン用 API キー）。
5. 既存の loader 用 script を削除してから、上記 URL を読み込む IIFE を script で注入。
6. IIFE が実行され、`cdn.omakase.ai/loader.min.js?apiKey=oma_live_-LH8h-LAMm...` を読み込む script が追加される。
7. メイン用ウィジェットが表示される。

---

## 3. 介護ページ（/industries/kaigo）の流れ

| 項目 | 内容 |
|------|------|
| ルート | `app/industries/[slug]/page.tsx`（slug=kaigo） |
| children | `<IndustryLP industry={...} />` ＝ KaigoLP（Header, KaigoFirstView, 求人, フロー, FAQ, Form, Footer） |
| レイアウト | 同じ body 末尾に `OmakaseWidgetLoader` |

**コード上はこう動く想定:**

1. `OmakaseWidgetLoader` がマウント（メインと同じ）。
2. `usePathname()` → `"/industries/kaigo"`（想定）。
3. `path = window.location.pathname || pathname` → `"/industries/kaigo"`（または末尾スラッシュありなら正規化で `"/industries/kaigo"`）。
4. `isKaigoPath(path)` → `true`。
5. `loaderUrl = KAIGO_WIDGET_LOADER`（介護用 API キー）。
6. 既存 script 削除 → 介護用 loader URL を読む IIFE を注入。
7. 介護用ウィジェットが表示される想定。

→ **ロジック上は「介護ページでは介護用 loader が読み込まれる」前提**になっている。

---

## 4. メインと介護の「差分」一覧

| 観点 | メイン（/） | 介護（/industries/kaigo） |
|------|-------------|---------------------------|
| レイアウト | 同じ | 同じ |
| OmakaseWidgetLoader の有無 | あり（body 末尾） | あり（同じ） |
| 判定されるパス | `"/"` | `"/industries/kaigo"`（想定） |
| 選ばれる loader | MAIN_WIDGET_LOADER | KAIGO_WIDGET_LOADER |
| 読み込む script URL | メイン用 apiKey | 介護用 apiKey + apiRegion=us |
| 結果（現状） | ウィジェット表示される | ウィジェット表示されない |

差分は「**どの loader URL（＝どの API キー）を読むか**」だけ。レンダー位置・コンポーネントの有無は同じ。

---

## 5. 介護で表示されない「想定原因」

### A. パスが介護と判定されていない（メイン用が読まれている）

- **内容**: 初回レンダー／ハイドレート時に `usePathname()` や `window.location.pathname` がまだ `"/"` や空のままなどで、`isKaigoPath(path)` が false になっている。
- **結果**: 介護ページなのに **メイン用 loader が読み込まれる**。メイン用ウィジェットの設定で「表示する URL」がトップのみになっていると、`/industries/kaigo` では出さない、という動きになりうる。
- **確認方法**: 本番の介護ページで DevTools → Network で `loader.min.js` を確認。クエリに `oma_live_f33BaAwat...`（介護用）が出ていれば介護用が読まれている。`oma_live_-LH8h-LAMm...`（メイン用）だけなら、パス判定でメインに寄っている。

### B. 介護用 API キーのドメイン／URL 制限

- **内容**: 介護用の API キー側で、許可ドメインや許可 URL が「トップのみ」「特定パス除外」などになっており、`https://(本番ドメイン)/industries/kaigo` では 403 や「表示しない」になっている。
- **結果**: 介護用 script は読まれても、ウィジェット初期化で失敗したり、意図的に表示されない。
- **確認方法**: コンソールに 403 や ApiModule のエラーが出ていないか。Network で介護用 loader は 200 でも、その後の API 呼び出しが 403 になっていないか。

### C. cleanup で介護用 script が消えている

- **内容**: `useEffect` の cleanup で「loader 用 script」「OmakaseAI」を削除している。pathname の変動や Strict Mode の二重実行などで、介護用を注入した直後に cleanup が走り、script が消えている可能性。
- **結果**: 介護用 loader が一瞬読まれたあと削除され、ウィジェットが起動しない。
- **確認方法**: 同上。Network で介護用 loader が読まれたあと、該当 script タグが DOM から消えていないか。

### D. 直アクセスとクライアント遷移の違い

- **内容**: 「メインから Link で /industries/kaigo に遷移」と「/industries/kaigo を直で開く」で、pathname の確定タイミングが違い、直アクセス時だけ path が空や `/` になっている、など。
- **結果**: 直アクセス時のみメイン用が読まれる（または何も読まれない）という差が出る可能性。
- **確認方法**: 両方のパターンで Network の loader URL とコンソールを比較。

---

## 6. 次の確認で見るとよい点

1. **本番の介護ページ**で DevTools を開き、Network で `loader.min.js` をフィルタ。
   - 出ているクエリが **介護用**（`oma_live_f33BaAwat...`）か **メイン用**（`oma_live_-LH8h-LAMm...`）か。
2. コンソールに `[ApiModule]` や 403 のエラーが出ていないか。
3. 直アクセス（`/industries/kaigo` を URL で開く）と、メインから遷移したときで、上記 1・2 が変わるか。

ここまでが「現状の実装でメインとどう差分があるか」と「表示されない理由の候補」の整理。コードの修正は行っていない。

---

## 7. 本番介護ページの \<head\> から分かったこと（追記）

実際の介護ページ（`omakase-ai-lp.vercel.app/industries/kaigo`）の `<head>` を確認した結果。

### 読み込まれている Omakase 関連

| 内容 | 判定 |
|------|------|
| `<script id="OmakaseAI" src="https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_f33BaAwat...&apiRegion=us">` | ✅ **介護用** loader（正しい API キー） |
| `<script id="omakase-widget-loader-script">` 内の IIFE の URL | ✅ 同じく **介護用** URL |
| `<script type="module" src="https://cdn.omakase.ai/widget.min.js?apiKey=oma_live_f33BaAwat...&apiRegion=us">` | ✅ 介護用 **widget.min.js**（loader が差し込んだもの） |
| `<style>` 内の `.oma-sheet`, `.oma-header` など | ✅ ウィジェット用 CSS が注入されている |

### 結論（フロント側）

- **パス判定は正しい** → 介護用 API キー（`oma_live_f33BaAwat...`）の script が読まれている。
- **loader も widget.min.js も読まれている** → 私たちの script 注入は意図どおり動いている。
- **スタイルも入っている** → ウィジェット用 JS が動いてスタイルを差し込んでいる。

つまり「**LP 側のコードやパス判定が原因で介護用が読まれていない**」という可能性はほぼない。

### 表示されない場合に残る候補

1. **API / バックエンド側**
   - 介護用 API キーで、このオリジン（`omakase-ai-lp.vercel.app` や `omakase-voice-ai.com`）やパスが許可されていない。
   - その結果、loader/widget は読めても **初期化時に 403 や「表示しない」** となり、UI がマウントされない。
   - **確認**: ブラウザの Console に `[ApiModule]` や 403 のエラーが出ていないか。Network で `cdn.omakase.ai` への XHR/fetch が 403 になっていないか。

2. **DOM / CSS**
   - 介護ページのレイアウト（z-index・overflow・position）で、ウィジェットのルート要素が **背面に隠れている** または **高さ 0 で潰れている**。
   - **確認**: Elements で `#omakase-` や `.oma-sheet` などが存在するか、computed で `display`/`visibility`/`z-index` がどうなっているか。

3. **実行時エラー**
   - 介護ページだけ読み込まれる他の script と競合し、ウィジェット初期化の前に JS が落ちている。
   - **確認**: Console に（ApiModule 以外の）未捕捉エラーがないか。
