import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { techStackData, type Tech } from "@/features/stack";

export const Techs = () => {
  const [visibleItems, setVisibleItems] = useState(techStackData.slice(0, 6));

  return (
    <div className="grid gap-4 pt-10 h-full grid-cols-3 md:grid-cols-6 lg:pt-16">
      {visibleItems.map((tech, index) => (
        <TechItem
          tech={tech}
          setVisibleItems={setVisibleItems}
          key={tech.name}
          index={index}
        />
      ))}
    </div>
  );
};

interface TechItemProps {
  tech: Tech;
  setVisibleItems: Dispatch<SetStateAction<Tech[]>>;
  index: number;
}

const TechItem = ({ tech, setVisibleItems, index }: TechItemProps) => {
  const [isHidding, setIsHidding] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;

    const raf = requestAnimationFrame(() => {
      setIsHidding(false);
    });

    const schedule = () => {
      const delay = getRandomNumber(1000, 5000);

      hideTimeout = setTimeout(() => {
        setIsHidding(true);
      }, delay - 500);

      timeout = setTimeout(() => {
        if (cancelled) return;

        setVisibleItems((techs) => {
          const newTech = findRandomTechId(techs);
          return techs.map((t, i) => (i === index ? newTech : t));
        });

        schedule(); // 🔁 asegura continuidad
      }, delay);
    };

    schedule();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(raf);
    };
  }, [index, setVisibleItems]);

  return (
    <tech.icon
      className={cn(
        "size-15 text-white/40 duration-500 h-full lg:w-18",
        isHidding ? "opacity-0" : "opacity-100",
      )}
    />
  );
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const findRandomTechId = (visibleTechs: Tech[]) => {
  const visibleNames = new Set(visibleTechs.map((t) => t.name));
  const available = techStackData.filter((t) => !visibleNames.has(t.name));
  if (!available.length)
    throw new Error("There was a problem loading the techs");
  return available[Math.floor(Math.random() * available.length)];
};
