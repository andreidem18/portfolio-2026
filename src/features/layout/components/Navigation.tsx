"use client";

import gsap from "@/lib/gsap";
import { useLayoutStore } from "@/stores";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavigationMenu } from "./NavigationMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export const Navigation = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const setIsMenuOpen = useLayoutStore((s) => s.setIsMenuOpen);

  const hideNavbar = () => {
    gsap.to(navRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power3.out",
    });
  };

  const showNavbar = () => {
    gsap.to(navRef.current, {
      yPercent: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    // 2. Detectar dirección del scroll
    const handleScroll = () => {
      const currentY = window.scrollY;

      const scrollingDown = currentY > lastScrollY.current;

      if (scrollingDown) {
        hideNavbar();
      } else {
        showNavbar();
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className=" top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-b-gray-300 fixed h-18"
        ref={navRef}
      >
        <div className="mx-auto px-15 py-5.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                href="#top"
                className="text-sm text-brand max-w-8 leading-none"
              >
                <span className="font-bold">Andrés </span>
                <span className="">Mendoza</span>
              </Link>
            </div>
            <div className="flex gap-6">
              <LanguageSwitcher />
              <button
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="text-brand" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10"></div>
      </nav>
      <NavigationMenu />
    </>
  );
};
