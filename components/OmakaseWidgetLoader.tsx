"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const MAIN_WIDGET_LOADER = process.env.NEXT_PUBLIC_OMAKASE_WIDGET_LOADER_MAIN ?? "";
const KAIGO_WIDGET_LOADER = process.env.NEXT_PUBLIC_OMAKASE_WIDGET_LOADER_KAIGO ?? "";

const LOADER_SCRIPT_ID = "omakase-widget-loader-script";
const OMAKASE_SCRIPT_ID = "OmakaseAI";

function isKaigoPath(path: string): boolean {
  if (!path) return false;
  const normalized = path.replace(/\/$/, "").toLowerCase();
  return normalized === "/industries/kaigo";
}

function injectLoader(loaderUrl: string): void {
  document.getElementById(LOADER_SCRIPT_ID)?.remove();
  document.querySelectorAll('script[src*="cdn.Omakase AI/loader.min.js"]').forEach((s) => s.remove());
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
}(window,document,'script','OmakaseAI','${loaderUrl}'));`;
  document.head.appendChild(script);
}

/**
 * パスに応じてメイン用 or 介護用ウィジェットを1本だけ読み込む。
 * 必要な URL が変わったときだけ差し替え。cleanup で script は削除しない（再レンダーで消えないようにする）。
 */
export function OmakaseWidgetLoader() {
  const pathname = usePathname();
  const injectedRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return;
    }

    const path = window.location.pathname || pathname || "";
    const useKaigo = isKaigoPath(path);
    const loaderUrl = useKaigo ? KAIGO_WIDGET_LOADER : MAIN_WIDGET_LOADER;
    if (!loaderUrl) return;

    if (injectedRef.current === loaderUrl) {
      return;
    }
    injectedRef.current = loaderUrl;
    injectLoader(loaderUrl);
  }, [pathname]);
  return null;
}
