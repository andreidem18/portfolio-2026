import { useEffect, useRef, useState } from "react";

import gsap from "@/lib/gsap";

export const useCTATooltip = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [focusPos, setFocusPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipTextRef = useRef<HTMLSpanElement>(null);
  const quickX = useRef<((x: number) => void) | null>(null);
  const quickY = useRef<((y: number) => void) | null>(null);
  const typingRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!tooltipRef.current) return;
    quickX.current = gsap.quickTo(tooltipRef.current, "x", { duration: 0.4, ease: "power3.out" });
    quickY.current = gsap.quickTo(tooltipRef.current, "y", { duration: 0.4, ease: "power3.out" });
  }, []);

  const typeText = (text: string) => {
    if (!tooltipTextRef.current) return;
    typingRef.current?.kill();
    gsap.set(tooltipTextRef.current, { text: "" });
    typingRef.current = gsap.to(tooltipTextRef.current, {
      text,
      duration: text.length * 0.05,
      ease: "none",
    });
  };

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    quickX.current?.(e.clientX + 16);
    quickY.current?.(e.clientY + 16);
  };

  const handleFocus = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) setFocusPos({ x: rect.left, y: rect.bottom + 8 });
    setFocused(true);
  };

  const visible = hovered || focused || copied;
  const tooltipStyle = focused && !hovered ? { left: focusPos.x, top: focusPos.y } : { left: 0, top: 0 };

  return {
    copied,
    visible,
    tooltipStyle,
    buttonRef,
    tooltipRef,
    tooltipTextRef,
    typeText,
    handleCopy,
    handleMouseMove,
    handleFocus,
    setHovered,
    setFocused,
  };
};
