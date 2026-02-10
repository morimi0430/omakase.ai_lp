"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MAIN_WIDGET_LOADER =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_-LH8h-LAMmQrbZC02FkjeBkFlVXMSMbfz2xXGAbQewylhLITikHOxV4AcpYd9vNB&_=1769417340779";

const KAIGO_WIDGET_LOADER =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_f33BaAwatfyqcQhBXabRXmr3DbMSlp5ho6nUFIwCjPN7U1kL0C_SYl2QcO5iOKU5&apiRegion=us";

/**
 * パスに応じて Omakase AI ウィジェットを1つだけ読み込む。
 * - /industries/kaigo → 介護用ウィジェット
 * - その他 → メイン用ウィジェット
 * localhost では 403 を避けるため読み込まない。
 */
export function OmakaseWidgetLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const hostname =
      typeof window !== "undefined" ? window.location.hostname : "";
    if (!hostname || hostname === "localhost" || hostname === "127.0.0.1") {
      return;
    }

    const isKaigo = pathname?.startsWith("/industries/kaigo") ?? false;
    const loaderUrl = isKaigo ? KAIGO_WIDGET_LOADER : MAIN_WIDGET_LOADER;

    const existing = document.getElementById("OmakaseAI");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "OmakaseAI";
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
      const toRemove = document.getElementById("OmakaseAI");
      if (toRemove) toRemove.remove();
    };
  }, [pathname]);

  return null;
}
