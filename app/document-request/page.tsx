import Footer from '@/components/Footer';
import DocumentRequestForm from '@/components/DocumentRequestForm';
import DocumentRequestHeader from '@/components/DocumentRequestHeader';

export default function DocumentRequestPage() {
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
          <DocumentRequestHeader />
          {/* フォーム */}
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <DocumentRequestForm />
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
          <DocumentRequestHeader isMobile />
          {/* フォーム */}
          <DocumentRequestForm isMobile />
        </div>
      </main>

      <Footer />
    </>
  );
}