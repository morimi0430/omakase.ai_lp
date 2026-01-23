import Image from "next/image";

interface ThreeBadgesProps {
  mobileImage?: string;
  children?: React.ReactNode;
}

export default function ThreeBadges({ mobileImage, children }: ThreeBadgesProps) {
  return (
    <>
      {/* モバイル版 */}
      {mobileImage && (
        <div className="flex md:hidden w-full justify-center" style={{ boxSizing: 'border-box' }}>
          <div style={{ width: '100%', maxWidth: '343px', height: '64.106px', aspectRatio: '343.00/64.11', boxSizing: 'border-box' }}>
            <Image 
              src={mobileImage}
              alt="実績" 
              width={343} 
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* PC版 */}
      <div className="hidden md:flex" style={{ 
        paddingTop: '8px', 
        paddingBottom: '8px',
        display: 'flex',
        gap: '8px'
      }}>
        {children}
      </div>
    </>
  );
}

// 個別のバッジコンポーネント - 枠組みのみ提供
interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <div style={{
      width: '167.517px',
      height: '80.619px',
      aspectRatio: '167.52/80.62',
      position: 'relative'
    }}>
      <Image 
        src="/images/pc/laurel.png" 
        alt="Badge" 
        width={168} 
        height={81}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}>
        {children}
      </div>
    </div>
  );
}