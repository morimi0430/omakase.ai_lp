'use client';

import React, { useState } from 'react';
import PlanCard from './PlanCard';
import SectionTitle from './SectionTitle';
import { Container } from './Container';

export default function Plan() {
  const [isYearly, setIsYearly] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const handleToggle = (yearly: boolean) => {
    setOpacity(0);
    setTimeout(() => {
      setIsYearly(yearly);
      setOpacity(1);
    }, 150);
  };

  const plans = [
    {
      name: 'アルバイト',
      badge: '10個までの商品数',
      badgeColor: 'bg-[#6017FF]',
      image: '/images/common/parttime.png',
      monthlyPrice: '5,980',
      yearlyPrice: '4,784',
      yearlyTotalPrice: '57,408', // 年払い合計（4,784円 × 12ヶ月）
      buttonStyle: 'bg-violet-50 text-[#6017FF] border-2 border-[#6017FF] hover:bg-[#6017FF] hover:text-white',
      features: [
        '音声とチャットのハイブリッド接客',
        'Shopifyとの連携',
        '1種類の接客タイプ',
        '4種類から選べる音声キャラクター',
        '接客数：50',
        '10個までの商品数',
        'メールでのCSサポート',
        'ベーシックな分析ツール',
        'カスタマイズ可能なインターフェース',
        'AIナレッジベースやカスタムルールによるトレーニング'
      ]
    },
    {
      name: 'ルーキー',
      badge: '🏆 最も人気！',
      badgeColor: 'bg-gradient-to-r from-[#6017FF] to-[#8249FF]',
      image: '/images/common/rookie.png',
      monthlyPrice: '19,800',
      yearlyPrice: '15,840',
      yearlyTotalPrice: '190,080', // 年払い合計（15,840円 × 12ヶ月）
      isPopular: true,
      buttonStyle: 'bg-[#6017FF] text-white hover:bg-[#4c12cc] shadow-lg',
      features: [
        '音声とチャットのハイブリッド接客',
        'Shopifyとの連携',
        '2種類の接客タイプ',
        '6種類から選べる音声キャラクター',
        '接客数：300',
        '100個までの商品数',
        'メールと電話でのCSサポート',
        '高度な分析ツール',
        '柔軟にカスタマイズ可能なインターフェース',
        'Omakase.aiのクレジット削除',
        '詳細なAIナレッジベースやカスタムルールによるトレーニング'
      ]
    },
    {
      name: 'ベテラン',
      badge: '500個までの商品数',
      badgeColor: 'bg-[#6017FF]',
      image: '/images/common/veteran.png',
      monthlyPrice: '59,800',
      yearlyPrice: '47,840',
      yearlyTotalPrice: '574,080', // 年払い合計（47,840円 × 12ヶ月）
      buttonStyle: 'bg-violet-50 text-[#6017FF] border-2 border-[#6017FF] hover:bg-[#6017FF] hover:text-white',
      features: [
        '音声とチャットのハイブリッド接客',
        'Shopifyとの連携',
        '3種類の接客タイプ',
        '10種類から選べる音声キャラクター',
        '接客数：1000',
        '500個までの商品数',
        'メールと電話、ミーティングでのCSサポート',
        'リード管理も含めた高度な分析ツール',
        '柔軟にカスタマイズ可能なインターフェース',
        'カートに追加ボタンの実装',
        '高度なAIナレッジベースやカスタムルールによるトレーニング'
      ]
    },
    {
      name: 'エンタープライズ',
      badge: '500個以上の商品数',
      badgeColor: 'bg-[#6017FF]',
      image: null,
      isEnterprise: true,
      buttonStyle: 'bg-violet-50 text-[#6017FF] border-2 border-[#6017FF] hover:bg-[#6017FF] hover:text-white',
      features: [
        '音声とチャットのハイブリッド接客',
        'Shopifyとの連携',
        '4種類以上の豊富な接客タイプ',
        '11種類以上選べる音声キャラクター',
        'ボイスクローニング機能',
        '接客数：1001以上',
        '501個以上の商品数',
        '相談方法を選べる柔軟なサポート体制',
        'リード管理も含めた高度な分析ツール',
        '柔軟にカスタマイズ可能なインターフェース',
        'カートに追加ボタンの実装',
        '全ての設定が上限なく使える、AIナレッジベースやカスタムルールによるトレーニング'
      ]
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Inter:wght@700&display=swap');
        
        .toggle-slider {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>

      {/* モバイル版 */}
      <section className="w-full md:hidden bg-gray-50" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <div className="flex flex-col items-center gap-10">
            {/* タイトル */}
            <div>
              <SectionTitle title="料金プラン" isMobile={false} />
            </div>

            {/* トグルスイッチ */}
            <div className="flex justify-center w-full">
              <div className="relative flex items-center" style={{
                width: '198px',
                height: '52px',
                background: '#5C17FF',
                borderRadius: '300px',
                padding: '8px',
                gap: '10px'
              }}>
                <div 
                  className="toggle-slider absolute bg-white rounded-full shadow-md z-0"
                  style={{ 
                    transform: isYearly ? 'translateX(90px)' : 'translateX(0)',
                    width: '90px',
                    height: '36px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    left: '8px'
                  }}
                ></div>
                
                <button 
                  onClick={() => handleToggle(false)}
                  className="relative z-10 text-sm font-bold transition-colors duration-300 flex items-center justify-center"
                  style={{ 
                    color: isYearly ? '#FFFFFF' : '#5C17FF',
                    width: '90px',
                    height: '36px',
                    borderRadius: '300px'
                  }}
                >
                  月単位
                </button>
                <button 
                  onClick={() => handleToggle(true)}
                  className="relative z-10 text-sm font-bold transition-colors duration-300 flex items-center justify-center"
                  style={{ 
                    color: isYearly ? '#5C17FF' : '#FFFFFF',
                    width: '90px',
                    height: '36px',
                    borderRadius: '300px'
                  }}
                >
                  年単位
                </button>
                
                <div className="absolute -top-3 right-[-48px] bg-[#F6FF51] text-[#6017FF] text-[10px] font-bold shadow-md animate-bounce" style={{
                  width: '82px',
                  height: '22px',
                  paddingTop: '4px',
                  paddingRight: '10px',
                  paddingBottom: '4px',
                  paddingLeft: '10px',
                  borderRadius: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  20%お得！
                </div>
              </div>
            </div>

            {/* プランカード（縦並び） */}
            <div className="flex flex-col w-full items-center gap-[35px]">
              {plans.map((plan, index) => (
                <PlanCard
                  key={index}
                  name={plan.name}
                  badge={plan.badge}
                  badgeColor={plan.badgeColor}
                  image={plan.image}
                  monthlyPrice={plan.monthlyPrice}
                  yearlyPrice={plan.yearlyPrice}
                  yearlyTotalPrice={plan.yearlyTotalPrice}
                  isPopular={plan.isPopular}
                  isEnterprise={plan.isEnterprise}
                  buttonStyle={plan.buttonStyle}
                  features={plan.features}
                  isYearly={isYearly}
                  opacity={opacity}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-gray-50" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <Container>
          <div className="flex flex-col items-center gap-[62px]">
            {/* タイトル */}
            <div>
              <SectionTitle title="料金プラン" isMobile={false} />
            </div>

            {/* トグルスイッチ */}
            <div className="flex justify-center w-full">
              <div className="relative flex items-center" style={{
                width: '198px',
                height: '52px',
                background: '#5C17FF',
                borderRadius: '300px',
                padding: '8px',
                gap: '10px'
              }}>
                <div 
                  className="toggle-slider absolute bg-white rounded-full shadow-md z-0"
                  style={{ 
                    transform: isYearly ? 'translateX(90px)' : 'translateX(0)',
                    width: '90px',
                    height: '36px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    left: '8px'
                  }}
                ></div>
                
                <button 
                  onClick={() => handleToggle(false)}
                  className="relative z-10 text-sm font-bold transition-colors duration-300 flex items-center justify-center"
                  style={{ 
                    color: isYearly ? '#FFFFFF' : '#5C17FF',
                    width: '90px',
                    height: '36px',
                    borderRadius: '300px'
                  }}
                >
                  月単位
                </button>
                <button 
                  onClick={() => handleToggle(true)}
                  className="relative z-10 text-sm font-bold transition-colors duration-300 flex items-center justify-center"
                  style={{ 
                    color: isYearly ? '#5C17FF' : '#FFFFFF',
                    width: '90px',
                    height: '36px',
                    borderRadius: '300px'
                  }}
                >
                  年単位
                </button>
                
                <div className="absolute -top-3 right-[-48px] bg-[#F6FF51] text-[#6017FF] text-[10px] font-bold shadow-md animate-bounce" style={{
                  width: '82px',
                  height: '22px',
                  paddingTop: '4px',
                  paddingRight: '10px',
                  paddingBottom: '4px',
                  paddingLeft: '10px',
                  borderRadius: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  20%お得！
                </div>
              </div>
            </div>

            {/* プランカード（横並び） */}
            <div className="grid grid-cols-2 xl:grid-cols-4 justify-items-center w-full gap-5">
              {plans.map((plan, index) => (
                <PlanCard
                  key={index}
                  name={plan.name}
                  badge={plan.badge}
                  badgeColor={plan.badgeColor}
                  image={plan.image}
                  monthlyPrice={plan.monthlyPrice}
                  yearlyPrice={plan.yearlyPrice}
                  yearlyTotalPrice={plan.yearlyTotalPrice}
                  isPopular={plan.isPopular}
                  isEnterprise={plan.isEnterprise}
                  buttonStyle={plan.buttonStyle}
                  features={plan.features}
                  isYearly={isYearly}
                  opacity={opacity}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}