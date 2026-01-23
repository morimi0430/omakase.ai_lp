interface SectionTitleProps {
  title: string;
  isMobile?: boolean;
}

export default function SectionTitle({ title, isMobile = true }: SectionTitleProps) {
  return (
    <>
      {/* タイトル */}
      <h2 style={{
        color: '#000',
        fontFamily: '"Noto Sans JP"',
        fontSize: isMobile ? '36px' : '36px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        textAlign: 'center'
      }}>
        {title}
      </h2>

      {/* 24pxのスペース */}
      <div style={{ height: '24px' }} />

      {/* タイトル下の線 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          width: '44px',
          height: '4px',
          background: 'linear-gradient(103deg, #735AFF 8.54%, #BA78FB 90.69%)'
        }} />
      </div>
    </>
  );
}