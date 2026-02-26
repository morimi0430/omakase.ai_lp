'use client';

import { useEffect } from 'react';
import Footer from '@/components/Footer';
import DemoRequestForm from '@/components/DemoRequestForm';
import DemoRequestHeader from '@/components/DemoRequestHeader';

export default function DemoRequestPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view_demo_request_form',
        page_path: '/demo-request',
      });
    }
  }, []);
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
          gap: '58px',
          margin: '0 auto'
        }}>
          <DemoRequestHeader />
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <DemoRequestForm />
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
          gap: '58px',
          padding: '84px 0 180px 0',
          maxWidth: '343px',
          margin: '0 auto'
        }}>
          <DemoRequestHeader isMobile />
          <DemoRequestForm isMobile />
        </div>
      </main>

      <Footer />
    </>
  );
}
