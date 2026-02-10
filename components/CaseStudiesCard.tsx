interface CaseCardProps {
    company: string;
    title: string;
    image: string;
    reasons: string[];
    effects: string[];
    /** 理由ブロックの見出し。未指定時は「導入の決め手」 */
    reasonsLabel?: string;
    /** 効果ブロックの見出し。未指定時は「導入効果」 */
    effectsLabel?: string;
    color?: string;
    isInitialTarget?: boolean;
    targetRef?: React.RefObject<HTMLDivElement | null>;
  }
  
  const ACCENT_DEFAULT = '#6017FF';

  export default function CaseCard({
    company,
    title,
    image,
    reasons,
    effects,
    reasonsLabel = '導入の決め手',
    effectsLabel = '導入効果',
    color = ACCENT_DEFAULT,
    isInitialTarget,
    targetRef
  }: CaseCardProps) {
    const accent = color ?? ACCENT_DEFAULT;

    const renderTitle = () => {
      const regex = /"([^"]+)"/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(title)) !== null) {
        if (match.index > lastIndex) {
          parts.push(
            <span key={`text-${lastIndex}`}>
              {title.substring(lastIndex, match.index)}
            </span>
          );
        }
        parts.push(
          <span key={`quote-${match.index}`} style={{ color: accent }}>
            &quot;{match[1]}&quot;
          </span>
        );
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < title.length) {
        parts.push(
          <span key={`text-${lastIndex}`}>
            {title.substring(lastIndex)}
          </span>
        );
      }

      return parts;
    };

    return (
      <div
        ref={isInitialTarget ? targetRef : null}
        className="case-item snap-center w-full md:min-w-[363.67px] md:w-[363.67px]"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        {/* 上部タイトルエリア */}
        <div className="w-full" style={{
          minHeight: '98px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <span style={{
            height: '22px',
            paddingTop: '4px',
            paddingRight: '12px',
            paddingBottom: '4px',
            paddingLeft: '12px',
            borderRadius: '300px',
            background: accent,
            color: '#FFF',
            fontFamily: '"Noto Sans JP"',
            fontSize: '12px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {company}
          </span>

          <h3
            className="w-full px-2"
            style={{
              fontFamily: '"Noto Sans JP"',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '150%',
              textAlign: 'center',
              color: '#000'
            }}
          >
            {renderTitle()}
          </h3>
        </div>

        {/* 写真 */}
        <img
          src={image}
          className="w-full"
          style={{
            height: '199px',
            objectFit: 'cover',
            borderRadius: '20px'
          }}
          alt={company}
        />

        {/* 下部（理由・効果ブロック） */}
        <div className="w-full" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* 理由ブロック */}
          <div className="w-full px-3" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <p style={{
              color: accent,
              fontFamily: '"Noto Sans JP"',
              fontSize: '12px',
              fontWeight: 700
            }}>
              {reasonsLabel}
            </p>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {(reasons || []).map((reason, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '14px',
                  fontFamily: '"Noto Sans JP"',
                  color: '#4B5563'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: accent,
                    marginTop: '6px',
                    flexShrink: 0
                  }} />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* 効果ブロック */}
          <div className="w-full px-3" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <p style={{
              color: accent,
              fontFamily: '"Noto Sans JP"',
              fontSize: '12px',
              fontWeight: 700
            }}>
              {effectsLabel}
            </p>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {(effects || []).map((effect, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '14px',
                  fontFamily: '"Noto Sans JP"',
                  color: '#4B5563'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: accent,
                    marginTop: '6px',
                    flexShrink: 0
                  }} />
                  {effect}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }