/**
 * 業界事例のマスタ（スラッグ・表示名・メタ情報）
 * 業界LPでヘッダー画像を差し替える場合は headerImages を指定する。
 * @see docs/IMAGE_DIRECTORY_STRATEGY.md
 */

export type IndustrySlug = "kaigo" | "tob";

/** 業界LP用ヘッダー画像の上書き（未指定のキーはメインLPのデフォルトを使用） */
export interface IndustryHeaderImages {
  logoPc?: string;
  logoMobile?: string;
  faviconPc?: string;
  /** true のときPCヘッダーでファビコンを表示しない（介護LPなど） */
  hideFavicon?: boolean;
}

export interface IndustryMeta {
  slug: IndustrySlug;
  name: string;
  title: string;
  description: string;
  /** 業界LPでヘッダーロゴ等を差し替える場合に指定。未指定ならメインLPと同じ画像 */
  headerImages?: IndustryHeaderImages;
  /** 業界LPヘッダー右側に表示するテキスト（例: カイゴテンショク）。指定時は左にロゴ・右にこの文字を配置 */
  headerTitle?: string;
  /** ヘッダーの2ボタン（資料請求・無料で始める）の色テーマ。'green' は緑基調（介護LPなど） */
  headerButtonTheme?: "default" | "green";
  /** true のとき「資料請求はこちら」を primary ボタン（左）、「デモをリクエスト」を secondary（右）に表示 */
  headerDocumentRequestFirst?: boolean;
}

export const INDUSTRIES: IndustryMeta[] = [
  {
    slug: "kaigo",
    name: "人材エージェント",
    title: "Omakase AI 事例｜介護業界のAI音声・チャット接客",
    description:
      "介護・障がい福祉の施設向けに、Omakase AIで問い合わせを24時間対応。営業時間外の相談、よくある質問、入居検討の不安解消をAIがサポートします。",
    headerImages: {
      // 介護用ロゴは public/images/industries/kaigo/header-logo.png を配置すると差し替わります
      hideFavicon: true,
    },
    headerButtonTheme: "green",
  },
  {
    slug: "tob",
    name: "法人・BtoB向け",
    title: "Omakase AI｜法人向けAI音声・チャット接客ソリューション",
    description:
      "顧客対応を24時間AIが自動化。開発不要で最短5分導入、人手不足・コスト課題を解決するBtoB向けAI接客ツール。導入企業15,000社以上の実績。",
    headerDocumentRequestFirst: false,
  },
];

export function getIndustryBySlug(slug: string): IndustryMeta | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): IndustrySlug[] {
  return INDUSTRIES.map((i) => i.slug);
}
