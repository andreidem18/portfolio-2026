import { TechCategory } from "../types/Tech";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  category: TechCategory;
}

export const TechCard = ({ category }: Props) => {
  return (
    <div
      key={category.name}
      className="stack-card lg:h-60 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33333%-0.7rem)] flex items-center py-4 rounded-xl bg-white text-foreground gap-4"
    >
      <h3 className="text-lg w-1/2 shrink-0 text-center block">
        {category.name}
      </h3>
      <div className="flex flex-col gap-4">
        {category.techs.map((tech) => (
          <Badge
            key={tech.name}
            className={cn("stack-card-badge flex gap-2 shrink opacity-100")}
            style={{ backgroundColor: tech.color }}
          >
            <tech.icon width={16} height={16} />
            <span className="text-sm font-normal">{tech.name}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
};
