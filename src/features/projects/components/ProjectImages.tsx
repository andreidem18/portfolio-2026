import Image from "next/image";
import { Project } from "../data/projects.data";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  gsapClassImages: string;
}

export const ProjectImages = ({ project, gsapClassImages }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 grow">
      {project.images.map((image, i) => (
        <Image
          key={image.src}
          src={image}
          alt={`${project.name} screenshot`}
          className={cn("rounded object-cover h-full w-full", gsapClassImages, {
            "col-span-2 row-span-2": i === 0,
          })}
        />
      ))}
    </div>
  );
};
