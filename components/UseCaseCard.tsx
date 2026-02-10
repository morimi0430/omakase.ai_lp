interface UseCaseCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  profileImage?: {
    src: string;
    alt: string;
  };
  profileTitle?: string;
  profileDescription?: string;
  isPC?: boolean;
  /** カードの枠・背景のアクセント色。未指定時は紫系 */
  accentColor?: string;
}

const DEFAULT_BORDER = '#C9B1FF';
const DEFAULT_BG = '#FAF8FF';

export default function UseCaseCard({
  icon,
  title,
  description,
  profileImage,
  profileTitle,
  profileDescription,
  isPC = false,
  accentColor
}: UseCaseCardProps) {
  const borderColor = accentColor ?? DEFAULT_BORDER;
  const backgroundColor = accentColor ? '#ecfdf5' : DEFAULT_BG; // 緑時は薄い緑、未指定時は紫系

  if (isPC) {
    return (
      <div style={{
        display: 'flex',
        padding: '24px 20px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        flex: '1 0 0',
        alignSelf: 'stretch',
        borderRadius: '16px',
        border: `1px solid ${borderColor}`,
        background: backgroundColor,
        boxSizing: 'border-box'
      }}>
        {/* アイコン */}
        {icon && (
          <div>
            {icon}
          </div>
        )}

        {/* メインタイトル */}
        <h3 style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: '"Noto Sans JP"',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '150%',
          margin: 0,
          padding: 0
        }}>
          {title}
        </h3>

        {/* 説明文 */}
        <p style={{
          alignSelf: 'stretch',
          color: '#000',
          textAlign: 'center',
          fontFamily: '"Noto Sans JP"',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '150%',
          margin: 0,
          padding: 0,
          minHeight: 'calc(14px * 1.5 * 3)'
        }}>
          {description.split('。').map((text, index, array) => (
            index < array.length - 1 ? (
              <span key={index}>{text}。<br /></span>
            ) : text
          ))}
        </p>

        {/* プロフィールセクション */}
        {profileImage && profileTitle && profileDescription && (
          <div style={{
            display: 'flex',
            padding: '20px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch',
            borderRadius: '12px',
            border: '1px solid #F4F3F3',
            background: '#FFF',
            boxShadow: '0 4px 10px 0 #F4EEFF'
          }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              alignSelf: 'stretch',
              alignItems: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                <img 
                  src={profileImage.src} 
                  alt={profileImage.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                minWidth: 0
              }}>
                <h4 style={{
                  color: '#000',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '150%',
                  margin: 0,
                  padding: 0,
                  textAlign: 'left'
                }}>
                  {profileTitle}
                </h4>
                <p style={{
                  color: '#000',
                  fontFamily: '"Noto Sans JP"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '150%',
                  margin: 0,
                  padding: 0,
                  textAlign: 'left'
                }}>
                  {profileDescription}
                </p>
                
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
                  ※画像はイメージです。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      padding: '24px 20px',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch',
      borderRadius: '16px',
      border: `1px solid ${borderColor}`,
      background: backgroundColor,
      boxSizing: 'border-box',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%'
    }}>
      {/* 時計アイコン */}
      {icon && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {icon}
        </div>
      )}

      {/* 時計アイコンの下20px */}
      {icon && <div style={{ height: '20px' }} />}

      {/* メインタイトル */}
      <h3 style={{
        color: '#000',
        textAlign: 'center',
        fontFamily: '"Noto Sans JP"',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '150%',
        margin: 0,
        width: '100%'
      }}>
        {title}
      </h3>

      {/* タイトルの下12px */}
      <div style={{ height: '12px' }} />

      {/* 説明文 */}
      <p style={{
        color: '#000',
        textAlign: 'center',
        fontFamily: '"Noto Sans JP"',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '150%',
        margin: 0,
        width: '100%'
      }}>
        {description}
      </p>

      {/* 説明文の下20px */}
      <div style={{ height: '20px' }} />

      {/* プロフィールセクション（ネストされたカード）- 高さ自動調整 */}
      {profileImage && profileTitle && profileDescription && (
        <div style={{
          width: '100%',
          maxWidth: '303px',
          padding: '20px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          boxSizing: 'border-box',
          backgroundColor: '#FFF',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '0px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              <img 
                src={profileImage.src} 
                alt={profileImage.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            minWidth: 0
          }}>
            <h4 style={{
              color: '#000',
              textAlign: 'start',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
              margin: 0
            }}>
              {profileTitle}
            </h4>
            <p style={{
              color: '#000',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%',
              margin: 0,
              textAlign: 'left'
            }}>
              {profileDescription}
            </p>
            
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
              ※画像はイメージです。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}