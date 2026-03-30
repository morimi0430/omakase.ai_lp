'use client';

import Link from 'next/link';

export default function SubsidyHero() {
  return (
    <section className="w-full relative overflow-hidden" style={{ background: '#fff' }}>
      {/* 背景ぼかし装飾 */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: '-60px',
          right: '80px',
          width: '300px',
          height: '300px',
          background: '#6017FF',
          opacity: 0.15,
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '-60px',
          width: '200px',
          height: '200px',
          background: '#8249FF',
          opacity: 0.12,
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      {/* モバイル版 */}
      <div className="flex md:hidden flex-col" style={{ paddingTop: '24px', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '48px' }}>
        {/* 締切バナー */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FEF3C7',
            border: '1px solid #F59E0B',
            borderRadius: '8px',
            padding: '10px 14px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '18px' }}>⚠️</span>
          <span style={{ color: '#92400E', fontSize: '13px', fontWeight: 700, fontFamily: '"Noto Sans JP"' }}>
            第1次締切：2026年5月12日（火）17:00まで
          </span>
        </div>

        {/* キャッチコピー */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#6017FF', fontSize: '13px', fontWeight: 700, fontFamily: '"Noto Sans JP"', marginBottom: '8px' }}>
            IT導入補助金 × Omakase AI
          </p>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0F0F0F', lineHeight: '150%', fontFamily: '"Noto Sans JP"' }}>
            通常<span style={{ color: '#6017FF' }}>254万円</span>のAI導入パッケージが
          </h1>
          <div style={{ position: 'relative', display: 'inline-block', marginTop: '4px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#6017FF', fontFamily: 'var(--font-inter)', lineHeight: '1.1' }}>
              85万円
            </span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"' }}>
              から導入可能！
            </span>
            <div
              style={{
                position: 'absolute',
                bottom: '4px',
                left: '0',
                width: '220px',
                height: '12px',
                background: '#F6FF51',
                zIndex: -1,
              }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#555', fontFamily: '"Noto Sans JP"', marginTop: '8px', lineHeight: '160%' }}>
            ※賃金引上枠（補助率2/3）適用時。実質負担額は事業者状況により異なります。
          </p>
        </div>

        {/* 特徴リスト */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {[
            'AIシステム＋初期構築＋研修が全て補助対象',
            '補助率最大2/3（賃金引上枠）',
            'ZEALSが申請から入金まで完全伴走サポート',
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
              }}>
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L3.8 7.5L10 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', fontFamily: '"Noto Sans JP"', lineHeight: '160%' }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/document-request"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '18px 24px',
            borderRadius: '300px',
            background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
            border: '1px solid #EF96FF',
            boxShadow: '0 6px 20px rgba(96,23,255,0.30)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '16px',
            fontFamily: '"Noto Sans JP"',
            textDecoration: 'none',
          }}
        >
          補助金申請の相談をする
          <span style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>▶</span>
        </Link>
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#888', marginTop: '10px', fontFamily: '"Noto Sans JP"' }}>
          無料相談・資料請求はこちら
        </p>
      </div>

      {/* PC版 */}
      <div className="hidden md:flex w-full justify-center" style={{ minHeight: '560px' }}>
        <div
          className="w-full"
          style={{
            maxWidth: '1440px',
            paddingLeft: '120px',
            paddingRight: '120px',
            paddingTop: '60px',
            paddingBottom: '72px',
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
          }}
        >
          {/* 左側 */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {/* 締切バナー */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FEF3C7',
                border: '1px solid #F59E0B',
                borderRadius: '8px',
                padding: '10px 16px',
                marginBottom: '28px',
                alignSelf: 'flex-start',
              }}
            >
              <span style={{ fontSize: '18px' }}>⚠️</span>
              <span style={{ color: '#92400E', fontSize: '14px', fontWeight: 700, fontFamily: '"Noto Sans JP"' }}>
                第1次締切：2026年5月12日（火）17:00まで
              </span>
            </div>

            {/* ラベル */}
            <p style={{ color: '#6017FF', fontSize: '14px', fontWeight: 700, fontFamily: '"Noto Sans JP"', marginBottom: '12px' }}>
              IT導入補助金 × Omakase AI
            </p>

            {/* キャッチコピー */}
            <h1 style={{ fontFamily: '"Noto Sans JP"', fontWeight: 700, color: '#0F0F0F', lineHeight: '150%', margin: 0, marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>通常</span>
              <span style={{ fontSize: '36px', color: '#6017FF' }}>254万円</span>
              <span style={{ fontSize: '28px' }}>のAI導入パッケージが</span>
            </h1>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
              <span style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#6017FF',
                fontFamily: 'var(--font-inter)',
                lineHeight: '1.0',
              }}>
                85万円
              </span>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#0F0F0F', fontFamily: '"Noto Sans JP"' }}>
                &nbsp;から導入可能！
              </span>
              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '0',
                  width: '330px',
                  height: '14px',
                  background: '#F6FF51',
                  zIndex: -1,
                }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#777', fontFamily: '"Noto Sans JP"', marginBottom: '28px' }}>
              ※賃金引上枠（補助率2/3）適用時。実質負担額は事業者状況により異なります。
            </p>

            {/* 特徴リスト */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {[
                'AIシステム＋初期構築費＋研修費が全て補助対象',
                '補助率最大2/3（賃金引上枠）／通常枠は1/2',
                'ZEALSが申請準備から補助金入金まで完全伴走',
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '16px', fontWeight: 500, color: '#1a1a1a', fontFamily: '"Noto Sans JP"' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link
                href="/document-request"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '20px 36px',
                  borderRadius: '300px',
                  background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                  border: '1px solid #EF96FF',
                  boxShadow: '0 6px 20px rgba(96,23,255,0.30)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '18px',
                  fontFamily: '"Noto Sans JP"',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                補助金申請の相談をする
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                }}>▶</span>
              </Link>
              <p style={{ fontSize: '13px', color: '#888', fontFamily: '"Noto Sans JP"', margin: 0 }}>
                無料相談・資料請求
              </p>
            </div>
          </div>

          {/* 右側：補助金サマリーカード */}
          <div style={{ flexShrink: 0, width: '360px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #6017FF 0%, #8249FF 100%)',
              borderRadius: '24px',
              padding: '36px 32px',
              color: '#fff',
              boxShadow: '0 20px 60px rgba(96,23,255,0.30)',
            }}>
              <p style={{ fontSize: '13px', fontWeight: 700, fontFamily: '"Noto Sans JP"', marginBottom: '20px', opacity: 0.85 }}>
                Omakase AI 補助金パッケージ（ベテランプラン相当）
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontFamily: '"Noto Sans JP"' }}>通常合計金額</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-inter)', textDecoration: 'line-through', opacity: 0.7 }}>約254万円</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontFamily: '"Noto Sans JP"' }}>補助額（賃金引上枠・2/3）</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-inter)', color: '#F6FF51' }}>▲ 約170万円</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, fontFamily: '"Noto Sans JP"' }}>実質負担額</span>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '32px', fontWeight: 700, fontFamily: 'var(--font-inter)', color: '#F6FF51' }}>85</span>
                    <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: '"Noto Sans JP"', color: '#F6FF51' }}>万円〜</span>
                  </div>
                </div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '12px',
                fontFamily: '"Noto Sans JP"',
                lineHeight: '160%',
              }}>
                💡 通常枠（補助率1/2）の場合は実質負担<strong>約128万円</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
