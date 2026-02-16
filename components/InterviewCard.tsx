"use client";

import { useState } from "react";
import Link from "next/link";

export type InterviewCardItem = {
  slug?: string;
  image: string;
  title: string;
  companyName: string;
};

interface InterviewCardProps {
  slug?: string;
  image: string;
  title: string;
  companyName: string;
}

export default function InterviewCard({ slug, image, title, companyName }: InterviewCardProps) {
  const [imgError, setImgError] = useState(false);

  const content = (
    <>
      {/* 画像 */}
      <div
        className="w-full flex-shrink-0 overflow-hidden rounded-lg"
        style={{ aspectRatio: "16/10", background: "#e5e7eb" }}
      >
        {!imgError ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-2xl md:text-4xl"
            style={{ background: "#e5e7eb" }}
          >
            🏢
          </div>
        )}
      </div>
      {/* 画像の下：惹かれるタイトル（大きめの文字）＋企業名 */}
      <div className="flex flex-col gap-2" style={{ paddingTop: "16px" }}>
        <h3
          style={{
            margin: 0,
            fontFamily: '"Noto Sans JP"',
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#000",
          }}
          className="md:text-[22px]"
        >
          {title.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: '"Noto Sans JP"',
            fontSize: "12px",
            fontWeight: 500,
            color: "#6b7280",
          }}
        >
          {companyName}
        </p>
      </div>
    </>
  );

  if (slug) {
    return (
      <Link
        href={`/interview/${slug}`}
        className="w-full flex flex-col no-underline text-inherit hover:opacity-90 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return <article className="w-full flex flex-col">{content}</article>;
}
