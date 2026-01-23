export default function BackgroundBlur() {
    return (
      <>
        {/* PC版 - 左側の紫ぼかし */}
        <div 
          className="hidden md:block absolute pointer-events-none"
          style={{
            width: '173px',
            height: '173px',
            top: '445px',
            left: '0',
            background: '#6017FF',
            opacity: 0.25,
            filter: 'blur(100px)',
            WebkitFilter: 'blur(80px)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />
  
        {/* PC版 - 右上の紫ぼかし */}
        <div 
          className="hidden md:block absolute pointer-events-none"
          style={{
            width: '432px',
            height: '432px',
            top: '-111px',
            right: '0',
            background: '#7738FF',
            opacity: 0.1,
            filter: 'blur(100px)',
            WebkitFilter: 'blur(80px)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />
  
        {/* モバイル版 - 下部の紫ぼかし背景 */}
        <div 
          className="block md:hidden absolute pointer-events-none"
          style={{
            width: '100%',
            height: '60%',
            bottom: '0',
            left: '0',
            background: 'linear-gradient(to bottom, rgba(119, 56, 255, 0) 0%, rgba(119, 56, 255, 0.2) 100%)',
            filter: 'blur(60px)',
            WebkitFilter: 'blur(60px)',
            zIndex: 0
          }}
        />
      </>
    );
  }