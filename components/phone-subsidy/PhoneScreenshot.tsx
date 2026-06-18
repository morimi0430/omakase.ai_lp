import { phoneScreenFrame } from './images';

const FRAME_BORDER = '1px solid #FAFBFD';
const FRAME_SHADOW_STANDARD =
  '0 20px 25px -5px rgba(17, 24, 39, 0.06), 0 8px 10px -6px rgba(17, 24, 39, 0.06)';

const labelStyle = {
  margin: '0 0 8px',
  color: '#9ca3af',
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
  fontWeight: 600,
  lineHeight: '16px',
  flexShrink: 0,
} as const;

const standardFrameStyle = {
  boxSizing: 'border-box' as const,
  width: '100%',
  maxWidth: phoneScreenFrame.standard.width,
  padding: '13px 13px 30px',
  borderRadius: 16,
  border: FRAME_BORDER,
  background: '#ffffff',
  boxShadow: FRAME_SHADOW_STANDARD,
};

/** スクリーンショット — paired 時は右（高い方）の枠高さに左も揃え、下の余白は白でOK */
export function PhoneScreenshot({
  src,
  alt,
  width,
  height,
  label,
  priority = false,
  variant = 'screen',
  paired = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
  priority?: boolean;
  variant?: 'hero' | 'screen';
  /** 2列並び — グリッドで高い方に揃え、短い画像の下は白余白 */
  paired?: boolean;
}) {
  if (variant === 'hero') {
    return (
      <figure className="phone-hero-screenshot">
        <div className="phone-hero-screenshot-outer">
          <div className="phone-hero-screenshot-inner">
            <div className="phone-hero-screenshot-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'auto'}
                className="phone-hero-screenshot-img"
              />
            </div>
          </div>
        </div>
      </figure>
    );
  }

  const figureStyle = paired
    ? ({ margin: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' } as const)
    : ({ margin: 0, width: '100%' } as const);

  const cardStyle = paired
    ? ({
        boxSizing: 'border-box' as const,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        minHeight: '100%',
        padding: '13px 13px 30px',
        borderRadius: 16,
        border: FRAME_BORDER,
        background: '#ffffff',
        boxShadow: FRAME_SHADOW_STANDARD,
      } as const)
    : standardFrameStyle;

  const img = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ display: 'block', width: '100%', height: 'auto', flexShrink: 0 }}
    />
  );

  return (
    <figure style={figureStyle}>
      <div style={cardStyle}>
        {label ? <p style={labelStyle}>{label}</p> : null}
        {paired ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            {img}
            <div aria-hidden style={{ flex: 1, minHeight: 0, background: '#ffffff' }} />
          </div>
        ) : (
          img
        )}
      </div>
    </figure>
  );
}
