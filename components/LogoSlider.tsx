"use client";

import Image from "next/image";

const logos = [
  { src: "/images/common/logo/onet_logo.png", alt: "Company 1" },
  { src: "/images/common/logo/backstage_logo.png", alt: "Company 2" },
  { src: "/images/common/logo/nova_logo.png", alt: "Company 3" },
  { src: "/images/common/logo/haruyama_logo.png", alt: "Company 4" },
  { src: "/images/common/logo/adtech_logo.png", alt: "Company 5" },
  { src: "/images/common/logo/shirokuma_logo.png", alt: "Company 6" },
  { src: "/images/common/logo/chapup_logo.png", alt: "Company 7" },
  { src: "/images/common/logo/medulla_logo.png", alt: "Company 8" },
  { src: "/images/common/logo/silktherich_logo.png", alt: "Company 9" },
  { src: "/images/common/logo/kaitsuka_logo.png", alt: "Company 10" },
];

export default function LogoSlider() {
  return (
    <>
      <style>{`
        @keyframes logoScrollPC {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1200px - 500px));
          }
        }

        @keyframes logoScrollMobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1200px - 500px));
          }
        }
        
        .logo-slider-container-pc {
          display: none;
          height: 128px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          overflow: hidden;
          background: #FFF;
          margin-top: 40px;
        }

        .logo-slider-container-mobile {
          display: flex;
          height: 78px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          overflow: hidden;
          background: #FFF;
          margin-top: 24px;
        }

        @media (min-width: 768px) {
          .logo-slider-container-pc {
            display: flex;
          }
          .logo-slider-container-mobile {
            display: none;
          }
        }
        
        .logo-slider-track-pc {
          display: flex;
          align-items: center;
          gap: 50px;
          animation: logoScrollPC 30s linear infinite;
        }

        .logo-slider-track-mobile {
          display: flex;
          align-items: center;
          gap: 50px;
          animation: logoScrollMobile 30s linear infinite;
        }
        
        .logo-item {
          flex-shrink: 0;
          width: 120px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      {/* PC版 */}
      <div className="logo-slider-container-pc">
        <div className="logo-slider-track-pc">
          {/* 1セット目 */}
          {logos.map((logo, index) => (
            <div key={`logo-pc-1-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
          
          {/* 2セット目 */}
          {logos.map((logo, index) => (
            <div key={`logo-pc-2-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}

          {/* 3セット目 */}
          {logos.map((logo, index) => (
            <div key={`logo-pc-3-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* モバイル版 */}
      <div className="logo-slider-container-mobile">
        <div className="logo-slider-track-mobile">
          {/* 1セット目 */}
          {logos.map((logo, index) => (
            <div key={`logo-mobile-1-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
          
          {/* 2セット目 */}
          {logos.map((logo, index) => (
            <div key={`logo-mobile-2-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}

          {/* 3セット目 */}
          {logos.map((logo, index) => (
            <div key={`logo-mobile-3-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}