import Image from 'next/image';
import { Container } from './Container';
import { subsidyDesign as D } from './subsidy/designTokens';
import SubsidyDeadlineBanner from './SubsidyDeadlineBanner';
import SubsidyOfficialSiteLink from './subsidy/SubsidyOfficialSiteLink';
import SubsidySectionHeading from './subsidy/SubsidySectionHeading';

/** PC「申請から入金までの流れ」基本文字（またぎ紫・見出し等）／説明・箇条は 12 */
const PC_FLOW_BODY_PX = 14;
const PC_FLOW_CAPTION_PX = 12;

function CheckCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="9" fill="#F8FF6C" />
      <path d="M5 9L7.5 11.5L13 6" stroke={D.purple} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** またぎ紫バー（デザイン） */
const PURPLE_SPAN_BAR_W = 56;
const PURPLE_SPAN_BAR_H = 262;
const PURPLE_SPAN_RADIUS = 6;
const PURPLE_SPAN_PAD = 12;

/** 縦書き紫カード（縦バーは minBarHeight / heightFill で高さを揃える） */
function PurpleCard({
  text,
  check,
  wide,
  minBarHeight,
  heightFill,
}: {
  text: string;
  check?: boolean;
  wide?: boolean;
  /** 縦書きバー用の最小高さ（px）。未指定時は文字量に任せる */
  minBarHeight?: number;
  /** 親の伸びに合わせて縦いっぱい（ZEALS＋お客様の2行またぎ用） */
  heightFill?: boolean;
}) {
  return (
    <div
      style={{
        position: 'relative',
        background: D.purpleCardGradient,
        borderRadius: heightFill ? PURPLE_SPAN_RADIUS : 8,
        padding: wide ? '12px 16px' : heightFill ? PURPLE_SPAN_PAD : '12px 10px',
        display: 'flex',
        flexDirection: wide ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: heightFill && check && !wide ? 8 : heightFill ? 0 : check && !wide ? 6 : 0,
        minWidth: wide ? 'auto' : heightFill ? PURPLE_SPAN_BAR_W : 52,
        maxWidth: heightFill ? PURPLE_SPAN_BAR_W : undefined,
        flex: wide ? '1 1 auto' : heightFill ? '0 0 auto' : '0 0 auto',
        opacity: 1,
        ...(wide
          ? {}
          : heightFill
            ? {
                alignSelf: 'stretch',
                width: PURPLE_SPAN_BAR_W,
                height: '100%',
                minHeight: 0,
                maxHeight: 'none',
                boxSizing: 'border-box',
              }
            : minBarHeight != null
              ? {
                  minHeight: minBarHeight,
                  alignSelf: 'stretch',
                }
              : {}),
      }}
    >
      {check && !wide && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CheckCircle />
        </div>
      )}
      {check && wide && (
        <div style={{ position: 'absolute', top: -8, right: -8 }}>
          <CheckCircle />
        </div>
      )}
      <span
        style={{
          fontSize: PC_FLOW_BODY_PX,
          fontWeight: 700,
          color: '#fff',
          fontFamily: D.fontNoto,
          writingMode: wide ? 'horizontal-tb' : 'vertical-rl',
          textOrientation: 'mixed',
          lineHeight: wide ? '145%' : 1.45,
          textAlign: 'center',
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ────────────────── PC レイアウト（横軸＝時間、縦軸＝アクター） ────────────────── */
function PcFlow() {
  /** ZEALS ロゴ表示サイズ（デザイン値に準拠） */
  const zealsLogoW = 132;
  const zealsLogoH = 53;
  /** データ行セルの上下余白（8px 系で統一） */
  const cellVPad = 8;
  /** またぎ紫262 + 上下パディングを2行で割り、カード行のトラック高にする */
  const pcFlowBarSpanTotalPx = PURPLE_SPAN_BAR_H + cellVPad * 2;
  const pcFlowDataRowTrackPx = pcFlowBarSpanTotalPx / 2;
  /** 各行セル内でカードが占める高さ（セル上下パディング除く）＝全カードの統一高さ */
  const pcFlowCardLaneInnerH = pcFlowDataRowTrackPx - cellVPad * 2;
  /** PCフロー白／薄紫カード：列2・4・7で同一の幅・高さ */
  const pcFlowCardW = 200;
  const pcFlowCardH = pcFlowCardLaneInnerH;
  /** 打ち合わせ列：左12px + カード幅（カードが column-gap に食い込まないように） */
  const briefColLead = 12;
  const briefColTrackW = briefColLead + pcFlowCardW;
  const pcFlowCardPad = 12;
  const pcFlowCardRadius = 6;
  const pcFlowCardGap = 8;
  /** 箇条書きの li 同士は広げない（見出し〜リストは pcFlowCardGap） */
  const pcFlowListItemGap = 0;
  /** 期間行＋またぎブロック（278px）＋余白 */
  const pcFlowShellH = 352;
  /** 交付申請・交付決定の2本の紫バー同士の間隔（デザイン固定） */
  const deliveryPairGap = 10;
  /** 行3左ラベル「中小企業・…」のおおよそのブロック高（2行・14px/150%）— カード中央合わせ用 */
  const customerActorLabelApproxH = 45;
  /** カード〜紫棒の間。12px だと列合計+gap が maxWidth:1200 内幅を僅かに超え右欠けするため 7px */
  const pcFlowCardBarGutter = 7;
  /** 打ち合わせ／申請準備列：左余白（グリッド列幅に含む） */
  const padBriefCardCol = { paddingLeft: briefColLead, paddingRight: 0 };
  /** 交付〜効果報告の各データ列：横パディングなし（列間は pcFlowCardBarGutter） */
  const padFlowLaneH = { paddingLeft: 0, paddingRight: 0 };
  /** 「効果報告」紫バーだけフル高より低く（全高の半分より少し高い） */
  const pcFlowEffectReportBarFullH = 2 * pcFlowDataRowTrackPx - 2 * cellVPad;
  const pcFlowEffectReportBarH = Math.round(pcFlowEffectReportBarFullH * 0.64);
  /** 交付申請・交付決定2本（横パディングなし） */
  const deliveryPairGridColMin = PURPLE_SPAN_BAR_W + deliveryPairGap + PURPLE_SPAN_BAR_W;
  /** ZEALS行・お客様行を区切る点線に対し上下同じだけ寄せる（行2・行3のセル共通） */
  const pcFlowPullTowardDividerPx = 10;
  const pcFlowPullTowardDivider: React.CSSProperties = { marginTop: -pcFlowPullTowardDividerPx };
  /** 上段スケジュール（時計と文言は横並び・改行で分離しない） */
  const scheduleLabelColor = '#9C9C9C';
  const scheduleHeaderRow: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 0,
    boxSizing: 'border-box',
    textAlign: 'left',
    minWidth: 0,
    overflow: 'hidden',
  };
  const scheduleLabelText: React.CSSProperties = {
    flex: '0 1 auto',
    fontSize: PC_FLOW_CAPTION_PX,
    fontWeight: 700,
    color: scheduleLabelColor,
    fontFamily: D.fontNoto,
    lineHeight: '140%',
    whiteSpace: 'nowrap',
  };
  const scheduleHeaderWithLead: React.CSSProperties = {
    ...scheduleHeaderRow,
    paddingLeft: briefColLead,
  };
  const scheduleHeaderFlush: React.CSSProperties = {
    ...scheduleHeaderRow,
    paddingLeft: 0,
  };

  const periods = [
    { label: '今すぐ〜7月中旬' },
    { label: '締切：7月21日(火) 17:00〜' },
    { label: '8月以降〜' },
  ];

  const pcFlowCardBase: React.CSSProperties = {
    width: pcFlowCardW,
    height: pcFlowCardH,
    minWidth: 0,
    minHeight: pcFlowCardH,
    maxHeight: pcFlowCardH,
    flex: '0 0 auto',
    boxSizing: 'border-box',
    borderRadius: pcFlowCardRadius,
    padding: pcFlowCardPad,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: pcFlowCardGap,
    overflow: 'hidden',
    textAlign: 'left',
  };

  function ClockIcon({ muted }: { muted?: boolean }) {
    const stroke = muted ? scheduleLabelColor : D.purple;
    return (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="7" cy="7" r="6" stroke={stroke} strokeWidth="1.5" />
        <path d="M7 4v3l2 1.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  /** 薄紫の親：固定高さ。内側グリッドは残り高さを 2 行で等分 */
  const pcFlowShell: React.CSSProperties = {
    width: '100%',
    height: pcFlowShellH,
    maxHeight: pcFlowShellH,
    boxSizing: 'border-box',
    background: D.bgTint,
    padding: '8px 16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={pcFlowShell}>
      {/* 期間ヘッダー＋ZEALS／お客様を同一グリッド。紫バーは列ごとに2行またぎ */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateColumns: `148px ${briefColTrackW}px ${deliveryPairGridColMin}px ${pcFlowCardW}px 56px 56px ${pcFlowCardW}px 56px 56px`,
          gridTemplateRows: `auto ${pcFlowDataRowTrackPx}px ${pcFlowDataRowTrackPx}px`,
          columnGap: pcFlowCardBarGutter,
          rowGap: 0,
          alignItems: 'stretch',
        }}
      >
        {/* ─ 行1: 期間ラベル ─ */}
        <div
          style={{
            gridColumn: 1,
            gridRow: 1,
          }}
        />
        <div
          style={{
            gridColumn: 2,
            gridRow: 1,
            ...scheduleHeaderWithLead,
          }}
        >
          <ClockIcon muted />
          <span style={scheduleLabelText}>{periods[0].label}</span>
        </div>
        <div
          style={{
            gridColumn: '3 / 5',
            gridRow: 1,
            ...scheduleHeaderFlush,
          }}
        >
          <ClockIcon muted />
          <span style={scheduleLabelText}>{periods[1].label}</span>
        </div>
        <div
          style={{
            gridColumn: '5 / 7',
            gridRow: 1,
            ...scheduleHeaderFlush,
          }}
        >
          <ClockIcon muted />
          <span style={scheduleLabelText}>{periods[2].label}</span>
        </div>

        {/* ZEALS / お客様の境：列をまたいで途切れない点線（最背面・行2の下端） */}
        <div
          aria-hidden
          style={{
            gridColumn: '1 / -1',
            gridRow: 2,
            ...pcFlowPullTowardDivider,
            position: 'relative',
            zIndex: 0,
            minHeight: 0,
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 0,
              borderBottom: `1px dashed ${D.border}`,
            }}
          />
        </div>

        {/* ─ 行2: ZEALS ─ */}
        <div
          style={{
            gridColumn: 1,
            gridRow: 2,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            paddingTop: cellVPad + (pcFlowCardLaneInnerH - zealsLogoH) / 2,
            paddingBottom: cellVPad,
            paddingLeft: 8,
            paddingRight: 8,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Image
            src="/images/industries/subsidy/zeals.png"
            alt="ZEALS"
            width={zealsLogoW}
            height={zealsLogoH}
            style={{ width: zealsLogoW, height: zealsLogoH, objectFit: 'contain' }}
          />
        </div>
        <div
          style={{
            gridColumn: 2,
            gridRow: 2,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padBriefCardCol,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            justifySelf: 'stretch',
          }}
        >
          <div
            style={{
              ...pcFlowCardBase,
              alignSelf: 'flex-start',
              background: D.bgWhite,
            }}
          >
            <p
              style={{
                fontSize: PC_FLOW_BODY_PX,
                fontWeight: 700,
                color: D.textBody,
                fontFamily: D.fontNoto,
                margin: 0,
                lineHeight: '140%',
                textAlign: 'left',
              }}
            >
              打ち合わせ
            </p>
            <p
              style={{
                fontSize: PC_FLOW_CAPTION_PX,
                color: D.text,
                fontFamily: D.fontNoto,
                margin: 0,
                lineHeight: '140%',
                textAlign: 'left',
              }}
            >
              補助金制度のルールを
              <br />
              ZEALSと確認します
            </p>
          </div>
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: '2 / span 2',
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            columnGap: deliveryPairGap,
            minWidth: 0,
          }}
        >
          <PurpleCard text="交付申請" heightFill minBarHeight={0} />
          <PurpleCard text="交付決定" check heightFill minBarHeight={0} />
        </div>
        <div
          style={{
            gridColumn: 4,
            gridRow: 2,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <div
            style={{
              ...pcFlowCardBase,
              alignSelf: 'flex-start',
              background: D.bgWhite,
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: pcFlowListItemGap,
              }}
            >
              {['・契約', '・Omakase AIの導入', '・サポート'].map((t) => (
                <li
                  key={t}
                  style={{
                    fontSize: PC_FLOW_BODY_PX,
                    fontWeight: 700,
                    color: D.textBody,
                    fontFamily: D.fontNoto,
                    lineHeight: '160%',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                  }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            gridColumn: 5,
            gridRow: '2 / span 2',
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <PurpleCard text="事業実績報告" heightFill minBarHeight={0} />
        </div>
        <div
          style={{
            gridColumn: 6,
            gridRow: '2 / span 2',
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <PurpleCard text="補助金額決定" check heightFill minBarHeight={0} />
        </div>
        <div
          style={{
            gridColumn: 7,
            gridRow: 2,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <div
            style={{
              ...pcFlowCardBase,
              alignSelf: 'flex-start',
              background: D.bgWhite,
            }}
          >
            <p
              style={{
                fontSize: PC_FLOW_BODY_PX,
                fontWeight: 700,
                color: D.textBody,
                fontFamily: D.fontNoto,
                margin: 0,
                lineHeight: '150%',
                textAlign: 'left',
              }}
            >
              運用サポート
            </p>
          </div>
        </div>
        <div
          style={{
            gridColumn: 8,
            gridRow: '2 / span 2',
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <PurpleCard text="補助金交付" check heightFill minBarHeight={0} />
        </div>
        <div
          style={{
            gridColumn: 9,
            gridRow: '2 / span 2',
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <div
            style={{
              height: pcFlowEffectReportBarH,
              width: PURPLE_SPAN_BAR_W,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              minHeight: 0,
            }}
          >
            <PurpleCard text="効果報告" heightFill minBarHeight={0} />
          </div>
        </div>

        {/* ─ 行3: お客様 ─ */}
        <div
          style={{
            gridColumn: 1,
            gridRow: 3,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            paddingLeft: 8,
            paddingRight: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <p
            style={{
              fontSize: PC_FLOW_BODY_PX,
              fontWeight: 700,
              color: D.textBody,
              fontFamily: D.fontNoto,
              margin: 0,
              marginBottom: Math.max(0, pcFlowCardLaneInnerH / 2 - customerActorLabelApproxH / 2),
              lineHeight: '150%',
              textAlign: 'center',
            }}
          >
            中小企業・
            <br />
            小規模事業者様
          </p>
        </div>
        <div
          style={{
            gridColumn: 2,
            gridRow: 3,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padBriefCardCol,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            justifySelf: 'stretch',
          }}
        >
          <div
            style={{
              ...pcFlowCardBase,
              alignSelf: 'flex-start',
              background: D.subsidyCustomerFlowCardBg,
            }}
          >
            <p
              style={{
                fontSize: PC_FLOW_BODY_PX,
                fontWeight: 700,
                color: D.subsidyCustomerFlowCardText,
                fontFamily: D.fontNoto,
                margin: 0,
                textAlign: 'left',
              }}
            >
              申請準備
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: pcFlowListItemGap,
              }}
            >
              <li
                style={{
                  fontSize: PC_FLOW_CAPTION_PX,
                  color: D.subsidyCustomerFlowCardText,
                  fontFamily: D.fontNoto,
                  lineHeight: '155%',
                  fontWeight: 500,
                }}
              >
                ・GビズIDの取得
              </li>
              <li
                style={{
                  fontSize: PC_FLOW_CAPTION_PX,
                  color: D.subsidyCustomerFlowCardText,
                  fontFamily: D.fontNoto,
                  lineHeight: '155%',
                  fontWeight: 500,
                }}
              >
                ・SECURITY ACTIONの宣言
                <br />
                （目安2〜3週間）
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            gridColumn: 4,
            gridRow: 3,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <div
            style={{
              ...pcFlowCardBase,
              alignSelf: 'flex-start',
              background: D.subsidyCustomerFlowCardBg,
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: pcFlowListItemGap,
              }}
            >
              {['・Omakase AIの導入', '・支払い完了'].map((t) => (
                <li
                  key={t}
                  style={{
                    fontSize: PC_FLOW_BODY_PX,
                    color: D.subsidyCustomerFlowCardText,
                    fontFamily: D.fontNoto,
                    lineHeight: '155%',
                    fontWeight: 500,
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                  }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            gridColumn: 7,
            gridRow: 3,
            ...pcFlowPullTowardDivider,
            boxSizing: 'border-box',
            height: '100%',
            ...padFlowLaneH,
            paddingTop: cellVPad,
            paddingBottom: cellVPad,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <div
            style={{
              ...pcFlowCardBase,
              alignSelf: 'flex-start',
              background: D.subsidyCustomerFlowCardBg,
            }}
          >
            <p
              style={{
                fontSize: PC_FLOW_BODY_PX,
                fontWeight: 700,
                color: D.subsidyCustomerFlowCardText,
                fontFamily: D.fontNoto,
                margin: 0,
                textAlign: 'left',
              }}
            >
              補助金交付手続き
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────── モバイル レイアウト（フロー図画像） ────────────────── */
const MOBILE_FLOW_IMG_W = 939;
const MOBILE_FLOW_IMG_H = 2861;

function MobileFlow() {
  return (
    <div style={{ width: '100%', maxWidth: MOBILE_FLOW_IMG_W, margin: '0 auto' }}>
      <Image
        src="/images/industries/subsidy/flow.png"
        alt="申請から入金までの流れ。時期ごとにZEALSの対応とお客様の手続きが示されています。"
        width={MOBILE_FLOW_IMG_W}
        height={MOBILE_FLOW_IMG_H}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: 8,
        }}
      />
    </div>
  );
}

/* ────────────────── メインコンポーネント ────────────────── */
export default function SubsidySteps() {
  return (
    <section
      className="w-full"
      style={{ paddingTop: 64, paddingBottom: 80, background: '#F8F8FC' }}
    >
      <Container>
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
          <SubsidySectionHeading title="申請から入金までの流れ" oneLineMobile />

          {/* モバイル */}
          <div className="block md:hidden" style={{ marginBottom: 32 }}>
            <MobileFlow />
          </div>

          {/* PC */}
          <div className="hidden md:block" style={{ marginBottom: 44 }}>
            <PcFlow />
          </div>

          <SubsidyOfficialSiteLink marginBottom={36} />

          <SubsidyDeadlineBanner />
        </div>
      </Container>
    </section>
  );
}
