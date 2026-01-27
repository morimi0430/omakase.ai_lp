'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // PDFダウンロード
    const pdfUrl = '/document/Omakase.ai_service_info.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'omakase_document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // モーダルを開く
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      // 既存のスクリプトがあれば削除
      const existingScript = document.getElementById('hubspot-meetings-script');
      if (existingScript) {
        existingScript.remove();
      }

      // HubSpotスクリプトを動的に読み込む
      const script = document.createElement('script');
      script.id = 'hubspot-meetings-script';
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        console.log('HubSpot script loaded');
      };
      
      script.onerror = () => {
        console.error('Failed to load HubSpot script');
      };
      
      document.body.appendChild(script);

      // bodyのスクロールを無効化
      document.body.style.overflow = 'hidden';

      return () => {
        const scriptToRemove = document.getElementById('hubspot-meetings-script');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

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
              以下から資料をダウンロードいただけます。
            </p>
          </div>

          {/* ボタンエリア */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                padding: '16px 48px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '300px',
                background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                border: 'none',
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0px 4px 12px rgba(96, 23, 255, 0.3)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13L6 9L7.4 7.55L9 9.15V3H11V9.15L12.6 7.55L14 9L10 13ZM5 17C4.45 17 3.979 16.804 3.587 16.412C3.195 16.02 2.99933 15.5493 3 15V12H5V15H15V12H17V15C17 15.55 16.804 16.021 16.412 16.413C16.02 16.805 15.5493 17.0007 15 17H5Z" fill="white"/>
              </svg>
              資料ダウンロード
            </button>

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
                Omakase.ai
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
              以下から資料をダウンロードいただけます。
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
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                padding: '16px 48px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '300px',
                background: 'linear-gradient(310deg, #6017FF 44.35%, #8249FF 86.86%)',
                border: 'none',
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0px 4px 12px rgba(96, 23, 255, 0.3)',
                width: '100%'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13L6 9L7.4 7.55L9 9.15V3H11V9.15L12.6 7.55L14 9L10 13ZM5 17C4.45 17 3.979 16.804 3.587 16.412C3.195 16.02 2.99933 15.5493 3 15V12H5V15H15V12H17V15C17 15.55 16.804 16.021 16.412 16.413C16.02 16.805 15.5493 17.0007 15 17H5Z" fill="white"/>
              </svg>
              資料ダウンロード
            </button>

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

      {/* HubSpot予約モーダル */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFF',
              borderRadius: '16px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden'
            }}
          >
            {/* 閉じるボタン */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                color: '#FFF',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            >
              ×
            </button>

            {/* モーダルヘッダー */}
            <div style={{
              padding: '32px 24px 24px',
              borderBottom: '1px solid #E5E7EB',
              flexShrink: 0
            }}>
              <h2 style={{
                fontFamily: '"Noto Sans JP"',
                fontSize: '24px',
                fontWeight: 700,
                color: '#1F2937',
                margin: 0,
                textAlign: 'center'
              }}>
                ミーティングを予約
              </h2>
              <p style={{
                fontFamily: '"Noto Sans JP"',
                fontSize: '14px',
                color: '#6B7280',
                margin: '8px 0 0',
                textAlign: 'center'
              }}>
                ご都合の良い日時をお選びください
              </p>
            </div>

            {/* HubSpot埋め込みエリア */}
            <div style={{ 
              padding: '24px',
              overflow: 'auto',
              flexGrow: 1,
              WebkitOverflowScrolling: 'touch'
            }}>
              <div 
                className="meetings-iframe-container" 
                data-src="https://meetings-na2.hubspot.com/misaki-mori?embed=true"
                style={{
                  minHeight: '600px',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}