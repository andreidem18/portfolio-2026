"use client";

import { useTranslations } from "next-intl";
import { testimonialsData } from "./testimonialsData";
import { TestimonialExpanded } from "./TestimonialExpanded";
import { TestimonialCard } from "./TestimonialCard";
import { Progress } from "@/components/ui/progress";
import { useTestimonials } from "./useTestimonials";

export const Testimonials = () => {
  const t = useTranslations("testimonials");
  const {
    currentTestimonial,
    progressValue,
    sectionRef,
    setTestimonialSelected,
    testimonialSelected,
    trackRef,
    viewportRef,
  } = useTestimonials();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="flex flex-col justify-center gap-4 px-10 py-10 h-dvh"
    >
      <h3 className="text-[clamp(1.5rem,3.2vw,2.25rem)] max-w-130 leading-[110%] pb-4">
        {t("title")}
      </h3>
      <div ref={viewportRef} className="overflow-hidden">
        <ul
          ref={trackRef}
          className="flex gap-20 p-9 pt-12 will-change-transform [&>li]:shrink-0 [&>li]:basis-full md:[&>li]:basis-[calc((100%-5rem)/2)]"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              setTestimonialSelected={setTestimonialSelected}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2 items-center">
          <Progress className="w-30 h-0.75" value={progressValue} />
          <div className="text-sm text-muted-foreground/70 font-semibold">
            {currentTestimonial} / {testimonialsData.length}
          </div>
        </div>
      </div>
      <TestimonialExpanded
        testimonialSelected={testimonialSelected}
        setTestimonialSelected={setTestimonialSelected}
      />
    </section>
  );
};
