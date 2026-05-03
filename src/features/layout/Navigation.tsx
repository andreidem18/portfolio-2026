"use client";

import gsap from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";


export const Navigation = () => {
  const navRef = useRef(null);
  const isInHero = useRef(true);
  const lastScrollY = useRef(0);

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
    // 1. Detectar si estás dentro del hero
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        isInHero.current = true;
        showNavbar();
      },
      onLeave: () => {
        isInHero.current = false;
        hideNavbar();
      },
      onEnterBack: () => {
        isInHero.current = true;
        showNavbar();
      },
      onLeaveBack: () => {
        isInHero.current = false;
        showNavbar();
      },
    });

    // 2. Detectar dirección del scroll
    const handleScroll = () => {
      const currentY = window.scrollY;

      const scrollingDown = currentY > lastScrollY.current;

      if (!isInHero.current) {
        if (scrollingDown) {
          hideNavbar();
        } else {
          showNavbar();
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className=" top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-b-gray-300 fixed h-18" ref={navRef}>
      <div className="mx-auto px-15 py-5.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Code2 className="w-8 h-8 text-brand" /> */}
            <span className="text-sm text-brand max-w-8 leading-none">
              <span className="font-bold">Andrés </span>
              <span className="">Mendoza</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <Menu className="text-brand" />
            {/* {["Inicio", "Sobre mí", "Habilidades", "Proyectos", "Contacto"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ),
            )} */}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-white/60 -z-10"></div>
    </nav>
  );
};
