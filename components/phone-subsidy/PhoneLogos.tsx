import Image from 'next/image';
import { PhoneFigmaInner, PhoneFigmaSection } from './layout';
import { phonePartnerLogosBottom, phonePartnerLogosTop, type PhonePartnerLogo } from './logos';

function LogoMarqueeRow({
  direction,
  logos,
}: {
  direction: 'left' | 'right';
  logos: PhonePartnerLogo[];
}) {
  const trackClass =
    direction === 'left' ? 'phone-logos-marquee-left' : 'phone-logos-marquee-right';

  return (
    <div className="phone-logos-marquee-row phone-logos-marquee-mask">
      <div className={`phone-logos-marquee-track ${trackClass}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="phone-logos-marquee-set" aria-hidden={copy !== 0}>
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
