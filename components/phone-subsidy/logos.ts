/** 導入実績ロゴ — /public/images/phone-subsidy/logos/ */

const LOGO_BASE = '/images/phone-subsidy/logos';

export type PhonePartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function logo(file: string, alt: string, width: number, height: number): PhonePartnerLogo {
  return { src: `${LOGO_BASE}/${file}`, alt, width, height };
}

/** 上段 — 右スクロール */
export const phonePartnerLogosTop: PhonePartnerLogo[] = [
  logo('sunstar.png', 'サンスター', 112, 20),
  logo('mizuho-bank.png', 'みずほ銀行', 62, 32),
  logo('saishunkan.png', '再春館製薬所', 166, 21),
  logo('lifull-homes.png', "LIFULL HOME'S", 60, 30),
  logo('sbi-ikiiki.png', 'SBI', 52, 40),
  logo('au-online-shop.png', 'au Online Shop', 48, 40),
  logo('oisix.png', 'Oisix', 74, 24),
  logo('cpa-excellent-partners.png', 'CPA', 50, 50),
  logo('koala.png', 'koala', 75, 21),
  logo('d-smartphone-loan.png', 'dスマホローン', 123, 23),
  logo('suntory.png', 'サントリー', 128, 19),
  logo('aeon.png', 'イオン', 52, 26),
  logo('rohto.png', 'ロート製薬', 58, 30),
  logo('smbc-card.png', '三井住友カード', 70, 30),
  logo('mitsui-fudosan.png', '三井不動産', 88, 26),
  logo('artnature.png', 'アートネイチャー', 149, 20),
  logo('loreal.png', "L'Oréal", 85, 28),
  logo('asahi.png', 'アサヒ', 64, 25),
  logo('kao.png', '花王', 66, 24),
  logo('attenir.png', 'アテニア', 119, 25),
  logo('zenb.png', 'ZENB', 83, 19),
  logo('resona.png', 'りそな銀行', 103, 25),
  logo('fukuoka-bank.png', '福岡銀行', 125, 22),
  logo('ntt-docomo.png', 'NTT docomo', 130, 24),
  logo('his.png', 'H.I.S.', 52, 20),
  logo('meiji-yasuda.png', '明治安田', 115, 26),
  logo('daigas-group.png', '大阪ガス', 61, 26),
  logo('so-net.png', 'So-net', 79, 26),
  logo('chubu-electric-power.png', '中部電力', 64, 30),
  logo('shiseido.png', '資生堂', 99, 26),
];

/** 下段 — 左スクロール */
export const phonePartnerLogosBottom: PhonePartnerLogo[] = [
  logo('nova.png', 'NOVA', 50, 50),
  logo('sms.png', 'SMS', 76, 26),
  logo('snow-brand-megmilk.png', '雪印メグミルク', 122, 32),
  logo('orbis.png', 'ORBIS', 77, 24),
  logo('daiichi-sankyo-healthcare.png', '第一三共ヘルスケア', 160, 25),
  logo('kirei-line-orthodontics.png', 'キレイライン矯正', 107, 26),
  logo('takara-leben.png', 'タカラレーベン', 134, 26),
  logo('gorilla-clinic.png', 'ゴリラクリニック', 156, 26),
  logo('amity.png', 'アミティー', 73, 50),
  logo('orix-life.png', 'オリックス生命', 116, 28),
  logo('irobot.png', 'iRobot', 85, 22),
  logo('hoosiers.png', 'Hoosiers', 80, 40),
  logo('caldo.png', 'CALDO', 99, 26),
  logo('tokyu-livable.png', '東急リバブル', 126, 26),
];
