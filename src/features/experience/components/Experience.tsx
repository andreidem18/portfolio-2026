import { format } from "date-fns";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import { getExperienceItems } from "../data/experienceItems";
import { cn } from "@/lib/utils";

export const Experience = () => {
  const t = useTranslations("experience");

  const experience = getExperienceItems(t);

  return (
    <section
      id="experience"
      className="flex flex-col gap-2 justify-center items-center px-6 py-10"
    >
      <div className="max-w-180">
        <h3 className="text-center">{t("title")}</h3>
        {experience.map((job, index) => {
          const isLast = index === experience.length - 1;
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
                      {job.title}
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
                {job.items}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
