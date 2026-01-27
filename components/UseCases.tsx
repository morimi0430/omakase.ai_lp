import UseCaseCard from "./UseCaseCard";
import Image from "next/image";

export default function UseCases() {
  // アイコンコンポーネント
  const IconWrapper = ({ src, alt }: { src: string; alt: string }) => (
    <div style={{
      width: '64px',
      height: '64px',
      aspectRatio: '1/1',
      borderRadius: '50%',
      background: 'linear-gradient(128deg, rgba(243, 238, 255, 0.20) -3.14%, rgba(132, 92, 228, 0.20) 103.78%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px',
      boxSizing: 'border-box'
    }}>
      <Image 
        src={src} 
        alt={alt} 
        width={32} 
        height={32}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );

  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden" style={{
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box'
      }}>
        {/* タイトル */}
        <h2 style={{
          alignSelf: 'stretch',
          color: '#000',
          textAlign: 'center',
          fontFamily: '"Noto Sans JP"',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          margin: 0,
          marginBottom: '40px'
        }}>
          Omakase.ai活用例
        </h2>

        {/* カードコンテナ */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* カード1 - clock */}
          <UseCaseCard
            icon={<IconWrapper src="/images/common/clock.png" alt="時計アイコン" />}
            title="営業時間外の問い合わせ"
            description="夜間・土日の問い合わせもAIだから即時対応可能。24時間体制で「営業時間外だから返せない」を0にし、機会損失を防ぎます。"
            profileImage={{
              src: "/images/common/ex_clinic_icon.png",
              alt: "クリニック担当者"
            }}
            profileTitle="クリニック"
            profileDescription="深夜や休日に薬の処方に関しての問い合わせが多く、これまで人が対応していたが自動化したかった。オンライン診察のような本格的なツールではなく、簡単に導入できて良い。"
          />

          {/* カード2 - chat */}
          <UseCaseCard
            icon={<IconWrapper src="/images/common/chat.png" alt="チャットアイコン" />}
            title="よく聞かれる質問（FAQ）"
            description="よくある質問はAIがすぐに回答し、対応工数を削減。問い合わせ量が多い時間帯でも、安定した対応が可能に。価値の高い業務へリソースを集中できます。"
            profileImage={{
              src: "/images/common/ex_maker_icon.png",
              alt: "メーカー担当者"
            }}
            profileTitle="メーカー"
            profileDescription="日頃の問い合わせは、マニュアルベースの内容が多く、人で対応するより自動化をしたかった。また、1つ1つ想定される質問/回答内容を登録する手間を省きたかった。"
          />

          {/* カード3 - cart */}
          <UseCaseCard
            icon={<IconWrapper src="/images/common/cart.png" alt="カートアイコン" />}
            title="購入・予約前の不安解消"
            description="いくら文章や動画で説明しても、顧客が迷っているポイントは千差万別。Omakase.aiは自然な会話の流れで顧客の本当に知りたい情報を聞き出し、不安を解消してあげることができます。"
            profileImage={{
              src: "/images/common/ex_consulting_icon.png",
              alt: "コンサルティング会社担当者"
            }}
            profileTitle="コンサルティング会社"
            profileDescription="商材が複雑で、わかりづらく、サイトの説明だけでは完結できなかった。接客のような自動対応にすることで、サイトのみで顧客が商材を理解し、CVするようになった。"
          />

          {/* カード4 - bag */}
          <UseCaseCard
            icon={<IconWrapper src="/images/common/bag.png" alt="バッグアイコン" />}
            title="レコメンデーション"
            description="商品の違いがわかりづらかったり、商材が多く、顧客では判断が難しいサイトでも、実際の会話を通してAIが自動で商品を選定し、レコメンデーション。比較や不安解消も行うので、さらにコンバージョン確度があがります。"
            profileImage={{
              src: "/images/common/ex_ec_icon.png",
              alt: "ECサイト担当者"
            }}
            profileTitle="ECサイト"
            profileDescription="商材の数が多く、お客様自身では絞り込みが難しく離脱してしまうのが課題だったが、対話を通して適切な商品をレコメンドしてくれるので購入に繋がっている。"
          />
        </div>

        {/* 4つ目のカードの下60px */}
        <div style={{ height: '60px' }} />
      </section>

      {/* PC版 */}
      <section className="hidden md:flex w-full justify-center" style={{ paddingBottom: '120px' }}>
        <div className="w-full md:max-w-[1440px]" style={{
          paddingRight: '120px',
          paddingLeft: '120px'
        }}>
          <div style={{
            display: 'flex',
            paddingTop: '20px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '60px',
            alignSelf: 'stretch'
          }}>
            {/* タイトル */}
            <h2 style={{
              alignSelf: 'stretch',
              color: '#000',
              textAlign: 'center',
              fontFamily: '"Noto Sans JP"',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              margin: 0,
              padding: 0
            }}>
              Omakase.ai活用例
            </h2>
            
            {/* カード4つを入れる親 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
              alignSelf: 'stretch'
            }}>
              {/* 上段：2つ横並び */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                alignSelf: 'stretch'
              }}>
                {/* カード1 - clock */}
                <UseCaseCard
                  isPC={true}
                  icon={<IconWrapper src="/images/common/clock.png" alt="時計アイコン" />}
                  title="営業時間外の問い合わせ"
                  description="夜間・土日の問い合わせもAIだから即時対応可能。時間体制で「営業時間外だから返せない」を0にし、機会損失を防ぎます。"
                  profileImage={{
                    src: "/images/common/ex_clinic_icon.png",
                    alt: "クリニック担当者"
                  }}
                  profileTitle="クリニック"
                  profileDescription="深夜や休日に薬の処方に関しての問い合わせが多く、これまで人が対応していたが自動化したかった。オンライン診察のような本格的なツールではなく、簡単に導入できて良い。"
                />

                {/* カード2 - chat */}
                <UseCaseCard
                  isPC={true}
                  icon={<IconWrapper src="/images/common/chat.png" alt="チャットアイコン" />}
                  title="よく聞かれる質問（FAQ）"
                  description="よくある質問はAIがすぐに回答し、対応工数を削減。問い合わせ量が多い時間帯でも、安定した対応が可能に。価値の高い業務へリソースを集中できます。"
                  profileImage={{
                    src: "/images/common/ex_maker_icon.png",
                    alt: "メーカー担当者"
                  }}
                  profileTitle="メーカー"
                  profileDescription="日頃の問い合わせは、マニュアルベースの内容が多く、人で対応するより自動化をしたかった。また、1つ1つ想定される質問/回答内容を登録する手間を省きたかった。"
                />
              </div>
              
              {/* 下段：2つ横並び */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                alignSelf: 'stretch'
              }}>
                {/* カード3 - cart */}
                <UseCaseCard
                  isPC={true}
                  icon={<IconWrapper src="/images/common/cart.png" alt="カートアイコン" />}
                  title="購入・予約前の不安解消"
                  description="いくら文章や動画で説明しても、顧客が迷っているポイントは千差万別。Omakase.aiは自然な会話の流れで顧客の本当に知りたい情報を聞き出し、不安を解消してあげることができます。"
                  profileImage={{
                    src: "/images/common/ex_consulting_icon.png",
                    alt: "コンサルティング会社担当者"
                  }}
                  profileTitle="コンサルティング会社"
                  profileDescription="商材が複雑で、わかりづらく、サイトの説明だけでは完結できなかった。接客のような自動対応にすることで、サイトのみで顧客が商材を理解し、CVするようになった。"
                />

                {/* カード4 - bag */}
                <UseCaseCard
                  isPC={true}
                  icon={<IconWrapper src="/images/common/bag.png" alt="バッグアイコン" />}
                  title="レコメンデーション"
                  description="商品の違いがわかりづらかったり、商材が多く、顧客では判断が難しいサイトでも、実際の会話を通してAIが自動で商品を選定し、レコメンデーション。比較や不安解消も行うので、さらにコンバージョン確度があがります。"
                  profileImage={{
                    src: "/images/common/ex_ec_icon.png",
                    alt: "ECサイト担当者"
                  }}
                  profileTitle="ECサイト"
                  profileDescription="商材の数が多く、お客様自身では絞り込みが難しく離脱してしまうのが課題だったが、対話を通して適切な商品をレコメンドしてくれるので購入に繋がっている。"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}