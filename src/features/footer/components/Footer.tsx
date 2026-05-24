"use client";

import { footerImage } from "@/assets/images";
import { MapPinIcon } from "lucide-react";
import { useFooterAnimations } from "../hooks";

export const Footer = () => {
  
  const {containerRef, nameRef} = useFooterAnimations();

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-dvh bg-cover relative text-white"
      style={{ backgroundImage: `url(${footerImage.src})`, backgroundPositionX: "20%" }}
    >
      <section className="grow relative z-10 p-8 gap-5 flex flex-col lg:flex-row lg:justify-between">
        <div ref={nameRef} className="flex flex-col text-[clamp(4rem,12vw,14rem)] font-light mt-10 gap-2 lg:leading-[100%]">
          <SplitText text="Andrés" className="font-bold" />
          <SplitText text="Mendoza" />
          <span className="text-base flex gap-2">
            <MapPinIcon /> Bogotá, Colombia
          </span>
        </div>
        <div className="flex flex-col gap-4 items-end lg:justify-end">
          <span className="text-sm">Website made using:</span>
          <ul className="flex flex-col gap-2 font-bold text-right">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>GSAP</li>
          </ul>
        </div>
      </section>
      <footer className="bg-black/20 border-t border-border p-5 text-center text-sm relative z-10 sm:flex sm:justify-between">
        © {new Date().getFullYear()} Andrés Mendoza. All rights reserved.
        <div className="flex gap-2 justify-center ">
          <a
            href="https://github.com/andreidem18"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9s-david-mendoza-m%C3%A1rquez-867a1b175/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

const SplitText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className} aria-label={text}>
    {text.split("").map((char, i) => (
      <span key={i} className="letter inline-block" aria-hidden="true">
        {char}
      </span>
    ))}
  </span>
);
