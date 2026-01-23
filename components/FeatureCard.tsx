import Image from "next/image";

interface FeatureCardProps {
  imagePath: string;
  tagText: string;
  titleText: string;
  description1: string;
  description2: string;
  detailText: string;
  footerLabel: string;
  footerText: string;
  avatarImage: string;
  imagePaddingX?: number; // 横方向のpadding
}

// モバイル版FeatureCard
export default function FeatureCard({ imagePath, tagText, titleText, description1, description2, detailText, footerLabel, footerText, avatarImage, imagePaddingX = 32 }: FeatureCardProps) {
  return (
    <div style={{
      display: 'flex',
      padding: '12px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '40px',
      alignSelf: 'stretch',
      borderRadius: '16px',
      border: '1px solid #FFF',
      background: 'rgba(255, 255, 255, 0.42)',
      boxShadow: '0 4px 10px 14px rgba(58, 16, 151, 0.02)'
    }}>
      {/* 画像エリア */}
      <div style={{
        display: 'flex',
        height: '230.966px',
        alignSelf: 'stretch',
        aspectRatio: '319.00/230.97',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        border: '1px solid #F4EFFF',
        background: 'linear-gradient(128deg, rgba(243, 238, 255, 0.20) -3.14%, rgba(132, 92, 228, 0.20) 103.78%)',
        padding: `16px ${imagePaddingX}px`
      }}>
        <img 
          src={imagePath}
          alt={titleText}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* テキストエリア */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
        alignSelf: 'stretch'
      }}>
        {/* タグテキストエリア */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{
              color: '#000',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '150%',
              textTransform: 'uppercase',
              padding: 0,
              margin: 0
            }}>
              FEATURES
            </span>
            <span style={{
              color: '#6017FF',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '150%',
              textTransform: 'uppercase',
              padding: 0,
              margin: 0
            }}>
              {tagText}
            </span>
          </div>
          <div style={{
            alignSelf: 'stretch',
            height: '1px',
            background: 'linear-gradient(103deg, #735AFF 8.54%, #BA78FB 90.69%)'
          }}></div>
        </div>

        {/* タイトルテキスト */}
        <div style={{
          alignSelf: 'stretch',
          color: '#5004F5',
          fontFamily: '"Noto Sans JP"',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '150%',
          padding: 0,
          margin: 0
        }}>
          {titleText}
        </div>

        {/* 説明エリア */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          alignSelf: 'stretch'
        }}>
          {/* 説明文1 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch'
          }}>
            <div style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              background: '#6017FF',
              flexShrink: 0,
              marginTop: '5px'
            }}></div>
            <div style={{
              flex: 1,
              color: '#000',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              padding: 0,
              margin: 0
            }}>
              {description1}
            </div>
          </div>

          {/* 説明文2 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch'
          }}>
            <div style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              background: '#6017FF',
              flexShrink: 0,
              marginTop: '5px'
            }}></div>
            <div style={{
              flex: 1,
              color: '#000',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              padding: 0,
              margin: 0
            }}>
              {description2}
            </div>
          </div>

          {/* 詳細テキスト */}
          <div style={{
            alignSelf: 'stretch',
            color: '#000',
            fontFamily: '"Noto Sans JP"',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '150%',
            padding: 0,
            margin: 0
          }}>
            {detailText}
          </div>
        </div>

        {/* フッターボックス */}
        <div style={{
          display: 'flex',
          padding: '20px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          alignSelf: 'stretch',
          borderRadius: '12px',
          border: '1px solid #C9B1FF',
          background: '#F8F7FF'
        }}>
          <div style={{
            alignSelf: 'stretch',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: 0,
            margin: 0
          }}>
            <div style={{
              width: '55px',
              height: '55px',
              borderRadius: '50%',
              background: `url(${avatarImage}) lightgray 50% 50% / cover no-repeat`,
              flexShrink: 0
            }}></div>
            
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{
                color: '#6017FF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '150%',
                padding: 0,
                margin: 0
              }}>
                {footerLabel}
              </div>
              
              <div style={{
                color: '#000',
                fontFamily: '"Noto Sans JP"',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '150%',
                padding: 0,
                margin: 0
              }}>
                {footerText}
              </div>
              
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
      </div>
    </div>
  );
}

// PC版FeatureCard
export function FeatureCardPC({ imagePath, tagText, titleText, description1, description2, detailText, footerLabel, footerText, avatarImage, imagePaddingX = 70 }: FeatureCardProps) {
  return (
    <div style={{
      display: 'flex',
      minHeight: '467px',
      padding: '40px',
      alignItems: 'flex-start',
      gap: '40px',
      alignSelf: 'stretch',
      borderRadius: '16px',
      border: '1px solid #FFF',
      background: 'rgba(255, 255, 255, 0.42)',
      boxShadow: '0 4px 10px 14px rgba(58, 16, 151, 0.02)'
    }}>
      {/* 画像左 */}
      <div style={{
        display: 'flex',
        flex: '0 1 645px',
        minWidth: '300px',
        maxWidth: '645px',
        aspectRatio: '645/467',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '16px',
        border: '1px solid #F4EFFF',
        background: 'linear-gradient(128deg, rgba(243, 238, 255, 0.20) -3.14%, rgba(132, 92, 228, 0.20) 103.78%)',
        padding: `32px ${imagePaddingX}px`,
        boxSizing: 'border-box'
      }}>
        <img 
          src={imagePath}
          alt={titleText}
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* テキストセクション右 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        flex: '1 0 0'
      }}>
        {/* タグテキストエリア */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{
              color: '#000',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '150%',
              textTransform: 'uppercase'
            }}>FEATURES</span>
            <span style={{
              color: '#6017FF',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '150%',
              textTransform: 'uppercase'
            }}>{tagText}</span>
          </div>
          <div style={{
            alignSelf: 'stretch',
            height: '1px',
            background: 'linear-gradient(103deg, #735AFF 8.54%, #BA78FB 90.69%)'
          }}></div>
        </div>

        {/* タイトルテキスト */}
        <h3 style={{
          alignSelf: 'stretch',
          color: '#5004F5',
          fontFamily: '"Noto Sans JP"',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '150%',
          margin: 0,
          marginBottom: '24px'
        }}>
          {titleText}
        </h3>

        {/* 説明エリア */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          alignSelf: 'stretch',
          marginBottom: '24px'
        }}>
          {/* 説明文1 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch'
          }}>
            <div style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              background: '#6017FF',
              flexShrink: 0,
              marginTop: '5px'
            }}></div>
            <div style={{
              flex: 1,
              color: '#000',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>
              {description1}
            </div>
          </div>

          {/* 説明文2 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch'
          }}>
            <div style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              background: '#6017FF',
              flexShrink: 0,
              marginTop: '5px'
            }}></div>
            <div style={{
              flex: 1,
              color: '#000',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>
              {description2}
            </div>
          </div>

          {/* 詳細テキスト */}
          <p style={{
            alignSelf: 'stretch',
            color: '#000',
            fontFamily: '"Noto Sans JP"',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '150%',
            margin: 0
          }}>
            {detailText}
          </p>
        </div>

        {/* フッターボックス */}
        <div style={{
          display: 'flex',
          padding: '20px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          alignSelf: 'stretch',
          borderRadius: '12px',
          border: '1px solid #C9B1FF',
          background: '#F8F7FF'
        }}>
          <div style={{
            alignSelf: 'stretch',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '55px',
              height: '55px',
              borderRadius: '50%',
              background: `url(${avatarImage}) lightgray 50% 50% / cover no-repeat`,
              flexShrink: 0
            }}></div>
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{
                color: '#6017FF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '150%'
              }}>
                {footerLabel}
              </div>
              <div style={{
                color: '#000',
                fontFamily: '"Noto Sans JP"',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '150%'
              }}>
                {footerText}
              </div>
              
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
      </div>
    </div>
  );
}