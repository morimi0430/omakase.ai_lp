import SectionTitle from "./SectionTitle";
import FeatureCard, { FeatureCardPC } from "./FeatureCard";

export default function Features() {
  return (
    <>
      {/* モバイル版 */}
      <section className="w-full md:hidden" style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '16px', paddingRight: '16px', background: '#F8F6FF' }}>
        <SectionTitle title="Omakase.aiの特徴" isMobile={true} />

        {/* 60pxのスペース */}
        <div style={{ height: '60px' }} />

        {/* コンテンツエリア */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <FeatureCard 
            imagePath="/images/common/features01_image.png"
            tagText="01" 
            titleText="音声&チャットでのハイブリッド接客" 
            description1="実際に会話しているかのような音声接客モード" 
            description2="自由入力、回答ボタンでクイックに対応できるチャットモード" 
            detailText="まるでお店で接客を受けているかのように自然にコミュニケーションが取れる音声での接客。そして声が出せない状況ではチャットに切り替えることがボタン一つでできます。顧客がどんな状況でも機会を損失しません。" 
            footerLabel="ECサイト(食品)" 
            footerText="音声だけでは顧客体験が限られてしまう懸念があったが、チャットも同時に使えると聞いて安心。取りこぼしがなくお得なツールだと思った。" 
            avatarImage="/images/common/f_ec_icon.png"
            imagePaddingX={32}
          />
          <FeatureCard 
            imagePath="/images/common/features02_image.png"
            tagText="02" 
            titleText="圧倒的なコストパフォーマンス！" 
            description1="初期費用0円！開発費用はかかりません！" 
            description2="プランは3つ。月額5,980円〜利用可能。" 
            detailText="さらに初回登録から7日間は無料で利用でき、リスクなくAIエージェントにトライすることができます。" 
            footerLabel="フィットネス" 
            footerText="うまくワークするかわからない中、まずは無料スタートで、すぐ始めることができるので安心だった。"
            avatarImage="/images/common/f_fitness_icon.png"
            imagePaddingX={32}
          />
          <FeatureCard 
            imagePath="/images/common/features03_image.png"
            tagText="03" 
            titleText="開発不要の簡単設定！" 
            description1="導入したいURLをいれるだけで完了！" 
            description2="AI学習もファイルアップロードで完結！" 
            detailText="導入したいサイトのURLを入れるだけで簡単に設定が完了。より細かいデザインの調整は直感的なUIから。AIの学習はファイルをアップロードすることで更新することが可能。ITに精通していなくても簡単に設定&運用が可能です。" 
            footerLabel="BtoBマーケティング" 
            footerText="登録時にURLを入れるだけでさっとくAIエージェントが起動したので驚いた！そのあとの微調整でわからないことは、サポートの方が丁寧に対応してくださったので安心でした。"
            avatarImage="/images/common/f_b2bmarketing_icon.png"
            imagePaddingX={16}
          />
          <FeatureCard 
            imagePath="/images/common/features04_image.png"
            tagText="04" 
            titleText="分析機能で顧客のインサイトをキャッチ！" 
            description1="パフォーマンスや分析結果をパッと見ることができる！" 
            description2="実際のお客様の生の声から隠れたインサイトをキャッチ！" 
            detailText="顧客との音声やチャットのデータは、すべて記録され、どんなやり取りがなされているのか閲覧することができます。さらに、重要なキーワードや傾向を自動で分析。会話データをもとに顧客リストを生成し、接客改善や販促施策に活用できます。" 
            footerLabel="家事代行サービス" 
            footerText="広告のクリック率やアンケートでは知ることのできない顧客の生の声がとても参考になる！これをもとに今後の打ち出し方を変えることになった。"
            avatarImage="/images/common/f_housekeeping_icon.png"
            imagePaddingX={16}
          />
        </div>
      </section>

      {/* PC版 */}
      <section className="hidden md:block w-full" style={{ paddingTop: '80px', paddingBottom: '100px', background: '#F8F6FF' }}>
        <SectionTitle title="Omakase.aiの特徴" isMobile={false} />
        
        {/* 80pxのスペース */}
        <div style={{ height: '80px' }} />
        
        {/* コンテンツエリア */}
        <div style={{
          display: 'flex',
          padding: '0 120px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          alignSelf: 'stretch'
        }}>
          <FeatureCardPC
            imagePath="/images/common/features01_image.png"
            tagText="01" 
            titleText="音声&チャットでのハイブリッド接客" 
            description1="実際に会話しているかのような音声接客モード" 
            description2="自由入力、回答ボタンでクイックに対応できるチャットモード" 
            detailText="まるでお店で接客を受けているかのように自然にコミュニケーションが取れる音声での接客。そして声が出せない状況ではチャットに切り替えることがボタン一つでできます。顧客がどんな状況でも機会を損失しません。" 
            footerLabel="ECサイト(食品)" 
            footerText="音声だけでは顧客体験が限られてしまう懸念があったが、チャットも同時に使えると聞いて安心。取りこぼしがなくお得なツールだと思った。" 
            avatarImage="/images/common/f_ec_icon.png"
            imagePaddingX={70}
          />
          
          <FeatureCardPC
            imagePath="/images/common/features02_image.png"
            tagText="02" 
            titleText="圧倒的なコストパフォーマンス！" 
            description1="初期費用0円！開発費用はかかりません！" 
            description2="プランは3つ。月額5,980円〜利用可能。" 
            detailText="さらに初回登録から7日間は無料で利用でき、リスクなくAIエージェントにトライすることができます。" 
            footerLabel="フィットネス" 
            footerText="うまくワークするかわからない中、まずは無料スタートで、すぐ始めることができるので安心だった。"
            avatarImage="/images/common/f_fitness_icon.png"
            imagePaddingX={70}
          />
          
          <FeatureCardPC
            imagePath="/images/common/features03_image.png"
            tagText="03" 
            titleText="開発不要の簡単設定！" 
            description1="導入したいURLをいれるだけで完了！" 
            description2="AI学習もファイルアップロードで完結！" 
            detailText="導入したいサイトのURLを入れるだけで簡単に設定が完了。より細かいデザインの調整は直感的なUIから。AIの学習はファイルをアップロードすることで更新することが可能。ITに精通していなくても簡単に設定&運用が可能です。" 
            footerLabel="BtoBマーケティング" 
            footerText="登録時にURLを入れるだけでさっとくAIエージェントが起動したので驚いた！そのあとの微調整でわからないことは、サポートの方が丁寧に対応してくださったので安心でした。"
            avatarImage="/images/common/f_b2bmarketing_icon.png"
            imagePaddingX={35}
          />
          
          <FeatureCardPC
            imagePath="/images/common/features04_image.png"
            tagText="04" 
            titleText="分析機能で顧客のインサイトをキャッチ！" 
            description1="パフォーマンスや分析結果をパッと見ることができる！" 
            description2="実際のお客様の生の声から隠れたインサイトをキャッチ！" 
            detailText="顧客との音声やチャットのデータは、すべて記録され、どんなやり取りがなされているのか閲覧することができます。さらに、重要なキーワードや傾向を自動で分析。会話データをもとに顧客リストを生成し、接客改善や販促施策に活用できます。" 
            footerLabel="家事代行サービス" 
            footerText="広告のクリック率やアンケートでは知ることのできない顧客の生の声がとても参考になる！これをもとに今後の打ち出し方を変えることになった。"
            avatarImage="/images/common/f_housekeeping_icon.png"
            imagePaddingX={35}
          />
        </div>
      </section>
    </>
  );
}