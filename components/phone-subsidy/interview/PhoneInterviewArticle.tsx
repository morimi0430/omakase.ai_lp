"use client";

import { useState } from "react";
import type { PhoneInterviewDetail } from "@/lib/phone-interviews";
import InterviewCTAButtons from "@/components/InterviewCTAButtons";
import CTA from "@/components/CTA";
import { phoneDesign } from "../tokens";
import "./phone-interview.css";

/**
 * ZEALS case blog（NOVA記事）構造・タイポ準拠
 * @see https://zeals.ai/jp/case/blog/omakase-story-nova/
 */
export default function PhoneInterviewArticle({
  interview,
}: {
  interview: PhoneInterviewDetail;
}) {
  const [tocOpen, setTocOpen] = useState(false);
  const accent = phoneDesign.primary;

  const afterTocImage = interview.leadImage;
  const showHeroBeforeToc = !interview.leadImage && !!interview.image;

  return (
    <div className="phone-interview">
      <div className="phone-interview__pad">
        <h1 className="phone-interview__title">{interview.title}</h1>
      </div>

      {showHeroBeforeToc && (
        <figure className="phone-interview__main-img">
          <img src={interview.image} alt={interview.companyName} />
        </figure>
      )}

      <div className="phone-interview__pad">
        {/* Contents ナビ（ZEALS #toc） */}
        <nav className="phone-interview__toc" aria-label="目次">
          <h2
            className={`phone-interview__toc-heading${tocOpen ? " is-open" : ""}`}
            onClick={() => setTocOpen((v) => !v)}
          >
            Contents
          </h2>
          <ol
            className={`phone-interview__toc-list${tocOpen ? " is-open" : ""}`}
          >
            {interview.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        {afterTocImage && (
          <figure className="phone-interview__inline-img">
            <img src={afterTocImage} alt={interview.companyName} />
          </figure>
        )}

        <div className="phone-interview__content">
          {/* Contents 下は副題のみ（タイトルは上部 H1 で表示済み） */}
          <p className="phone-interview__lede">{interview.subtitle}</p>

          <p className="phone-interview__attribution">{interview.attribution}</p>

          {interview.lead.map((para, i) => (
            <p key={`lead-${i}`}>{para}</p>
          ))}

          {/* リード直後CTA（既存インタビューと同じボタンデザイン） */}
          <div className="phone-interview__cta-buttons">
            <InterviewCTAButtons accentColor={accent} />
            <div className="hidden md:block">
              <CTA buttonsOnly accentColor={accent} />
            </div>
          </div>

          {interview.sections.map((section, sectionIndex) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.imageAfterHeading && (
                <figure className="phone-interview__inline-img">
                  <img
                    src={section.imageAfterHeading}
                    alt=""
                  />
                </figure>
              )}
              {section.blocks.map((block, bi) => {
                if (block.type === "question") {
                  return (
                    <p key={bi} className="phone-interview__question">
                      ーーー{block.text}
                    </p>
                  );
                }

                if (block.type === "closing") {
                  return block.paragraphs.map((para, pi) => (
                    <p key={`${bi}-${pi}`}>{para}</p>
                  ));
                }

                return block.paragraphs.map((para, pi) => (
                  <p key={`${bi}-${pi}`}>
                    {pi === 0 && block.speaker ? (
                      <>
                        <span className="phone-interview__speaker">
                          {block.speaker}：
                        </span>
                        <br />
                        {para}
                      </>
                    ) : (
                      para
                    )}
                  </p>
                ));
              })}

              {/* 2セクション目の直後にもCTA（既存インタビューと同じ配置） */}
              {sectionIndex === 1 && (
                <div className="phone-interview__cta-buttons">
                  <InterviewCTAButtons accentColor={accent} />
                  <div className="hidden md:block">
                    <CTA buttonsOnly accentColor={accent} />
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* 記事末尾CTA */}
          <div className="phone-interview__cta-buttons">
            <InterviewCTAButtons accentColor={accent} />
            <div className="hidden md:block">
              <CTA buttonsOnly accentColor={accent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
