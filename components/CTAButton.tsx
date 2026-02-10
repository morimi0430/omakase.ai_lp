/** 右向き三角（▶）のSVG。circleColor 指定時は丸をボタン色の逆で描き、その中に三角 */
function TriangleIcon({
  style,
  iconFixed,
  circleColor,
  triangleColor,
}: {
  style?: React.CSSProperties;
  iconFixed?: boolean;
  /** 丸の色（ボタン色の逆）。指定時は丸＋三角を表示 */
  circleColor?: string;
  /** 三角の色（丸の上に表示）。circleColor 指定時は必須 */
  triangleColor?: string;
}) {
  const size = 20;
  const cx = size / 2;
  const cy = size / 2;
  const r = 9;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        flexShrink: 0,
        ...(iconFixed ? { position: "absolute" as const, right: "22px" } : {}),
        ...style,
      }}
      aria-hidden
    >
      {circleColor != null && (
        <circle cx={cx} cy={cy} r={r} fill={circleColor} />
      )}
      <path
        d="M8 5v10l6-5-6-5z"
        fill={
          circleColor != null
            ? (triangleColor ?? "#FFF")
            : "currentColor"
        }
        style={circleColor == null ? { color: style?.color } : undefined}
      />
    </svg>
  );
}

interface CTAButtonProps {
    text: string;
    highlightText?: string;
    highlightColor?: string;
    backgroundColor: string;
    iconSrc?: string;
    /** true のとき画像の代わりに右向き三角を表示 */
    iconTriangle?: boolean;
    /** 三角アイコンで丸を使う場合の丸の色（ボタン色の逆）。指定時は丸＋三角 */
    iconCircleColor?: string;
    /** アイコン（画像 or 三角）に適用するスタイル。三角の色は iconStyle.color で指定 */
    iconStyle?: React.CSSProperties;
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
    iconTriangle = false,
    iconCircleColor,
    iconStyle,
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
        {iconTriangle && (
          <TriangleIcon
            style={iconStyle}
            iconFixed={iconFixed}
            circleColor={iconCircleColor}
            triangleColor={iconCircleColor != null ? iconStyle?.color as string | undefined : undefined}
          />
        )}
        {!iconTriangle && iconSrc && (
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
              } : {}),
              ...iconStyle
            }}
          />
        )}
      </button>
    );
  }
