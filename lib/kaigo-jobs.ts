/**
 * 介護LP用の求人一覧データ（架空の求人票）
 * 一覧・個別ページで共通利用
 */
export type JobListingItem = {
  jobId: string;
  category: string;
  image: string;
  title: string;
  salary: string;
  address: string;
  station: string;
  tags: string[];
  point: string;
  updatedAt: string;
};

export const KAIGO_JOB_LISTINGS: JobListingItem[] = [
  {
    jobId: "555064",
    category: "特養・老健",
    image: "/images/industries/kaigo/offer_SpecialNursingCare.jpg",
    title: "特別養護老人ホーム あおぞら苑の介護職・介護スタッフ(正社員)求人(東京都江戸川区)",
    salary: "【月給】280,000円〜320,000円",
    address: "東京都江戸川区西葛西3-5-1",
    station: "西葛西、葛西",
    tags: ["特養・老健", "介護福祉士", "未経験OK", "日勤のみ", "社会保険完備", "研修充実"],
    point: "駅徒歩5分で通勤に便利。未経験者も研修制度が充実しており、資格取得支援あり。チームで働きやすい環境です。",
    updatedAt: "2026/02/05",
  },
  {
    jobId: "555065",
    category: "訪問介護",
    image: "/images/industries/kaigo/offer_VisitinN%20ursingCare.jpg",
    title: "訪問介護 ほのぼのケアの訪問介護員・ヘルパー(正社員)求人(神奈川県川崎市)",
    salary: "【月給】260,000円〜300,000円",
    address: "神奈川県川崎市川崎区駅前本町22-1",
    station: "川崎、京急川崎",
    tags: ["訪問介護", "ヘルパー", "資格取得支援", "週休2日", "車通勤可"],
    point: "地域に根ざした訪問介護。車通勤可で移動支援あり。資格がなくても研修でサポート。",
    updatedAt: "2026/02/04",
  },
  {
    jobId: "555066",
    category: "デイサービス・デイケア",
    image: "/images/industries/kaigo/offer_DayCare.jpg",
    title: "デイサービス ふれあいの里の介護職(正社員・パート)求人(埼玉県さいたま市)",
    salary: "【時給】1,200円〜1,400円（パート） / 月給28万円〜（正社員）",
    address: "埼玉県さいたま市大宮区桜木町1-1",
    station: "大宮、西大宮",
    tags: ["デイサービス", "パート歓迎", "ママさん歓迎", "日勤のみ", "短時間勤務可"],
    point: "子育て中の方も活躍中。短時間・日勤のみのシフト対応。未経験OKで一緒に働きませんか。",
    updatedAt: "2026/02/04",
  },
  {
    jobId: "555067",
    category: "グループホーム",
    image: "/images/industries/kaigo/offer_GroupHome.jpg",
    title: "グループホーム ひだまりの介護職・生活相談員(正社員)求人(千葉県船橋市)",
    salary: "【月給】290,000円〜330,000円",
    address: "千葉県船橋市本町2-1-1",
    station: "船橋、東船橋",
    tags: ["グループホーム", "生活相談員", "介護福祉士", "夜勤手当あり", "寮完備"],
    point: "少人数でアットホームな施設。夜勤手当・寮完備で安心。キャリアアップ制度あり。",
    updatedAt: "2026/02/03",
  },
];

export function getKaigoJobById(jobId: string): JobListingItem | undefined {
  return KAIGO_JOB_LISTINGS.find((j) => j.jobId === jobId);
}
