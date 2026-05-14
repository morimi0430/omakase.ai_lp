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
  /** 締切バナー・CTA黄ボックス（背景 / 枠） */
  subsidyHighlightBoxBg: '#FEFFE3',
  subsidyHighlightBoxBorder: '#F2FF00',
  bgMessage: 'linear-gradient(82deg, #f5f3ff 0%, #ddd6fe 100%)',
  text: '#000000',
  textBody: '#040404',
  textMuted: '#555555',
  textSub: '#888888',
  textNote: '#949494',
  purple: '#5004F5',
  /** 補助金LPの強調カード（パッケージ・ステップ等） */
  purpleCardGradient: 'linear-gradient(129.98deg, #E437FB -13.17%, #3D00CB 100.51%)',
  /** 見出し・金額の横方向グラデ（文字: background-clip: text） */
  purpleTextGradient90: 'linear-gradient(90deg, #E437FB 0%, #3D00CB 100%)',
  purpleBtn: '#6017FF',
  /** 申請チェックリストの所要日数タグ枠 */
  checklistTagBorder: '#7D0CEE',
  /** PC「申請から入金までの流れ」お客様行カード */
  subsidyCustomerFlowCardBg: '#F7EEFF',
  subsidyCustomerFlowCardText: '#7D0CEE',
  violet700: '#6d28d9',
  /** 申請チェックリスト等のカード影（#3A1097 @ ~2%） */
  shadowCard: '0px 4px 10px 14px #3A109705',
  fontNoto: '"Noto Sans JP"',
} as const;
