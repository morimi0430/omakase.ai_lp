"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MAIN_WIDGET_LOADER =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_-LH8h-LAMmQrbZC02FkjeBkFlVXMSMbfz2xXGAbQewylhLITikHOxV4AcpYd9vNB&_=1769417340779";

const KAIGO_WIDGET_LOADER =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_f33BaAwatfyqcQhBXabRXmr3DbMSlp5ho6nUFIwCjPN7U1kL0C_SYl2QcO5iOKU5&apiRegion=us";

const MAIN_SCRIPT_ID = "omakase-main-widget";
const LOADER_SCRIPT_ID = "omakase-widget-loader-script";
const OMAKASE_SCRIPT_ID = "OmakaseAI";

function isKaigoPath(path: string): boolean {
  if (!path) return false;
  const normalized = path.replace(/\/$/, "").toLowerCase();
  return normalized === "/industries/kaigo";
}

function isMainLoaderInPage(): boolean {
  if (typeof document === "undefined") return false;
  if (document.getElementById(MAIN_SCRIPT_ID)) return true;
  const loaderScripts = document.querySelectorAll('script[src*="cdn.omakase.ai/loader.min.js"]');
  return Array.from(loaderScripts).some((s) => s.getAttribute("src")?.includes("oma_live_-LH8h"));
}

/**
 * 階層（パス）の差だけでウィジェットを切り替える。
 * - メイン用はレイアウトで読み込み済み。
 * - /industries/kaigo のときだけメインを外して介護用を注入。
 * - 介護から戻ったときだけメイン用を再注入。
 */
export function OmakaseWidgetLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return;
    }

    const path = window.location.pathname || pathname || "";
    const useKaigo = isKaigoPath(path);

    if (useKaigo) {
      document.getElementById(MAIN_SCRIPT_ID)?.remove();
      document.getElementById(LOADER_SCRIPT_ID)?.remove();
      document.querySelectorAll('script[src*="cdn.omakase.ai/loader.min.js"]').forEach((s) => s.remove());
      document.getElementById(OMAKASE_SCRIPT_ID)?.remove();

      const script = document.createElement("script");
      script.id = LOADER_SCRIPT_ID;
      script.async = true;
      script.textContent = `(function(w,d,s,o,f,js,fjs){
  w['OmakaseAIWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
  js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
  js.id=o;js.src=f;js.async=1;
  if(fjs){fjs.parentNode.insertBefore(js,fjs);}
  else{d.head.appendChild(js);}
}(window,document,'script','OmakaseAI','${KAIGO_WIDGET_LOADER}'));`;
      document.head.appendChild(script);
      return;
    }

    // 介護以外: メイン用が無いときだけ注入（介護→メイン遷移時）
    if (isMainLoaderInPage()) return;

    const script = document.createElement("script");
    script.id = LOADER_SCRIPT_ID;
    script.async = true;
    script.textContent = `(function(w,d,s,o,f,js,fjs){
  w['OmakaseAIWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
  js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
  js.id=o;js.src=f;js.async=1;
  if(fjs){fjs.parentNode.insertBefore(js,fjs);}
  else{d.head.appendChild(js);}
}(window,document,'script','OmakaseAI','${MAIN_WIDGET_LOADER}'));`;
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}
