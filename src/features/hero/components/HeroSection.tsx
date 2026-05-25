import { TextChanging } from "./TextChanging";
import { ScrollCTA } from "./ScrollCTA";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { cvEnglish, cvSpanish } from "@/assets/documents";
import { useLocale, useTranslations } from "next-intl";

export const HeroSection = () => {
  const locale = useLocale();
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="grow p-5 px-15 relative bg-[linear-gradient(145deg,#ffffff_0%,#f0f0f0_25%,#e8e8ff_55%,#c8c6fb_100%)]"
    >
      <div className="absolute bottom-12">
        <strong className=" text-5xl">Andres/</strong>
        <TextChanging />
        <div className="flex gap-6 pt-7">
          <ScrollCTA />
          <a href={locale === "en" ? cvEnglish : cvSpanish} download>
            <Button>
              <DownloadIcon /> {t("downloadCV")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
