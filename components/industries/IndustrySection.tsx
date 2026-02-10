"use client";

import { Container } from "@/components/Container";

/** 業界LP用のセクション骨組み。縦余白は 48 | 60 | 80 のみ（LP_CREATION_RULES §3）。横は Container に委ねる。 */
type PaddingVertical = 48 | 60 | 80;

interface IndustrySectionProps {
  children: React.ReactNode;
  /** セクションの上下パディング（px）。48, 60, 80 のいずれか */
  paddingVertical?: PaddingVertical;
  /** section に渡す追加の style（背景色など） */
  style?: React.CSSProperties;
  /** section に渡す className */
  className?: string;
  /** section の HTML 要素。デフォルトは "section" */
  as?: "section" | "header" | "footer";
}

export function IndustrySection({
  children,
  paddingVertical = 60,
  style,
  className,
  as: Tag = "section",
}: IndustrySectionProps) {
  return (
    <Tag
      className={className}
      style={{
        paddingTop: `${paddingVertical}px`,
        paddingBottom: `${paddingVertical}px`,
        ...style,
      }}
    >
      <Container>{children}</Container>
    </Tag>
  );
}
