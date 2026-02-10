"use client";

import { useEffect } from "react";

const OMAKASE_LOADER_URL =
  "https://cdn.omakase.ai/loader.min.js?apiKey=oma_live_f33BaAwatfyqcQhBXabRXmr3DbMSlp5ho6nUFIwCjPN7U1kL0C_SYl2QcO5iOKU5&apiRegion=us";

/**
 * Omakase AI Widget を読み込む。
 * localhost / 127.0.0.1 では API が 403 を返すため読み込まない（本番ドメインのみで動作）。
 */
export function OmakaseWidgetScript() {
  useEffect(() => {
    const hostname =
      typeof window !== "undefined" ? window.location.hostname : "";
    if (!hostname || hostname === "localhost" || hostname === "127.0.0.1") {
      return;
    }

    if (document.getElementById("OmakaseAI")) return;

    const script = document.createElement("script");
    script.id = "OmakaseAI";
    script.async = true;
    script.textContent = `(function(w,d,s,o,f,js,fjs){
  w['OmakaseAIWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
  js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
  js.id=o;js.src=f;js.async=1;
  if(fjs){fjs.parentNode.insertBefore(js,fjs);}
  else{d.head.appendChild(js);}
}(window,document,'script','OmakaseAI','${OMAKASE_LOADER_URL}'));`;
    document.head.appendChild(script);
  }, []);

  return null;
}
