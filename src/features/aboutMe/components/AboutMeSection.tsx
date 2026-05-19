"use client";

import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Techs } from "./Techs";
import { useTranslations } from "next-intl";

export const AboutMeSection = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const aboutMeSectionRef = useRef<HTMLElement | null>(null);

  const techsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutMeSectionRef.current,
        scrub: 2,
        start: "top top",
        end: "+=2000",
        pin: true,
      },
    });

    tl.addLabel("intro");

    tl.from(".about-me-line", {
      opacity: 0.1,
      stagger: {
        each: 0.3,
        from: "start",
      },
    }, "intro");

    tl.addLabel("displayIcons", 0.4);

    tl.to(techsRef.current, {
      opacity: 1
    }, "displayIcons");
  }, []);

  const t = useTranslations("aboutMe");

  return (
    <section
      className="h-dvh flex flex-col md:justify-center bg-brand text-white p-12 lg:p-22 pt-20"
      ref={aboutMeSectionRef}
    >
      <p
        className="text-[clamp(1.25rem,3.2vw,3rem)] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-13"
        ref={paragraphRef}
      >
        <span className="about-me-line block">
          <span className="font-bold">
            {t("line1")} {" "}
          </span>
        </span>
        <span className="about-me-line block">
          <span className="font-bold">
            {t("line2")} {" "}
          </span>
        </span>
        <span className="about-me-line block">
          {t("line3")} {" "}
        </span>
        <span className="about-me-line block">
          {t("line4")} {" "}
        </span>
        <span className="about-me-line block">
          {t("line5")}
        </span>
      </p>
      <div className="opacity-0 grow md:grow-0 overflow-hidden" ref={techsRef}><Techs /></div>
    </section>
  );
};
