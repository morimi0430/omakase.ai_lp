import type { ReactNode } from 'react';
import { subsidyDesign as D } from './designTokens';

/**
 * 補助金LPで `SubsidySectionHeading` 直下に置くリード文。
 * Omakase AI補助金シミュレーション（SubsidyPriceTable）の段落と同一構造・トークン。
 */
export default function SubsidySectionLead({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[13px] md:text-[15px]"
      style={{
        color: D.textBody,
        fontFamily: D.fontNoto,
        lineHeight: '170%',
        margin: '0 auto 36px auto',
        fontWeight: 500,
        textAlign: 'center',
        maxWidth: 1000,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </p>
  );
}
