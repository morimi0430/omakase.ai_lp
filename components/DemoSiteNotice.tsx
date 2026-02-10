"use client";

import { usePathname } from "next/navigation";

/**
 * メインページ（/）以外で「ここはOmakase.aiの導入紹介サイトです」を表示。
 * ヘッダーとFV（ファーストビュー）の間に配置する想定。
 */
export default function DemoSiteNotice() {
  const pathname = usePathname();
  if (pathname === "/" || !pathname) return null;

  return (
    <div
      className="sticky top-0 md:top-20 z-40 w-full text-center py-2 text-sm font-medium text-neutral-600 bg-amber-50 border-b border-amber-200/80"
      role="status"
      aria-label="導入紹介サイトである旨の告知"
    >
      ここはOmakase.aiの導入紹介サイトです
    </div>
  );
}
