import type { ComponentType } from "react";
import type { IndustryMeta } from "@/lib/industries";
import { KaigoLP } from "./kaigo";

export { IndustrySection } from "./IndustrySection";
export { KaigoLP } from "./kaigo";

/** slug に対応する業界LPコンポーネントの型 */
export type IndustryLPComponent = ComponentType<{ industry: IndustryMeta }>;

/** slug → 業界LPコンポーネントのマップ。新規業界追加時はここに登録する */
export const INDUSTRY_LP_MAP: Record<string, IndustryLPComponent> = {
  kaigo: KaigoLP,
};

/**
 * スラッグから業界LPコンポーネントを取得する。
 * 対応する業界がない場合は undefined。
 */
export function getIndustryLP(slug: string): IndustryLPComponent | undefined {
  return INDUSTRY_LP_MAP[slug];
}
