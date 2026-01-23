import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden" style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '16px', paddingRight: '16px' }}>
        <SectionTitle title="Omakase.aiとは" isMobile={true} />

        {/* 60pxのスペース */}
        <div style={{ height: '60px' }} />

        {/* 親コンテナ（24pxのgap） */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          alignSelf: 'stretch'
        }}>
          {/* 文章1 */}
          <p style={{
            color: '#5004F5',
            fontFamily: '"Noto Sans JP"',
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '150%',
            margin: 0
          }}>
            驚くほど自然に、柔軟に。<br />
            AIエージェントがあなたの代わりに24時間、顧客にアプローチ。
          </p>

          {/* 文章2 */}
          <p style={{
            color: '#000',
            fontFamily: '"Noto Sans JP"',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '150%',
            margin: 0
          }}>
            まるで実際に人が対応しているかのような、きめ細やかなAI接客。<br />
            Omakase.aiがあなたの代わりに24時間フル稼働して成果につなげます。
          </p>
        </div>

        {/* 画像 */}
        <div style={{
          height: '197px',
          alignSelf: 'stretch',
          aspectRatio: '343/197',
          position: 'relative',
          marginTop: '60px'
        }}>
          <Image 
            src="/images/common/omakase_demo.png" 
            alt="Omakase.ai デモ" 
            width={343} 
            height={197}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full" style={{ paddingTop: '60px', paddingRight: '120px', paddingBottom: '80px', paddingLeft: '120px' }}>
        <SectionTitle title="Omakase.aiとは" isMobile={false} />
        
        {/* 80pxのスペース */}
        <div style={{ height: '80px' }} />
        
        {/* コンテンツエリア */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '60px'
        }}>
          {/* 左側: テキストエリア */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
            flex: '1 0 0'
          }}>
            {/* 文章1 */}
            <h3 style={{
              color: '#5004F5',
              fontFamily: '"Noto Sans JP"',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
              margin: 0,
              padding: 0
            }}>
              驚くほど自然に、柔軟に。<br />
              AIエージェントがあなたの代わりに<br />
              24時間、顧客にアプローチ。
            </h3>
            
            {/* 文章2 */}
            <p style={{
              alignSelf: 'stretch',
              color: '#000',
              fontFamily: '"Noto Sans JP"',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '150%',
              margin: 0,
              padding: 0
            }}>
              まるで実際に人が対応しているかのような、きめ細やかなAI接客。<br />
              Omakase.aiがあなたの代わりに24時間フル稼働して成果につなげます。
            </p>
          </div>
          
          {/* 右側: 画像エリア */}
          <div style={{
            width: '582px',
            height: '337px',
            aspectRatio: '582/337'
          }}>
            <Image 
              src="/images/common/omakase_demo.png" 
              alt="Omakase.ai デモ" 
              width={582} 
              height={337}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}