"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLayoutStore } from "@/stores";
import { CursorGlow } from "./CursorGlow";
import { ArrowRight, XIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { useTranslations } from "next-intl";

export const NavigationMenu = () => {
  const isMenuOpen = useLayoutStore((s) => s.isMenuOpen);
  const setIsMenuOpen = useLayoutStore((s) => s.setIsMenuOpen);
  const t = useTranslations("navbar");

  useGSAP(() => {
    requestAnimationFrame(() => {
      if (isMenuOpen) {
        gsap.fromTo(
          ".nav-links",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            delay: 0.3,
            ease: "none"
          },
        );
      } else {
        gsap.to(".nav-links", {
          y: 20,
          opacity: 0,
          stagger: {
            each: 0.1,
            from: "end",
          },
          duration: 0.2,
        });
      }
    });
  }, [isMenuOpen]);

  const navItems = [
    {name: t("experience"), href: "#experience"},
    {name: t("skills"), href: "#skills"},
    {name: t("projects"), href: "#projects"},
  ]

  return (
    <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DialogContent
        className="
          p-0 border-none bg-brand inset-0 max-w-none sm:max-w-none translate-0 rounded-none duration-1000 transition-transform origin-top-right

          data-[state=open]:animate-in
          data-[state=open]:fade-in
          data-[state=open]:duration-500
          data-[state=open]:[--tw-enter-scale:0]

          data-[state=closed]:animate-out
          data-[state=closed]:fade-out
          data-[state=closed]:duration-300
          data-[state=closed]:[--tw-exit-scale:0]
        "
        showCloseButton={false}
        style={isMenuOpen ? {} : { animationDelay: "500ms" }}
      >
        <DialogClose className="absolute top-7 right-19 text-white cursor-pointer"><XIcon /></DialogClose>
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        <DialogDescription className="sr-only" />
        <nav className="h-full flex flex-col justify-center p-6 gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-white/80 transition-colors relative group text-[clamp(3rem,6vw,5rem)] w-fit leading-[80%] font-medium nav-links"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.75 bg-white/80 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href={`#contact`}
            className="text-white hover:text-white/80 transition-all hover:gap-7 flex items-center gap-4 group text-[clamp(1rem,2vw,1.1rem)] w-fit leading-10 font-medium mt-10 nav-links"
          >
            <div className="relative">
              Let&apos;s connect
              <span className="absolute bottom-1.5 left-0 w-full h-0.75 bg-white/80 group-hover:w-1/4 transition-all duration-300"></span>
            </div>
            <ArrowRight className="size-5" />
          </a>
        </nav>
        <CursorGlow />
      </DialogContent>
    </Dialog>
  );
};
