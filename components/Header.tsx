'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import CTAButton from "./CTAButton";

export default function Header() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setShowMobileCTA(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50 h-20 w-full bg-white">
        <Container className="h-full flex items-center justify-center">
          {/* モバイル版 */}
          <div className="flex md:hidden w-full">
            <img
              src="/images/mobile/header_logo_mobile.png"
              alt="Omakase Logo"
              style={{ width: '300px', height: 'auto', flexShrink: 0 }}
            />
          </div>

          {/* PC版 */}
          <div className="hidden md:flex w-full max-w-[1440px] justify-between items-center">
            {/* ロゴエリア */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/pc/fabicon.png"
                alt="Omakase Icon"
                width={32}
                height={32}
                className="flex-shrink-0 aspect-square"
              />
              <Image
                src="/images/pc/header_logo.png"
                alt="Omakase Logo"
                width={160}
                height={22}
                className="flex-shrink-0 aspect-[80/11]"
              />
            </div>

            {/* ボタンエリア */}
            <div className="flex justify-end items-center gap-4 flex-shrink-0">
              <Link href="/document-request">
                <CTAButton
                  text="資料請求はこちら"
                  backgroundColor="#FFF"
                  textGradient={true}
                  iconSrc="/images/pc/arrow_white.png"
                  style={{
                    padding: '10px 24px',
                    height: '48px',
                    border: '1px solid #5004F5',
                    boxShadow: 'none',
                    fontSize: '14px'
                  }}
                  className="hover:bg-gray-50 transition-colors"
                />
              </Link>
              
              <Link href="https://www.omakase.ai/jp/register" target="_blank" rel="noopener noreferrer">
                <CTAButton
                  text="無料で始める"
                  backgroundColor="transparent"
                  textGradient={false}
                  textColor="#FFF"
                  iconSrc="/images/pc/arrow_purple.png"
                  style={{
                    padding: '10px 24px',
                    height: '48px',
                    border: 'none',
                    background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                    boxShadow: 'none',
                    fontSize: '14px'
                  }}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* モバイル専用：スクロール時のCTA */}
      <div 
        className={`
          fixed top-0 left-0 right-0 z-50 
          md:hidden
          transition-transform duration-300
          ${showMobileCTA ? 'translate-y-0' : '-translate-y-full'}
        `}
        style={{
          display: 'flex',
          width: '100%',
          height: '72px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.40)',
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
              style={{
                display: 'flex',
                height: '48px',
                padding: '10px 12px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '300px',
                border: '1px solid #5004F5',
                background: '#FFF',
                boxShadow: 'none',
                fontSize: '13px',
                fontFamily: '"Noto Sans JP"',
                fontWeight: 700,
                color: '#6017FF',
                width: '100%',
                boxSizing: 'border-box',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              <span>資料請求はこちら</span>
              <img 
                src="/images/pc/arrow_white.png" 
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
              style={{
                display: 'flex',
                height: '48px',
                padding: '10px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '300px',
                border: 'none',
                background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
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
                src="/images/pc/arrow_purple.png" 
                alt="" 
                style={{ width: '20px', height: '20px', flexShrink: 0 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}