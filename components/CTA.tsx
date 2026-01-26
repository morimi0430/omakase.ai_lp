import Link from 'next/link';
import CTAButton from './CTAButton';

export default function CTA() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden" style={{
        backgroundColor: '#4900EE',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box'
      }}>
        {/* コンテンツコンテナ */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '343px',
          margin: '0 auto'
        }}>
          {/* ヘッドライン */}
          <div style={{
            flex: '1 0 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}>
            <h2 style={{
              color: '#FFF',
              textAlign: 'center',
              textShadow: '0 2px 10px #6836D5',
              fontFamily: '"Noto Sans JP"',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
              margin: 0
            }}>
              圧倒的AI接客体験を<br />
              今すぐ！
            </h2>
          </div>

          {/* ボタンコンテナ */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%'
          }}>
            <Link href="/document-request">
              <CTAButton
                text="資料請求はこちら"
                backgroundColor="#FFF"
                iconSrc="/images/pc/arrow_white.png"
                iconFixed={true}
                style={{ width: '100%' }}
              />
            </Link>
            <Link href="https://www.omakase.ai/jp">
              <CTAButton
                text="トライアルはこちら"
                highlightText="7日間無料"
                highlightColor="#FD3EA1"
                backgroundColor="#F8FF6C"
                iconSrc="/images/pc/arrow_white.png"
                iconFixed={true}
                style={{ width: '100%' }}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* PC版 */}
      <section className="hidden md:flex" style={{
        position: 'relative',
        width: '100%',
        padding: '44px 0',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        overflow: 'hidden'
      }}>
        {/* 背景画像 */}
        <img 
          src="/images/pc/sec_CTA_BG.png"
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* コンテンツ（背景画像の上に表示） */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}>
          {/* ヘッドライン */}
          <h2 style={{
            color: '#FFF',
            textAlign: 'center',
            textShadow: '0 2px 10px #6836D5',
            fontFamily: '"Noto Sans JP"',
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '150%',
            margin: 0
          }}>
            圧倒的AI接客体験を今すぐ！
          </h2>

          {/* ボタンコンテナ（横並び） */}
          <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center'
          }}>
            <Link href="/document-request">
              <CTAButton
                text="資料請求はこちら"
                backgroundColor="#FFF"
                iconSrc="/images/pc/arrow_white.png"
              />
            </Link>
            
            <Link href="https://www.omakase.ai/jp">
              <CTAButton
                text="トライアルはこちら"
                highlightText="7日間無料"
                highlightColor="#FD3EA1"
                backgroundColor="#F8FF6C"
                iconSrc="/images/pc/arrow_white.png"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}