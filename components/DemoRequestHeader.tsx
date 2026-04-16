import Image from "next/image";

interface DemoRequestHeaderProps {
  isMobile?: boolean;
}

export default function DemoRequestHeader({ isMobile = false }: DemoRequestHeaderProps) {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px'
    }}>
      {isMobile ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}>
          <span style={{
            fontFamily: '"Noto Sans JP"',
            fontSize: '24px',
            fontWeight: 700,
            color: '#000',
            textAlign: 'center'
          }}>
            Omakase AI
          </span>
        </div>
      ) : (
        <Image
          src="/images/pc/header_logo.png"
          alt="Omakase Logo"
          width={160}
          height={22}
          style={{
            width: '160px',
            height: '22px',
            aspectRatio: '80/11'
          }}
        />
      )}
      
      <h1 style={{
        width: isMobile ? '100%' : 'auto',
        alignSelf: isMobile ? 'auto' : 'stretch',
        color: '#000',
        textAlign: 'center',
        fontFamily: '"Noto Sans JP"',
        fontSize: isMobile ? '24px' : '32px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        margin: 0
      }}>
        無料体験はこちら
      </h1>
      
      <p style={{
        color: '#000',
        textAlign: 'center',
        fontFamily: '"Noto Sans JP"',
        fontSize: isMobile ? '12px' : '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        margin: 0
      }}>
        フォームをご送信いただくと、貴社サイトを使った実際のデモをミーティングでご覧いただけます。
      </p>
    </div>
  );
}
