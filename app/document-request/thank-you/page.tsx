'use client';

import { useRouter } from 'next/navigation';
import DocumentRequestHeader from '@/components/DocumentRequestHeader';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
  const router = useRouter();

  const handleDownload = () => {
    // PDFのURLを指定してください
    const pdfUrl = '/path/to/your/document.pdf'; // ここにPDFのURLを設定
    
    // PDFをダウンロード
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'omakase_document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <DocumentRequestHeader />

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
          <DocumentRequestHeader isMobile />

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
    </>
  );
}