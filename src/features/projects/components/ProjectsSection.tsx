"use client";

import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { projectsData } from "../data/projectsData";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
  const t = useTranslations("projects");
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSectionRef.current,
        scrub: 2,
        start: "top 50%",
        end: "top top",
      },
    });

    const split = SplitText.create(titleRef.current, {
      type: "words",
    });

    tl.from(split.words, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
    });
  }, []);

  return (
    <section
      id="projects"
      ref={projectsSectionRef}
      className="bg-brand py-40 md:py-60 min-h-dvh "
    >
      <h2
        className="text-[clamp(2rem,6vw,3.75rem)] text-white px-4 md:px-20 mb-50 leading-[100%]"
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

      {projectsData.map((project) => (
        <div key={project.name} className="px-4 md:px-20 mb-20">
          <strong className="text-4xl text-white font-bold text-[clamp(1.5rem,3vw,2.75rem)] text-center block">
            {project.name}
          </strong>
          <p className="text-white/80 max-w-2xl mt-2 text-center">
            {t(project.description)}
          </p>
          <div className="grid grid-cols-2 gap-1">
            {project.images.map((image, i) => (
              <Image
                key={image.src}
                src={image}
                alt={`${project.name} screenshot`}
                className={cn("rounded object-cover aspect-square", {"hidden md:block": i === 4})}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
