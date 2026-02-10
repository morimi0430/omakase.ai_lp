"use client";

import FAQ, { type FAQEntry } from "@/components/FAQ";
import { KAIGO_COLORS } from "./constants";

const KAIGO_FAQ_ITEMS: FAQEntry[] = [
  { question: "登録は本当に無料ですか？", answer: "はい、完全無料です。求人紹介・履歴書添削・面接対策など、すべて無料でご利用いただけます。" },
  { question: "今の職場にバレませんか？", answer: "登録時点では就業先への連絡は一切行いません。転職活動を進めるかどうかも、ご本人の希望に合わせてサポートします。" },
  { question: "未経験・無資格でも利用できますか？", answer: "はい。未経験OK・資格取得支援ありの求人も多数あります。まずは希望条件をお聞かせください。" },
  { question: "しつこい電話はありますか？", answer: "ご希望の連絡方法（電話・メール・LINEなど）をお伺いしています。しつこい営業はいたしません。" },
  { question: "パート・正社員どちらも紹介してもらえますか？", answer: "はい。パート・正社員・契約社員など、働き方に合わせた求人をご紹介します。週の希望日数や時間帯もお聞かせください。" },
  { question: "給与や条件の交渉もサポートしてもらえますか？", answer: "はい。希望年収・賞与・休日など、条件のご希望をお聞きし、交渉が必要な場合はアドバイスやサポートをいたします。" },
];

export function KaigoFaqSection() {
  return (
    <FAQ
      title="よくある質問"
      items={KAIGO_FAQ_ITEMS}
      accentColor={KAIGO_COLORS.primary}
    />
  );
}
