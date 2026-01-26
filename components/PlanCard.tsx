'use client';

import Link from 'next/link';

interface PlanCardProps {
  name: string;
  badge: string;
  badgeColor: string;
  image: string | null;
  monthlyPrice?: string;
  yearlyPrice?: string;
  yearlyTotalPrice?: string; // 年払いの合計金額
  isPopular?: boolean;
  isEnterprise?: boolean;
  buttonStyle: string;
  features: string[];
  isYearly: boolean;
  opacity: number;
}

export default function PlanCard({
  name,
  badge,
  badgeColor,
  image,
  monthlyPrice,
  yearlyPrice,
  yearlyTotalPrice,
  isPopular,
  isEnterprise,
  buttonStyle,
  features,
  isYearly,
  opacity
}: PlanCardProps) {
  return isPopular ? (
    // 人気プラン（グラデーション枠）
    <div
      className="w-[343px] md:w-[285px] flex"
      style={{
        borderRadius: '16px',
        padding: '1px',
        background: 'linear-gradient(310.3deg, #6017FF 44.35%, #8249FF 86.86%)',
        boxShadow: '0px 0px 20px 0px rgba(255, 255, 255, 0.6)'
      }}
    >
      <div 
        className="plan-card flex flex-col"
        style={{
          width: '100%',
          background: '#FDFCFF',
          borderRadius: '15px',
          paddingTop: '24px',
          paddingRight: '20px',
          paddingBottom: '24px',
          paddingLeft: '20px',
          gap: '20px'
        }}
      >
        {renderCardContent()}
      </div>
    </div>
  ) : (
    // 通常プラン
    <div 
      className="plan-card flex flex-col w-[343px] md:w-[285px]"
      style={{
        background: '#FFFFFF',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#E0E0E0',
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
        borderRadius: '16px',
        paddingTop: '24px',
        paddingRight: '20px',
        paddingBottom: '24px',
        paddingLeft: '20px',
        gap: '20px'
      }}
    >
      {renderCardContent()}
    </div>
  );

  function renderCardContent() {
    return (
      <>
      <div className="flex items-center justify-center w-full" style={{ height: '60px', gap: '16px' }}>
        {image ? (
          <>
            <img 
              src={image} 
              alt={name}
              style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f3f4f6' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span 
                style={{
                  width: '118px',
                  height: '22px',
                  padding: '4px 10px',
                  borderRadius: '300px',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className={badgeColor}
              >
                {badge}
              </span>
              <h3 style={{
                fontFamily: 'Inter',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '100%',
                marginTop: '4px'
              }}>
                {name}
              </h3>
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span 
              style={{
                width: '118px',
                height: '22px',
                padding: '4px 10px',
                borderRadius: '300px',
                fontSize: '10px',
                fontWeight: 700,
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className={badgeColor}
            >
              {badge}
            </span>
            <h3 style={{
              fontFamily: 'Inter',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '100%',
              marginTop: '4px'
            }}>
              {name}
            </h3>
          </div>
        )}
      </div>

      {isEnterprise ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ 
            height: '44px', 
            display: 'flex', 
            alignItems: 'center',
            fontFamily: 'Inter',
            fontSize: '32px',
            fontWeight: 700,
            color: '#000'
          }}>
            ご相談ください
          </div>
          
          {/* 空の擬似要素（年払いの時のみ表示） */}
          {isYearly && (
            <div style={{
              alignSelf: 'stretch',
              height: '21px'
            }}></div>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ 
            height: '44px',
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px',
            fontFamily: 'Inter'
          }}>
            <span 
              style={{ 
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '1',
                opacity,
                transition: 'opacity 0.2s'
              }}
            >
              {isYearly ? yearlyPrice : monthlyPrice}
            </span>
            <span style={{ fontSize: '20px', fontWeight: 700, lineHeight: '1' }}>円</span>
            <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: '1' }}>/月</span>
          </div>
          
          {/* 年払いの合計金額（年単位の場合のみ表示） */}
          {isYearly && yearlyTotalPrice && (
            <div
              style={{
                alignSelf: 'stretch',
                height: '21px',
                color: '#888',
                fontFamily: '"Noto Sans JP"',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '21px',
                opacity,
                transition: 'opacity 0.2s'
              }}
            >
              年払い：{yearlyTotalPrice}円
            </div>
          )}
        </div>
      )}

      <Link href={isEnterprise ? 'https://go.zeals.ai/contact' : 'https://www.omakase.ai/jp/register'}>
        <button 
          className={buttonStyle}
          style={{
            width: '100%',
            height: '48px',
            padding: '10px 24px',
            borderRadius: '300px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          {isEnterprise ? 'お問い合わせ' : '1週間無料トライアル'}
        </button>
      </Link>

      <ul style={{ width: '100%', gap: '16px', fontSize: '13px', color: '#374151', display: 'flex', flexDirection: 'column' }}>
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[#6017FF]">✔</span> {feature}
          </li>
        ))}
      </ul>
      </>
    );
  }
}