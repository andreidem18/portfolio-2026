"use client";

import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { projectsData } from "../data/projects.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { LinkIcon } from "lucide-react";
import { Github } from "@/features/stack";

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
    <>
      <section
        id="projects"
        ref={projectsSectionRef}
        className="bg-brand py-40 md:py-60"
      >
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

      <section className="px-4 md:px-20 py-20">
        {projectsData.map((project) => (
          <div
            key={project.name}
            className="px-4  mb-20 flex flex-col items-center gap-6"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-2 lg:w-full justify-between">

              <div className="flex relative w-full justify-between items-center lg:flex-col lg:items-start lg:min-w-48 lg:w-fit lg:shrink-0">
                <strong className="text-4xl font-medium text-[clamp(1.5rem,3vw,2.75rem)] block">
                  {project.name}
                </strong>
                <div className="flex gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-white hover:border-brand border hover:text-brand  bg-brand text-sm text-white transition size-6 flex items-center justify-center rounded-full"
                  >
                    <LinkIcon className="size-3" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand transition"
                  >
                    <Github className="size-6" />
                  </a>
                </div>
              </div>
              <div className="w-0.5 bg-brand/30"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-brand">The challenge</span>
                <p className="max-w-2xl mt-2 leading-[120%] text-sm text-muted-foreground">
                  {t(project.description)}
                </p>
              </div>
              <div className="w-0.5 bg-brand/30"></div>
              <div className="flex flex-col lg:shrink-0 lg:w-60">
                <span className="text-xs font-bold text-brand">Tech stack</span>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech.name}
                      className="text-sm px-2 py-1 h-fit rounded bg-white/10"
                      style={{ backgroundColor: tech.color }}
                    >
                      <tech.icon className="size-4 mr-1" />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">
              {project.images.map((image, i) => (
                <Image
                  key={image.src}
                  src={image}
                  alt={`${project.name} screenshot`}
                  className={cn("rounded object-cover aspect-5/4", {
                    "hidden lg:block": i === 4,
                  })}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
