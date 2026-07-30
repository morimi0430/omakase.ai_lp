'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PhoneFigmaInner, PhoneFigmaSection } from './layout';
import { phonePartnerLogosBottom, phonePartnerLogosTop, type PhonePartnerLogo } from './logos';

/**
 * 下段（短いトラック）の見かけ速度に揃える。
 * 以前の下段: 約2400px / 45s ≈ 53px/s
 */
const MARQUEE_SPEED_PX_PER_S = 2400 / 45;

function LogoMarqueeRow({
  direction,
  logos,
}: {
  direction: 'left' | 'right';
  logos: PhonePartnerLogo[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const trackClass =
    direction === 'left' ? 'phone-logos-marquee-left' : 'phone-logos-marquee-right';

  useEffect(() => {
    const track = trackRef.current;
    const set = setRef.current;
    if (!track || !set) return;

    const syncDuration = () => {
      const setWidth = set.getBoundingClientRect().width;
      if (setWidth <= 0) return;
      track.style.animationDuration = `${setWidth / MARQUEE_SPEED_PX_PER_S}s`;
    };

    syncDuration();

    const ro = new ResizeObserver(syncDuration);
    ro.observe(set);
    return () => ro.disconnect();
  }, [logos]);

  return (
    <div className="phone-logos-marquee-row phone-logos-marquee-mask">
      <div ref={trackRef} className={`phone-logos-marquee-track ${trackClass}`}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? setRef : undefined}
            className="phone-logos-marquee-set"
            aria-hidden={copy !== 0}
          >
            {logos.map((item) => (
              <div key={`${copy}-${item.src}`} className="phone-logos-marquee-item">
                <Image
                  src={item.src}
                  alt={copy === 0 ? item.alt : ''}
                  width={item.width}
                  height={item.height}
                  className="phone-logos-marquee-image"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhoneLogos() {
  return (
    <PhoneFigmaSection
      id="logos"
      py="compact"
      className="border-y border-[#f3f4f6] bg-gradient-to-r from-[rgba(249,250,251,0.5)] via-white to-[rgba(249,250,251,0.5)]"
    >
      <PhoneFigmaInner gap="40">
        <h2 className="relative z-10 w-full overflow-visible text-center font-[Inter,sans-serif] text-[36px] font-extrabold leading-[54px] tracking-[-1px] text-[#111827]">
          大手600社を超えるZEALSグループの支援実績
        </h2>

        <div className="phone-logos-marquee relative z-0 flex w-full flex-col gap-3 md:gap-4">
          <LogoMarqueeRow direction="right" logos={phonePartnerLogosTop} />
          <LogoMarqueeRow direction="left" logos={phonePartnerLogosBottom} />
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
