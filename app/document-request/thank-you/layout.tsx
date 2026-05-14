import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせを受け付けました | Omakase AI",
};

export default function DocumentRequestThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
