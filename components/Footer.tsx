import { Container } from "./Container";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-800 border-t border-white/10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Noto+Sans+JP:wght@500;700&display=swap');
      `}</style>

      <div style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <Container>
          <div className="w-full max-w-[343px] md:max-w-none mx-auto flex flex-col md:flex-row items-start md:justify-center md:items-center gap-[20px] md:gap-[40px]">
            
            {/* ロゴ */}
            <div className="flex items-center">
              <div className="text-white text-2xl font-bold font-['Montserrat'] tracking-tight drop-shadow-[0_4px_12px_rgba(0,115,255,0.3)]">
                Omakase.ai
              </div>
            </div>

            {/* リンク（モバイルは横並び、PCは分離） */}
            <div className="flex md:contents items-center gap-[24px] md:gap-[40px]">
              {/* プライバシーポリシー */}
              <a 
                href="https://www.omakase.ai/jp/register/privacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                プライバシーポリシー
              </a>

              {/* 利用規約 */}
              <a 
                href="https://www.omakase.ai/jp/register/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                利用規約
              </a>
            </div>

            {/* コピーライト */}
            <div className="text-white/60 text-sm font-bold font-['Noto_Sans_JP']">
              © 2026 ZEALS Co. Ltd
            </div>
            
          </div>
        </Container>
      </div>
    </footer>
  );
}