import type { ReactNode } from 'react';

interface SectionTitleProps {
  title: ReactNode;
  isMobile?: boolean;
  /** タイトル下の線の色。未指定時は紫グラデーション */
  accentColor?: string;
  /** h2 に付与。指定時は fontSize / lineHeight はクラス側に任せる */
  titleClassName?: string;
}

export default function SectionTitle({
  title,
  isMobile = true,
  accentColor,
  titleClassName,
}: SectionTitleProps) {
  const lineStyle = accentColor
    ? { width: '44px' as const, height: '4px' as const, background: accentColor }
    : { width: '44px' as const, height: '4px' as const, background: 'linear-gradient(103deg, #735AFF 8.54%, #BA78FB 90.69%)' as const };

  return (
    <>
      {/* タイトル */}
      <h2
        className={titleClassName}
        style={{
          color: '#000',
          fontFamily: '"Noto Sans JP"',
          fontStyle: 'normal',
          fontWeight: 700,
          textAlign: 'center',
          ...(titleClassName
            ? {}
            : { fontSize: isMobile ? '36px' : '36px', lineHeight: 'normal' }),
        }}
      >
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
        <div style={lineStyle} />
      </div>
    </>
  );
}
