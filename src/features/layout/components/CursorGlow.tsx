"use client";

import gsap from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { useLayoutStore } from "@/stores";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const isMenuOpen = useLayoutStore((s) => s.isMenuOpen);

  useGSAP(() => {
    if (!glowRef.current) return;
    gsap.set(glowRef.current, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(glowRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(glowRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <div
      className={cn(
        "bg-[radial-gradient(circle,rgba(80,79,237,0.22)_0%,rgba(80,79,237,0.07)_40%,transparent_70%)] size-150 fixed z-20 pointer-events-none",
        {
          "bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_40%,transparent_70%)]":
            isMenuOpen,
        },
      )}
      ref={glowRef}
    />
  );
};
