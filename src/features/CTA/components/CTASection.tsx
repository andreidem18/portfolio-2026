"use client";

import { useLocale, useTranslations } from "next-intl";
import { CTAButton } from "./CTAButton";
import { useTitleAnimations } from "../hooks";

export const CTASection = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const { titleRef } = useTitleAnimations();

  return (
    <section className="flex p-10 lg:min-h-dvh" id="contact">
      <div className="border border-border grow flex flex-col rounded-4xl overflow-hidden">
        <div className="p-5 max-w-200 flex flex-col gap-2 grow py-20 lg:px-[5vw]">
          <div className="grow flex items-center">
            <h3
              ref={titleRef}
              key={locale}
              className="text-[clamp(2rem,4vw,6rem)] font-medium"
            >
              {t.rich("title", {
                bold: (chunks) => (
                  <span className="font-bold text-brand">
                    {chunks}
                    <br />
                  </span>
                ),
                br: () => <br />,
              })}
            </h3>
          </div>
        </div>
        <CTAButton />
      </div>
    </section>
  );
};
