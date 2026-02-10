"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const MAIN_WIDGET_LOADER =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_-LH8h-LAMmQrbZC02FkjeBkFlVXMSMbfz2xXGAbQewylhLITikHOxV4AcpYd9vNB&_=1769417340779";

const KAIGO_WIDGET_LOADER =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_f33BaAwatfyqcQhBXabRXmr3DbMSlp5ho6nUFIwCjPN7U1kL0C_SYl2QcO5iOKU5&apiRegion=us";

const LOADER_SCRIPT_ID = "omakase-widget-loader-script";
const OMAKASE_SCRIPT_ID = "OmakaseAI";

function isKaigoPath(path: string): boolean {
  if (!path) return false;
  const normalized = path.replace(/\/$/, "").toLowerCase();
  return normalized === "/industries/kaigo";
}

/**
 * パスに応じて Omakase AI ウィジェットを1つだけ読み込む。
 * - /industries/kaigo → 介護用ウィジェット
 * - その他 → メイン用ウィジェット
 * loader の URL が変わったときだけ差し替え（再レンダーで削除しない）。
 */
export function OmakaseWidgetLoader() {
  const pathname = usePathname();
  const injectedUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return;
    }

    const path = window.location.pathname || pathname || "";
    const useKaigo = isKaigoPath(path);
    const loaderUrl = useKaigo ? KAIGO_WIDGET_LOADER : MAIN_WIDGET_LOADER;

    // 同じ URL を既に注入済みなら何もしない（メインの再レンダーで消えないようにする）
    if (injectedUrlRef.current === loaderUrl) {
      return;
    }
    injectedUrlRef.current = loaderUrl;

    const existingLoader = document.getElementById(LOADER_SCRIPT_ID);
    if (existingLoader) existingLoader.remove();
    document.querySelectorAll(`script[src*="cdn.omakase.ai/loader.min.js"]`).forEach((s) => s.remove());
    const existingOmakase = document.getElementById(OMAKASE_SCRIPT_ID);
    if (existingOmakase) existingOmakase.remove();

    const script = document.createElement("script");
    script.id = LOADER_SCRIPT_ID;
    script.async = true;
    script.textContent = `(function(w,d,s,o,f,js,fjs){
  w['OmakaseAIWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
  js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
  js.id=o;js.src=f;js.async=1;
  if(fjs){fjs.parentNode.insertBefore(js,fjs);}
  else{d.head.appendChild(js);}
}(window,document,'script','OmakaseAI','${loaderUrl}'));`;
    document.head.appendChild(script);

    return () => {
      // アンマウント時のみクリーンアップ（ページ離脱時）。pathname 変更時は ref で次回に差し替える
      injectedUrlRef.current = null;
      document.getElementById(LOADER_SCRIPT_ID)?.remove();
      document.querySelectorAll(`script[src*="cdn.omakase.ai/loader.min.js"]`).forEach((s) => s.remove());
      document.getElementById(OMAKASE_SCRIPT_ID)?.remove();
    };
  }, [pathname]);

  return null;
}
