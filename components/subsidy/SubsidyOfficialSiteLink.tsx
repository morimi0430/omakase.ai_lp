import { subsidyDesign as D } from './designTokens';

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M9 1h4v4M13 1L7 7M6 2H2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8"
        stroke="#555"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OFFICIAL_SITE_HREF = 'https://it-shien.smrj.go.jp/';
const OFFICIAL_SITE_LABEL = 'デジタル化・AI導入補助金公式サイト';

export type SubsidyOfficialSiteLinkProps = {
  /** ラッパーに付ける margin-bottom（px）。未指定なら付けない。 */
  marginBottom?: number;
};

/** デジタル化・AI導入補助金（旧IT導入補助金）とは（SubsidyOverview）と同じスタイルの公式サイトリンク。 */
export default function SubsidyOfficialSiteLink({ marginBottom }: SubsidyOfficialSiteLinkProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        ...(marginBottom != null ? { marginBottom } : {}),
      }}
    >
      <a
        href={OFFICIAL_SITE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxSizing: 'border-box',
          display: 'inline-flex',
          width: 304,
          maxWidth: '100%',
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '10px 20px',
          borderRadius: D.radiusPill,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: D.border,
          background: D.bgWhite,
          color: D.textBody,
          fontSize: 13,
          fontWeight: 600,
          fontFamily: D.fontNoto,
          textDecoration: 'none',
        }}
      >
        {OFFICIAL_SITE_LABEL}
        <ExternalLinkIcon />
      </a>
    </div>
  );
}
