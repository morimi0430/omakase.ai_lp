'use client';

import Image from "next/image";
import { Container } from "./Container";
import ThreeBadges, { Badge } from "./ThreeBadges";

export default function Message() {
  return (
    <section className="w-full bg-[linear-gradient(82deg,#f5f3ff_0%,#ddd6fe_100%)]">

      {/* モバイル版 */}
      <Container className="block md:hidden pb-0">
        {/* 60pxのスペース */}
        <div style={{ height: '60px' }} />
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col gap-8">
            <div className="w-full text-left">
              <h2 className="text-black text-[28px] font-bold leading-[1.5]">
                ZEALSは<span className="text-violet-700">オンライン接客のパイオニア</span>。<br/>
                10年のノウハウを活かし、<br/>最高の成果創出まで<br/>
                <span className="text-violet-700">徹底サポート</span>します。
              </h2>
            </div>

            <p className="text-black text-sm font-normal leading-relaxed opacity-90 text-justify">
              AIに任せるのは不安、そんな常識をOmakase.aiが変えます。単なる自動応答ではなく、顧客の心をつかみ、エンゲージメントを向上させてきたZEALS独自の接客ロジックをAIに実装。最先端のAI技術と、現場で積み上げてきたプロの知見を掛け合わせることで、どこよりも「売れる」AI接客体験を実現します。
            </p>

            <div className="flex flex-col items-start">
                <ThreeBadges mobileImage="/images/mobile/3_badges_message.png" />
              
              {/* 注釈 */}
              <p style={{
                color: '#949494',
                fontFamily: '"Noto Sans JP"',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '0%',
                margin: 0,
                padding: 0,
                textAlign: 'left',
                marginBottom: '40px'
              }}>
                ※チャットコマース事業での数字です。
              </p>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <Image 
              src="/images/common/message_main.png" 
              alt="サポート担当者"
              width={280}
              height={373}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </Container>

      {/* PC版 */}
      <div className="hidden md:block">
        <div style={{ paddingTop: '60px' }}>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1440px] px-8">
              <div className="flex items-start gap-[41px] justify-center">
                <div className="w-[619px] flex flex-col gap-10">
                  <div className="w-full">
                    <h2 className="text-black text-[28px] font-bold leading-[1.4]">
                      ZEALSは<span className="text-violet-700">オンライン接客のパイオニア</span>。<br/>
                      10年のノウハウを活かし、最高の成果創出まで<br/>
                      <span className="text-violet-700">徹底サポート</span>します。
                    </h2>
                  </div>

                  <p className="text-black text-sm font-normal leading-relaxed opacity-90">
                    AIに任せるのは不安、そんな常識をOmakase.aiが変えます。単なる自動応答ではなく、顧客の心をつかみ、エンゲージメントを向上させてきたZEALS独自の接客ロジックをAIに実装。最先端のAI技術と、現場で積み上げてきたプロの知見を掛け合わせることで、どこよりも「売れる」AI接客体験を実現します。
                  </p>

                  <div className="flex flex-col items-start gap-2">
                    <ThreeBadges>
                      {/* バッジ1: 導入社数 */}
                      <Badge>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%'
                        }}>
                          <div style={{
                            color: '#1E1E1E',
                            textAlign: 'center',
                            fontFamily: '"Noto Sans JP"',
                            fontSize: '10px',
                            fontWeight: 700,
                            lineHeight: 'normal'
                          }}>
                            エンタープライズ
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
                            導入社数
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
                              400
                            </span>
                            <span style={{
                              color: '#5004F5',
                              textShadow: '0 0 4px #FFF',
                              fontFamily: 'var(--font-inter)',
                              fontSize: '28px',
                              fontWeight: 700,
                              lineHeight: '100%'
                            }}>
                              社超
                            </span>
                          </div>
                        </div>
                      </Badge>


                      {/* バッジ2: チャットコマース会話データ */}
                      <Badge>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%'
                        }}>
                          <div style={{
                            color: '#1E1E1E',
                            textAlign: 'center',
                            fontFamily: '"Noto Sans JP"',
                            fontSize: '10px',
                            fontWeight: 700,
                            lineHeight: 'normal'
                          }}>
                            チャットコマース
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
                            会話データ
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
                              12
                            </span>
                            <span style={{
                              color: '#5004F5',
                              textShadow: '0 0 4px #FFF',
                              fontFamily: 'var(--font-inter)',
                              fontSize: '28px',
                              fontWeight: 700,
                              lineHeight: '100%'
                            }}>
                              億
                            </span>
                          </div>
                        </div>
                      </Badge>

                      {/* バッジ3: サービス利用継続率 */}
                      <Badge>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%'
                        }}>
                          <div style={{
                            color: '#1E1E1E',
                            textAlign: 'center',
                            fontFamily: '"Noto Sans JP"',
                            fontSize: '10px',
                            fontWeight: 700,
                            lineHeight: '150%',
                            whiteSpace: 'pre-line'
                          }}>
                            {'ZEALS\nサービス利用継続率'}
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
                              98.9
                            </span>
                            <span style={{
                              color: '#5004F5',
                              textShadow: '0 0 4px #FFF',
                              fontFamily: 'var(--font-inter)',
                              fontSize: '28px',
                              fontWeight: 700,
                              lineHeight: '100%'
                            }}>
                              %
                            </span>
                          </div>
                        </div>
                      </Badge>
                    </ThreeBadges>

                    {/* 注釈 */}
                    <p style={{
                      color: '#949494',
                      fontFamily: '"Noto Sans JP"',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '150%',
                      margin: 0,
                      padding: 0,
                      textAlign: 'left'
                    }}>
                      ※チャットコマース事業での数字です。
                    </p>
                  </div>
                </div>

                <div className="w-[340px] flex-shrink-0">
                  <Image 
                    src="/images/common/message_main.png" 
                    alt="サポート担当者"
                    width={340}
                    height={453}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}