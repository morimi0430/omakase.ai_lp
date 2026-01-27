"use client";

import { useRef, useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import CaseCard from './CaseStudiesCard';

export default function CaseStudies() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlidePC, setCurrentSlidePC] = useState(0);

  const cases = [
    {
      company: 'Medulla',
      title: '日本語音声でも、"販売員レベルの接客"ができました。',
      image: 'images/common/medulla.png',
      reasons: [
        '日本語での自然な受け答えの精度',
        '販売員に近い相談体験を再現できること',
        '商品理解・興味関心が高いユーザーとの相性'
      ],
      effects: [
        '導入からわずか2週間で音声接客3,000件超',
        '一次解決率 90.8% を達成',
        '「販売員がいる感覚」の体験価値向上'
      ]
    },
    {
      company: 'NOVA',
      title: '短期間でリリースでき、ユーザーの申し込みの"迷いを解消"できました。',
      image: 'images/common/nova.png',
      reasons: [
        'ZEALSとしての信頼と継続的な実績',
        '「任せられる」という安心感',
        '導入工数の少なさとスピード感'
      ],
      effects: [
        '数週間でローンチ完了、1人でも立ち上げ可能',
        '複雑なサービス理解をAIがサポート',
        '申し込み時の迷いを解消し、CVR約1.15倍に改善'
      ]
    },
    {
      company: 'シルクザリッチ',
      title: '音声で、"ここまで人と対話できる時代が来た"と感じました。',
      image: 'images/common/silktherich.png',
      reasons: [
        '音声で"人と対話している感覚"に衝撃を受けた',
        'お客様が"聞きたい瞬間"にすぐ答えられる体験',
        '導入を即決できるほどの体験価値'
      ],
      effects: [
        '「ホリエモンAI」による没入型の接客体験',
        '24時間365日の音声接客を実現',
        'お客様の疑問・関心に即時対応が可能に'
      ]
    },
    {
      company: 'ギフトフル',
      title: '"24時間365日"、関係性に寄り添った提案を実現しました。',
      image: 'images/common/giftful.png',
      reasons: [
        '顧客ごとのコミュニケーションを深められる点',
        'サービス拡大につながる接点を作れること',
        '利用前ユーザーの悩みを拾える仕組み'
      ],
      effects: [
        '24時間365日のカスタマーサポート体制を実現',
        '関係性・シーンに応じた最適なギフト提案'
      ]
    },
    {
      company: 'はるやま',
      title: 'WEBでの1回あたりの"購入金額を大きく伸ばすこと"ができました。',
      image: 'images/common/haruyama.png',
      reasons: [
        'EC上でも接客による提案価値を高めたかった',
        '買い回り・セット購入を後押しできる設計'
      ],
      effects: [
        'Omakase.ai経由の平均購入金額が3.5倍を記録',
        'セール・キャンペーン情報の訴求を自動化'
      ]
    }
  ];

  // 無限ループ用の配列（3セット: 前・中央・後）
  const extendedCases = [...cases, ...cases, ...cases];

  const updateCurrentSlide = () => {
    if (!mobileSliderRef.current) return;
    const scrollLeft = mobileSliderRef.current.scrollLeft;
    const slideWidth = mobileSliderRef.current.offsetWidth;
    const totalIndex = Math.round(scrollLeft / slideWidth);
    const index = ((totalIndex % cases.length) + cases.length) % cases.length;
    setCurrentSlide(index);

    // 無限ループ：最初のセットまたは最後のセットにいる場合、中央のセットにジャンプ
    if (totalIndex < cases.length) {
      // 最初のセット → 中央のセットの対応位置にジャンプ
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        if (!mobileSliderRef.current) return;
        mobileSliderRef.current.style.scrollSnapType = 'none';
        mobileSliderRef.current.style.scrollBehavior = 'auto';
        mobileSliderRef.current.scrollLeft = slideWidth * (cases.length + totalIndex);
        requestAnimationFrame(() => {
          if (!mobileSliderRef.current) return;
          mobileSliderRef.current.style.scrollBehavior = 'smooth';
          mobileSliderRef.current.style.scrollSnapType = 'x mandatory';
        });
      }, 300);
    } else if (totalIndex >= cases.length * 2) {
      // 最後のセット → 中央のセットの対応位置にジャンプ
      const positionInSet = totalIndex - cases.length * 2;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        if (!mobileSliderRef.current) return;
        mobileSliderRef.current.style.scrollSnapType = 'none';
        mobileSliderRef.current.style.scrollBehavior = 'auto';
        mobileSliderRef.current.scrollLeft = slideWidth * (cases.length + positionInSet);
        requestAnimationFrame(() => {
          if (!mobileSliderRef.current) return;
          mobileSliderRef.current.style.scrollBehavior = 'smooth';
          mobileSliderRef.current.style.scrollSnapType = 'x mandatory';
        });
      }, 300);
    }
  };

  const updateCurrentSlidePC = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const card = sliderRef.current.querySelector('.case-item') as HTMLElement;
    if (!card) return;
    const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
    const slideWidth = card.offsetWidth + gap;
    const totalIndex = Math.round(scrollLeft / slideWidth);
    const index = ((totalIndex % cases.length) + cases.length) % cases.length;
    setCurrentSlidePC(index);

    // 無限ループ：最初のセットまたは最後のセットにいる場合、中央のセットにジャンプ
    if (totalIndex < cases.length) {
      // 最初のセット → 中央のセットの対応位置にジャンプ
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.scrollSnapType = 'none';
        sliderRef.current.style.scrollBehavior = 'auto';
        sliderRef.current.scrollLeft = slideWidth * (cases.length + totalIndex);
        requestAnimationFrame(() => {
          if (!sliderRef.current) return;
          sliderRef.current.style.scrollBehavior = 'smooth';
          sliderRef.current.style.scrollSnapType = 'x mandatory';
        });
      }, 300);
    } else if (totalIndex >= cases.length * 2) {
      // 最後のセット → 中央のセットの対応位置にジャンプ
      const positionInSet = totalIndex - cases.length * 2;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.scrollSnapType = 'none';
        sliderRef.current.style.scrollBehavior = 'auto';
        sliderRef.current.scrollLeft = slideWidth * (cases.length + positionInSet);
        requestAnimationFrame(() => {
          if (!sliderRef.current) return;
          sliderRef.current.style.scrollBehavior = 'smooth';
          sliderRef.current.style.scrollSnapType = 'x mandatory';
        });
      }, 300);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!mobileSliderRef.current) return;
    const slideWidth = mobileSliderRef.current.offsetWidth;
    const currentScrollLeft = mobileSliderRef.current.scrollLeft;
    const currentTotalIndex = Math.round(currentScrollLeft / slideWidth);
    
    const currentModIndex = currentTotalIndex % cases.length;
    let targetOffset = index - currentModIndex;
    
    if (targetOffset > cases.length / 2) {
      targetOffset -= cases.length;
    } else if (targetOffset < -cases.length / 2) {
      targetOffset += cases.length;
    }
    
    const targetIndex = currentTotalIndex + targetOffset;
    mobileSliderRef.current.scrollTo({ left: slideWidth * targetIndex, behavior: 'smooth' });
  };

  const scrollToSlidePC = (index: number) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.case-item') as HTMLElement;
    if (!card) return;
    const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
    const slideWidth = card.offsetWidth + gap;
    const currentScrollLeft = sliderRef.current.scrollLeft;
    const currentTotalIndex = Math.round(currentScrollLeft / slideWidth);
    
    const currentModIndex = currentTotalIndex % cases.length;
    let targetOffset = index - currentModIndex;
    
    if (targetOffset > cases.length / 2) {
      targetOffset -= cases.length;
    } else if (targetOffset < -cases.length / 2) {
      targetOffset += cases.length;
    }
    
    const targetIndex = currentTotalIndex + targetOffset;
    sliderRef.current.scrollTo({ left: slideWidth * targetIndex, behavior: 'smooth' });
  };

  // PC用自動スクロール関数
  const autoScrollPC = () => {
    if (!sliderRef.current || isHoveringRef.current) return;
    const card = sliderRef.current.querySelector('.case-item') as HTMLElement;
    if (!card) return;
    const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
    const slideWidth = card.offsetWidth + gap;
    const currentScrollLeft = sliderRef.current.scrollLeft;
    const currentTotalIndex = Math.round(currentScrollLeft / slideWidth);
    const nextIndex = currentTotalIndex + 1;
    
    sliderRef.current.scrollTo({ left: slideWidth * nextIndex, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePCScroll = () => {
      if (sliderRef.current) {
        updateCurrentSlidePC();
      }
    };

    const handleMobileScroll = () => {
      updateCurrentSlide();
    };

    const pcSlider = sliderRef.current;
    const mobileSlider = mobileSliderRef.current;

    // requestAnimationFrameを使って確実にレンダリング後に処理
    requestAnimationFrame(() => {
      if (pcSlider) {
        const card = pcSlider.querySelector('.case-item') as HTMLElement;
        if (card) {
          const gap = parseInt(window.getComputedStyle(pcSlider).gap) || 0;
          const slideWidth = card.offsetWidth + gap;
          // 中央のセット（2番目のセット）の最初にセット
          pcSlider.scrollLeft = slideWidth * cases.length;
        }
        setCurrentSlidePC(0);
        requestAnimationFrame(() => {
          pcSlider.addEventListener('scroll', handlePCScroll);
        });
      }

      if (mobileSlider) {
        // snapを一時的に無効化
        mobileSlider.style.scrollSnapType = 'none';
        
        const slideWidth = mobileSlider.offsetWidth;
        // 中央のセット（2番目のセット）の最初にセット
        const targetScroll = slideWidth * cases.length;
        mobileSlider.scrollLeft = targetScroll;
        
        // インジケーターを0に設定
        setCurrentSlide(0);
        
        // snapを再度有効化してからイベントリスナーを追加
        requestAnimationFrame(() => {
          if (mobileSlider) {
            mobileSlider.style.scrollSnapType = 'x mandatory';
            requestAnimationFrame(() => {
              mobileSlider.addEventListener('scroll', handleMobileScroll);
            });
          }
        });
      }
    });

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (pcSlider) {
        pcSlider.removeEventListener('scroll', handlePCScroll);
      }
      if (mobileSlider) {
        mobileSlider.removeEventListener('scroll', handleMobileScroll);
      }
    };
  }, []);

  // PC自動スクロール開始
  useEffect(() => {
    if (!sliderRef.current) return;
    
    // 3秒ごとに自動スクロール
    autoScrollIntervalRef.current = setInterval(() => {
      autoScrollPC();
    }, 3000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
        body { font-family: 'Noto Sans JP', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* モバイル版 */}
      <section className="w-full md:hidden bg-white" style={{ paddingTop: '60px', paddingBottom: '60px', position: 'relative', paddingLeft: '16px', paddingRight: '16px' }}>
        {/* タイトル */}
        <div className="flex flex-col items-center" style={{ marginBottom: '80px' }}>
          <SectionTitle title="導入事例" isMobile={false} />
        </div>

        {/* 横スクロールカルーセル（モバイル） */}
        <div 
          ref={mobileSliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10"
          style={{ marginLeft: '-16px', marginRight: '-16px', paddingLeft: '16px', paddingRight: '16px', scrollBehavior: 'smooth' }}
        >
          {extendedCases.map((caseItem, index) => (
            <div key={index} className="snap-center flex-shrink-0" style={{ width: 'calc(100vw - 32px)' }}>
              <CaseCard
                company={caseItem.company}
                title={caseItem.title}
                image={caseItem.image}
                reasons={caseItem.reasons}
                effects={caseItem.effects}
              />
            </div>
          ))}
        </div>

        {/* スライドインジケーター */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              style={{
                width: currentSlide === index ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: currentSlide === index ? '#5004F5' : '#E5E5E5',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
            />
          ))}
        </div>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full bg-white" style={{ paddingTop: '60px', paddingBottom: '60px', position: 'relative' }}>
        <div className="flex justify-center w-full">
          <div style={{ width: '100%', maxWidth: '1440px', paddingLeft: '120px', paddingRight: '120px' }}>
            {/* タイトル */}
            <div className="flex flex-col items-center" style={{ marginBottom: '80px' }}>
              <SectionTitle title="導入事例" isMobile={false} />
            </div>

            {/* 横スクロールカルーセル */}
            <div 
              ref={sliderRef}
              className="flex gap-14 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10"
              style={{ 
                scrollBehavior: 'smooth',
                paddingLeft: '3px',
                paddingRight: '3px',
                marginLeft: '-3px',
                marginRight: '-3px'
              }}
              onMouseEnter={() => { isHoveringRef.current = true; }}
              onMouseLeave={() => { isHoveringRef.current = false; }}
            >
              {extendedCases.map((caseItem, index) => (
                <div key={index} className="case-item flex-shrink-0">
                  <CaseCard
                    company={caseItem.company}
                    title={caseItem.title}
                    image={caseItem.image}
                    reasons={caseItem.reasons}
                    effects={caseItem.effects}
                  />
                </div>
              ))}
            </div>

            {/* スライドインジケーター（PC版） */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '60px'
            }}>
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlidePC(index)}
                  style={{
                    width: currentSlidePC === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: currentSlidePC === index ? '#5004F5' : '#E5E5E5',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}