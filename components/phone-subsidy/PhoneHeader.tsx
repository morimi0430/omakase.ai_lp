import Link from 'next/link';
import { PhoneCtaButton, phoneCtaPrimaryClassName } from './layout';

export const phoneNavLinks = [
  { href: '#features', label: '機能' },
  { href: '#logos', label: '実績' },
  { href: '#use-cases', label: '活用シーン' },
  { href: '#steps', label: '導入の流れ' },
] as const;

export function PhoneHeaderNav() {
  return (
    <nav className="flex min-w-0 flex-1 items-center justify-end gap-8">
      {phoneNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-[Inter,sans-serif] text-[14px] font-normal leading-[20px] text-[#6b7280] transition-colors hover:text-[#111827]"
        >
          {link.label}
        </Link>
      ))}
      <PhoneCtaButton href="/document-request" className={phoneCtaPrimaryClassName}>
        資料請求・無料相談
      </PhoneCtaButton>
    </nav>
  );
}
