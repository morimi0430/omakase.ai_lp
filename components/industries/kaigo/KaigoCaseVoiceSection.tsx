"use client";

import CaseStudies, { type CaseStudyItem } from "@/components/CaseStudies";
import { KAIGO_COLORS } from "./constants";

const CASE_VOICE_ITEMS = [
  { image: "/images/industries/kaigo/review_SpecialNursingCare.jpg", before: "年収320万円", after: "年収400万円にアップ", tag: "30代・特養", jobTypes: "介護福祉士・施設スタッフ", workStyle: "正社員・夜勤手当あり", points: "年収アップ実績・経験者優遇", attribute: "20代・未経験", voice: "資格を取ったばかりで不安でしたが、未経験OKの求人を紹介してもらえ、今はデイで働いています。", icon: "👩" },
  { image: "/images/industries/kaigo/review_Hosptal.jpg", before: "夜勤 月5回", after: "日勤のみに変更", tag: "20代・病院", jobTypes: "介護職・看護助手", workStyle: "正社員・日勤のみ", points: "夜勤なし・ワークライフバランス", attribute: "40代・ブランクあり", voice: "子育てで離職していました。履歴書添削や面接対策を教えてもらい、再就職できました。", icon: "👩" },
  { image: "/images/industries/kaigo/review_DayCare.jpg", before: "片道1時間", after: "家から車で15分", tag: "40代・デイ", jobTypes: "ヘルパー・デイサービス", workStyle: "パート・正社員・日勤", points: "駅近・車通勤可・ママさん歓迎", attribute: "ママさん介護士", voice: "家から近い・日勤のみで探していました。非公開の良い条件の施設を紹介してもらえました。", icon: "👩" },
] as const;

function toCaseStudyItem(item: (typeof CASE_VOICE_ITEMS)[number]): CaseStudyItem {
  return {
    company: item.tag,
    title: item.voice,
    image: item.image,
    reasons: [
      `${item.before} → ${item.after}`,
      `働き方: ${item.workStyle}`,
      `募集職種: ${item.jobTypes}`,
    ],
    effects: [item.points, item.voice],
  };
}

const KAIGO_CASE_STUDIES: CaseStudyItem[] = CASE_VOICE_ITEMS.map(toCaseStudyItem);

export function KaigoCaseVoiceSection() {
  return (
    <>
      <CaseStudies
        sectionTitle="転職者の声"
        cases={KAIGO_CASE_STUDIES}
        reasonsLabel="選んだ理由"
        effectsLabel="成果"
        accentColor={KAIGO_COLORS.primary}
      />
      <p className="text-sm text-center text-gray-600 mt-2" style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
        ※転職者の声はOmakase AI導入エージェントの事例イメージです。当サイトでは求人紹介は行っておりません。
      </p>
    </>
  );
}
