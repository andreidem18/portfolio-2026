"use client";

import { useLocale, useTranslations } from "next-intl";
import { techsByCategory } from "../data/techStack.data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useTitleAnimations } from "../hooks";
import { TechCard } from "./TechCard";

export const MyStackSection = () => {
  const t = useTranslations("techStack");
  const locale = useLocale();
  const { titleRef } = useTitleAnimations();
  return (
    <section className="min-h-dvh bg-brand text-white">
      <div className="max-w-6xl mx-auto py-20 px-10 min-h-dvh flex flex-col">
        <h2 className="text-[clamp(1.5rem,3.2vw,3rem)] leading-[110%] " ref={titleRef} key={locale}>
          {t.rich("title", {
            bold: (chunks) => (
              <>
                <span className="font-bold">{chunks}</span>
                <br />
              </>
            ),
          })}
        </h2>
        <div className="flex flex-wrap justify-center items-stretch gap-4 pt-5 grow">
          {techsByCategory.map((category) => (
            <TechCard category={category} key={category.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
