'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";
import { PhoneCtaButton } from '@/components/phone-subsidy/layout';
import { PhoneHeaderNav } from '@/components/phone-subsidy/PhoneHeader';
import type { IndustryHeaderImages } from "@/lib/industries";
import { KAIGO_COLORS, KAIGO_CTA_ARROWS } from "./industries/kaigo/constants";

type ButtonTheme = "default" | "green";

interface HeaderProps {
  /** 業界LP用ロゴ・ファビコン差し替え */
  imageOverrides?: IndustryHeaderImages;
  /** 業界LP用ヘッダー右側テキスト（例: カイゴテンショク） */
  rightTitle?: string;
  /** 介護LPのとき "green" を指定。未指定は紫のメインLP */
  buttonTheme?: ButtonTheme; 
  /** 補助金LP用：ヘッダーCTAを「補助金申請の相談をする」のみ表示（/document-request） */
  subsidyLp?: boolean;
  /** 電話AI LP用：ナビリンク + ページ内CTA（PhoneCtaButton） */
  phoneLp?: boolean;
}

const DEFAULT_LOGO_PC = "/images/pc/header_logo.png";
const DEFAULT_LOGO_MOBILE = "/images/mobile/header_logo_mobile.png";
const DEFAULT_FAVICON = "/images/pc/favicon.png";

export default function Header({
  imageOverrides,
  rightTitle,
  buttonTheme = "default",
  subsidyLp = false,
  phoneLp = false,
}: HeaderProps) {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isGreen = buttonTheme === "green";
  const arrowFilled = isGreen ? KAIGO_CTA_ARROWS.filled : "/images/pc/arrow_purple.png";
  const primaryGradient = isGreen
    ? `linear-gradient(310deg, ${KAIGO_COLORS.primary} 44.35%, ${KAIGO_COLORS.primaryLight} 86.86%)`
    : "linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const currentScrollY = window.scrollY;
        
        // 下スクロール（増加）かつ100px以上スクロールしていたら表示
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowMobileCTA(true);
        }
        // 上スクロール（減少）したら非表示
        else if (currentScrollY < lastScrollY) {
          setShowMobileCTA(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50 w-full bg-white">
        <header className="h-20 w-full flex justify-center lp-header">
          <div className="h-full flex items-center justify-center w-full md:max-w-[1440px]">
          {/* モバイル版 */}
          <div className="flex md:hidden w-full">
            <a href="/">
              <img
                src={imageOverrides?.logoMobile ?? DEFAULT_LOGO_MOBILE}
                alt="Omakase Logo"
                style={{ width: '300px', height: 'auto', flexShrink: 0 }}
              />
            </a>
          </div>

          {/* PC版 */}
          <div className="hidden md:flex w-full justify-between items-center">
            {/* ロゴエリア */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              {!imageOverrides?.hideFavicon && (
                <Image
                  src={imageOverrides?.faviconPc ?? DEFAULT_FAVICON}
                  alt="Omakase Icon"
                  width={32}
                  height={32}
                  className="flex-shrink-0 aspect-square"
                />
              )}
              <Image
                src={imageOverrides?.logoPc ?? DEFAULT_LOGO_PC}
                alt="Omakase Logo"
                width={160}
                height={22}
                className="flex-shrink-0 aspect-[80/11]"
              />
              {rightTitle && (
                <span className="text-base font-bold text-neutral-800 ml-2">
                  {rightTitle}
                </span>
              )}
            </a>

            {/* 電話AI LP / 補助金LP / 通常 */}
            {phoneLp ? (
              <PhoneHeaderNav />
            ) : subsidyLp ? (
                <Link
                  href="/document-request"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "button_click_subsidy_consult_header", {
                        button_location: "header",
                        button_text: "補助金申請の相談をする",
                      });
                    }
                  }}
                  className="hover:opacity-90 transition-opacity"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    borderRadius: 300,
                    border: "none",
                    background: primaryGradient,
                    color: "#fff",
                    fontFamily: '"Noto Sans JP"',
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    lineHeight: 1.35,
                    maxWidth: 380,
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <span>補助金申請の相談をする</span>
                  <img src={arrowFilled} alt="" width={20} height={20} style={{ flexShrink: 0 }} />
                </Link>
              ) : (
                <Link
                  href="/document-request"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "button_click_inquiry_header", {
                        button_location: "header",
                        button_text: "お問い合わせ",
                      });
                    }
                  }}
                >
                  <CTAButton
                    text="お問い合わせ"
                    backgroundColor="transparent"
                    textGradient={false}
                    textColor="#FFF"
                    iconSrc={arrowFilled}
                    style={{
                      padding: "10px 24px",
                      height: "48px",
                      border: "none",
                      background: primaryGradient,
                      boxShadow: "none",
                      fontSize: "14px",
                    }}
                    className="hover:opacity-90 transition-opacity"
                  />
                </Link>
              )}
          </div>
        </div>
        </header>
      </div>
      {/* PC用：固定ヘッダー分のスペーサー */}
      <div className="h-0 md:h-20" aria-hidden />

      {/* モバイル専用：スクロール時のCTA ＋ 告知をひと塊でスライド */}
      <div 
        className={`
          fixed top-0 left-0 right-0 z-50 
          md:hidden
          transition-transform duration-300
          flex flex-col
          ${showMobileCTA ? 'translate-y-0' : '-translate-y-full'}
        `}
        style={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* CTAボタンエリア */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: subsidyLp ? 'auto' : '72px',
            minHeight: '72px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.40)',
            backdropFilter: 'blur(10px)',
            boxSizing: 'border-box',
            padding: subsidyLp ? '10px 0' : undefined,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "0 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {phoneLp ? (
              <div style={{ flex: "1 0 0", minWidth: 0, width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
                <PhoneCtaButton href="/document-request" className="h-[48px] w-full">
                  資料請求・無料相談
                </PhoneCtaButton>
              </div>
            ) : subsidyLp ? (
              <div style={{ flex: "1 0 0", minWidth: 0, width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
                <Link
                  href="/document-request"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "button_click_subsidy_consult_fixed_cta", {
                        button_location: "fixed_header",
                        button_text: "補助金申請の相談をする",
                      });
                    }
                  }}
                  style={{
                    display: "flex",
                    minHeight: "48px",
                    padding: "10px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "300px",
                    border: "none",
                    background: primaryGradient,
                    boxShadow: "none",
                    fontSize: "12px",
                    fontFamily: '"Noto Sans JP"',
                    fontWeight: 700,
                    color: "#FFF",
                    width: "100%",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    textDecoration: "none",
                    lineHeight: 1.35,
                    textAlign: "center",
                  }}
                >
                  <span>補助金申請の相談をする</span>
                  <img
                    src={arrowFilled}
                    alt=""
                    style={{ width: "20px", height: "20px", flexShrink: 0 }}
                  />
                </Link>
              </div>
            ) : (
              <div style={{ flex: "1 0 0", minWidth: 0 }}>
                <Link
                  href="/document-request"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "button_click_inquiry_fixed_cta", {
                        button_location: "fixed_header",
                        button_text: "お問い合わせ",
                      });
                    }
                  }}
                  style={{
                    display: "flex",
                    height: "48px",
                    padding: "10px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "300px",
                    border: "none",
                    background: primaryGradient,
                    boxShadow: "none",
                    fontSize: "13px",
                    fontFamily: '"Noto Sans JP"',
                    fontWeight: 700,
                    color: "#FFF",
                    width: "100%",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  <span>お問い合わせ</span>
                  <img
                    src={arrowFilled}
                    alt=""
                    style={{ width: "20px", height: "20px", flexShrink: 0 }}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}