import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "@/lib/gsap";
import { type Testimonial, testimonialsData } from "../data/testimonialsData";

export const useTestimonials = () => {
  const [testimonialSelected, setTestimonialSelected] =
    useState<Testimonial | null>(null);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const getDistance = () =>
      Math.max(0, track.scrollWidth - viewport.clientWidth);

    gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
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
  };
};
