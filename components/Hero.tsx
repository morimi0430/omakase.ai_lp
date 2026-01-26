import Image from "next/image";
import Link from "next/link";
import ThreeBadges, { Badge } from "@/components/ThreeBadges";
import LogoSlider from "@/components/LogoSlider";

export default function Hero() {
  return (
    <section className="w-full relative" style={{ marginTop: '80px' }}>      
      {/* モバイル版 */}
      <div className="flex md:hidden flex-col relative z-10" style={{ paddingTop: '19px', paddingLeft: '16px', paddingRight: '16px', boxSizing: 'border-box', marginTop: '0' }}>
        {/* コンテンツエリア */}
        <div className="flex flex-col" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
          {/* テキストコンテナ */}
          <div className="flex flex-col items-center gap-2 w-full">
            <h1 className="text-28 font-bold text-[#0F0F0F] text-center" style={{ lineHeight: '150%' }}>
              AI音声&チャット接客で
            </h1>
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <span className="font-bold text-[#5004F5]" style={{ fontFamily: 'var(--font-inter)', fontSize: '50px', lineHeight: '50px' }}>
                  CVR 400%
                </span>
                {/* CVR400%のハイライト */}
                <div className="absolute w-[270px] h-[15px] bg-[#F6FF51]" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '0', zIndex: -1 }} />
              </div>
              <div className="relative">
                <span className="font-bold text-[#5004F5]" style={{ fontFamily: 'var(--font-inter)', fontSize: '50px', lineHeight: '50px' }}>
                  改善!
                </span>
                {/* 改善のハイライト */}
                <div className="absolute w-[120px] h-[15px] bg-[#F6FF51]" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '0', zIndex: -1 }} />
              </div>
            </div>
          </div>
          
          {/* 24pxのスペース */}
          <div style={{ height: '24px' }} />
          
          {/* 特徴リスト */}
          <div className="flex flex-col items-start gap-3">
            {/* 子1 */}
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-5 h-5 rounded-full bg-[#5004F5] flex-shrink-0">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-14 font-medium text-[#040404]" style={{ lineHeight: '150%' }}>
                AIエージェントが24時間365日接客！
              </span>
            </div>

            {/* 子2 */}
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-5 h-5 rounded-full bg-[#5004F5] flex-shrink-0">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-14 font-medium text-[#040404]" style={{ lineHeight: '150%' }}>
                開発不要で簡単設定！すぐに使い始められる！
              </span>
            </div>
          </div>
          
          {/* 24pxのスペース */}
          <div style={{ height: '24px' }} />
          
          {/* 実績画像 */}
          <ThreeBadges mobileImage="/images/mobile/3_badges_hero.png" />
          
          {/* 18pxのスペース */}
          <div style={{ height: '18px' }} />
          
          {/* メイン画像 */}
          <div className="w-full flex justify-center" style={{ boxSizing: 'border-box'}}>
            <div style={{ 
              width: '100%', 
              maxWidth: '382px', 
              height: 'auto', 
              aspectRatio: '382/319', 
              boxSizing: 'border-box'
            }}>
              <Image 
                src="/images/common/fv_main.png" 
                alt="メイン画像" 
                width={382} 
                height={319}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* CTAセクション */}
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '375px',
            paddingTop: '8px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto'
          }}>
            <Link 
              href="https://www.omakase.ai/jp/register" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                padding: '16px 32px',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderRadius: '300px',
                border: '1px solid #EF96FF',
                background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                boxShadow: '0 6px 14px 0 rgba(96, 23, 255, 0.20)',
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              7日間無料トライアルはこちら
            </Link>
          </div>
        </div>
      </div>
      
      {/* モバイル版注釈（背景外） */}
      <div className="flex md:hidden" style={{
        width: '100%',
        paddingTop: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '352px',
          color: '#949494',
          fontFamily: '"Noto Sans JP"',
          fontSize: '10px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '150%',
          maxWidth: '100%',
          margin: '0 auto'
        }}>
          ※1 一部ページにおける検証結果。導入効果はサイト構成や運用状況により異なります。<br />
          ※2 Product Hunt Daily Ranking 1位（2025.4.18）<br />
          ※3 2025/08月末時点でのリリース数。<br />
          ※4 一部ページにおける検証結果。導入効果はサイト構成や運用状況により異なります。
        </div>
      </div>
      
      {/* PC版 */}
      <div className="hidden md:flex relative z-10" style={{ 
        width: '100%',
        maxWidth: '1440px',
        height: '600px',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: '19px',
        paddingLeft: '120px',
        paddingRight: '120px',
        margin: '0 auto',
        marginTop: '-80px'
      }}>
        {/* 左側のコンテンツ */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <h1 className="text-28 font-bold text-[#0F0F0F]" style={{ lineHeight: 'normal' }}>
            音声AI&チャット接客で
          </h1>
          <div className="relative inline-flex items-baseline gap-1">
            <span className="text-70 font-bold text-[#5004F5]" style={{ fontFamily: 'var(--font-inter)', lineHeight: 'normal' }}>
              CVR
            </span>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <span className="font-bold text-[#5004F5]" style={{ fontFamily: 'var(--font-inter)', fontSize: '80px', lineHeight: 'normal' }}>
                400%
              </span>
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '0px',
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '8px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '100%'
              }}>
                *1
              </span>
            </div>
            <span className="font-bold text-[#5004F5]" style={{ fontFamily: 'var(--font-inter)', fontSize: '74px', lineHeight: 'normal' }}>
              改善!
            </span>
            {/* CVR400%改善のハイライト */}
            <div className="absolute w-[566px] h-[15px] bg-[#F6FF51]" style={{ bottom: '15px', left: '0', zIndex: -1 }} />
          </div>

          {/* 特徴リスト */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px'
          }}>
            {/* 特徴1 */}
            <div className="flex items-center gap-2">
              <div style={{
                width: '14px',
                height: '14px',
                flexShrink: 0
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="7" fill="#5004F5"/>
                  <path d="M3.5 7L6 9.5L10.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{
                color: '#040404',
                fontFamily: '"Noto Sans JP"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '150%'
              }}>
                AIエージェントが24時間365日接客！
              </span>
            </div>

            {/* 特徴2 */}
            <div className="flex items-center gap-2">
              <div style={{
                width: '14px',
                height: '14px',
                flexShrink: 0
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="7" fill="#5004F5"/>
                  <path d="M3.5 7L6 9.5L10.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{
                color: '#040404',
                fontFamily: '"Noto Sans JP"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '150%'
              }}>
                開発不要で簡単設定！すぐに使い始められる！
              </span>
            </div>
          </div>

          {/* 3つのバッジ */}
          <ThreeBadges>
            {/* バッジ1: Product Hunt */}
            <Badge>
              <div style={{ transform: 'translateY(-4px)' }}>
                <div style={{
                  color: '#1E1E1E',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Product Hunt
                </div>
                
                <div style={{
                  marginTop: '-4px',
                  color: '#1E1E1E',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}>
                  Launch of the Day
                </div>
                
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <span style={{
                    color: '#5004F5',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '40px',
                    fontWeight: 700,
                    lineHeight: '100%'
                  }}>
                    No.1
                  </span>
                  <span style={{
                    position: 'absolute',
                    top: '4px',
                    right: '-10px',
                    color: '#5004F5',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '8px',
                    fontWeight: 400,
                    lineHeight: '100%'
                  }}>
                    *2
                  </span>
                </div>
              </div>
            </Badge>

            {/* バッジ2: 導入社数 */}
            <Badge>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '0px'
              }}>
                <div style={{
                  color: '#1E1E1E',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}>
                  導入社数
                </div>
                
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <span style={{
                    color: '#5004F5',
                    textAlign: 'center',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '32px',
                    fontWeight: 700,
                    lineHeight: '100%'
                  }}>
                    15,000
                  </span>
                  <span style={{
                    position: 'absolute',
                    top: '4px',
                    right: '-8px',
                    color: '#5004F5',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '8px',
                    fontWeight: 400,
                    lineHeight: '100%'
                  }}>
                    *3
                  </span>
                </div>
                
                <div style={{
                  color: '#5004F5',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}>
                  社以上
                </div>
              </div>
            </Badge>

            {/* バッジ3: 顧客エンゲージメント */}
            <Badge>
              <div style={{ transform: 'translateY(-4px)' }}>
                <div style={{
                  color: '#1E1E1E',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '10px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  導入企業
                </div>
                
                <div style={{
                  marginTop: '-4px',
                  color: '#1E1E1E',
                  textAlign: 'center',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '10px',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}>
                  顧客エンゲージメント
                </div>
                
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <span style={{
                    color: '#5004F5',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '40px',
                    fontWeight: 700,
                    lineHeight: '100%'
                  }}>
                    25
                  </span>
                  <span style={{
                    color: '#5004F5',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: '100%'
                  }}>
                    %UP
                  </span>
                  <span style={{
                    position: 'absolute',
                    top: '0',
                    right: '-8px',
                    color: '#5004F5',
                    textShadow: '0 0 4px #FFF',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '8px',
                    fontWeight: 400,
                    lineHeight: '100%'
                  }}>
                    *4
                  </span>
                </div>
              </div>
            </Badge>
          </ThreeBadges>

          {/* CTAボタン */}
          <Link 
            href="https://www.omakase.ai/jp/register" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              padding: '20px 36px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '300px',
              border: '1px solid #EF96FF',
              background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
              boxShadow: '0 6px 14px 0 rgba(96, 23, 255, 0.20)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <span style={{
              color: '#F6FF51',
              fontFamily: '"Noto Sans JP"',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal'
            }}>
              7日間無料トライアルはこちら
            </span>
            <div style={{
              width: '28px',
              height: '28px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'white',
              color: '#5004F5',
              fontSize: '14px'
            }}>
              ▶︎
            </div>
          </Link>

          {/* 注釈テキスト */}
          <div style={{
            color: '#949494',
            fontFamily: '"Noto Sans JP"',
            fontSize: '10px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '150%'
          }}>
            ※1 一部ページにおける検証結果。導入効果はサイト構成や運用状況により異なります。<br />
            ※2 Product Hunt Daily Ranking 1位（2025.4.18）<br />
            ※3 2025/08月末時点でのリリース数。<br />
            ※4 一部ページにおける検証結果。導入効果はサイト構成や運用状況により異なります。
          </div>
        </div>

        {/* 右側の画像 */}
        <div style={{
          display: 'flex',
          height: '500px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '10px',
          flex: '1 0 0'
        }}>
          <Image 
            src="/images/common/fv_main.png" 
            alt="メイン画像" 
            width={600} 
            height={500}
            style={{
              width: 'auto',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* ロゴスライダー（PC・モバイル共通） */}
      <div style={{ width: '100%' }}>
        <LogoSlider />
      </div>
    </section>
  );
}