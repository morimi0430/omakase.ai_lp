"use client";

import { useEffect } from "react";
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
 * localhost では 403 のため読み込まない。
 */
export function OmakaseWidgetLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return;
    }

    // パスは URL を優先（直リンク・初回で usePathname が遅れる場合に対応）
    const path = window.location.pathname || pathname || "";
    const useKaigo = isKaigoPath(path);
    const loaderUrl = useKaigo ? KAIGO_WIDGET_LOADER : MAIN_WIDGET_LOADER;

    // 既存のウィジェット読み込み用を削除してから差し替え
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
      document.getElementById(LOADER_SCRIPT_ID)?.remove();
      document.querySelectorAll(`script[src*="cdn.omakase.ai/loader.min.js"]`).forEach((s) => s.remove());
      document.getElementById(OMAKASE_SCRIPT_ID)?.remove();
    };
  }, [pathname]);

  return null;
}
