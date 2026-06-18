/** 電話AI LP（/phone-subsidy）の画像パス — Figma node 318:834 準拠 */
export const phoneImages = {
  logoHeader: '/images/phone-subsidy/logo-header.png',
  logosStrip: '/images/phone-subsidy/logos-strip.png',
  hero: '/images/phone-subsidy/hero-phone-ai.png',
  customerManagement: '/images/phone-subsidy/customer-management.png',
  callDetailSummary: '/images/phone-subsidy/call-detail-summary.png',
  crmEcIntegration: '/images/phone-subsidy/crm-ec-integration.png',
  agentKeywordsSettings: '/images/phone-subsidy/agent-keywords-settings.png',
  transcriptionLog: '/images/phone-subsidy/transcription-log.png',
} as const;

/** PNG 実寸（width/height 属性用。表示は h-auto w-full のみ） */
export const phoneScreenshotSizes = {
  customerManagement: { width: 1614, height: 1044 },
  callDetailSummary: { width: 1614, height: 1094 },
  crmEcIntegration: { width: 1530, height: 835 },
  agentKeywordsSettings: { width: 1614, height: 1087 },
  transcriptionLog: { width: 1614, height: 1686 },
  hero: { width: 1548, height: 901 },
} as const;

/** スクリーンショット親フレーム — 最大幅（高さは画像に合わせる） */
export const phoneScreenFrame = {
  standard: { width: 564 },
  hero: { width: 544, height: 328.08, aspect: { width: 314, height: 182.61 } },
} as const;

export const phoneIcons = {
  arrowWhite: '/images/phone-subsidy/icons/arrow-white.svg',
  callStructured: '/images/phone-subsidy/icons/call-structured.svg',
  callUnified: '/images/phone-subsidy/icons/call-unified.svg',
  callSummary: '/images/phone-subsidy/icons/call-summary.svg',
  ivrVoice: '/images/phone-subsidy/icons/ivr-voice.svg',
  ivrAuth: '/images/phone-subsidy/icons/ivr-auth.svg',
  ivrTransfer: '/images/phone-subsidy/icons/ivr-transfer.svg',
  ivrSms: '/images/phone-subsidy/icons/ivr-sms.svg',
  ivrPrompt: '/images/phone-subsidy/icons/ivr-prompt.svg',
  ivrAfterhours: '/images/phone-subsidy/icons/ivr-afterhours.svg',
  checkTeal: '/images/phone-subsidy/icons/check-teal.svg',
} as const;

/** CRM連携セクションのロゴ — Figma 322:1718 準拠（カード内表示サイズ） */
export const phoneIntegrationLogos = [
  {
    src: '/images/phone-subsidy/integrations/logo-ecforce-figma.png',
    alt: 'ecforce',
    width: 120,
    height: 32,
    intrinsic: { width: 580, height: 155 },
  },
  {
    src: '/images/phone-subsidy/integrations/logo-shopify-figma.png',
    alt: 'Shopify',
    width: 120,
    height: 32,
    intrinsic: { width: 1000, height: 525 },
  },
  {
    src: '/images/phone-subsidy/integrations/logo-hacomono-figma.png',
    alt: 'hacomono',
    width: 104,
    height: 24,
    intrinsic: { width: 1686, height: 367 },
  },
] as const;
