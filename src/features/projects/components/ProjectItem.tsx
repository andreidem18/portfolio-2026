import { Project } from "../data/projects.data";
import { Github } from "@/features/stack";
import { cn } from "@/lib/utils";
import { ArrowUpRight, LinkIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { ProjectImages } from "./ProjectImages";
import { Button } from "@/components/ui/button";
import { useProjectItemAnimations } from "../hooks";

interface Props {
  project: Project;
}

export const ProjectItem = ({ project }: Props) => {
  const t = useTranslations("projects");
  const { projectRef, seeProjectButton, gsapClassItem, gsapClassImages } =
    useProjectItemAnimations({ project });

  return (
    <div
      key={project.name}
      className="mb-20 flex flex-col md:flex-col-reverse items-center gap-6 h-dvh relative"
      ref={projectRef}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        ref={seeProjectButton}
        className="absolute right-10 bottom-10 md:bottom-auto md:top-30 animate-bounce cursor-pointer"
      >
        <Button className="rounded-full bg-brand cursor-pointer" size="lg">
          {t("seeProject")} <ArrowUpRight />
        </Button>
      </a>
      <div className="flex flex-col gap-3 px-4 py-5 md:flex-row lg:gap-2 lg:w-full justify-between">
        <div
          className={cn(
            "flex relative w-full justify-between items-center md:flex-col md:items-start md:min-w-48 md:w-fit md:shrink-0 ",
            gsapClassItem,
          )}
        >
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
        <div className={cn("w-0.5 bg-brand/30", gsapClassItem)}></div>
        <div className={cn("flex flex-col ", gsapClassItem)}>
          <span className="text-xs font-bold text-brand">The challenge</span>
          <p className="max-w-2xl mt-2 leading-[120%] text-sm text-muted-foreground">
            {t(project.description)}
          </p>
        </div>
        <div className={cn("w-0.5 bg-brand/30", gsapClassItem)}></div>
        <div
          className={cn("flex flex-col lg:shrink-0 lg:w-60 ", gsapClassItem)}
        >
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
      <ProjectImages project={project} gsapClassImages={gsapClassImages} />
    </div>
  );
};
