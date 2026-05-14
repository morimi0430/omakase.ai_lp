'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import Footer from '@/components/Footer';
import {
  INQUIRY_DOCUMENT_DOWNLOAD_NAME,
  INQUIRY_DOCUMENT_URL,
} from '@/lib/inquiryDocument';

const downloadButtonStyle: CSSProperties = {
  display: 'inline-flex',
  height: '48px',
  padding: '0 28px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '300px',
  border: 'none',
  background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
  color: '#fff',
  fontFamily: '"Noto Sans JP"',
  fontSize: '14px',
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
};

/** お問い合わせ送信後のサンクスページ */
export default function ThankYouPage() {
  const router = useRouter();

  return (
    <>
      {/* PC版 */}
      <main className="hidden md:flex w-full" style={{
        background: '#FFF',
        minHeight: '100vh'
      }}>
        <div style={{
          display: 'flex',
          width: '1440px',
          padding: '84px 0 180px 0',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          margin: '0 auto'
        }}>
          {/* ヘッダーエリア */}
          <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px'
          }}>
            <Image
              src="/images/pc/header_logo.png"
              alt="Omakase Logo"
              width={160}
              height={22}
              style={{
                width: '160px',
                height: '22px',
                aspectRatio: '80/11'
              }}
            />
            
            <h1 style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              margin: 0
            }}>
              お問い合わせありがとうございます
            </h1>
            
            <p style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: 0
            }}>
              担当者よりご連絡いたします。
            </p>
          </div>

          {/* ボタンエリア */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <a
              href={INQUIRY_DOCUMENT_URL}
              download={INQUIRY_DOCUMENT_DOWNLOAD_NAME}
              style={downloadButtonStyle}
            >
              資料をダウンロード
            </a>
            <button
              onClick={() => router.push('/')}
              style={{
                background: 'none',
                border: 'none',
                color: '#6017FF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '14px',
                fontWeight: 400,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              サイトに戻る
            </button>
          </div>
        </div>
      </main>

      {/* モバイル版 */}
      <main className="md:hidden w-full" style={{
        background: '#FFF',
        minHeight: '100vh',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          padding: '84px 0 180px 0',
          maxWidth: '343px',
          margin: '0 auto'
        }}>
          {/* ヘッダーエリア */}
          <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <span style={{
                fontFamily: '"Noto Sans JP"',
                fontSize: '24px',
                fontWeight: 700,
                color: '#000',
                textAlign: 'center'
              }}>
                Omakase AI
              </span>
            </div>
            
            <h1 style={{
              width: '100%',
              color: '#000',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              margin: 0
            }}>
              お問い合わせ<br />ありがとうございます
            </h1>
            
            <p style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: 0
            }}>
              担当者よりご連絡いたします。
            </p>
          </div>

          {/* ボタンエリア */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '100%'
          }}>
            <a
              href={INQUIRY_DOCUMENT_URL}
              download={INQUIRY_DOCUMENT_DOWNLOAD_NAME}
              style={{
                ...downloadButtonStyle,
                width: '100%',
                maxWidth: '280px',
                fontSize: '13px',
              }}
            >
              資料をダウンロード
            </a>
            <button
              onClick={() => router.push('/')}
              style={{
                background: 'none',
                border: 'none',
                color: '#6017FF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '12px',
                fontWeight: 400,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              サイトに戻る
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}