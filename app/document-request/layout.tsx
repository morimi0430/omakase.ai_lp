import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Omakase AI",
  description:
    "Omakase AI に関するお問い合わせはこちらのフォームから承ります。",
};

export default function DocumentRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
