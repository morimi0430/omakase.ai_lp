import ThreeBadges, { Badge } from './ThreeBadges';

/**
 * メインLPの Hero と同じ実績バッジ行。補助金LPなどで再利用。
 */
export default function TrustBadgesRow() {
  return (
    <ThreeBadges mobileImage="/images/mobile/3_badges_Hero.png">
      <Badge>
        <div style={{ transform: 'translateY(-4px)' }}>
          <div
            style={{
              color: '#1E1E1E',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '12px',
              fontWeight: 700,
              lineHeight: 'normal',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Product Hunt
          </div>

          <div
            style={{
              marginTop: '-4px',
              color: '#1E1E1E',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '12px',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            Launch of the Day
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
              style={{
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '100%',
              }}
            >
              No.1
            </span>
            <span
              style={{
                position: 'absolute',
                top: '4px',
                right: '-10px',
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '8px',
                fontWeight: 400,
                lineHeight: '100%',
              }}
            >
              *2
            </span>
          </div>
        </div>
      </Badge>

      <Badge>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '0px',
          }}
        >
          <div
            style={{
              color: '#1E1E1E',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            導入社数
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
              style={{
                color: '#5004F5',
                textAlign: 'center',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '100%',
              }}
            >
              15,000
            </span>
            <span
              style={{
                position: 'absolute',
                top: '4px',
                right: '-8px',
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '8px',
                fontWeight: 400,
                lineHeight: '100%',
              }}
            >
              *3
            </span>
          </div>

          <div
            style={{
              color: '#5004F5',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            社以上
          </div>
        </div>
      </Badge>

      <Badge>
        <div style={{ transform: 'translateY(-4px)' }}>
          <div
            style={{
              color: '#1E1E1E',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '10px',
              fontWeight: 700,
              lineHeight: 'normal',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            導入企業
          </div>

          <div
            style={{
              marginTop: '-4px',
              color: '#1E1E1E',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '10px',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            顧客エンゲージメント
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
              style={{
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '100%',
              }}
            >
              25
            </span>
            <span
              style={{
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '28px',
                fontWeight: 700,
                lineHeight: '100%',
              }}
            >
              %UP
            </span>
            <span
              style={{
                position: 'absolute',
                top: '0',
                right: '-8px',
                color: '#5004F5',
                textShadow: '0 0 4px #FFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '8px',
                fontWeight: 400,
                lineHeight: '100%',
              }}
            >
              *4
            </span>
          </div>
        </div>
      </Badge>
    </ThreeBadges>
  );
}
