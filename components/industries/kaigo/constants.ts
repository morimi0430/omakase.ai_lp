/** 介護転職LP用カラー（安心感：緑・水色系、紫は使用しない） */
export const KAIGO_COLORS = {
  primary: "#0b7d6c",
  primaryLight: "#0d9488",
  bgTint: "#ecfdf5",
  bgTintAlt: "#f0fdfa",
  /** FV用：薄い黄緑背景・ストライプ */
  fvBg: "#f5fbe8",
  fvStripe: "#e8f0d4",
  border: "#E5E5E5",
  textMuted: "#666",
} as const;

/** 「相談する」ボタンの遷移先（資料請求・相談フォーム） */
export const KAIGO_LISTEN_URL = "/document-request";

/** 介護LP用 CTA 矢印画像（資料請求＝アウトライン用・無料で始める＝塗り用） */
export const KAIGO_CTA_ARROWS = {
  /** 白背景ボタン用（資料請求はこちら） */
  outline: "/images/industries/kaigo/Group 9.png",
  /** 緑背景ボタン用（無料で始める） */
  filled: "/images/industries/kaigo/Group 9 (1).png",
} as const;
