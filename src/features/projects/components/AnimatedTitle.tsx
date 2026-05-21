import { useTranslations } from "next-intl";
import { useTitleAnimations } from "../hooks";

export const AnimatedTitle = () => {
  const t = useTranslations("projects");
  const { sectionRef, titleRef } = useTitleAnimations();

  return (
    <section id="projects" ref={sectionRef} className="bg-brand py-40 md:py-60">
      <h2
        className="text-[clamp(2rem,6vw,3.75rem)] text-white px-4 md:px-20 leading-[100%]"
        ref={titleRef}
      >
        {t.rich("title", {
          bold: (chunks) => (
            <span className="font-bold">
              {chunks}
              <br />
            </span>
          ),
          light: (chunks) => <span className="font-normal">{chunks}</span>,
        })}
      </h2>
    </section>
  );
};