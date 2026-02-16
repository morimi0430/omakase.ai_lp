'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";
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
}

const DEFAULT_LOGO_PC = "/images/pc/header_logo.png";
const DEFAULT_LOGO_MOBILE = "/images/mobile/header_logo_mobile.png";
const DEFAULT_FAVICON = "/images/pc/favicon.png";

export default function Header({
  imageOverrides,
  rightTitle,
  buttonTheme = "default",
}: HeaderProps) {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isGreen = buttonTheme === "green";
  const arrowOutline = isGreen ? KAIGO_CTA_ARROWS.outline : "/images/pc/arrow_white.png";
  const arrowFilled = isGreen ? KAIGO_CTA_ARROWS.filled : "/images/pc/arrow_purple.png";
  const primaryColor = isGreen ? KAIGO_COLORS.primary : "#5004F5";
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
            <img
              src={imageOverrides?.logoMobile ?? DEFAULT_LOGO_MOBILE}
              alt="Omakase Logo"
              style={{ width: '300px', height: 'auto', flexShrink: 0 }}
            />
          </div>

          {/* PC版 */}
          <div className="hidden md:flex w-full justify-between items-center">
            {/* ロゴエリア */}
            <div className="flex items-center gap-2 flex-shrink-0">
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
            </div>

            {/* ボタンエリア */}
            <div className="flex justify-end items-center gap-4 flex-shrink-0">
              <Link 
                href="/document-request"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'button_click_document_request_header', {
                      button_location: 'header',
                      button_text: '資料請求はこちら'
                    });
                  }
                }}
              >
                <CTAButton
                  text="資料請求はこちら"
                  backgroundColor="#FFF"
                  textGradient={!isGreen}
                  textColor={isGreen ? primaryColor : undefined}
                  iconSrc={arrowOutline}
                  style={{
                    padding: '10px 24px',
                    height: '48px',
                    border: `1px solid ${primaryColor}`,
                    boxShadow: 'none',
                    fontSize: '14px'
                  }}
                  className="hover:bg-gray-50 transition-colors"
                />
              </Link>
              
              <Link 
                href="https://www.omakase.ai/jp/register" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'button_click_free_trial_header', {
                      button_location: 'header',
                      button_text: '無料で始める'
                    });
                  }
                }}
              >
                <CTAButton
                  text="無料で始める"
                  backgroundColor="transparent"
                  textGradient={false}
                  textColor="#FFF"
                  iconSrc={arrowFilled}
                  style={{
                    padding: '10px 24px',
                    height: '48px',
                    border: 'none',
                    background: primaryGradient,
                    boxShadow: 'none',
                    fontSize: '14px'
                  }}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
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
            height: '72px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.40)',
            backdropFilter: 'blur(10px)',
            boxSizing: 'border-box'
          }}
        >
        <div
          style={{
            display: 'flex',
            padding: '0 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ flex: '1 0 0', minWidth: 0 }}>
            <Link 
              href="/document-request"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'button_click_document_request_fixed_cta', {
                    button_location: 'fixed_header',
                    button_text: '資料請求はこちら'
                  });
                }
              }}
              style={{
                display: 'flex',
                height: '48px',
                padding: '10px 12px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '300px',
                border: `1px solid ${primaryColor}`,
                background: '#FFF',
                boxShadow: 'none',
                fontSize: '13px',
                fontFamily: '"Noto Sans JP"',
                fontWeight: 700,
                color: primaryColor,
                width: '100%',
                boxSizing: 'border-box',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              <span>資料請求はこちら</span>
              <img 
                src={arrowOutline} 
                alt="" 
                style={{ width: '20px', height: '20px', flexShrink: 0 }}
              />
            </Link>
          </div>

          <div style={{ flex: '1 0 0', minWidth: 0 }}>
            <Link
              href="https://www.omakase.ai/jp/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'button_click_free_trial_fixed_cta', {
                    button_location: 'fixed_header',
                    button_text: '無料で始める'
                  });
                }
              }}
              style={{
                display: 'flex',
                height: '48px',
                padding: '10px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '300px',
                border: 'none',
                background: primaryGradient,
                boxShadow: 'none',
                fontSize: '14px',
                fontFamily: '"Noto Sans JP"',
                fontWeight: 700,
                color: '#FFF',
                width: '100%',
                boxSizing: 'border-box',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              <span>無料で始める</span>
              <img 
                src={arrowFilled} 
                alt="" 
                style={{ width: '20px', height: '20px', flexShrink: 0 }}
              />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}