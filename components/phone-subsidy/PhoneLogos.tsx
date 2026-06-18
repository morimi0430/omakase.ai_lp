import Image from 'next/image';
import { PhoneFigmaInner, PhoneFigmaSection } from './layout';
import { phoneImages } from './images';

const STRIP_WIDTH = 1712;
const STRIP_HEIGHT = 101;
const ROW_HEIGHT = STRIP_HEIGHT / 2;

function LogoMarqueeRow({
  direction,
  row,
}: {
  direction: 'left' | 'right';
  row: 'top' | 'bottom';
}) {
  const trackClass =
    direction === 'left' ? 'phone-logos-marquee-left' : 'phone-logos-marquee-right';
  const stripClass = row === 'top' ? 'phone-logos-strip-top' : 'phone-logos-strip-bottom';

  return (
    <div className="phone-logos-marquee-row phone-logos-marquee-mask">
      <div className={`phone-logos-marquee-track ${trackClass}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className={`phone-logos-strip-frame ${stripClass}`}>
            <Image
              src={phoneImages.logosStrip}
              alt={copy === 0 ? '導入企業ロゴ一覧' : ''}
              aria-hidden={copy !== 0}
              width={STRIP_WIDTH}
              height={STRIP_HEIGHT}
              className="phone-logos-strip-image max-w-none shrink-0 select-none"
              draggable={false}
            />
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
          <LogoMarqueeRow direction="right" row="top" />
          <LogoMarqueeRow direction="left" row="bottom" />
        </div>
      </PhoneFigmaInner>
    </PhoneFigmaSection>
  );
}
