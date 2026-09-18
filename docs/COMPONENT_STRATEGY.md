# 業界事例のコンポーネント戦略

業界ごとにファイルの場所が分かるようにするための配置。

---

## 1. 方針

- 業界の UI・データはその業界名のフォルダにだけ置く
- 複数業界で使うものは `components/industries/` 直下または `lib/industries.ts`
- ルートは `app/industries/[slug]/page.tsx` の1本。slug でどの LP を出すか分岐する

---

## 2. いまある構成

```
lib/
  industries.ts                 # スラッグ・表示名・メタ、公開判定
  featureFlags.ts               # KAIGO_LP_ENABLED など

components/
  Container.tsx
  industries/
    index.ts                    # KaigoLP / TobLP を export
    kaigo/                      # 人材エージェントLP（フラグ off なら 404）
    tob/                        # 法人・BtoB LP（公開中）

app/
  industries/
    [slug]/
      page.tsx                  # kaigo / tob を分岐。一覧ページ（/industries）は無い
```

- 介護（kaigo）を触る → `components/industries/kaigo/`
- BtoB（tob）を触る → `components/industries/tob/`
- 公開のオンオフ → `lib/featureFlags.ts` と `lib/industries.ts`
- 横余白 → `components/Container.tsx` と `docs/LP_CREATION_RULES.md`

---

## 3. 業界ごとのファイル

| 業界 | スラッグ | 配置 | 公開 |
|---|---|---|---|
| 人材エージェント | `kaigo` | `components/industries/kaigo/` | `KAIGO_LP_ENABLED`（現在 false） |
| 法人・BtoB | `tob` | `components/industries/tob/` | 常時 |
| マスタ | — | `lib/industries.ts` | — |

画像は `public/images/industries/{slug}/`（`docs/IMAGE_DIRECTORY_STRATEGY.md`）。

---

## 4. 新規業界の追加

1. `lib/industries.ts` の `IndustrySlug` と一覧にメタを追加する
2. `components/industries/{slug}/` に LP を作り、`index.ts` で export する
3. `components/industries/index.ts` から export する
4. `app/industries/[slug]/page.tsx` に `if (slug === "...") return <XxxLP ... />` を1行足す
5. 必要ならフッター（`components/Footer.tsx`）にリンクを出す

---

## 5. まとめ

| 目的 | 場所 |
|---|---|
| スラッグ・メタ・公開判定 | `lib/industries.ts` |
| 介護LP | `components/industries/kaigo/` |
| BtoB LP | `components/industries/tob/` |
| 横余白 | `components/Container.tsx` |
| slug の分岐 | `app/industries/[slug]/page.tsx` |
