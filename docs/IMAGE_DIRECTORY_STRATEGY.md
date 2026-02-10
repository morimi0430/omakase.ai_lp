# 画像ディレクトリ戦略

LP および業界事例ページで使う画像の配置ルールと、差し替え可能にするための構成方針。

## 1. メインLP（トップ・共通）の画像

`public/images/` 配下を **デバイス・用途** で分けて配置する。

| ディレクトリ | 用途 | 例 |
|-------------|------|-----|
| `common/` | PC/モバイル共通で使う画像 | FV、アイコン、ロゴスライダー、事例画像など |
| `pc/` | PC 表示専用 | ヘッダーロゴ、ファビコン、セクション背景など |
| `mobile/` | モバイル表示専用 | ヘッダーロゴ、FV、バッジなど |

- 参照パスは **ルート起点**（例: `/images/pc/header_logo.png`）。
- ヘッダーで使うデフォルト画像は `components/Header.tsx` の `DEFAULT_HEADER_IMAGES` で定義。

## 2. 業界事例LP 用の画像（拡張性のある構成）

業界ごとに **同じ役割の画像を差し替え** できるようにする。

### 2.1 配置ルール

- 業界ごとの画像は **`public/images/industries/{industry-slug}/`** に置く。
- `{industry-slug}` は `lib/industries.ts` の `IndustrySlug` と一致させる（例: `kaigo`）。

```
public/images/
├── common/          # メインLP・共通
├── pc/              # メインLP・PC
├── mobile/          # メインLP・モバイル
└── industries/
    └── {slug}/      # 業界LP専用（例: kaigo）
        ├── header_logo.png
        ├── header_logo_mobile.png
        └── favicon.png
```

### 2.2 ヘッダー画像の差し替え

- 業界でヘッダーロゴ等を変えたい場合は、`lib/industries.ts` の `IndustryMeta.headerImages` にパスを指定する。
- 指定したキーだけ上書きされ、未指定の項目はメインLPのデフォルトが使われる。
- ファイル名の慣例（任意）:
  - `header_logo.png` … PC 用メインロゴ
  - `header_logo_mobile.png` … モバイル用ロゴ
  - `favicon.png` … PC ヘッダー用アイコン

### 2.3 業界LP 内のその他画像

- セクション固有の画像（バナー・イラストなど）も **同じ業界フォルダ** に置く。
- 例: `images/industries/kaigo/oricon_banner.png` など、業界コンポーネントから `/images/industries/kaigo/...` で参照する。
- 業界を増やすときは `industries/{新しいslug}/` を追加し、必要に応じて `headerImages` とコンポーネント内パスを追加する。

## 3. 運用上の注意

- メインLP用と業界LP用で **役割が同じ画像は名前を揃える** と、差し替え時の混乱を防げる。
- 業界フォルダには「使う画像だけ」を置き、未使用のコピーを増やさない。
- Next.js の `next/image` を使う場合は `next.config` の `images.domains` 等は不要（同一オリジンの `public` のみ想定）。
