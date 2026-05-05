"use client";

import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "@/lib/gsap";
import { useTranslations } from "next-intl";

gsap.registerPlugin(TextPlugin);

export const TextChanging = () => {
  const t = useTranslations("hero");

  const words = [
    t("fullStack"),
    t("frontend"),
    t("backend"),
    t("softwareEngineer"),
  ];
  const wordRef = useRef<HTMLElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
      })
      .from(wordRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.2,
      })
      .to(wordRef.current, {
        duration: 2,
      })
      .to(wordRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          if (!wordRef.current) return;
          setWordIndex((value) =>
            value + 1 > words.length - 1 ? 0 : value + 1,
          );
        },
      });
  }, []);

  return (
    <strong
      className=" text-5xl font-medium text-brand-light inline-block"
      ref={wordRef}
    >
      {words[wordIndex]}
    </strong>
  );
};
