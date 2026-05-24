import { format } from "date-fns";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import { experienceData } from "../data/experience.data";
import { cn } from "@/lib/utils";

export const Experience = () => {
  const t = useTranslations("experience");

  return (
    <section
      id="experience"
      className="flex flex-col gap-2 justify-center items-center px-6 py-10"
    >
      <div className="max-w-250 lg:flex lg:gap-20">
        <h3 className="text-center pt-4 lg:text-start lg:sticky lg:pb-80 h-fit lg:top-23 text-[clamp(1.5rem,3.2vw,3rem)] leading-[110%] ">
          {t.rich("title", {
            bold: (chunks) => (
              <span className="font-extrabold text-brand animate-gradient-shift">
                {chunks}
              </span>
            ),
          })}
        </h3>
        <div>
          {experienceData.map((job, index) => {
            const isLast = index === experienceData.length - 1;
            return (
              <div
                key={job.id}
                className={cn(
                  "border-b border-b-accent pb-10 pt-5 sticky top-20 bg-background",
                  { "pb-26": isLast },
                )}
              >
                <div className="flex gap-6">
                  <span className="text-[clamp(3rem,6vw,7rem)] leading-[100%] h-fit font-extrabold animate-gradient-shift">
                    0{index + 1}
                  </span>
                  <div className="flex gap-1 flex-wrap">
                    <div className="w-full">
                      <h4 className="text-[clamp(1.5rem,3.2vw,2.25rem)]">
                        {t(job.titleKey)}
                      </h4>
                      <div className="flex gap-1 items-center text-brand font-medium">
                        <Briefcase className="size-4" />
                        {job.company}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center text-sm ">
                      <Calendar className="size-4" />
                      {format(job.start, "MMM yyyy")} -{" "}
                      {format(job.end, "MMM yyyy")}
                    </div>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm pt-3 text-muted-foreground">
                  {t.rich(job.itemsKey, { li: (chunks) => <li>{chunks}</li> })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
