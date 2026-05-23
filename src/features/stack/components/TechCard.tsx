import { useRef } from "react";
import { TechCategory } from "../types/Tech";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

interface Props {
  category: TechCategory;
}

export const TechCard = ({ category }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgesClass = `${category.name}-badge`

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
      },
    });

    tl.from(cardRef.current, {
      opacity: 0,
      rotationX: 90,
      transformOrigin: "bottom center",
      duration: 0.1,
    });

    tl.fromTo(`.${badgesClass}`, {
      opacity: 0,
      x: 10,
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });
  }, []);

  return (
    <div
      key={category.name}
      ref={cardRef}
      className="lg:h-60 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33333%-0.7rem)] flex items-center py-4 rounded-xl bg-white text-foreground gap-4"
    >
      <h3 className="text-lg w-1/2 shrink-0 text-center block">
        {category.name}
      </h3>
      <div className="flex flex-col gap-4">
        {category.techs.map((tech) => (
          <Badge
            key={tech.name}
            className={cn("flex gap-2 shrink opacity-100", badgesClass)}
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
