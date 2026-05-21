"use client";

import { useLocale } from "next-intl";
import { projectsData } from "../data/projects.data";
import { AnimatedTitle } from "./AnimatedTitle";
import { ProjectItem } from "./ProjectItem";

export const ProjectsSection = () => {
  const locale = useLocale();

  return (
    <>
      <AnimatedTitle key={locale} />

      <section className="py-20 flex flex-col gap-20">
        {projectsData.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </section>
    </>
  );
};
