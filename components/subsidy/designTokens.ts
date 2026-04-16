/**
 * メインLP（About / Features / Plan / FAQ）の余白・角丸・色に合わせたトークン
 */
export const subsidyDesign = {
  sectionPtMobile: 60,
  sectionPbMobile: 60,
  sectionPtPc: 60,
  sectionPbPc: 80,
  sectionPtPcLarge: 80,
  sectionPbPcLarge: 100,
  /** SectionTitle 直下の本文まで（About: 60 / 80） */
  afterTitleMobile: 60,
  afterTitlePc: 80,
  innerMax: 1440,
  innerPadPc: 120,
  pxMobile: 16,
  radiusCard: 16,
  radiusSm: 8,
  radiusPill: 300,
  border: '#E5E5E5',
  borderVioletSoft: '#F4EFFF',
  bgWhite: '#FFFFFF',
  bgGray50: '#F9FAFB',
  bgTint: '#F8F6FF',
  bgMessage: 'linear-gradient(82deg, #f5f3ff 0%, #ddd6fe 100%)',
  text: '#000000',
  textBody: '#040404',
  textMuted: '#555555',
  textSub: '#888888',
  textNote: '#949494',
  purple: '#5004F5',
  purpleBtn: '#6017FF',
  violet700: '#6d28d9',
  /** FeatureCard に近いごく薄い影（装飾過多にしない） */
  shadowCard: '0 4px 10px 14px rgba(58, 16, 151, 0.02)',
  fontNoto: '"Noto Sans JP"',
} as const;
