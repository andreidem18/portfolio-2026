"use client";

import { useLocale, useTranslations } from "next-intl";
import { techsByCategory } from "../data/techStack.data";
import { useStackAnimations, useTitleAnimations } from "../hooks";
import { TechCard } from "./TechCard";

export const MyStackSection = () => {
  const t = useTranslations("techStack");
  const locale = useLocale();
  const { titleRef } = useTitleAnimations();
  const { sectionRef, cardsContainerRef } = useStackAnimations({ titleRef });
  return (
    <section
      ref={sectionRef}
      className="min-h-dvh bg-brand text-white relative overflow-hidden"
      id="stack"
    >
      <div className="max-w-6xl mx-auto py-20 px-10 min-h-dvh flex flex-col">
        <h2
          className="text-[clamp(1.5rem,3.2vw,3rem)] leading-[110%] "
          ref={titleRef}
          key={locale}
        >
          {t.rich("title", {
            bold: (chunks) => (
              <>
                <span className="font-bold">{chunks}</span>
                <br />
              </>
            ),
          })}
        </h2>
        <div
          ref={cardsContainerRef}
          className="flex flex-wrap justify-center items-stretch gap-4 pt-5 grow"
        >
          {techsByCategory.map((category) => (
            <TechCard category={category} key={category.name} />
          ))}
        </div>
      </div>
      <div className="bg-white/20 size-60 rounded-full absolute top-40 -left-20 circle-background"></div>
      <div className="bg-white/35 size-90 rounded-full absolute bottom-10 -right-30 circle-background"></div>
    </section>
  );
};
