import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "@/lib/gsap";
import { type Testimonial, testimonialsData } from "../data/testimonials.data";

export const useTestimonials = () => {
  const [testimonialSelected, setTestimonialSelected] =
    useState<Testimonial | null>(null);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const getDistance = () =>
      Math.max(0, track.scrollWidth - viewport.clientWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    tl.to(track, {
      x: () => -getDistance(),
      ease: "none",
    });

    const circles = gsap.utils.toArray<HTMLElement>(
      ".circle-background",
      sectionRef.current,
    );

    tl.to(titleRef.current, { y: -30 }, 0);

    circles.forEach((circle, i) => {
      tl.to(
        circle,
        {
          y: i % 2 === 0 ? -20 : 40,
        },
        0,
      );
    });
  }, []);

  const progressValue = progress * 100;
  const currentTestimonial = Math.min(
    testimonialsData.length,
    Math.floor(progress * testimonialsData.length) + 1,
  );
  return {
    currentTestimonial,
    progressValue,
    sectionRef,
    setTestimonialSelected,
    testimonialSelected,
    trackRef,
    viewportRef,
    titleRef,
  };
};
