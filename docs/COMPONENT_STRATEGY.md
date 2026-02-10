# 業界事例のコンポーネント戦略

拡張しやすく、**業界ごとにどのファイルがどこにあるか**を迷わないための方針とファイル配置ルール。

---

## 1. 方針

- **業界ごとにフォルダを分ける**: ある業界のUI・データは **その業界名のフォルダにだけ** 置く。
- **共有は「業界共通」だけ**: 複数業界で使う骨組みやユーティリティは `components/industries/` 直下または `lib/industries.ts` に置く。業界名のフォルダには入れない。
- **ルーティングは動的のまま**: `app/industries/[slug]/page.tsx` は1本とし、slug に応じて「どの業界LPを表示するか」を **業界マップ** で解決する。

---

## 2. ディレクトリ構成と役割

```
lib/
  industries.ts                 # 業界マスタ（スラッグ・表示名・メタ）。全業界の一覧と getIndustryBySlug

components/
  Container.tsx                 # 共通（メインLPでも使用）。横パディング 16/120
  industries/                   # ★ 業界事例まわりはここ以下に集約
    IndustrySection.tsx         # 共有：セクション骨組み（縦余白 + Container）
    index.ts                    # 共有の export と、slug → LP コンポーネントのマップ
    kaigo/                      # 介護業界：介護に関するものはすべてこの中
      KaigoLP.tsx               # 介護LP のメインコンポーネント
      index.ts                  # export { KaigoLP }
    jinzai/                     # （将来）人材業界
      JinzaiLP.tsx
      index.ts

app/
  industries/
    page.tsx                    # 業界一覧ページ（/industries）
    [slug]/
      page.tsx                  # 動的：slug に応じて上記マップから LP を描画
```

- **「介護のことを触る」** → `components/industries/kaigo/` を見る。
- **「業界共通の骨組みを触る」** → `components/industries/IndustrySection.tsx` と `docs/LP_CREATION_RULES.md`。
- **「業界の追加・一覧」** → `lib/industries.ts` と `components/industries/index.ts` のマップ。

---

## 3. 業界ごとのファイル配置（どこに何があるか）

| 業界 | スラッグ | 配置場所 | 主なファイル |
|------|----------|----------|--------------|
| 介護 | `kaigo` | `components/industries/kaigo/` | `KaigoLP.tsx`, `index.ts` |
| 人材 | `jinzai` | `components/industries/jinzai/` | `JinzaiLP.tsx`, `index.ts`（追加時） |
| （共通） | — | `components/industries/`（直下） | `IndustrySection.tsx`, `index.ts` |
| （マスタ） | — | `lib/industries.ts` | スラッグ一覧・メタ・getIndustryBySlug |

- 業界ごとの **データ**（文言・求人リストなど）を分離したい場合は、同じ業界フォルダに `kaigo/data.ts` のように置く。
- 画像は `public/images/industries/kaigo/` のように業界ごとフォルダを分ける（INDUSTRY_CASE_STUDIES_STRATEGY に記載）。

---

## 4. 新規業界の追加手順

1. **`lib/industries.ts`**  
   - `IndustrySlug` に `"jinzai"` を追加し、`INDUSTRIES` にメタ（name, title, description）を追加。
2. **`components/industries/jinzai/`**  
   - `JinzaiLP.tsx` を作成（`IndustrySection` と `Container` を利用）。  
   - `index.ts` で `export { JinzaiLP }`。
3. **`components/industries/index.ts`**  
   - `INDUSTRY_LP_MAP`（または同等）に `jinzai: JinzaiLP` を追加。
4. **`app/industries/[slug]/page.tsx`**  
   - マップから LP を取得する実装になっていれば、**ここは変更しない**。
5. （必要なら）フッターなどに「人材」リンクを追加。

これで「どこに何を足せばよいか」が業界ごとに明確になる。

---

## 5. 共有コンポーネントの使い方

- **`IndustrySection`**  
  - 余白スケール（48 / 60 / 80）に合わせた縦パディングと `Container` でラップする。  
  - 使用例: `<IndustrySection paddingVertical={60}>{中身}</IndustrySection>`
- **`Container`**  
  - 横パディングは業界LP内でもこれのみ使う（LP_CREATION_RULES §2.4）。

---

## 6. まとめ

| 目的 | 参照する場所 |
|------|----------------|
| 業界一覧・スラッグ・メタ | `lib/industries.ts` |
| 介護LPの見た目・文言 | `components/industries/kaigo/` |
| 人材LP（将来） | `components/industries/jinzai/` |
| 業界共通のセクション骨組み | `components/industries/IndustrySection.tsx` |
| どの slug がどの LP に対応するか | `components/industries/index.ts` のマップ |

この戦略に従うことで、**拡張性** と **業界ごとの所在の分かりやすさ** の両方を満たす。
