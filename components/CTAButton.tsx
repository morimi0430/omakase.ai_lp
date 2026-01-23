interface CTAButtonProps {
    text: string;
    highlightText?: string;
    highlightColor?: string;
    backgroundColor: string;
    iconSrc?: string;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    textGradient?: boolean;
    textColor?: string;
    iconFixed?: boolean; // 矢印を右端から22pxに固定するかどうか
  }
  
  export default function CTAButton({
    text,
    highlightText,
    highlightColor,
    backgroundColor,
    iconSrc,
    onClick,
    className = '',
    style = {},
    textGradient = true,
    textColor,
    iconFixed = false
  }: CTAButtonProps) {
    return (
      <button 
        onClick={onClick}
        className={className}
        style={{
          position: 'relative',
          display: 'flex',
          padding: '16px 22px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '300px',
          border: '1px solid #EF96FF',
          background: backgroundColor,
          boxShadow: '0 6px 14px 0 rgba(96, 23, 255, 0.20)',
          cursor: 'pointer',
          boxSizing: 'border-box',
          whiteSpace: 'nowrap',
          ...style
        }}
      >
        <span style={{ textAlign: 'center' }}>
          {highlightText && highlightColor && (
            <span style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              color: highlightColor
            }}>
              {highlightText}
            </span>
          )}
          <span style={{
            fontFamily: '"Noto Sans JP"',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            ...(textGradient ? {
              background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            } : textColor ? {
              color: textColor
            } : {})
          }}>
            {text}
          </span>
        </span>
        {iconSrc && (
          <img 
            src={iconSrc}
            alt=""
            style={{
              width: '28px',
              height: '28px',
              flexShrink: 0,
              ...(iconFixed ? {
                position: 'absolute',
                right: '22px'
              } : {})
            }}
          />
        )}
      </button>
    );
  }
