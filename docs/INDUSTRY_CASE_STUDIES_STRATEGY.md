# 業界別事例ページ — URL と配置

現行は **同一ドメインのサブパス** `/industries/{slug}/`。一覧ページ（`/industries`）は無い。

## 公開中の URL

| 業界 | スラッグ | URL | 公開 |
|---|---|---|---|
| 法人・BtoB | `tob` | https://omakase-voice-ai.com/industries/tob/ | 常時 |
| 人材エージェント | `kaigo` | https://omakase-voice-ai.com/industries/kaigo/ | `KAIGO_LP_ENABLED` が false のため 404 |

フッターの「事例紹介」は `lib/industries.ts` の公開中だけを出す。

---

## ディレクトリ

```
app/
  industries/
    [slug]/page.tsx           # tob / kaigo を分岐
components/
  industries/
    index.ts
    tob/
    kaigo/
lib/
  industries.ts
  featureFlags.ts
public/images/
  industries/
    tob/
    kaigo/
```

詳細は `docs/COMPONENT_STRATEGY.md`。横余白は `Container` のみ。

---

## SEO

- ドメインは `https://omakase-voice-ai.com` のまま（オーソリティを分散しない）
- 各ページの title / description は `lib/industries.ts` のメタ
- canonical は `app/industries/[slug]/page.tsx` で `/industries/{slug}/` を指定

サブドメインや別ドメインは使っていない。

---

## 追加するとき

1. `lib/industries.ts` に slug とメタを足す
2. `components/industries/{slug}/` に LP を置く
3. `app/industries/[slug]/page.tsx` に分岐を1行足す
4. 画像は `public/images/industries/{slug}/`
5. 非公開にしたい場合は `lib/featureFlags.ts` でゲートする（kaigo と同じ）
