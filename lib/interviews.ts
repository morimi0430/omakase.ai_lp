/**
 * 導入インタビュー一覧・詳細データ
 */

export type InterviewSection = {
  heading: string;
  /** 表示用の質問文（未指定時は heading から生成） */
  question?: string;
  /** 見出しの直上に表示する画像（任意） */
  image?: string;
  /** 見出し（h3）の直下に表示する画像（任意） */
  imageAfterHeading?: string;
  paragraphs: string[];
  /** 指定した段落の直後に表示する画像（例：ツナエちゃんの下に3枚目を表示） */
  imageAfterParagraph?: { afterIndex: number; src: string }[];
};

export type InterviewDetail = {
  slug: string;
  image: string;
  title: string;
  companyName: string;
  /** パンくず・ナビ用の短い企業名（未指定時は companyName） */
  companyNameShort?: string;
  /** 代表者など（詳細ページのサブ表示用） */
  companySub?: string;
  /** 事業内容（詳細ページ用） */
  businessDescription?: string;
  sections: InterviewSection[];
};

/** 一覧用（カード表示に必要な項目＋slug） */
export type InterviewListItem = {
  slug: string;
  image: string;
  title: string;
  companyName: string;
};

const INTERVIEW_5STRANDS: InterviewDetail = {
  slug: "5strands-japan",
  image: "/images/common/interview/5StrandsJapan/image-1.jpg",
  title:
    "検査後の「出口戦略」をAIで構築。\n導入コスト1/10以下で売上50%増を実現した5Strands Japan様の挑戦",
  companyName: "5Strands Japan",
  companySub: "代表取締役 鈴木恵介様",
  businessDescription:
    "犬猫用・人間用の不耐性検査キットの販売（米国本社の日本市場展開）",
  sections: [
    {
      heading: "1. 導入に至った背景",
      question: "まず、導入に至った背景について教えていただけますか？",
      image: "/images/common/interview/5StrandsJapan/image-1.jpg",
      paragraphs: [
        "弊社が取り扱う「不耐性検査」は、アレルギーとは異なり、体がうまく消化・吸収できない食物を見つける検査です。日本ではまだ馴染みが薄い分野であり、認知拡大にあたっては大きな課題がありました。",
        "検査結果で『ここが悪い』と伝えるだけでは、健康診断で悪い箇所が見つかったのに放置するのと同じです。重要なのは、検査結果に基づき『どのペットフードを選べばいいのか』という出口戦略を提示することでした。",
        "この「検査結果から購入可能なフードを提案する仕組み」を構築するために、AIの導入検討が始まりました。",
        "そんな中、社内の役員が「Omakase.ai」を見つけ、導入検討が始まりました。機能やコスト面でのメリットはもちろんですが、最終的な導入の決め手となったのは、カスタマーサクセスの森さんの存在でした。",
        "説明が端的で分かりやすく、何より商品に対する『溢れる自信』が伝わってきました。こちらの質問に対してもあやふやにせず、即座に的確な回答が返ってくる。この安心感があったからこそ、導入に踏み切れました。担当が森さんでなければ、導入していなかったかもしれません。",
        "単なるツール選定に留まらず、担当者との信頼関係が構築できたことも、スムーズな導入の大きな要因となりました。",
      ],
    },
    {
      heading: "2. 検討〜導入まで",
      question: "それでは、どのような経緯でOmakase.aiの導入に至ったのでしょうか？",
      paragraphs: [
        "当初、自社でAIシステムを構築しようと数社に見積もりを依頼しました。しかし、提示された金額は衝撃的なものでした。",
        "初期費用は安くても300〜500万円、高いところでは1,200〜1,500万円。ランニングコストは月額30〜60万円。構築期間は半年〜1年。今の時代のスピード感を考えると、半年もかけて開発するのは現実的ではありませんでした。\nそんな中、社内の役員が「Omakase.ai」を見つけました。初期費用がかからず、月額費用も一般的なチャットボット（10万円程度）と比較しても安価。何より、すぐに導入できるスピード感が決め手となり、『一旦触ってみよう』と導入を決めました。",
      ],
    },
    {
      heading: "3. 実際に使ってみて",
      question: "実際に使ってみて、いかがでしたか？",
      imageAfterHeading: "/images/common/interview/5StrandsJapan/image-2.jpg",
      paragraphs: [
        "実際に導入してみて、最初に驚いたのはAIの学習スピードでした。",
        "ホームページのURLを読み込ませただけで、即座に事業内容を理解してくれました。数分で初期構築が終わってしまったのは画期的すぎました。",
        "また、AIへの教育（ナレッジベースの構築）も非常に簡単でした。AIに教え込む作業は面倒なイメージがありましたが、既存のQ&Aや顧客対応のログを投げ込むだけで完了しました。Shopifyと連携していたため、商品知識も最初から詳しい状態になっており、専門的な質問にも的確に回答できています。",
        "専門性が高い分野ゆえに、一般的なChatGPTなどでは「それらしい嘘（ハルシネーション）」をつくリスクがありますが、Omakase.aiは教え込んだ情報を元に正確に回答するため、安心して利用できています。",
      ],
    },
    {
      heading: "4. 導入してみての効果",
      question: "導入後、どのような効果が現れましたか？",
      paragraphs: [
        "導入から1〜2ヶ月という短期間ですが、導入前と比較して売上は50%以上伸びて推移しています。",
        "特に効果を感じているのは「コンプライアンス遵守」と「社内教育」の面です。",
        "法規制への対応（薬機法・景品表示法など）では、人間が対応すると、つい「効果がある」といった法に触れる表現を使ってしまうリスクがあります。しかし、AIであれば「これは言ってはいけない」というルールをナレッジベースで設定することで、厳密にルールを守った対応が可能になります。これは医療系や健康食品分野において非常に大きなメリットです。",
        "また、お客様対応だけでなく、社内スタッフが疑問を解消するツールとしても機能しています。「社長に聞くほどでもないが確認したいこと」をAIに聞くことで、スタッフ自身の知識定着にも繋がっています。",
      ],
    },
    {
      heading: "5. 今後の展望や期待",
      question: "最後に、今後の展望についてお聞かせください。",
      imageAfterHeading: "/images/common/interview/5StrandsJapan/image-3.jpg",
      paragraphs: [
        "単に商品を売るだけでなく、将来を見据えたAI活用を構想しています。",
        "今後、検索ではなくAI（ChatGPTやGeminiなど）で商品購入が完結する時代が来ると予想しています。その時、AIに自社商品が正しく認知されていなければ、選択肢にすら上がりません。今のうちに自社の商品知識をAIに正しく学習させておくことが、先行者利益に繋がると考えています。",
        "大手企業はもちろんですが、むしろ資金力が限られる中小企業や、コンプライアンスリスクが高い医療・健康食品関連の企業にこそ向いていると思います。リスクヘッジをしつつ、大手に負けないスピード感でAI活用を進めるための最適なツールです。",
      ],
    },
  ],
};

const INTERVIEW_MAGURO_TAKUMI: InterviewDetail = {
  slug: "maguro-no-takumi",
  image: "/images/common/interview/maguro/image-1.jpg",
  title:
    "アナログな業界だからこそ、最先端の「感動」を。\nマグロ解体ショーのパイオニアが挑むAI活用",
  companyName: "鮪匠",
  companyNameShort: "鮪匠",
  companySub: "一般社団法人全国鮪解体師協会　代表理事／屋号「鮪匠」代表　木村英喜 様",
  businessDescription:
    "イベント・エンターテイメント産業（マグロ解体ショー）",
  sections: [
    {
      heading: "1. 導入に至った背景",
      question: "まず、導入に至った背景について教えていただけますか？",
      image: "/images/common/interview/maguro/image-1.jpg",
      paragraphs: [
        "マグロの解体ショーという、職人の技術とエンターテインメントを融合させたサービスを20年以上提供している「鮪匠（まぐろのたくみ）」。業界自体はまだまだアナログな部分が多い中、常に新しいシステムや時代の変化に敏感でした。",
        "導入のきっかけは、YouTubeで放映されたリアルバリューでの代表 清水が掲げる「日本をぶち上げる」というキャッチコピーを目にしたことでした。「とにかく感動させる」「トキ消費を感動資産に」という弊社のミッションと、AIで世の中を変えていこうとする姿勢に強くリンクするものを感じました。",
        "弊社では、Webサイトが顧客との最初の接点となります。これまでは、Webを見た顧客からの問い合わせに対し、すべて人が対応していました。しかし、アナログな業界だからこそ、Web上で完結できる部分はAIに置き換え、問い合わせの流れをよりスムーズにする必要があるという課題を感じていました。",
      ],
    },
    {
      heading: "2. 検討〜導入まで",
      question: "導入を決めた決め手は何だったのでしょう？",
      paragraphs: [
        "YouTubeでの出会いをきっかけに、「AIを導入しようか」と考えていたタイミングと合致し、まさに「ピントがあった」感覚で導入を決意しました。急速に進化するAI技術を目の当たりにし、日本がパイオニアとして挑戦していく姿勢に共感。「まずは導入してみよう」という、新しいシステムへの期待感が決め手となりました。",
      ],
    },
    {
      heading: "3. 実際に使ってみて",
      question: "実際に使ってみて、どのような印象を持たれましたか？",
      image: "/images/common/interview/maguro/image-2.jpg",
      imageAfterParagraph: [
        { afterIndex: 0, src: "/images/common/interview/maguro/image-3.jpg" },
      ],
      paragraphs: [
        "実際に「Omakase.ai」に触れてみて最初に驚いたのは、その「人間らしさ」です。当初はロボットのような機械的な対応を想像していましたが、イントネーションや話し方がまるで人間があたかも話しているかのように作り込まれていました。",
        "導入にあたり、AIエージェントのキャラクター「ツナエちゃん」を設定しました。当初の「魚のアイコン」案から、より親しみやすく、かつ「鮪匠」の世界観に合うキャラクターへと作り込み、声のトーンからキャラクターの性格まで、数日かけて微調整を行い、単なる自動応答システムではなく、一つの「キャラクターコンテンツ」として成立するレベルまで昇華させました。",
        "もちろん、まだ完璧ではありません。時には言語に違和感がある部分もありますが、それを補って余りある進化のスピードを感じています。現在は、25年間の実績の中で培った膨大なデータベースをもとに、消費者の素朴な疑問から突飛な質問まで、AIがいかにピンポイントに響く回答を投げ返せるか、学習と調整を進めています。",
      ],
    },
    {
      heading: "4. 導入してみての効果",
      question: "導入後、具体的にどのような変化がありましたか？",
      paragraphs: [
        "導入後、会社にかかってくる電話の本数が少し減ったと感じています。これは、これまで電話で聞いていたような基本的な質問に対して、Web上でOmakase.aiが解決してくれている結果ではないかと推測しています。",
        "メリットとして感じているのは、対応品質の均質化です。人間が対応する場合、忙しい時や感情の起伏によって、どうしても対応が雑になってしまう瞬間があります。しかし、AIにはそれがありません。Omakase.aiは常に安定したテンションで、24時間365日、顧客に寄り添った対応が可能です。これにより、転送電話に追われるストレスや、対応のバラつきという課題が解消されつつあります。",
      ],
    },
    {
      heading: "5. 今後の展望や期待",
      question: "今後、どのような活用を考えていらっしゃいますか？",
      imageAfterHeading: "/images/common/interview/maguro/image-4.jpg",
      paragraphs: [
        "今後は、Q&A対応だけでなく、見積もり作成から予約、業務上の手続きまでを一気通貫でAIに任せたいと考えています。25年分のデータベースを整理し、顧客にとって分かりやすい形で情報を提示し、自動化できる範囲を広げていくことを期待しています。",
        "「Omakase.ai」は特に中小企業の経営者に向いていると考えています。「社長が何でもやりがち」な中小企業だからこそ、AIに任せられる部分は任せ、本来注力すべき業務や、より人間らしい「感動」を生む仕事に時間を割くべきです。まずは安価なプランからでも導入し、その効果を体感してほしいです。",
      ],
    },
  ],
};

/** 詳細データがあるインタビュー（slug → 詳細） */
const INTERVIEW_DETAIL_MAP: Record<string, InterviewDetail> = {
  [INTERVIEW_5STRANDS.slug]: INTERVIEW_5STRANDS,
  [INTERVIEW_MAGURO_TAKUMI.slug]: INTERVIEW_MAGURO_TAKUMI,
};

/** 一覧用：詳細があるインタビューのみ */
export function getInterviewList(): InterviewListItem[] {
  return [
    {
      slug: INTERVIEW_MAGURO_TAKUMI.slug,
      image: INTERVIEW_MAGURO_TAKUMI.image,
      title: INTERVIEW_MAGURO_TAKUMI.title,
      companyName: "鮪匠",
    },
    {
      slug: INTERVIEW_5STRANDS.slug,
      image: INTERVIEW_5STRANDS.image,
      title: INTERVIEW_5STRANDS.title,
      companyName: INTERVIEW_5STRANDS.companyName,
    },
  ];
}

/** slug で詳細取得。詳細ページがある場合のみ返す */
export function getInterviewBySlug(slug: string): InterviewDetail | null {
  return INTERVIEW_DETAIL_MAP[slug] ?? null;
}

/** 詳細ページが存在する slug 一覧（generateStaticParams 用） */
export function getInterviewSlugs(): string[] {
  return Object.keys(INTERVIEW_DETAIL_MAP);
}
