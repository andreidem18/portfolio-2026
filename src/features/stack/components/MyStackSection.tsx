import { useTranslations } from "next-intl";
import { techsByCategory } from "../data/techStack.data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const MyStackSection = () => {
  const t = useTranslations("techStack");
  return (
    <section className="min-h-dvh bg-brand text-white">
      <div className="max-w-6xl mx-auto py-20 px-10 min-h-dvh flex flex-col">
        <h2 className="text-[clamp(1.5rem,3.2vw,3rem)] leading-[110%] ">
          {t.rich("title", {
            bold: (chunks) => (
              <>
                <strong className="font-bold">{chunks}</strong>
                <br />
              </>
            ),
          })}
        </h2>
        <div className="flex flex-wrap justify-center items-stretch gap-4 pt-5 grow">
          {techsByCategory.map((category) => (
            <div
              key={category.name}
              className="lg:h-60 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33333%-0.7rem)] flex items-center py-4 rounded-xl bg-white text-foreground gap-4"
            >
              <h3 className="text-lg w-1/2 shrink-0 text-center block">
                {category.name}
              </h3>
              <div className="flex flex-col gap-4">
                {category.techs.map((tech) => (
                  <Badge
                    key={tech.name}
                    className={cn("flex gap-2 shrink")}
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon width={16} height={16} />
                    <span className="text-sm font-normal">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
